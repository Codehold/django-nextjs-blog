from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from rest_framework import filters,permissions
from . import models
from .models import Category, Post
from .serializers import CategorySerializer, ProductSerializer


class ProductListView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = ProductSerializer


class Product(generics.RetrieveAPIView):
    lookup_field = "slug"
    queryset = Post.objects.all()
    serializer_class = ProductSerializer


class CategoryItemView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category =get_object_or_404(Category, slug=self.kwargs.get("slug"))                                               
        return Post.objects.filter(category_id=category)


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer