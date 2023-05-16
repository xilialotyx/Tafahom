$(document).ready(function () {


    /* initialize the external events
         -----------------------------------------------------------------*/
    function ini_events(ele) {
        ele.each(function () {

            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim($(this).text()) // use the element's text as the event title
            };

            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 1070,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });

        });
    }

    ini_events($('#external-events div.external-event'));

    /* initialize the calendar
     -----------------------------------------------------------------*/
    //Date for the calendar events (dummy data)
    var date = new Date(),
        d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();


    setTimeout(function () {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },

            firstDay: 1,
            aspectRatio: 1.9,
            buttonText: {
                today: 'امروز',
                month: 'ماه',
                week: 'هفته',
                day: 'روز'
            },
            //Random default events
            events: [
                {
                    title: 'همه هفته',
                    start: new Date(y, m, 1),
                    backgroundColor: "#f56954" //red
            },
                {
                    title: 'پانچ',
                    start: new Date(y, m, 1),
                    backgroundColor: "#00c0ef" //Info (aqua)
            },
                {
                    title: 'مدت طولانی',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2),
                    backgroundColor: "#f39c12" //yellow
            },
                {
                    title: 'ملاقات',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                    backgroundColor: "#0073b7" //Blue
            },
                {
                    title: 'ناهار',
                    start: new Date(y, m, d, 11, 0),
                    end: new Date(y, m, d, 12, 0),
                    allDay: false,
                    backgroundColor: "#00c0ef" //Info (aqua)
            },
                {
                    title: 'خواب راحت',
                    start: new Date(y, m, d + 2, 12, 22),
                    end: new Date(y, m, d + 4, 23, 22),
                    backgroundColor: "#00c0ef" //Info (aqua)
            },

                {
                    title: 'جشن تولد',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false,
                    backgroundColor: "#00a65a" //Success (green)
            },
                {
                    title: 'بازی',
                    start: new Date(y, m, d + 5, 19, 0),
                    end: new Date(y, m, d + 5, 22, 30),
                    allDay: false,
                    backgroundColor: "#00a65a" //Success (green)
            },
                {
                    title: 'تمیز کاری',
                    start: new Date(y, m, d + 5, 22, 0),
                    end: new Date(y, m, d + 5, 23, 30),
                    allDay: false,
                    backgroundColor: "#f56954" //Success (green)
            },
                {
                    title: 'باشگاه بدن سازی',
                    start: new Date(y, m, 22, 19, 0),
                    end: new Date(y, m, 25, 19, 30),
                    backgroundColor: "#00c0ef"
            },
                {
                    title: 'بی خیالی',
                    start: new Date(y, m, 26),
                    end: new Date(y, m, 27),
                    backgroundColor: "#3c8dbc"
            },
                {
                    title: 'دیدن فیلم گودزیلا',
                    start: new Date(y, m, 26),
                    end: new Date(y, m, 27),
                    backgroundColor: "#00a65a"
            },
                {
                    title: 'سرکشی به گوگل',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/',
                    backgroundColor: "#3c8dbc" //Primary (light-blue)
            }
        ],
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            drop: function (date, allDay) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');

                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;
                copiedEventObject.backgroundColor = $(this).css("background-color");
                copiedEventObject.borderColor = $(this).css("border-color");

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }

            }
        });

        /* ADDING EVENTS */
        var currColor = "#3c8dbc", //Blue by default
            //Color chooser button
            colorChooser = $("#color-chooser-btn");
        $("#color-chooser > li > a").click(function (e) {
            e.preventDefault();
            //Save color
            currColor = $(this).css("color");
            //Add color effect to button
            $('#add-new-event').css({
                "background-color": currColor,
                "border-color": currColor
            });
        });
        $("#add-new-event").click(function (e) {
            e.preventDefault();
            //Get value and make sure it is not null
            var val = $("#new-event").val();
            if (val.length === 0) {
                return;
            }

            //Create events
            var event = $("<div />");
            event.css({
                "background-color": currColor,
                "border-color": currColor,
                "color": "#fff"
            }).addClass("external-event");
            event.html(val);
            $('#external-events').prepend(event);

            //Add draggable funtionality
            ini_events(event);

            //Remove event from text input
            $("#new-event").val("");
        });
    });
});
