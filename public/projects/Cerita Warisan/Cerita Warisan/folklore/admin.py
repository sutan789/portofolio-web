from django.contrib import admin
from .models import Category, Region, Story, Review, Bookmark, ReadingHistory

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Region)
class RegionAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

class ReviewInline(admin.TabularInline):
    model = Review
    extra = 0
    readonly_fields = ('user', 'rating', 'comment', 'created_at')

@admin.register(Story)
class StoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'region', 'view_count', 'created_at')
    list_filter = ('category', 'region')
    search_fields = ('title', 'content', 'characters')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [ReviewInline]

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('story', 'user', 'rating', 'is_approved', 'created_at')
    list_filter = ('rating', 'is_approved')
    actions = ['approve_reviews']

    def approve_reviews(self, request, queryset):
        queryset.update(is_approved=True)
    approve_reviews.short_description = "Approve selected reviews"

admin.site.register(Bookmark)
admin.site.register(ReadingHistory)
