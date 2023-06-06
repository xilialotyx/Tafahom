from django.db import models
import datetime 
from django.utils.translation import gettext_lazy as _
from jalali_date import datetime2jalali, date2jalali
from django.db.models import Sum

class Law(models.Model):
    title = models.CharField(max_length=150, verbose_name="عنوان")

    class Meta:
        verbose_name = "فانون"
        verbose_name_plural = "قوانین"

    def __str__(self):
        return self.title


class ReternType(models.Model):
    title = models.CharField(max_length=50, verbose_name="عنوان")

    class Meta:
        verbose_name = "نوع تسهیلات"
        verbose_name_plural = "انواع تسهیلات"

    def __str__(self):
        return self.title


class Organization(models.Model):
    title = models.CharField(max_length=250, verbose_name="عنوان")

    class Meta:
        verbose_name = "سازمان"
        verbose_name_plural = "سازمان ها"

    def __str__(self):
        return self.title


class ResType(models.Model):
    title = models.CharField(max_length=250, verbose_name="عنوان")

    class Meta:
        verbose_name = "نوع منبع وام"
        verbose_name_plural = "نوع منابع وام"

    def __str__(self):
        return self.title


class Miz(models.Model):
    code = models.CharField(max_length=50, verbose_name="کد میز")
    title = models.CharField(max_length=250, verbose_name="عنوان")

    class Meta:
        verbose_name = "میز کار"
        verbose_name_plural = "میز کارها"

    def __str__(self):
        return "{} {}".format(self.title, self.code)


class Verifier(models.Model):
    user_code = models.CharField(max_length=50, verbose_name="کد کاربر")
    title = models.CharField(max_length=50, verbose_name="عنوان")

    class Meta:
        verbose_name = "تائید کننده"
        verbose_name_plural = "تائید کنندگان"

    def __str__(self):
        return self.title


class Tafahom(models.Model):
    num = models.CharField(max_length=50, verbose_name="شماره")
    createDate = models.DateField(verbose_name="تاریخ صدور")
    expirDate = models.DateField(blank=True, null=True,verbose_name="تاریخ ابطال")
    loanRow = models.CharField(blank=True, null=True,max_length=10, verbose_name="ردیف وام")
    des = models.TextField(blank=True, null=True,verbose_name="توضیحات")
    hesab = models.CharField(blank=True, null=True,max_length=50, verbose_name="حساب")
    code_kanun = models.BigIntegerField(blank=True, null=True,verbose_name="کد کانون")
    mablagh_limit = models.DecimalField(blank=True, null=True,
        max_digits=18, decimal_places=0, verbose_name="سقف مبلغ وام")
    modat_limit = models.IntegerField(blank=True, null=True,verbose_name="سقف مدت وام")
    person_limit = models.IntegerField(blank=True, null=True,verbose_name="سقف نفرات")
    is_blocked = models.BooleanField(
        default=False,        verbose_name="حساب مسدود است؟")
    is_bime = models.BooleanField(
        default=False,        verbose_name="دارای بیمه؟")
    by_sign = models.BooleanField(
        default=False,        verbose_name="ارسال برای امضا؟")
    organization = models.ForeignKey(Organization, on_delete=models.DO_NOTHING, verbose_name=" سازمان")
    miz = models.ForeignKey(blank=True, null=True,
        to=Miz, on_delete=models.DO_NOTHING, verbose_name="میز کار")
    law = models.ForeignKey(blank=True, null=True,
        to=Law, on_delete=models.DO_NOTHING, verbose_name="قانون")
    retern_type = models.ForeignKey(blank=True, null=True,
        to=ReternType, on_delete=models.DO_NOTHING, verbose_name="نحوه باز پرداخت")
    verifier = models.ForeignKey(blank=True, null=True,
        to=Verifier, on_delete=models.DO_NOTHING, verbose_name="تائید کننده")

    class Meta:
        verbose_name = "تفاهم نامه"
        verbose_name_plural = "تفاهم نامه ها"

    def __str__(self):
        return "{} {}".format(self.organization.title, self.num)
    
    
    def JcreateDate(self):
        return date2jalali(self.createDate)
    JcreateDate.short_description="تاریخ صدور"

    def is_expiered(self):
        if self.expirDate is not None:
            return datetime.date.today() > self.expirDate
        return True
    is_expiered.Boolean = True

    def total_res(self):
        res_type = ResPerTafahom.objects.filter(tafahom=self.id)
        total_res = res_type.aggregate(Sum('mablagh'))['mablagh__sum']

        return total_res
    
    def total_vaam(self):
        instrac = Instruction.objects.filter(tafahom=self.id)
        vaams = Vaam.objects.filter(instruction__in=instrac)
        total_vaam = vaams.aggregate(Sum('mablagh'))['mablagh__sum']
        return total_vaam
    
    def remain_res(self):
        return self.total_res() - self.total_vaam()
    
    def totals_res_PRT(self):
        res_type = ResPerTafahom.objects.filter(tafahom=self.id)
        totals_vaam_PRT = res_type.values("res_type__title").annotate(total_mablagh=Sum('mablagh'))
        return totals_vaam_PRT

    def totals_vaam_PRT(self):
        instruct = Instruction.objects.filter(tafahom=self.id)
        vaams = Vaam.objects.filter(instruction__in=instruct)
        totals_vaam_PRT = vaams.values("res_type__title").annotate(total_mablagh=Sum('mablagh'))
        return totals_vaam_PRT


