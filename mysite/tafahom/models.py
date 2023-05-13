from django.db import models

class Tafahom(models):
    username = models.CharField(max_length=150, unique=True)
    name = models.CharField(max_length=150,null=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        if self.name is None:
            return self.username
        
        return self.name
