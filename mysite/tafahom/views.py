from django.utils import timezone
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from .models import Tafahom, Vaam,ResPerTafahom
from django.shortcuts import render,redirect,get_object_or_404
from .forms import VaamForm
from jalali_date import datetime2jalali, date2jalali
from django.contrib.sessions.backends.db import SessionStore
import openpyxl
from openpyxl.styles import PatternFill



class TafahomListView(ListView):
    model=Tafahom
    template_name = 'tafahom/list.html'  # Specify your own template name/location

    def get_queryset(self):
        tafahom_list = Tafahom.objects.all()

        return  tafahom_list

    # def get_context_data(self, **kwargs):
    #   # Call the base implementation first to get the context
    #   context = super(TafahomListView, self).get_context_data(**kwargs)
    #   # Create any data and add it to the context
    #   context['some_data'] = 'This is just some data'
    #   return context

def tafahom_details(request, tafahom_id):
    tafahom = get_object_or_404(Tafahom, pk=tafahom_id)
    vaams = Vaam.objects.filter(tafahom=tafahom_id)
    res_type = ResPerTafahom.objects.filter(tafahom=tafahom_id)

    if request.method == 'POST':
        excel_file = request.FILES['excel_file']
        if form.is_valid():
            excel_file = request.FILES['excel_file']
            # بارگیری فایل اکسل
            wb = openpyxl.load_workbook(excel_file)
            # انتخاب ورک‌شیت
            ws = wb['Sheet1']

            # تغییر رنگ سلول A1 به زرد
            yellow_fill = PatternFill(start_color="FFFF00", end_color="FFFF00", fill_type="solid")
            ws['A1'].fill = yellow_fill

            # ذخیره فایل اکسل تغییر یافته
            wb.save('path/to/your/modified_file.xlsx')

            for row in ws["A1:C1"]:
                for cell in row:
                    cell.fill = yellow_fill

            for row in ws.iter_rows('A{}:C{}'.format(ws.min_row+1,ws.max_row)):
                for cell in row:
                    cell.value

            for index, row in df.iterrows():
                code_meli = row['کد ملی']
                tafahom_id = request.POST["tafahom_id"]
                vaam = Vaam.objects.get(code_meli=code_meli, tafahom=tafahom_id)
                
                if vaam is None:
                    # این کد ملی داخل این تفاهم نامه وام دریافت نکرده است
                    vaam.is_duplicate=True
                    vaam.des += "-قبلا در این تفاهم نامه وام دریافت شده"
                    vaam.tafahom = tafahom
                    vaam.mail_num = row['شماره نامه']
                    vaam.mail_date = row['تاریخ نامه']
                    vaam.action_date = row['تاریخ شروع']
                    vaam.code_meli = row['کد ملی']
                    vaam.mablagh = row['مبلغ']
                    vaam.modat = row['مدت']
                    vaam.res_type = row['نوع منبع']
                    vaam.save()

                else:
                    sfd
                

                session = SessionStore()
                session['my_dataframe'] = df
                session.save()

            # پس از ذخیره کردن اطلاعات، می‌توانید به صفحه اطلاعات redirect کنید
            return redirect('tafahom_details', tafahom=tafahom_id)
    else:
        form = VaamForm()

    context = {
        'tafahom': tafahom,
        'form': form,
        'vaams': vaams,
        'res_type':res_type,
    }

    return render(request, 'tafahom/detail.html', context)