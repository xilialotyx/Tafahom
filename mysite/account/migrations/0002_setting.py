# Generated by Django 4.1.9 on 2023-05-18 22:28

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("account", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Setting",
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
                (
                    "field_name",
                    models.CharField(max_length=255, verbose_name="نام متغیر"),
                ),
                (
                    "values",
                    models.CharField(
                        blank=True, max_length=255, null=True, verbose_name="مقدار"
                    ),
                ),
            ],
            options={
                "verbose_name": "آپشن",
                "verbose_name_plural": "تنظیمات",
            },
        ),
    ]