from django.db import models
from django.utils.translation import gettext_lazy as _


class Law(models.Model):
    title = models.CharField(max_length=150)

class ReternType(models.Model):
    title = models.CharField(max_length=50)

class Organization(models.Model):
    title = models.CharField(max_length=250)

class Miz(models.Model):
    code = models.CharField(max_length=50)
    title = models.CharField(max_length=250)


class Verifier(models.Model):
    user_code = models.CharField(max_length=50)
    title = models.CharField(max_length=50)


class Tafahom(models.Model):
    num = models.CharField(max_length=50)
    createDate = models.CharField(max_length=10)
    expirDate = models.CharField(max_length=10)
    loanRow = models.CharField(max_length=10)
    des = models.TextField()
    hesab = models.CharField(max_length=50)
    code_kanun = models.BigIntegerField(
        help_text=_(' کد کانون'))
    mablagh_limit = models.DecimalField(max_digits=18,decimal_places=0
        ,help_text=_("سقف مبلغ"))
    modat_limit = models.IntegerField(help_text=_("سقف مدت"))
    person_limit = models.IntegerField(help_text=_("سقف نفر"))

    is_blocked = models.BooleanField(
        _('Hesab is blocked?'),
        default=False,
        help_text=_(
           'اگر حساب مسدود باشد True می شود'
        ),
    )
    is_bime = models.BooleanField(
        _('Vaam is bime?'),
        default=False,
        help_text=_(
           'اگر وام بیمه باشد True می شود'
        ),
    )
    by_sign = models.BooleanField(
        _('Vaam by sign?'),
        default=False,
        help_text=_(
           'اگر وام برای امضا ارسال شود  True می شود'
        ),
    )
    organization_id = models.ForeignKey(
        Organization, on_delete=models.CASCADE)
    miz_id = models.ForeignKey(
        Miz, on_delete=models.CASCADE)
    law_id = models.ForeignKey(
        Law, on_delete=models.CASCADE)
    retern_type_id = models.ForeignKey(
        ReternType, on_delete=models.CASCADE)
    verifier_id = models.ForeignKey(
        Verifier, on_delete=models.CASCADE)
