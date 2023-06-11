
from django import forms
from .models import Law, Tafahom, ReternType, Organization, ResType, Verifier, Miz, Vaam, ResPerTafahom
from jalali_date.fields import JalaliDateField, SplitJalaliDateTimeField
from jalali_date.widgets import AdminJalaliDateWidget, AdminSplitJalaliDateTime


class LawForm(forms.ModelForm):

    class Meta:
        model = Law
        fields = ["title"]


class ReternTypeForm(forms.ModelForm):

    class Meta:
        model = ReternType
        fields = ["title"]


class OrganizationForm(forms.ModelForm):

    class Meta:
        model = Organization
        fields = ["title"]


class ResTypeForm(forms.ModelForm):

    class Meta:
        model = ResType
        fields = ["title"]


class MizForm(forms.ModelForm):

    class Meta:
        model = Miz
        fields = ["code", "title"]


class VerifierForm(forms.ModelForm):

    class Meta:
        model = Verifier
        fields = ["user_code", "title"]


class TafahomForm(forms.ModelForm):

    class Meta:
        model = Tafahom
        fields = ["num", "createDate", "expirDate", "loanRow", "des", "hesab",
                  "code_kanun", "mablagh_limit", "modat_limit", "person_limit", "is_blocked", "is_bime"]
        




class ResPerTafahomForm(forms.ModelForm):

    class Meta:
        model = ResPerTafahom
        fields = ["tafahom", "res_type", "mablagh"]



