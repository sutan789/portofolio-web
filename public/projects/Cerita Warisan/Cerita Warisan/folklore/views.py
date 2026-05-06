from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import ListView, DetailView, TemplateView, CreateView
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.models import User
from django.db.models import Q, Avg, Count, Sum
from django.db.models.functions import TruncDate
from django.utils import timezone
from datetime import timedelta
from .models import Story, Category, Region, Review, Bookmark, ReadingHistory
from .forms import UserRegisterForm, StoryForm
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required, user_passes_test
from django.urls import reverse_lazy
from django.contrib import messages

class HomeView(TemplateView):
    template_name = 'folklore/home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['popular_stories'] = Story.objects.order_by('-view_count')[:4]
        context['recent_stories'] = Story.objects.order_by('-created_at')[:4]
        context['categories'] = Category.objects.all()
        context['regions'] = Region.objects.all()
        return context

class DashboardView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        return redirect('folklore:profile')

class LibraryView(ListView):
    model = Story
    template_name = 'folklore/library.html'
    context_object_name = 'stories'
    paginate_by = 12

    def get_queryset(self):
        queryset = super().get_queryset()
        query = self.request.GET.get('q')
        cat_slug = self.request.GET.get('category')
        reg_slug = self.request.GET.get('region')

        if query:
            queryset = queryset.filter(
                Q(title__icontains=query) | 
                Q(content__icontains=query) |
                Q(characters__icontains=query)
            )
        if cat_slug:
            queryset = queryset.filter(category__slug=cat_slug)
        if reg_slug:
            queryset = queryset.filter(region__slug=reg_slug)
        
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = Category.objects.all()
        context['regions'] = Region.objects.all()
        return context

class StoryDetailView(LoginRequiredMixin, DetailView):
    model = Story
    template_name = 'folklore/story_detail.html'
    context_object_name = 'story'

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        self.object.view_count += 1
        self.object.save()
        
        if request.user.is_authenticated:
            ReadingHistory.objects.update_or_create(
                user=request.user, 
                story=self.object
            )
        
        context = self.get_context_data(object=self.object)
        return self.render_to_response(context)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['reviews'] = self.object.reviews.filter(is_approved=True).order_by('-created_at')
        context['avg_rating'] = self.object.reviews.filter(is_approved=True).aggregate(Avg('rating'))['rating__avg']
        if self.request.user.is_authenticated:
            context['is_bookmarked'] = Bookmark.objects.filter(user=self.request.user, story=self.object).exists()
        return context

@login_required
def toggle_bookmark(request, slug):
    story = get_object_or_404(Story, slug=slug)
    bookmark, created = Bookmark.objects.get_or_create(user=request.user, story=story)
    
    if not created:
        bookmark.delete()
        status = 'removed'
    else:
        status = 'added'
        
    return JsonResponse({'status': status})

@login_required
def add_review(request, slug):
    if request.method == 'POST':
        story = get_object_or_404(Story, slug=slug)
        rating = request.POST.get('rating')
        comment = request.POST.get('comment')
        
        Review.objects.create(
            story=story,
            user=request.user,
            rating=rating,
            comment=comment
        )
        return redirect('folklore:story_detail', slug=slug)
    return redirect('folklore:home')

class RegisterView(CreateView):
    form_class = UserRegisterForm
    template_name = 'folklore/register.html'
    success_url = reverse_lazy('login')

    def form_valid(self, form):
        # Additional logic if needed (e.g. auto login)
        return super().form_valid(form)

class ProfileView(LoginRequiredMixin, TemplateView):
    template_name = 'folklore/profile.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        user = self.request.user
        context['bookmarks'] = Bookmark.objects.filter(user=user).select_related('story', 'story__region').order_by('-created_at')
        context['reading_history'] = ReadingHistory.objects.filter(user=user).select_related('story', 'story__region').order_by('-last_read')[:10]
        context['stats'] = {
            'stories_read': ReadingHistory.objects.filter(user=user).count(),
            'bookmarks_count': Bookmark.objects.filter(user=user).count(),
            'reviews_count': Review.objects.filter(user=user).count(),
        }
        return context


