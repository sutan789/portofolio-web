from django.urls import path
from . import views

app_name = 'folklore'

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('dashboard/', views.DashboardView.as_view(), name='dashboard'),
    path('library/', views.LibraryView.as_view(), name='library'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('story/<slug:slug>/', views.StoryDetailView.as_view(), name='story_detail'),
    path('story/<slug:slug>/bookmark/', views.toggle_bookmark, name='toggle_bookmark'),
    path('story/<slug:slug>/review/', views.add_review, name='add_review'),
    path('register/', views.RegisterView.as_view(), name='register'),

    # Admin panel
    path('panel/', views.AdminDashboardView.as_view(), name='admin_dashboard'),
    path('panel/cerita/tambah/', views.admin_add_story, name='admin_add_story'),
    path('panel/cerita/<slug:slug>/edit/', views.admin_edit_story, name='admin_edit_story'),
    path('panel/review/<int:pk>/approve/', views.admin_approve_review, name='admin_approve_review'),
    path('panel/review/<int:pk>/delete/', views.admin_delete_review, name='admin_delete_review'),
    path('panel/story/<slug:slug>/delete/', views.admin_delete_story, name='admin_delete_story'),
]
