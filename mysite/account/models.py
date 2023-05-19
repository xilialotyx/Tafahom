from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=150, unique=True,verbose_name="نام کاربری")
    name = models.CharField(max_length=150,null=True,verbose_name="نام و نام خانوادگی")
    is_staff = models.BooleanField(default=False,verbose_name="کاربر مسئول")
    is_active = models.BooleanField(default=True,verbose_name="فعال/غیرفعال")
    date_joined = models.DateField(auto_now_add=True,verbose_name="تاریخ ایجاد")

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name="کاربر"
        verbose_name_plural="کاربران"

    objects = CustomUserManager()

    def __str__(self):
        if self.name is None:
            return self.username
        
        return self.name
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True
    


class Setting(models.Model):
    field_name = models.CharField(max_length=255, verbose_name="نام متغیر")
    values = models.CharField(blank=True, null=True,max_length=255, verbose_name="مقدار")

    class Meta:
        verbose_name = "آپشن"
        verbose_name_plural = "تنظیمات"

    def __str__(self):
        return self.field_name