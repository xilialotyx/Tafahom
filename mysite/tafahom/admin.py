from django.contrib import admin
from .models import Law, Tafahom, ReternType, Organization, ResType, Verifier, Miz, Vaam, Setting, ResPerTafahom
from jalali_date import datetime2jalali, date2jalali
from jalali_date.admin import ModelAdminJalaliMixin, StackedInlineJalaliMixin, TabularInlineJalaliMixin	
# Register your models here.

admin.site.site_header="مدیریت تفاهم نامه ها"

@admin.register(Law)
class LawAdmin(admin.ModelAdmin):
    list_display = ["title"]

@admin.register(Vaam)
class VaamAdmin(admin.ModelAdmin):
    pass


@admin.action(description='مسدود کردن حساب')
def hesab_is_blocked(modeladmin, request, queryset):
    for a in queryset:
        a.is_blocked = True
        a.save()


@admin.register(Tafahom)
class TafahomAdmin(admin.ModelAdmin):
    # show jalali date in list display 
	list_display = ['num']
	# inlines = (VaamAdminTabularInline, )
	actions = [hesab_is_blocked]
	


@admin.register(ReternType)
class ReternTypeAdmin(admin.ModelAdmin):
    pass


@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    pass


@admin.register(ResType)
class ResTypeAdmin(admin.ModelAdmin):
    pass



@admin.register(Verifier)
class VerifierAdmin(admin.ModelAdmin):
    pass


@admin.register(Miz)
class MizAdmin(admin.ModelAdmin):
    pass



@admin.register(ResPerTafahom)
class ResPerTafahomAdmin(admin.ModelAdmin):
    pass


@admin.register(Setting)
class SettingAdmin(admin.ModelAdmin):
    pass