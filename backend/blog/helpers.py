from django.utils.text import slugify

import string
import random




def generate_random_string(N):
    res = '' .join(random.choices(string.ascii_uppercase + string.digits,k = N))
    return res


def generate_slug(text):
    new_slug =slugify(text)
    from blog.models import Category

    if Category.objects.filter(slug = new_slug).first():
        return generate_slug(text + generate_random_string(5))
    return new_slug


def generates_slug(text):
    new_slug = slugify(text)
    from blog.models import Post

    if Post.objects.filter(slug = new_slug).first():
        return generates_slug(text + generate_random_string(5))
    return new_slug