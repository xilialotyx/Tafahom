from django.contrib.auth import views
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import home


app_name = "account"
newlogginView = views.LoginView
newlogginView.template_name = 'account/registration/login.html'
urlpatterns = [
    path("login/", newlogginView.as_view(), name="login"),
    path("logout/", views.LogoutView.as_view(), name="logout"),
    # path("password_change/", views.PasswordChangeView.as_view(), name="password_change"    ),
    # path("password_change/done/",views.PasswordChangeDoneView.as_view(),name="password_change_done",    ),
    # path("password_reset/", views.PasswordResetView.as_view(), name="password_reset"),
    # path("password_reset/done/",views.PasswordResetDoneView.as_view(),name="password_reset_done",    ),
    # path("reset/<uidb64>/<token>/",views.PasswordResetConfirmView.as_view(),name="password_reset_confirm",    ),
    # path("reset/done/",views.PasswordResetCompleteView.as_view(),name="password_reset_complete",    ),
]

urlpatterns += [
    path("", home, name="home"),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)