from django.utils import timezone
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from .models import Tafahom, Vaam
from django.db.models import Sum
import pandas as pd
from django.shortcuts import render,redirect,get_object_or_404
from .forms import VaamForm
from jalali_date import datetime2jalali, date2jalali



class TafahomListView(ListView):
    model=Tafahom  
    template_name = 'tafahom/list.html'  # Specify your own template name/location

    def get_queryset(self):
        return Tafahom.objects.all() # Get 5 books containing the title war

    # def get_context_data(self, **kwargs):
    #   # Call the base implementation first to get the context
    #   context = super(TafahomListView, self).get_context_data(**kwargs)
    #   # Create any data and add it to the context
    #   context['some_data'] = 'This is just some data'
    #   return context

def tafahom_details(request, tafahom_id):
    tafahom = get_object_or_404(Tafahom, pk=tafahom_id)
    vaams = Vaam.objects.filter(tafahom_id=tafahom_id)
    tafahom.createDate=date2jalali(tafahom.createDate)
    total_mablagh = vaams.aggregate(Sum('mablagh'))['mablagh__sum']

    if request.method == 'POST':
        form = VaamForm(request.POST, request.FILES)
        if form.is_valid():
            excel_file = request.FILES['excel_file']
            df = pd.read_excel(excel_file)

            for index, row in df.iterrows():
                code_meli = row['code_meli']
                tafahom_id = row['tafahom_id']
                vaam, created = Vaam.objects.get_or_create(code_meli=code_meli, tafahom_id=tafahom_id)
                
                vaam = Vaam()
                if created:
                    # ردیف تازه ایجاد شده است
                    vaam.is_duplicate=True
                    vaam.des += "-قبلا در این تفاهم نامه وام دریافت شده"
                
                vaam.tafahom_id = tafahom
                vaam.mail_num = row['شماره نامه']
                vaam.mail_date = row['تاریخ نامه']
                vaam.action_date = row['تاریخ شروع']
                vaam.code_meli = row['کد ملی']
                vaam.mablagh = row['مبلغ']
                vaam.modat = row['مدت']
                vaam.res_type_id = row['نوع منبع']
                vaam.save()
                

            # پس از ذخیره کردن اطلاعات، می‌توانید به صفحه اطلاعات redirect کنید
            return redirect('tafahom_details', tafahom_id=tafahom_id)
    else:
        form = VaamForm()

    context = {
        'tafahom': tafahom,
        'form': form,
        'vaams': vaams,
        'total_mablagh': total_mablagh,
    }

    return render(request, 'tafahom/detail.html', context)