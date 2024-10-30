from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# Create your models here.
class Product(models.Model):
    pub_date = models.DateTimeField()
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/')
    icon = models.ImageField(upload_to='images/')
    body = models.TextField()
    url = models.TextField()
    votes_total = models.IntegerField(default=1)
    hunter = models.ForeignKey(User, on_delete=models.CASCADE)

    
    def __str__(self):
        return self.title

    def summary(self):
        return self.body[:100]

    def pub_date_pretty(self):
        return self.pub_date.strftime('%b %e %Y') 