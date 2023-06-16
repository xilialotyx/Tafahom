from django.shortcuts import render
from django.contrib.auth import views
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin

import openpyxl
from django.http import FileResponse
from io import BytesIO
# Create your views here.

@login_required
def home(request):

    if request.method == 'POST':
        wb = openpyxl.Workbook()
        ws = wb.active
        ws.append(['کد شرایط اعطا*',        #1   ghesti_yekja
                    'کد نوع تشکیل پرونده*', #2   type_tashkil
                    'شماره مشتری*',
                    'کد نوع تسهیلات*',       #110   ,  13636 vaam_type_code
                    'کد بخش اقتصادی*',      # 6-10        bakhsh_eghtesadi
                    'کد زیر منبع',          #1010770      zirmanba_code
                    'کد علت درخواست*',      # 7         elat_darkhast
                    'مبلغ درخواست*',        #  txt_mablagh
                    'مدت درخواست*',         #  txt_modat
                    'دوره تنفس*',           #0          dore_tnafos
                    'شرح تسهیلات',                      #txt_des
                    'بیمه عمر*',            #0         bime
                    'واریز به حساب سایر*', #1         variz_be_sayer
                    'تعداد اقساط تسهیلات',      # txt_modat
                    'فاصله میان اقساط',    #1         fasele_aghsat
                    'شماره سپرده*',        
                    'سپرده واریز و برداشت تسهیلات*',
                    'سپرده مبنای محاسبه امتیاز',
                    'ضریب برابری',
                    'ضریب ترجیحی',
                    'کد یکتای تسهیلات',
                    'درصد کارمزد تسهیلات',
                    'درصد وجه التزام',
                    'کد اعتبارسنجی',
                    'کد راهنما*',                   #100520201    rahnama_code
                    'کد پروژه*',                    #127696180    proje_code
                    'ارسال مستقیم برای امضا* '])   #emza

        for num in range(0,int(request.POST["txt_count"])):
            ws.append([request.POST["ghesti_yekja"],  
                    request.POST["type_tashkil"],
                    '***',
                    request.POST["vaam_type_code"],     
                    request.POST["bakhsh_eghtesadi"],  
                    request.POST["zirmanba_code"],   
                    request.POST["elat_darkhast"],  
                    request.POST["txt_mablagh"],   
                    request.POST["txt_modat"],      
                    request.POST["dore_tnafos"], 
                    request.POST["txt_des"],                 
                    request.POST["bime"], 
                    request.POST["variz_be_sayer"],
                    request.POST["txt_modat"],  
                    request.POST["fasele_aghsat"], 
                    '***',        
                    '***',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    request.POST["rahnama_code"], 
                    request.POST["proje_code"], 
                    request.POST["emza"]])

        out = BytesIO()
        wb.save( out)
        out.seek(0)

        response = FileResponse(out, content_type='application/vnd.ms-excel' , as_attachment=True)
        response['Content-Disposition'] = 'attachment; filename="excel_file.xlsx"'
        return response

    return render(request,'account/home.html')