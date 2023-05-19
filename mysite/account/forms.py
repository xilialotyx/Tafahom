from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django import forms
from .models import User,Setting


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ("username",)


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ("username",)

class SettingForm(forms.ModelForm):

    class Meta:
        model = Setting
        fields = ["field_name", "values"]