from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Story, Category, Region

class UserRegisterForm(UserCreationForm):
    first_name = forms.CharField(max_length=100, required=True)
    last_name = forms.CharField(max_length=100, required=True)
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name']


class StoryForm(forms.ModelForm):
    """Form premium untuk tambah / edit cerita."""

    title = forms.CharField(
        max_length=200,
        widget=forms.TextInput(attrs={'placeholder': 'Judul cerita...'})
    )
    summary = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={'placeholder': 'Ringkasan singkat untuk kartu cerita...', 'rows': 3})
    )
    content = forms.CharField(
        widget=forms.Textarea(attrs={'placeholder': 'Tulis isi lengkap cerita di sini...', 'rows': 15})
    )
    characters = forms.CharField(
        max_length=255,
        widget=forms.TextInput(attrs={'placeholder': 'Contoh: Sangkuriang, Dayang Sumbi, Tumang'})
    )
    slug = forms.SlugField(
        required=False,
        widget=forms.TextInput(attrs={'placeholder': 'otomatis-dari-judul (opsional)'}),
        help_text='Kosongkan untuk generate otomatis dari judul'
    )

    class Meta:
        model = Story
        fields = ['title', 'slug', 'summary', 'content', 'category', 'region', 'characters', 'cover_image']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['category'].empty_label = '— Pilih Kategori —'
        self.fields['region'].empty_label = '— Pilih Daerah Asal —'
        self.fields['cover_image'].required = False
