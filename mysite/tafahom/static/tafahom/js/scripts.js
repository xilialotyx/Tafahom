!function () {
   "use strict";
   $(document).ready(function () {
      function e(e) {
         $(e.target).prev(".panel-heading").find("i.indicator").toggleClass("fa-chevron-up fa-chevron-down")
      }

      function t(e) {
         $(e.target).prev(".accordion-faq-toggle").find("i.indicator").toggleClass("fa-chevron-circle-up fa-chevron-circle-down")
      }

      function o(e) {
         var t = null, a = null, o = $(e), i = $(".dropdown-menu", e), n = o.parents("ul.nav");
         return n.size() > 0 && (t = n.data("dropdown-in") || null, a = n.data("dropdown-out") || null), {
            target: e,
            dropdown: o,
            dropdownMenu: i,
            effectIn: i.data("dropdown-in") || t,
            effectOut: i.data("dropdown-out") || a
         }
      }

      function i(e, t) {
         t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass("animated"), e.dropdownMenu.addClass(t))
      }

      function n(e, t) {
         var a = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
         e.dropdown.one(a, function () {
            e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass("animated"), e.dropdownMenu.removeClass(e.effectIn), e.dropdownMenu.removeClass(e.effectOut), "function" == typeof t && t()
         })
      }

      $("#side-menu").length && $("#side-menu").metisMenu({ doubleTapToGo: !1 }), $(".oaken-clear").hide(), $(".oakenwidgets").length && ($(".oakenwidgets").oakenwidgets(), $(".oaken-clear").show()), $("#breadcrumbs-toggle").click(function (e) {
         e.preventDefault(), $(".breadcrumb").toggleClass("hide")
      }), $("#navbar-inverse-toggle").click(function (e) {
         e.preventDefault(), $(".main-top-navbar").toggleClass("navbar-inverse")
      }), $("#enable-userbar-material-toggle").click(function (e) {
         e.preventDefault(), $(".material-button-anim").toggleClass("show"), $(".btn.userbar-toggle").toggleClass("hide"), $(".userbar-wrapper").toggleClass("enable-material"), $(".userbar-wrapper .nav-tabs").toggleClass("hide")
      }), $("#load-yellow-styles").click(function (e) {
         e.preventDefault(), $(document.body).attr("class", "yellow-body")
      }), $("#load-green-styles").click(function (e) {
         e.preventDefault(), $(document.body).attr("class", "green-body")
      }), $("#load-blue-styles").click(function (e) {
         e.preventDefault(), $(document.body).attr("class", "blue-body")
      }), $("#load-khaki-styles").click(function (e) {
         e.preventDefault(), $(document.body).attr("class", "khaki-body")
      }), $("#load-pink-styles").click(function (e) {
         e.preventDefault(), $(document.body).attr("class", "pink-body")
      }), $("#load-default-styles").click(function (e) {
         e.preventDefault(), $(document.body).removeClass()
      }), $(".material-button-toggle").click(function () {
         $(this).toggleClass("open"), $(".option").toggleClass("scale-on"), $(".material-button-anim").toggleClass("open")
      }), $(".scrollToTop").click(function () {
         return $("html, body").animate({ scrollTop: 0 }, 800), !1
      }), $.fn.clickOutsideThisElement = function (e) {
         return this.each(function () {
            var t = this;
            $(document).on("click touchstart", function (a) {
               $(a.target).closest(t).length || e.call(t, a)
            })
         })
      }, $(".userbar-wrapper").clickOutsideThisElement(function () {
         $("body").removeClass("userbar-wrapper-opened"), $(".option").removeClass("scale-on"), $(".material-button-toggle").removeClass("open")
      }), $(".sidebar-toggle").click(function (e) {
         $("body").toggleClass("sidebar-wrapper-closed")
      }), $(".sidebar-toggle-xs").click(function (e) {
         $("body").toggleClass("sidebar-wrapper-open-xs"), e.stopPropagation()
      }), $(".userbar-toggle").click(function (e) {
         $("body").toggleClass("userbar-wrapper-opened"), e.stopPropagation()
      }), $(".tooltiped").length && $(".tooltiped").tooltip(), $(".popovered").length && $(".popovered").popover({ html: "true" }), $(".popover-hovered").length && $(".popover-hovered").popover({
         html: "true",
         trigger: "hover"
      }), $('[data-tooltip="tooltip"]').tooltip(), $("#accordion").on("hidden.bs.collapse", e), $("#accordion").on("shown.bs.collapse", e), $("#accordion-faq").on("hidden.bs.collapse", t), $("#accordion-faq").on("shown.bs.collapse", t), $(".megamenu-hover .dropdown-toggle").length && $(".megamenu-hover .dropdown-toggle").dropdownHover({
         delay: 50,
         hoverDelay: 50
      }), $(".keep_open").click(function (e) {
         e.stopPropagation()
      }), $(".dropdown").on("show.bs.dropdown", function () {
         var e = $(this);
         setTimeout(function () {
            var t = $(".carousel", e).carousel();
            $("[data-slide], [data-slide-to]", t).click(function (e) {
               e.preventDefault(), $(this).trigger("click.bs.carousel.data-api")
            })
         }, 10)
      }), $('.dropdown-menu a[data-toggle="tab"]').click(function (e) {
         e.stopPropagation(), $(this).tab("show")
      });
      var a = $(".dropdown, .dropup");
      if (a.on({
         "show.bs.dropdown": function () {
            var e = o(this);
            i(e, e.effectIn)
         }, "shown.bs.dropdown": function () {
            var e = o(this);
            e.effectIn && e.effectOut && n(e, function () {
            })
         }, "hide.bs.dropdown": function (e) {
            var t = o(this);
            t.effectOut && (e.preventDefault(), i(t, t.effectOut), n(t, function () {
               t.dropdown.removeClass("open")
            }))
         }
      }), $(".lockme").click(function (e) {
         e.preventDefault(), $("#lockscreen").modal(), $("#yesilock").click(function () {
            window.open("pages-lock.html", "_self"), $("#lockscreen").modal("hide")
         })
      }), $(".goaway").click(function (e) {
         e.preventDefault(), $("#signout").modal(), $("#yesigo").click(function () {
            window.open("pages-login.html", "_self"), $("#signout").modal("hide")
         })
      }), $(document).delegate('*[data-toggle="lightbox"]', "click", function (e) {
         return e.preventDefault(), $(this).ekkoLightbox({ always_show_close: !0 })
      }), $(document).on("change", ".btn-file :file", function () {
         var e = $(this), t = e.get(0).files ? e.get(0).files.length : 1, a = e.val().replace(/\\/g, "/").replace(/[\w\W]*\//, "");
         e.trigger("fileselect", [t, a])
      }), $(".btn-file :file").on("fileselect", function (e, t, a) {
         var o = $(this).parents(".input-group").find(":text"), i = t > 1 ? t + " files selected" : a;
         o.length ? o.val(i) : i && alert(i)
      }), $(".next").on("click", function () {
         var e = $(this).data("currentBlock"), t = $(this).data("nextBlock");
         t > e && !1 === $("#basic-wizard").parsley().validate("block" + e) || ($(".block" + e).removeClass("show").addClass("hidden"), $(".block" + t).removeClass("hidden").addClass("show"))
      }), $("#rootwizard-pills").length && $("#rootwizard-pills").bootstrapWizard({
         onTabShow: function (e, t, a) {
            var o = t.find("li").length, i = a + 1, n = i / o * 100;
            $("#rootwizard-pills").find("#rootwizard-pills-progress").css({ width: n + "%" })
         }
      }), $("#rootwizard-navs").length && $("#rootwizard-navs").bootstrapWizard({
         onTabShow: function (e, t, a) {
            var o = t.find("li").length, i = a + 1, n = i / o * 100;
            $("#rootwizard-navs").find("#progressbar-navs").css({ width: n + "%" })
         }
      }), $("#rootwizard").length && $("#rootwizard").bootstrapWizard({
         onTabShow: function (e, t, a) {
            var o = t.find("li").length, i = a + 1, n = i / o * 100;
            $("#rootwizard").find("#progressbar").css({ width: n + "%" }), $("#rootwizard").find(".last").toggle(i >= o), $("#rootwizard").find(".next").toggle(o > i)
         }
      }), $("#rootwizard-2").length && $("#rootwizard-2").bootstrapWizard({
         onTabShow: function (e, t, a) {
            var o = t.find("li").length, i = a + 1;
            $("#rootwizard-2").find(".last").toggle(i >= o), $("#rootwizard-2").find(".next").toggle(o > i)
         }
      }), $("#rootwizard, #rootwizard-2").on("show.bs.tab", function (e) {
         var t = $(this), a = $("ul.nav", t), o = a.children().index($(e.target).parent()) + 1, i = a.children().index($(e.relatedTarget).parent()) + 1;
         if (o > i) {
            if (o - i > 1) return !1;
            if (!$("form", t).parsley().validate("tab-" + i)) return $(e.relatedTarget).parent().removeClass("validated-tab"), !1;
            $(e.relatedTarget).parent().addClass("validated-tab")
         }
      }), $("#summernote").length && $("#summernote").summernote({ height: 300 }), $("#wysihtml5").length && $("#wysihtml5").wysihtml5({
         toolbar: {
            fa: !0,
            size: "sm"
         }
      }), $("#wysihtml5-inbox-modal").length && $("#wysihtml5-inbox-modal").wysihtml5({
         toolbar: {
            "font-styles": !1,
            fa: !0,
            size: "sm"
         }
      }), $("#knob1").length && $("#knob1").knob({ height: "130" }), $("#knob2").length && $("#knob2").knob({
         height: "130",
         font: "Montserrat, Roboto, sans-serif"
      }), $("#knob3").length && $("#knob3").knob({
         height: "130",
         font: "Montserrat, Roboto, sans-serif"
      }), $("#knob4").length && $("#knob4").knob({
         height: "130",
         font: "Montserrat, Roboto, sans-serif"
      }), $("#knob5").length && $("#knob5").knob({
         height: "130",
         font: "Montserrat, Roboto, sans-serif"
      }), $("#knob6").length && $("#knob6").knob({
         height: "130",
         font: "Montserrat, Roboto, sans-serif"
      }), $("#s,#s3,#s4,#s5,#s6").length && $("#s,#s3,#s4,#s5,#s6").stepper(), $("#s2").length && $("#s2").stepper({
         wheel_step: 1,
         arrow_step: .2
      }), $("#userbar-calendar").length && $("#userbar-calendar").datepicker({
         dateFormat: "dd.mm.yy",
         prevText: '<i class="fa fa-chevron-right"></i>',
         nextText: '<i class="fa fa-chevron-left"></i>'
      }), $("#widget-calendar").length && $("#widget-calendar").datepicker({
         dateFormat: "dd.mm.yy",
         prevText: '<i class="fa fa-chevron-right"></i>',
         nextText: '<i class="fa fa-chevron-left"></i>'
      }), $("#datepicker-1").length && $("#datepicker-1").datepicker({
         prevText: '<i class="fa fa-chevron-right"></i>',
         nextText: '<i class="fa fa-chevron-left"></i>'
      }), $("#datepicker-2").length && $("#datepicker-2").datepicker({
         prevText: '<i class="fa fa-chevron-right"></i>',
         nextText: '<i class="fa fa-chevron-left"></i>',
         changeYear: !0
      }), $("#datepicker-3").length && $("#datepicker-3").datepicker({
         prevText: '<i class="fa fa-chevron-right"></i>',
         nextText: '<i class="fa fa-chevron-left"></i>'
      }), $("#datepicker-3").length && $("#datepicker-4").datepicker({
         prevText: '<i class="fa fa-chevron-right"></i>',
         nextText: '<i class="fa fa-chevron-left"></i>',
         changeMonth: !0,
         changeYear: !0
      }), $("#from").length && $("#from").datepicker({
         prevText: '<i class="fa fa-chevron-right"></i>',
         nextText: '<i class="fa fa-chevron-left"></i>',
         defaultDate: "+1w",
         changeMonth: !1,
         numberOfMonths: 2,
         onClose: function (e) {
            $("#to").datepicker("option", "minDate", e)
         }
      }), $("#to").length && $("#to").datepicker({
         prevText: '<i class="fa fa-chevron-left"></i>',
         nextText: '<i class="fa fa-chevron-right"></i>',
         defaultDate: "+1w",
         changeMonth: !0,
         numberOfMonths: 2,
         onClose: function (e) {
            $("#from").datepicker("option", "maxDate", e)
         }
      }), $("#datetimepicker-1").length && $("#datetimepicker-1").datetimepicker({
         prevText: '<i class="fa fa-chevron-left"></i>',
         nextText: '<i class="fa chevron-right"></i>'
      }), $("#datetimepicker-2").length && $("#datetimepicker-2").timepicker(), $("#datetimepicker-3").length && $("#datetimepicker-3").datetimepicker({
         prevText: '<i class="fa fa-chevron-left"></i>',
         nextText: '<i class="fa fa-chevron-right"></i>',
         timeFormat: "HH:mm z",
         timezone: "MT",
         timezoneList: [{ value: "ET", label: "Eastern" }, { value: "CT", label: "Central" }, {
            value: "MT",
            label: "Mountain"
         }, { value: "PT", label: "Pacific" }]
      }), $("#datetimepicker-4").length && $("#datetimepicker-4").timepicker({
         prevText: '<i class="fa chevron-left"></i>',
         nextText: '<i class="fa chevron-right"></i>',
         timeFormat: "HH:mm:ss",
         stepHour: 2,
         stepMinute: 10,
         stepSecond: 10
      }), $("#datetimepicker-5").length && $("#datetimepicker-5").datetimepicker({
         altField: "#datetimepicker-5-alt",
         prevText: '<i class="fa fa-chevron-left"></i>',
         nextText: '<i class="fa fa-chevron-right"></i>'
      }), $("#month-picker-1").length && $("#month-picker-1").monthpicker({
         changeYear: !1,
         stepYears: 1,
         prevText: '<i class="fa fa-angle-left"></i>',
         nextText: '<i class="fa fa-angle-right"></i>',
         showButtonPanel: !0
      }), $("#month-picker-2").length && $("#month-picker-2").monthpicker({
         changeYear: !0,
         stepYears: 1,
         prevText: '<i class="fa fa-angle-left"></i>',
         nextText: '<i class="fa fa-angle-right"></i>',
         showButtonPanel: !0
      }), $.minicolors = {
         defaults: {
            animationSpeed: 50,
            animationEasing: "swing",
            change: null,
            changeDelay: 0,
            control: "hue",
            defaultValue: "",
            hide: null,
            hideSpeed: 100,
            inline: !1,
            letterCase: "lowercase",
            opacity: !1,
            position: "bottom left",
            show: null,
            showSpeed: 100,
            theme: "bootstrap"
         }
      }, $("#hue-demo").length && $("#hue-demo").minicolors(), $("#saturation-demo").length && $("#saturation-demo").minicolors({ control: "saturation" }), $("#brightness-demo").length && $("#brightness-demo").minicolors({ control: "brightness" }), $("#wheel-demo").length && $("#wheel-demo").minicolors({ control: "wheel" }), $("#opacity").length && $("#opacity").minicolors({
         opacity: ".6",
         format: "rgb"
      }), $("#letter-case").length && $("#letter-case").minicolors({ letterCase: "uppercase" }), $("#ui-slider1").length && $("#ui-slider1").slider({
         min: 0,
         max: 500,
         slide: function (e, t) {
            $("#ui-slider1-value").text(t.value)
         }
      }), $("#ui-slider2").length && $("#ui-slider2").slider({
         min: 0,
         max: 500,
         range: !0,
         values: [75, 300],
         slide: function (e, t) {
            $("#ui-slider2-value1").text(t.values[0]), $("#ui-slider2-value2").text(t.values[1])
         }
      }), $("#ui-slider3").length && $("#ui-slider3").slider({
         min: 0,
         max: 500,
         step: 100,
         slide: function (e, t) {
            $("#ui-slider3-value").text(t.value)
         }
      }), $("#shop-slider").length && ($("#shop-slider").slider({
         range: !0,
         min: 5,
         max: 500,
         values: [10, 100],
         slide: function (e, t) {
            $("#amount").val(t.values[0] + " ØªÙˆÙ…Ø§Ù† " + t.values[1] + "  ØªÙˆÙ…Ø§Ù† ")
         }
      }), $("#amount").val(" Ø§Ø² " + $("#shop-slider").slider("values", 0) + " -  ØªØ§ " + $("#shop-slider").slider("values", 1))), $("#list").click(function (e) {
         e.preventDefault(), $("#products .item").addClass("list-group-item")
      }), $("#grid").click(function (e) {
         e.preventDefault(), $("#products .item").removeClass("list-group-item"), $("#products .item").addClass("grid-group-item")
      }), $(".alert-autocloseable-success").hide(), $(".alert-autocloseable-warning").hide(), $(".alert-autocloseable-danger").hide(), $(".alert-autocloseable-info").hide(), $("#autoclosable-btn-success").click(function () {
         $("#autoclosable-btn-success").prop("disabled", !0), $(".alert-autocloseable-success").show(), $(".alert-autocloseable-success").delay(5e3).fadeOut("slow", function () {
            $("#autoclosable-btn-success").prop("disabled", !1)
         })
      }), $("#autoclosable-btn-warning").click(function () {
         $("#autoclosable-btn-warning").prop("disabled", !0), $(".alert-autocloseable-warning").show(), $(".alert-autocloseable-warning").delay(3e3).fadeOut("slow", function () {
            $("#autoclosable-btn-warning").prop("disabled", !1)
         })
      }), $("#autoclosable-btn-danger").click(function () {
         $("#autoclosable-btn-danger").prop("disabled", !0), $(".alert-autocloseable-danger").show(), $(".alert-autocloseable-danger").delay(5e3).fadeOut("slow", function () {
            $("#autoclosable-btn-danger").prop("disabled", !1)
         })
      }), $("#autoclosable-btn-info").click(function () {
         $("#autoclosable-btn-info").prop("disabled", !0), $(".alert-autocloseable-info").show(), $(".alert-autocloseable-info").delay(6e3).fadeOut("slow", function () {
            $("#autoclosable-btn-info").prop("disabled", !1)
         })
      }), $("#nestable").length && $("#nestable").nestable({ group: 1 }), $("#nestable2").length && $("#nestable2").nestable({ group: 1 }), $("#nestable-menu").length && $("#nestable-menu").on("click", function (e) {
         var t = $(e.target), a = t.data("action");
         "expand-all" === a && $(".dd").nestable("expandAll"), "collapse-all" === a && $(".dd").nestable("collapseAll")
      }), $("#nestable3").length && $("#nestable3").nestable(), $("#nestable4").length && $("#nestable4").nestable(), $(".quotes-marquee").length && $(".quotes-marquee").marquee({
         duration: 15e3,
         gap: 50,
         delayBeforeStart: 0,
         direction: "left",
         duplicated: !0,
         pauseOnHover: !0
      }), $("#gallery").length && $("#gallery").imagesLoaded(function () {
         var e = $("#gallery").isotope({ masonry: {} });
         $("#filters").on("click", "button", function () {
            var t = $(this).attr("data-filter");
            e.isotope({ filter: t })
         })
      }), document.getElementById("displayMoment")) {
         var l = moment(), s = document.getElementById("displayMoment");
         s.innerHTML = l.format("<p>D</p><p>MMMM</p> <p>dddd</p>")
      }
      $(".chat-toggler").click(function (e) {
         $(".chat-message-form").toggleClass("chat-message-form-toggle", "fast"), $(".chat-users-menu").toggleClass("chatbar-toggle", "fast"), $(".chat-messages").toggleClass("chat-messages-toggle", "fast"), $(".chat-header").toggleClass("chat-header-toggle", "fast")
      }), $(".chat-overlay-button").click(function (e) {
         e.preventDefault(), $(".chat-overlay").toggleClass("chat-closed chat-opened", "fast")
      }), $("#b1").bind("click mouseover", function () {
         $(".chat-app .chat-messages").css("background-image", 'url("images/backgrounds/1.png")')
      }), $("#b2").bind("click mouseover", function () {
         $(".chat-app .chat-messages").css("background-image", 'url("images/backgrounds/2.png")')
      }), $("#b3").bind("click mouseover", function () {
         $(".chat-app .chat-messages").css("background-image", 'url("images/backgrounds/3.png")')
      }), $("#b4").bind("click mouseover", function () {
         $(".chat-app .chat-messages").css("background-image", 'url("images/backgrounds/4.png")')
      }), $("#b5").bind("click mouseover", function () {
         $(".chat-app .chat-messages").css("background-image", 'url("images/backgrounds/5.png")')
      }), $(".piechart-1").length && $(".piechart-1").sparkline("html", {
         disableHiddenCheck: !0,
         defaultPixelsPerValue: 1,
         type: "line",
         width: "125",
         height: "40",
         lineColor: "#fff",
         fillColor: "#5fb6c7",
         lineWidth: 3,
         spotColor: "#ffffff",
         minSpotColor: "#000",
         maxSpotColor: "#000",
         highlightSpotColor: "#a6c172",
         spotRadius: 5,
         drawNormalOnTop: !1
      }), $(".piechart-2").length && $(".piechart-2").sparkline("html", {
         disableHiddenCheck: !0,
         type: "line",
         width: "125",
         height: "40",
         lineColor: "#9ab946",
         fillColor: !1,
         lineWidth: 5,
         spotColor: "#ffffff",
         minSpotColor: "#000",
         maxSpotColor: "#000",
         highlightSpotColor: "#a6c172",
         spotRadius: 3,
         drawNormalOnTop: !1
      }), $(".piechart-3").length && $(".piechart-3").sparkline("html", {
         disableHiddenCheck: !0,
         defaultPixelsPerValue: 1,
         type: "line",
         width: "125",
         height: "40",
         lineColor: "#fff",
         fillColor: "#5fb6c7",
         lineWidth: 5,
         spotColor: "#ffffff",
         minSpotColor: "#000",
         maxSpotColor: "#000",
         highlightSpotColor: "#a6c172",
         spotRadius: 3,
         drawNormalOnTop: !1
      }), $(".piechart-4").length && $(".piechart-4").sparkline("html", {
         disableHiddenCheck: !0,
         defaultPixelsPerValue: 1,
         type: "line",
         width: "125",
         height: "40",
         lineColor: "#fff",
         fillColor: "#5fb6c7",
         lineWidth: 5,
         spotColor: "#ffffff",
         minSpotColor: "#000",
         maxSpotColor: "#000",
         highlightSpotColor: "#a6c172",
         spotRadius: 3,
         drawNormalOnTop: !1
      }), $(".piechart-5").length && $(".piechart-5").sparkline("html", {
         disableHiddenCheck: !0,
         type: "pie",
         width: "40",
         height: "40",
         sliceColors: ["#fff", "#9ab946", "#000", "#109618", "#a4b7bf", "#506066", "#667880", "#8ca0a8"]
      }), $(".piechart-6").length && $(".piechart-6").sparkline("html", {
         disableHiddenCheck: !0,
         type: "pie",
         width: "40",
         height: "40",
         sliceColors: ["#fff", "#9ab946", "#f87aa0", "#109618", "#a4b7bf", "#506066", "#667880", "#8ca0a8"]
      }), $(function (e) {
         $(".transition-timer-carousel").on("slide.bs.carousel", function (e) {
            $(".transition-timer-carousel-progress-bar", this).removeClass("animate").css("width", "0%")
         }).on("slid.bs.carousel", function (e) {
            $(".transition-timer-carousel-progress-bar", this).addClass("animate").css("width", "100%")
         }), $(".transition-timer-carousel-progress-bar", ".transition-timer-carousel").css("width", "100%")
      }), $("#custom_carousel").on("slide.bs.carousel", function (e) {
         $("#custom_carousel .controls li.active").removeClass("active"), $("#custom_carousel .controls li:eq(" + $(e.relatedTarget).index() + ")").addClass("active")
      })
   })
}(jQuery);