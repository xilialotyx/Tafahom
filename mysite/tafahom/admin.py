from django.contrib import admin
from .models import Law, Tafahom, ReternType, Organization, ResType, Verifier, Miz,Instruction, Vaam, ResPerTafahom
from jalali_date import datetime2jalali, date2jalali
from jalali_date.admin import ModelAdminJalaliMixin, StackedInlineJalaliMixin, TabularInlineJalaliMixin	
# Register your models here.

admin.site.site_header="مدیریت تفاهم نامه ها"

@admin.register(Law)
class LawAdmin(admin.ModelAdmin):
    list_display = ["title"]


@admin.register(Instruction)
class InstructionAdmin(admin.ModelAdmin):
    pass


@admin.register(Vaam)
class VaamAdmin(admin.ModelAdmin):
    pass

@admin.register(ResType)
class ResTypeAdmin(admin.ModelAdmin):
    pass


class ResTypeInline(admin.TabularInline):
    model = ResPerTafahom

    def get_extra(self, request, obj=None, **kwargs):
        extra = 2
        if obj:
            return extra - obj.respertafahom_set.count()
        return extra


@admin.action(description='مسدود کردن حساب')
def hesab_is_blocked(modeladmin, request, queryset):
    for a in queryset:
        a.is_blocked = True
        a.save()


@admin.register(Tafahom)
class TafahomAdmin(ModelAdminJalaliMixin,admin.ModelAdmin):
    # show jalali date in list display 
	list_display = ['num','createDate_jalali','expirDate_jalali']
	inlines = [ResTypeInline]
	actions = [hesab_is_blocked]

	@admin.display(description='تاریخ ایجاد', ordering='createDate')
	def createDate_jalali(self, obj):
		return date2jalali(obj.createDate)

	@admin.display(description='تاریخ انقضا', ordering='expirDate')
	def expirDate_jalali(self, obj):
		return date2jalali(obj.expirDate)



@admin.register(ReternType)
class ReternTypeAdmin(admin.ModelAdmin):
    pass


@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    pass



@admin.register(Verifier)
class VerifierAdmin(admin.ModelAdmin):
    pass


@admin.register(Miz)
class MizAdmin(admin.ModelAdmin):
    pass



@admin.register(ResPerTafahom)
class ResPerTafahomAdmin(admin.ModelAdmin):
    list_display = ['__str__','mablagh']


