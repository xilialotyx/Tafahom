from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import User,Setting
# Register your models here.

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ("username","name", "is_staff", "is_active",)
    list_filter = ("username","name", "is_staff", "is_active",)
    list_editable = ("name",)
    fieldsets = (
        (None, {"fields": ("username","name", "password")}),
        ("Permissions", {"fields": ("is_staff", "is_active", "groups", "user_permissions")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "username", "password1", "password2", "is_staff",
                "is_active", "groups", "user_permissions"
            )}
        ),
    )
    search_fields = ("username","name",)
    ordering = ("username",)



@admin.register(Setting)
class SettingAdmin(admin.ModelAdmin):
    pass
