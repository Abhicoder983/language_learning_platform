from django.contrib import admin
from django.urls import path,include
from language_learningApp import urls
from language_learningApp import views
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'language', views.signUpView)
urlpatterns = [
    path('', include(router.urls)),
]
