from django.shortcuts import render
from .models import Language
from .serializer import LanguageSerializer
from rest_framework import generics, viewsets
# Create your views here.


class signUpView(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer