from django.db import models
from django.utils.translation import gettext_lazy as _


class Law(models.Model):
    title = models.CharField(max_length=150,verbose_name="عنوان")
    class Meta:
        verbose_name="فانون"
        verbose_name_plural="قوانین"

class ReternType(models.Model):
    title = models.CharField(max_length=50,verbose_name="عنوان")

    class Meta:
        verbose_name="نوع تسهیلات"
        verbose_name_plural="انواع تسهیلات"

class Organization(models.Model):
    title = models.CharField(max_length=250,verbose_name="عنوان")

    class Meta:
        verbose_name="سازمان"
        verbose_name_plural="سازمان ها"


class ResType(models.Model):
    title = models.CharField(max_length=250,verbose_name="عنوان")

    class Meta:
        verbose_name="منبع وام"
        verbose_name_plural="منابع وام"

class Miz(models.Model):
    code = models.CharField(max_length=50,verbose_name="کد میز")
    title = models.CharField(max_length=250,verbose_name="عنوان")

    class Meta:
        verbose_name="میز کار"
        verbose_name_plural="میز کارها"


class Verifier(models.Model):
    user_code = models.CharField(max_length=50,verbose_name="کد کاربر")
    title = models.CharField(max_length=50,verbose_name="عنوان")

    class Meta:
        verbose_name="تائید کننده"
        verbose_name_plural="تائید کنندگان"


class Tafahom(models.Model):
    num = models.CharField(max_length=50,verbose_name="شماره")
    createDate = models.DateTimeField(verbose_name="تاریخ صدور")
    expirDate = models.DateTimeField(verbose_name="تاریخ ابطال")
    loanRow = models.CharField(max_length=10,verbose_name="ردیف وام")
    des = models.TextField(verbose_name="توضیحات")
    hesab = models.CharField(max_length=50,verbose_name="حساب")
    code_kanun = models.BigIntegerField(
        help_text=_(' کد کانون'),verbose_name="کد کانون")
    mablagh_limit = models.DecimalField(max_digits=18,decimal_places=0
        ,help_text=_("سقف مبلغ"),verbose_name="سقف مبلغ وام")
    modat_limit = models.IntegerField(help_text=_("سقف مدت"),verbose_name="سقف مدت وام")
    person_limit = models.IntegerField(help_text=_("سقف نفر"),verbose_name="سقف نفرات")

    is_blocked = models.BooleanField(
        default=False,
        verbose_name="حساب مسدود است؟"
    )
    is_bime = models.BooleanField(
        default=False,
        verbose_name="دارای بیمه؟"
    )
    by_sign = models.BooleanField(
        default=False,
        verbose_name="ارسال برای امضا؟"
    )
    organization_id = models.ForeignKey(
        Organization, on_delete=models.DO_NOTHING,verbose_name=" سازمان")
    miz_id = models.ForeignKey(
        Miz, on_delete=models.DO_NOTHING,verbose_name="میز کار")
    law_id = models.ForeignKey(
        Law, on_delete=models.DO_NOTHING,verbose_name="قانون")
    retern_type_id = models.ForeignKey(
        ReternType, on_delete=models.DO_NOTHING,verbose_name="نحوه باز پرداخت")
    verifier_id = models.ForeignKey(
        Verifier, on_delete=models.DO_NOTHING,verbose_name="تائید کننده")
    
    class Meta:
        verbose_name="تفاهم نامه"
        verbose_name_plural="تفاهم نامه ها"


class Vaam(models.Model):
    tafahom_id = models.ForeignKey(
        Tafahom, on_delete=models.DO_NOTHING,verbose_name="تفاهم نامه")
    mail_num = models.CharField(max_length=50,verbose_name="شماره نامه")
    mail_date = models.DateTimeField(max_length=10,verbose_name="تاریخ نامه")
    action_date = models.CharField(max_length=10,verbose_name="تاریخ شروع")
    code_meli = models.CharField(max_length=11,verbose_name="کد ملی")
    mablagh = models.DecimalField(max_digits=12,decimal_places=0
        ,help_text=_("مبلغ"),verbose_name="مبلغ")
    modat = models.IntegerField(help_text=_("مدت"),verbose_name="مدت")
    res_type_id = models.ForeignKey(
        ResType, on_delete=models.DO_NOTHING,verbose_name="نوع منبع")
    
    class Meta:
        verbose_name="وام"
        verbose_name_plural="تسهیلات"


class ResPerTafahom(models.Model):
    tafahom_id = models.ForeignKey(
        Tafahom, on_delete=models.DO_NOTHING,verbose_name="تفاهم نامه")
    res_type_id = models.ForeignKey(
        ResType, on_delete=models.DO_NOTHING,verbose_name="نوع منبع")
    mablagh = models.DecimalField(max_digits=18,decimal_places=0
        ,help_text=_("مبلغ"),verbose_name="مبلغ")
    
    class Meta:
        verbose_name="منبع هر تفاهم نامه"
        verbose_name_plural="منابع تفاهم نامه ها"
    

class Setting(models.Model):
    field_name = models.CharField(max_length=255,verbose_name="نام متغیر")
    values = models.CharField(max_length=255,verbose_name="مقدار")

    class Meta:
        verbose_name="آپشن"
        verbose_name_plural="تنظیمات"