from rest_framework import serializers


from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name","slug","image"]

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ["id","category","title","slug","description","image"]