class Instruction(models.Model):
    tafahom = models.ForeignKey(
        Tafahom, on_delete=models.DO_NOTHING, verbose_name="تفاهم نامه")
    mail_num = models.CharField(blank=True, null=True,
        max_length=50, verbose_name="شماره نامه")
    mail_date = models.DateField(blank=True, null=True,verbose_name="تاریخ نامه")
    action_date = models.DateField(blank=True, null=True,verbose_name="تاریخ شروع")
    des = models.TextField(blank=True, null=True,verbose_name="توضیحات")

    class Meta:
        verbose_name = "دستورالعمل"
        verbose_name_plural = "دستورالعمل ها"

    def __str__(self):
        return self.tafahom.num + ':' + self.mail_num
    
    def total_vaam(self):
        instrac = Instruction.objects.filter(tafahom=self.tafahom.id)
        vaams = Vaam.objects.filter(instruction__in=instrac)
        total_vaam = vaams.aggregate(Sum('mablagh'))['mablagh__sum']
        return total_vaam
    
    def totals_vaam_PRT(self):
        vaams = Vaam.objects.filter(instruction=self.id)
        totals_vaam_PRT = vaams.values("res_type__title").annotate(total_mablagh=Sum('mablagh'))
        return totals_vaam_PRT


class Vaam(models.Model):
    instruction = models.ForeignKey(
        Instruction, on_delete=models.DO_NOTHING, verbose_name="دستورالعمل")
    code_meli = models.CharField(blank=True, null=True,max_length=11, verbose_name="کد ملی")
    hesab = models.CharField(blank=True, null=True,max_length=50, verbose_name="حساب")
    mablagh = models.DecimalField(max_digits=12, decimal_places=0, verbose_name="مبلغ")
    modat = models.IntegerField(blank=True, null=True,help_text=_("مدت"), verbose_name="مدت")
    res_type = models.ForeignKey(blank=True, null=True,
        to=ResType, on_delete=models.DO_NOTHING, verbose_name="نوع منبع")
    des = models.TextField(blank=True, null=True,verbose_name="توضیحات")



    class Meta:
        verbose_name = "وام"
        verbose_name_plural = "تسهیلات"

    def __str__(self):
        return self.code_meli


class ResPerTafahom(models.Model):
    tafahom = models.ForeignKey(
        Tafahom, on_delete=models.DO_NOTHING, verbose_name="تفاهم نامه")
    res_type = models.ForeignKey(
        ResType, on_delete=models.DO_NOTHING, verbose_name="نوع منبع")
    mablagh = models.DecimalField(max_digits=18, decimal_places=0, help_text=_(
        "مبلغ"), verbose_name="مبلغ")

    class Meta:
        unique_together = ('tafahom', 'res_type',)
        verbose_name = "منبع هر تفاهم نامه"
        verbose_name_plural = "منابع تفاهم نامه ها"

    def __str__(self):
        return "{} {}".format(self.tafahom, self.res_type)

