from django.db import models
from froala_editor.fields import FroalaField
from .helpers import *
from django.urls import reverse

# Create your models here.



class Category(models.Model):
    name = models.CharField(max_length=150,blank=True,null=True)
    slug = models.SlugField(max_length=150,blank=True,null=True)
    image = models.ImageField( upload_to="public/")
    alt_text = models.CharField(
                                max_length=50,
                                blank=True,
                                null=True,
                                )

    

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = generate_slug(self.name)
        super(Category, self).save(*args, **kwargs)




STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, null=True ,blank=True)
    updated_on = models.DateTimeField(auto_now= True)
    created_on = models.DateTimeField(auto_now_add=True)
    image = models.ImageField( upload_to="public/")
    alt_text = models.CharField(
                                max_length=50,
                                blank=True,
                                null=True,
                                )
    status = models.IntegerField(choices=STATUS, default=0)
    description = FroalaField()
    category = models.ForeignKey(Category, on_delete=models.RESTRICT)    
    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = generates_slug(self.title)
        super(Post, self).save(*args, **kwargs)