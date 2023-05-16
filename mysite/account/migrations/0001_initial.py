# Generated by Django 4.1.9 on 2023-05-16 09:09

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
    ]

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                (
                    "is_superuser",
                    models.BooleanField(
                        default=False,
                        help_text="Designates that this user has all permissions without explicitly assigning them.",
                        verbose_name="superuser status",
                    ),
                ),
                (
                    "username",
                    models.CharField(
                        max_length=150, unique=True, verbose_name="نام کاربری"
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        max_length=150, null=True, verbose_name="نام و نام خانوادگی"
                    ),
                ),
                (
                    "is_staff",
                    models.BooleanField(default=False, verbose_name="کاربر مسئول"),
                ),
                (
                    "is_active",
                    models.BooleanField(default=True, verbose_name="فعال/غیرفعال"),
                ),
                (
                    "date_joined",
                    models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ایجاد"),
                ),
                (
                    "groups",
                    models.ManyToManyField(
                        blank=True,
                        help_text="The groups this user belongs to. A user will get all permissions granted to each of their groups.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.group",
                        verbose_name="groups",
                    ),
                ),
                (
                    "user_permissions",
                    models.ManyToManyField(
                        blank=True,
                        help_text="Specific permissions for this user.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.permission",
                        verbose_name="user permissions",
                    ),
                ),
            ],
            options={
                "verbose_name": "کاربر",
                "verbose_name_plural": "کاربران",
            },
        ),
    ]
