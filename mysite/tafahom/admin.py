from django.contrib import admin
from .models import Law, Tafahom, ReternType, Organization, ResType, Verifier, Miz, Vaam, Setting, ResPerTafahom
from jalali_date import datetime2jalali, date2jalali
from jalali_date.admin import ModelAdminJalaliMixin, StackedInlineJalaliMixin, TabularInlineJalaliMixin	
# Register your models here.


@admin.register(Law)
class LawAdmin(admin.ModelAdmin):
    list_display = ["title"]

@admin.register(Vaam)
class VaamAdmin(admin.ModelAdmin):
    pass


class VaamAdminTabularInline(TabularInlineJalaliMixin, admin.TabularInline):
	model = Vaam

        

@admin.action(description='مسدود کردن حساب')
def price_to_zero(modeladmin, request, queryset):
    for a in queryset:
        a.is_blocked = True
        a.save()


@admin.register(Tafahom)
class TafahomAdmin(ModelAdminJalaliMixin,admin.ModelAdmin):
    # show jalali date in list display 
	list_display = ['num', 'get_created_jalali']
	inlines = (VaamAdminTabularInline, )
	actions = [price_to_zero]
	
	@admin.display(description='تاریخ ایجاد', ordering='createDate')
	def get_created_jalali(self, obj):
		return datetime2jalali(obj.createDate).strftime('%a, %d %b %Y %H:%M:%S')

    



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