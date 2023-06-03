# Generated by Django 4.1.9 on 2023-05-27 10:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Law',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='عنوان')),
            ],
            options={
                'verbose_name': 'فانون',
                'verbose_name_plural': 'قوانین',
            },
        ),
        migrations.CreateModel(
            name='Miz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=50, verbose_name='کد میز')),
                ('title', models.CharField(max_length=250, verbose_name='عنوان')),
            ],
            options={
                'verbose_name': 'میز کار',
                'verbose_name_plural': 'میز کارها',
            },
        ),
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250, verbose_name='عنوان')),
            ],
            options={
                'verbose_name': 'سازمان',
                'verbose_name_plural': 'سازمان ها',
            },
        ),
        migrations.CreateModel(
            name='ResType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250, verbose_name='عنوان')),
            ],
            options={
                'verbose_name': 'نوع منبع وام',
                'verbose_name_plural': 'نوع منابع وام',
            },
        ),
        migrations.CreateModel(
            name='ReternType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='عنوان')),
            ],
            options={
                'verbose_name': 'نوع تسهیلات',
                'verbose_name_plural': 'انواع تسهیلات',
            },
        ),
        migrations.CreateModel(
            name='Tafahom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.CharField(max_length=50, verbose_name='شماره')),
                ('createDate', models.DateField(verbose_name='تاریخ صدور')),
                ('expirDate', models.DateField(blank=True, null=True, verbose_name='تاریخ ابطال')),
                ('loanRow', models.CharField(blank=True, max_length=10, null=True, verbose_name='ردیف وام')),
                ('des', models.TextField(blank=True, null=True, verbose_name='توضیحات')),
                ('hesab', models.CharField(blank=True, max_length=50, null=True, verbose_name='حساب')),
                ('code_kanun', models.BigIntegerField(blank=True, null=True, verbose_name='کد کانون')),
                ('mablagh_limit', models.DecimalField(blank=True, decimal_places=0, max_digits=18, null=True, verbose_name='سقف مبلغ وام')),
                ('modat_limit', models.IntegerField(blank=True, null=True, verbose_name='سقف مدت وام')),
                ('person_limit', models.IntegerField(blank=True, null=True, verbose_name='سقف نفرات')),
                ('is_blocked', models.BooleanField(default=False, verbose_name='حساب مسدود است؟')),
                ('is_bime', models.BooleanField(default=False, verbose_name='دارای بیمه؟')),
                ('by_sign', models.BooleanField(default=False, verbose_name='ارسال برای امضا؟')),
                ('law', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='tafahom.law', verbose_name='قانون')),
                ('miz', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='tafahom.miz', verbose_name='میز کار')),
                ('organization', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='tafahom.organization', verbose_name=' سازمان')),
                ('retern_type', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='tafahom.reterntype', verbose_name='نحوه باز پرداخت')),
            ],
            options={
                'verbose_name': 'تفاهم نامه',
                'verbose_name_plural': 'تفاهم نامه ها',
            },
        ),
        migrations.CreateModel(
            name='Verifier',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_code', models.CharField(max_length=50, verbose_name='کد کاربر')),
                ('title', models.CharField(max_length=50, verbose_name='عنوان')),
            ],
            options={
                'verbose_name': 'تائید کننده',
                'verbose_name_plural': 'تائید کنندگان',
            },
        ),
        migrations.CreateModel(
            name='Vaam',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mail_num', models.CharField(blank=True, max_length=50, null=True, verbose_name='شماره نامه')),
                ('mail_date', models.DateField(blank=True, null=True, verbose_name='تاریخ نامه')),
                ('action_date', models.DateField(blank=True, null=True, verbose_name='تاریخ شروع')),
                ('code_meli', models.CharField(blank=True, max_length=11, null=True, verbose_name='کد ملی')),
                ('mablagh', models.DecimalField(decimal_places=0, max_digits=12, verbose_name='مبلغ')),
                ('modat', models.IntegerField(blank=True, help_text='مدت', null=True, verbose_name='مدت')),
                ('is_duplicate', models.BooleanField(default=False, verbose_name='تکراری؟')),
                ('is_variz', models.BooleanField(default=False, verbose_name='واریز شده؟')),
                ('des', models.TextField(blank=True, null=True, verbose_name='توضیحات')),
                ('res_type', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='tafahom.restype', verbose_name='نوع منبع')),
                ('tafahom', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='tafahom.tafahom', verbose_name='تفاهم نامه')),
            ],
            options={
                'verbose_name': 'وام',
                'verbose_name_plural': 'تسهیلات',
            },
        ),
        migrations.AddField(
            model_name='tafahom',
            name='verifier',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='tafahom.verifier', verbose_name='تائید کننده'),
        ),
        migrations.CreateModel(
            name='ResPerTafahom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mablagh', models.DecimalField(decimal_places=0, help_text='مبلغ', max_digits=18, verbose_name='مبلغ')),
                ('res_type', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='tafahom.restype', verbose_name='نوع منبع')),
                ('tafahom', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='tafahom.tafahom', verbose_name='تفاهم نامه')),
            ],
            options={
                'verbose_name': 'منبع هر تفاهم نامه',
                'verbose_name_plural': 'منابع تفاهم نامه ها',
                'unique_together': {('tafahom', 'res_type')},
            },
        ),
    ]
