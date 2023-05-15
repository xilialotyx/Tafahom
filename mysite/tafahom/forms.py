
from django.forms import ModelForm
from .models import Law, Tafahom, ReternType, Organization, ResType, Verifier, Miz, Vaam, Setting, ResPerTafahom


class LawForm(ModelForm):

    class Meta:
        model = Law
        fields = ["title"]


class ReternTypeForm(ModelForm):

    class Meta:
        model = ReternType
        fields = ["title"]


class OrganizationForm(ModelForm):

    class Meta:
        model = Organization
        fields = ["title"]


class ResTypeForm(ModelForm):

    class Meta:
        model = ResType
        fields = ["title"]


class MizForm(ModelForm):

    class Meta:
        model = Miz
        fields = ["code", "title"]


class VerifierForm(ModelForm):

    class Meta:
        model = Verifier
        fields = ["user_code", "title"]


class TafahomForm(ModelForm):

    class Meta:
        model = Tafahom
        fields = ["num", "createDate", "expirDate", "loanRow", "des", "hesab",
                  "code_kanun", "mablagh_limit", "modat_limit", "person_limit", "is_blocked", "is_bime"]


class VaamForm(ModelForm):

    class Meta:
        model = Vaam
        fields = ["tafahom_id", "mail_num", "mail_date",
                  "action_date", "code_meli", "mablagh", "res_type_id"]


class ResPerTafahomForm(ModelForm):

    class Meta:
        model = ResPerTafahom
        fields = ["tafahom_id", "res_type_id", "mablagh"]


class SettingForm(ModelForm):

    class Meta:
        model = Setting
        fields = ["field_name", "values"]