class AdminDashboardView(LoginRequiredMixin, UserPassesTestMixin, TemplateView):
    template_name = 'folklore/admin_dashboard.html'
    raise_exception = False  # redirect instead of 403

    def test_func(self):
        return self.request.user.is_staff

    def handle_no_permission(self):
        messages.error(self.request, 'Akses ditolak. Halaman ini hanya untuk administrator.')
        return redirect('folklore:home')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        now = timezone.now()
        week_ago = now - timedelta(days=7)
        month_ago = now - timedelta(days=30)

        total_reads = ReadingHistory.objects.count()
        total_stories = Story.objects.count()
        approved_reviews = Review.objects.filter(is_approved=True)
        pending_count = Review.objects.filter(is_approved=False).count()
        avg_rating = approved_reviews.aggregate(a=Avg('rating'))['a'] or 0
        stories_with_img = Story.objects.exclude(cover_image='').exclude(cover_image=None).count()
        new_users_month = User.objects.filter(date_joined__gte=month_ago).count()
        new_users_week  = User.objects.filter(date_joined__gte=week_ago).count()

        context['stats'] = {
            'total_stories'    : total_stories,
            'total_users'      : User.objects.count(),
            'total_reviews'    : Review.objects.count(),
            'approved_reviews' : approved_reviews.count(),
            'pending_reviews'  : pending_count,
            'total_categories' : Category.objects.count(),
            'total_regions'    : Region.objects.count(),
            'total_bookmarks'  : Bookmark.objects.count(),
            'total_reads'      : total_reads,
            'avg_rating'       : round(avg_rating, 1),
            'stories_with_img' : stories_with_img,
            'stories_no_img'   : total_stories - stories_with_img,
            'img_coverage_pct' : round(stories_with_img / total_stories * 100) if total_stories else 0,
            'new_users_month'  : new_users_month,
            'new_users_week'   : new_users_week,
        }

        # Reads per story (top 5)
        context['top_stories'] = Story.objects.order_by('-view_count')[:5]

        # Category distribution
        context['categories'] = Category.objects.annotate(story_count=Count('stories')).order_by('-story_count')

        # Region distribution
        context['regions'] = Region.objects.annotate(story_count=Count('stories')).order_by('-story_count')

        # Top reviewers
        context['top_reviewers'] = (
            User.objects.annotate(review_count=Count('review'))
            .filter(review_count__gt=0)
            .order_by('-review_count')[:5]
        )

        # 7-day user signup trend (labels + counts as JSON for chart)
        signup_qs = (
            User.objects
            .filter(date_joined__gte=week_ago)
            .annotate(day=TruncDate('date_joined'))
            .values('day')
            .annotate(count=Count('id'))
            .order_by('day')
        )
        trend_labels = []
        trend_data   = []
        for i in range(7):
            day = (now - timedelta(days=6 - i)).date()
            trend_labels.append(day.strftime('%d %b'))
            found = next((x['count'] for x in signup_qs if x['day'] == day), 0)
            trend_data.append(found)
        context['trend_labels'] = trend_labels
        context['trend_data']   = trend_data

        # 7-day reading activity
        read_qs = (
            ReadingHistory.objects
            .filter(last_read__gte=week_ago)
            .annotate(day=TruncDate('last_read'))
            .values('day')
            .annotate(count=Count('id'))
            .order_by('day')
        )
        read_data = []
        for i in range(7):
            day = (now - timedelta(days=6 - i)).date()
            found = next((x['count'] for x in read_qs if x['day'] == day), 0)
            read_data.append(found)
        context['read_data'] = read_data

        # Recent data
        context['recent_stories']       = Story.objects.select_related('category', 'region').order_by('-created_at')[:8]
        context['pending_reviews_list'] = Review.objects.filter(is_approved=False).select_related('story', 'user').order_by('-created_at')[:10]
        context['recent_users']         = User.objects.order_by('-date_joined')[:6]

        return context


@login_required
def admin_approve_review(request, pk):
    if not request.user.is_staff:
        messages.error(request, 'Akses ditolak.')
        return redirect('folklore:home')
    review = get_object_or_404(Review, pk=pk)
    review.is_approved = True
    review.save()
    messages.success(request, f'Ulasan dari {review.user.username} telah disetujui.')
    return redirect('folklore:admin_dashboard')


@login_required
def admin_delete_review(request, pk):
    if not request.user.is_staff:
        messages.error(request, 'Akses ditolak.')
        return redirect('folklore:home')
    review = get_object_or_404(Review, pk=pk)
    review.delete()
    messages.success(request, 'Ulasan berhasil dihapus.')
    return redirect('folklore:admin_dashboard')


@login_required
def admin_delete_story(request, slug):
    if not request.user.is_staff:
        messages.error(request, 'Akses ditolak.')
        return redirect('folklore:home')
    story = get_object_or_404(Story, slug=slug)
    title = story.title
    story.delete()
    messages.success(request, f'Cerita "{title}" berhasil dihapus.')
    return redirect('folklore:admin_dashboard')


@login_required
def admin_add_story(request):
    if not request.user.is_staff:
        messages.error(request, 'Akses ditolak.')
        return redirect('folklore:home')

    if request.method == 'POST':
        form = StoryForm(request.POST, request.FILES)
        if form.is_valid():
            story = form.save(commit=False)
            # Auto-generate slug if empty
            if not story.slug:
                from django.utils.text import slugify
                base_slug = slugify(story.title)
                slug = base_slug
                counter = 1
                while Story.objects.filter(slug=slug).exists():
                    slug = f'{base_slug}-{counter}'
                    counter += 1
                story.slug = slug
            story.save()
            messages.success(request, f'Cerita "{story.title}" berhasil ditambahkan!')
            return redirect('folklore:admin_dashboard')
    else:
        form = StoryForm()

    return render(request, 'folklore/add_story.html', {'form': form, 'action': 'Tambah'})


@login_required
def admin_edit_story(request, slug):
    if not request.user.is_staff:
        messages.error(request, 'Akses ditolak.')
        return redirect('folklore:home')

    story = get_object_or_404(Story, slug=slug)

    if request.method == 'POST':
        form = StoryForm(request.POST, request.FILES, instance=story)
        if form.is_valid():
            form.save()
            messages.success(request, f'Cerita "{story.title}" berhasil diperbarui!')
            return redirect('folklore:admin_dashboard')
    else:
        form = StoryForm(instance=story)

    return render(request, 'folklore/add_story.html', {'form': form, 'action': 'Edit', 'story': story})
