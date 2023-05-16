// ========================================================================
//	FlotChart (js\vendors\flotchart)
// ========================================================================

// Example #1 - Chart With Graph Controls
// charts-flot.html

$(function () {

   var d1 = [];
   var i;
   var plot;
   for (i = 0; i <= 20; i += 1) {
      d1.push([i, parseInt(Math.random() * 50)]);
   }

   var d2 = [];
   for (i = 0; i <= 20; i += 1) {
      d2.push([i, parseInt(Math.random() * 50)]);
   }

   var d3 = [];
   for (i = 0; i <= 20; i += 1) {
      d3.push([i, parseInt(Math.random() * 50)]);
   }

   var bars, lines;
   bars = false;
   lines = true;


   function plotWithOptions() {
      if ($("#placeholder").length) {
         $.plot("#placeholder", [d1, d2, d3], {
            colors: ["#f85050", "#9ab946", "#01b5a1"],

            grid: {
               hoverable: true,
               clickable: false,
               borderWidth: 0,
               backgroundColor: "transparent"
            },

            yaxis: {
               font: {
                  color: '#9099aa',
                  family: 'Montserrat, sans-serif',
                  size: 11
               },
               tickColor: "#9099aa",
               ticks: 10
            },
            xaxis: {
               show: false
            },

            series: {
               lines: {
                  show: lines,
                  lineWidth: 0,
                  color: '#fff',
                  fill: 1
               },

               bars: {
                  show: bars,
                  barWidth: 0.5,
                  fill: 1,
                  lineWidth: 0
               }
            }
         });
      }
   }
   plotWithOptions();

   $(".btn-group button").click(function (e) {
      e.preventDefault();
      bars = $(this).text().indexOf("Bars") !== -1;
      lines = $(this).text().indexOf("Lines") !== -1;
      plotWithOptions();
   });
});


// Example #2 - Stacked Graph
// charts-flot.html

if ($("#placeholder2").length) {

   var dates2 = [
      ["Jan", 56],
      ["Feb", 67],
      ["Mar", 42],
      ["Apr", 87],
      ["May", 53],
      ["June", 38],
      ["July", 49],
      ["Aug", 32],
      ["Sep", 33],
      ["Oct", 34],
      ["Nov", 41],
      ["Dec", 14]
   ];

   var dates1 = [
      ["Jan", 189],
      ["Feb", 244],
      ["Mar", 293],
      ["Apr", 192],
      ["May", 265],
      ["June", 167],
      ["July", 231],
      ["Aug", 169],
      ["Sep", 163],
      ["Oct", 168],
      ["Nov", 152],
      ["Dec", 52]
   ];


   $.plot("#placeholder2", [{
      data: dates1,
      label: "Earnings"
   }, {
      data: dates2,
      label: "Buys"
   }], {
      colors: ["#0099cc", "#fff"],
      grid: {
         hoverable: true,
         clickable: true,
         borderWidth: 0
      },
      legend: {
         labelBoxBorderColor: false
      },
      series: {
         bars: {
            show: true,
            barWidth: 0.9,
            fill: 1,
            lineWidth: 0,
            align: "center"
         }
      },
      xaxis: {
         font: {
            color: '#fff',
            family: 'Montserrat, sans-serif',
            size: 11
         },
         mode: "categories",
         tickLength: 0
      },
      yaxis: {
         font: {
            color: '#fff',
            family: 'Montserrat, sans-serif',
            size: 11,
            position: 'right'
         },
         ticks: 5
      }
   });

}

// Example #3 - Line Chart With Tooltip
// charts-flot.html
// helper for returning the weekends in a period

function weekendAreas(axes) {

   var markings = [],
      d = new Date(axes.xaxis.min);

   // go to the first Saturday

   d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7));
   d.setUTCSeconds(0);
   d.setUTCMinutes(0);
   d.setUTCHours(0);

   var i = d.getTime();

   // when we don't set yaxis, the rectangle automatically
   // extends to infinity upwards and downwards

   do {
      markings.push({
         xaxis: {
            from: i,
            to: i + 2 * 24 * 60 * 60 * 1000
         }
      });
      i += 7 * 24 * 60 * 60 * 1000;
   } while (i < axes.xaxis.max);

   return markings;
}

if ($("#placeholder3").length) {

   var d = [
      [1196463600000, 0],
      [1196550000000, 0],
      [1196636400000, 0],
      [1196722800000, 77],
      [1196809200000, 3636],
      [1196895600000, 3575],
      [1196982000000, 2736],
      [1197068400000, 1086],
      [1197154800000, 676],
      [1197241200000, 1205],
      [1197327600000, 906],
      [1197414000000, 710],
      [1197500400000, 639],
      [1197586800000, 540],
      [1197673200000, 435],
      [1197759600000, 301],
      [1197846000000, 575],
      [1197932400000, 481],
      [1198018800000, 591],
      [1198105200000, 608],
      [1198191600000, 459],
      [1198278000000, 234],
      [1198364400000, 1352],
      [1198450800000, 686],
      [1198537200000, 279],
      [1198623600000, 449],
      [1198710000000, 468],
      [1198796400000, 392],
      [1198882800000, 282],
      [1198969200000, 208],
      [1199055600000, 229],
      [1199142000000, 177],
      [1199228400000, 374],
      [1199314800000, 436],
      [1199401200000, 404],
      [1199487600000, 253],
      [1199574000000, 218],
      [1199660400000, 476],
      [1199746800000, 462],
      [1199833200000, 448],
      [1199919600000, 442],
      [1200006000000, 403],
      [1200092400000, 204],
      [1200178800000, 194],
      [1200265200000, 327],
      [1200351600000, 374],
      [1200438000000, 507],
      [1200524400000, 546],
      [1200610800000, 482],
      [1200697200000, 283],
      [1200783600000, 221],
      [1200870000000, 483],
      [1200956400000, 523],
      [1201042800000, 528],
      [1201129200000, 483],
      [1201215600000, 452],
      [1201302000000, 270],
      [1201388400000, 1222],
      [1201474800000, 1439],
      [1201561200000, 2559],
      [1201647600000, 2521],
      [1201734000000, 2477],
      [1201820400000, 442],
      [1201906800000, 252],
      [1201993200000, 236],
      [1202079600000, 525],
      [1202166000000, 477],
      [1202252400000, 386],
      [1202338800000, 409],
      [1202425200000, 408],
      [1202511600000, 237],
      [1202598000000, 193],
      [1202684400000, 357],
      [1202770800000, 414],
      [1202857200000, 393],
      [1202943600000, 353],
      [1203030000000, 364],
      [1203116400000, 215],
      [1203202800000, 214],
      [1203289200000, 356],
      [1203375600000, 1399],
      [1203462000000, 334],
      [1203548400000, 348],
      [1203634800000, 243],
      [1203721200000, 126],
      [1203807600000, 157],
      [1203894000000, 288]
   ];

   // first correct the timestamps - they are recorded as the daily
   // midnights in UTC+0100, but Flot always displays dates in UTC
   // so we have to add one hour to hit the midnights in the plot

   for (i = 0; i < d.length; ++i) {
      d[i][0] += 60 * 60 * 1000;
   }

   var options3 = {
      grid: {
         hoverable: true,
         markingsColor: "rgba(0,0,0,0.1)",
         clickable: true,
         autoHighlight: true,
         borderWidth: 0,
         backgroundColor: "transparent",
         markings: weekendAreas
      },
      xaxis: {
         mode: "time",
         tickLength: 5,
         font: {
            color: '#fff',
            family: 'Montserrat, sans-serif',
            size: 11
         }
      },
      yaxis: {
         font: {
            color: '#fff',
            family: 'Montserrat, sans-serif',
            size: 11
         },
         tickColor: "rgba(0,0,0,0.1)",
         ticks: 10
      },
      points: {
         radius: 3,
         show: true
      },
      shadowSize: 0,
      lines: {
         show: true,
         fill: true,
         lineWidth: 5
      },
      colors: ["#2c3036"],

      tooltip: true,
      tooltipOpts: {
         content: "$%y.2",
         shifts: {
            x: -10,
            y: 25
         }
      }

   };
   plot = $.plot("#placeholder3", [d], options3);
}

// Example #4 - Very Slow Live Bar Example
// widgets-vol-2.html

var data = [],
   series;

function getRandomData() {

   if (data.length) {
      data = data.slice(1);
   }

   while (data.length < maximum) {
      var previous = data.length ? data[data.length - 1] : 70;
      var y = previous + Math.random() * 10 - 5;
      data.push(y < 0 ? 0 : y > 100 ? 100 : y);
   }

   // zip the generated y values with the x values

   var res = [];
   for (var i = 1; i < data.length; ++i) {
      res.push([i, data[i]]);
   }

   return res;
}


if ($("#placeholder4").length) {
   var container4 = $("#placeholder4");

   // Determine how many data points to keep based on the placeholder's initial size;
   // this gives us a nice high-res plot while avoiding more than one point per pixel.

   var maximum = 8; // container.outerWidth() / 2 || 300;
   data = [];
   var series4;
   //

   series4 = [{
      data: getRandomData(),
      color: '#f2e291',
      bars: {
         show: true,
         fill: 1,
         barWidth: .9,
         align: 'right',
         horizontal: false
      }
   }];

   //

   var plot4 = $.plot(container4, series4, {

      axisLabelUseCanvas: false,
      grid: {
         borderWidth: 0,
         hoverable: true,
         mouseActiveRadius: 50,
         markings: function (axes) {
            var markings = [];
            var xaxis = axes.xaxis;
            for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 1) {
               markings.push({
                  xaxis: {
                     from: x,
                     to: x + xaxis.tickSize
                  }
               });
            }
            return markings;
         }
      },
      xaxis: {
         show: false,
         min: 0,
         max: 8,
      },

      yaxis: {
         color: 'rgba(144, 153, 170, .3)',
         font: {
            color: '#9099aa',
            family: 'Montserrat, sans-serif',
            size: 11
         },
         min: 0,
         max: 100,
         ticks: 10
      },
      tooltip: true,
      tooltipOpts: {
         content: "Unit #%x | Loaded %y.2%"
      }
   });

   setInterval(function updateRandom() {
      series4[0].data = getRandomData();
      plot4.setData(series4);
      plot4.draw();
   }, 300);
}

// Example #5 Donut
// charts-flot.html

window.initFloatchartDemo = function () {
   series = Math.floor(Math.random() * 6) + 3;

   for (i = 0; i < series; i++) {
      data[i] = {
         label: "Series" + (i + 1),
         data: Math.floor(Math.random() * 100) + 1
      };
   }
   $.plot('#placeholder5', data, {
      colors: ["#886caf", "#2c3036", "#f85050", "#5fb6c7", "#01b5a1", "#bc5b34", "#0099cc", "#f0ad4e", "#f2d750", "#d24d33", "#f0ad4e"],
      legend: {
         labelBoxBorderColor: false
      },

      series: {
         pie: {
            show: true,
            innerRadius: 0.4,
            stroke: {
               width: 0
            }
         }
      },
      grid: {
         hoverable: true,
         clickable: true
      }

   });
};
if ($("#placeholder5").length) {
   window.initFloatchartDemo();
}

// Example #6 - Pie Chart
// charts-flot.html


var series6 = Math.floor(Math.random() * 6) + 3;

window.initFloatchartDemo2 = function () {
   series6 = Math.floor(Math.random() * 6) + 3;
   for (i = 0; i < series6; i++) {
      data[i] = {
         label: "Series" + (i + 1),
         data: Math.floor(Math.random() * 100) + 1
      };
   }
   $.plot('#placeholder6', data, {
      colors: ["#886caf", "#2c3036", "#f85050", "#5fb6c7", "#01b5a1", "#bc5b34", "#0099cc", "#f0ad4e", "#f2d750", "#d24d33", "#f0ad4e"],
      series: {
         pie: {
            show: true,
            stroke: {
               width: 0
            }
         }
      },
      grid: {
         hoverable: true,
         clickable: true
      },
      legend: {
         show: true,
         labelBoxBorderColor: false,
         backgroundOpacity: 0
      }
   });
};


if ($("#placeholder6").length) {

   // We use an inline data source in the example, usually data would
   // be fetched from a server

   var data = [],
      totalPoints = 300;

   function getRandomData() {

      if (data.length > 0)
         data = data.slice(1);

      // Do a random walk

      while (data.length < totalPoints) {
         var prev = data.length > 0 ? data[data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;

         if (y < 0) {
            y = 0;
         } else if (y > 100) {
            y = 100;
         }

         data.push(y);
      }

      // Zip the generated y values with the x values

      var res = [];
      for (var i = 0; i < data.length; ++i) {
         res.push([i, data[i]])
      }

      return res;
   }

   // Set up the control widget

   var updateInterval = 30;
   $("#updateInterval").val(updateInterval).change(function () {
      var v = $(this).val();
      if (v && !isNaN(+v)) {
         updateInterval = +v;
         if (updateInterval < 1) {
            updateInterval = 1;
         } else if (updateInterval > 2000) {
            updateInterval = 2000;
         }
         $(this).val("" + updateInterval);
      }
   });

   var plot = $.plot("#placeholder6", [getRandomData()], {


      grid: {
         borderWidth: 0,
         hoverable: true,
         clickable: false,
         backgroundColor: "transparent"
      },
      series: {
         shadowSize: 0,
         lines: {
            show: true,
            lineWidth: 6
         },
      },
      colors: ['#886caf'],
      yaxis: {
         color: 'rgba(144, 153, 170, .3)',
         min: 0,
         max: 100,
         ticks: 20
      },
      xaxis: {
         show: false,
      }
   });

   function update() {
      plot.setData([getRandomData()]);
      // Since the axes don't change, we don't need to call plot.setupGrid()
      plot.draw();
      setTimeout(update, updateInterval);
   }
   update();
   $("#placeholder6").find(".flot-text").hide(); //Hiding Labels
}


// Example #7 - Live Chart
// widgets-vol-2.html


if ($("#placeholder7").length) {

   function getRandomData7() {
      var res = [];
      if (data.length > 0)
         data = data.slice(1);

      // Do a random walk

      while (data.length < totalPoints) {
         var previous = data.length ? data[data.length - 1] : 50;
         var y = previous + Math.random() * 10 - 5;
         data.push(y < 0 ? 0 : y > 100 ? 100 : y);
      }
      // Zip the generated y values with the x values

      for (var i = 0; i < data.length; ++i) {
         res.push([i, data[i]]);
      }
      return res;
   }

   function getRandomData72() {
      var res = [];
      if (data.length > 0)
         data = data.slice(1);

      // Do a random walk

      while (data.length < totalPoints) {
         var previous = data.length ? data[data.length - 1] : 50;
         var y = previous + Math.random() * 10 - 5;
         data.push(y < 0 ? 0 : y > 100 ? 100 : y);
      }
      // Zip the generated y values with the x values
      for (var i = 0; i < data.length; ++i) {
         res.push([i, data[i] / 2]);
      }
      return res;
   }

   data = [];
   var totalPoints = 50;
   var updateInterval = 100;
   var container7 = $("#placeholder7");

   // initialize a plot with to series of data
   var plot7 = $.plot(container7, [getRandomData7(), getRandomData72()], {

      grid: {
         borderWidth: 0,
         hoverable: true,
         clickable: false,
         backgroundColor: "transparent"
      },

      series: {
         points: {
            show: false
         },
         lines: {
            show: true,
            fill: true,
            lineWidth: 7,
            fillColor: {
               colors: [{
                  opacity: .8
               }, {
                  opacity: .8
               }]
            }
         },
         tickFormatter: function () {
            return "";
         },
         shadowSize: 0 // Drawing is faster without shadows
      },
      yaxis: {
         min: 0,
         max: 100,
         ticks: 20,
         color: 'rgba(144, 153, 170, .3)'
      },

      xaxis: {
         ticks: 20,
         color: 'rgba(144, 153, 170, .3)'
      },

      colors: ["#a69958", "#db7093"],
   });


   // flot controls logic -------------------------------------------------------------------------------------

   /** variable to hold plot's updating interval identifier */
   var timer;

   /** plot's current speed */
   var speed = 0;

   /** flag to indicate flot state */
   var isRunning = false;

   /** a handler of click event on start-stop button */
   $('#start-stop-flot').off('click').on('click', function () {
      var $this = $(this);
      if ($this.is('.active')) {
         $this.html('Start <i class="fa fa-play"></i>');
         flotController.stopFlot(timer);
      } else {
         $this.html('Pause <i class="fa fa-pause"></i>');
         timer = flotController.startFlot(plot7);
      }
      $this.toggleClass('active');
   });

   /** a handler of click event on accelerate button */
   $('#accelerate-flot').off('click').on('click', function () {

      // increment speed...
      speed++;

      // ... but take care about it to be not more than flotController.speeds - maximum available value
      speed %= flotController.speeds;

      $(this).text('Update Rate: ' + (speed + 1));

      // restart flot with new speed if it is running
      if (isRunning) {
         flotController.stopFlot(timer);
         timer = flotController.startFlot(plot7);
      }
   });

   /** this is an object to encapsulate flot controlling logic and data */
   var flotController = {

      /** number of speeds available */
      speeds: 4,

      /** method to start flot */
      startFlot: function (chart) {
         isRunning = true;
         return setInterval(function update7() {
            chart.setData([getRandomData7(), getRandomData72()]);
            chart.draw();

            // specify update interval depending on current speed
         }, (updateInterval / (speed + 1)));
      },

      /** method to stop flot */
      stopFlot: function (timer) {
         if (timer) {
            clearInterval(timer);
            isRunning = false;
         }
      }
   };

   // start flot
   timer = flotController.startFlot(plot7);
   $("#placeholder7").find(".flot-text").hide(); //Hiding Labels


   // ---------------------------------------------------------------------------------------------------------

}


// Example #8
// not used in that release

if ($("#placeholder8").length) {

   var googleplus = [
      [1, 3302],
      [2, 3516],
      [3, 3925],
      [4, 3134],
      [5, 3545],
      [6, 4434],
      [7, 4241],
      [8, 5211],
      [9, 4900],
      [10, 4601],
      [11, 5822],
      [12, 5233]
   ];

   var facebook = [
      [1, 4302],
      [2, 4516],
      [3, 4925],
      [4, 4134],
      [5, 4545],
      [6, 5434],
      [7, 5241],
      [8, 6211],
      [9, 5900],
      [10, 6601],
      [11, 6822],
      [12, 6233]
   ];
   var twitter = [
      [1, 1302],
      [2, 1944],
      [3, 1543],
      [4, 2016],
      [5, 1900],
      [6, 1511],
      [7, 2144],
      [8, 2655],
      [9, 2442],
      [10, 2445],
      [11, 2132],
      [12, 2598]
   ];

   var pinterest = [
      [1, 702],
      [2, 944],
      [3, 743],
      [4, 716],
      [5, 800],
      [6, 1011],
      [7, 1244],
      [8, 1155],
      [9, 1542],
      [10, 1545],
      [11, 1532],
      [12, 1598]
   ];

   var dribble = [
      [1, 102],
      [2, 244],
      [3, 143],
      [4, 216],
      [5, 100],
      [6, 211],
      [7, 444],
      [8, 455],
      [9, 142],
      [10, 245],
      [11, 232],
      [12, 198]
   ];

   var vkontakte = [
      [1, 2202],
      [2, 2716],
      [3, 3325],
      [4, 2834],
      [5, 2945],
      [6, 3434],
      [7, 3541],
      [8, 3211],
      [9, 4920],
      [10, 3601],
      [11, 4822],
      [12, 4233]
   ];


   $.plot($("#placeholder8"), [

      {
         data: googleplus,
         label: "Google Plus"
      },

      {
         data: facebook,
         label: "Facebook"
      },

      {
         data: twitter,
         label: "Twitter"
      }, {
         data: pinterest,
         label: "Pinterest"
      },

      {
         data: dribble,
         label: "Dribble"
      },
      {
         data: vkontakte,
         label: "VK"
      },
   ], {

      series: {
         lines: {
            show: true,
            lineWidth: 5,
            fill: true,
         },

         points: {
            show: true,
            fillColor: "#fff",
            lineWidth: 3,
            radius: 4
         },
         shadowSize: 0,
         stack: false
      },


      tooltip: true,
      tooltipOpts: {
         content: "%y Refs"
      },

      grid: {
         hoverable: true,
         clickable: true,
         borderWidth: 0
      },

      legend: {
         noColumns: 3,
         margin: -10,
         backgroundOpacity: 1,
         position: "nw"
      },


      colors: ["#226dad", "#55acee", "#cb2027", "#333", "#a0c3ff", "#597da3"],
      xaxis: {
         color: "rgba(0,0,0,.1)",
         ticks: [
            [1, "JAN"],
            [2, "FEB"],
            [3, "MAR"],
            [4, "APR"],
            [5, "MAY"],
            [6, "JUN"],
            [7, "JUL"],
            [8, "AUG"],
            [9, "SEP"],
            [10, "OCT"],
            [11, "NOV"],
            [12, "DEC"]
         ],
         font: {
            color: "#8b8f94",
            size: 11,
            family: "Montserrat, sans-serif",
         }
      },
      yaxis: {
         color: "rgba(255,255,255,0.4)",
         ticks: 5,
         show: false,
         tickDecimals: 0,
         font: {
            color: "#fff",
            size: 11,
         }
      }
   });
}

// Graph with checkboxes
// Page: index.html


if ($("#placeholder9").length) {
   $(function () {

      var datasets = {
         "usa": {
            label: "USA",
            data: [[1998, 483994], [1999, 479060], [2000, 457648], [2001, 401949], [2002, 424705], [2003, 402375], [2004, 377867], [2005, 357382], [2006, 437946], [2007, 436185], [2008, 448611], [2009, 429421], [2010, 342172], [2011, 344932], [2012, 387303], [2013, 440813], [2014, 380451], [2015, 404638], [2016, 428692]]
         },
         "china": {
            label: "China",
            data: [[1998, 218000], [1999, 203000], [2000, 271000], [2002, 223500], [2003, 237600], [2004, 236600], [2005, 221700], [2006, 219200], [2007, 221300], [2008, 213600], [2009, 214000], [2010, 219100], [2011, 221300], [2012, 223600], [2013, 225100], [2014, 226100], [2015, 231100], [2016, 234700]]
         },
         "germany": {
            label: "Germany",
            data: [[1998, 155627], [1999, 155475], [2000, 158464], [2001, 155134], [2002, 152436], [2003, 147139], [2004, 143962], [2005, 143238], [2006, 142395], [2007, 140854], [2008, 140993], [2009, 141822], [2010, 141147], [2011, 140474], [2012, 140604], [2013, 140044], [2014, 138816], [2015, 138060], [2016, 136984]]
         },
         "russia": {
            label: "Russia",
            data: [[1998, 62982], [1999, 62027], [2000, 80696], [2001, 62348], [2002, 68560], [2003, 66393], [2004, 54579], [2005, 50818], [2006, 98554], [2007, 48276], [2008, 67691], [2009, 47529], [2010, 77778], [2011, 68760], [2012, 60949], [2013, 57452], [2014, 60234], [2015, 60076], [2016, 59213]]
         },
         "india": {
            label: "India",
            data: [[1998, 33813], [1999, 33719], [2000, 33722], [2001, 33789], [2002, 33720], [2003, 33730], [2004, 33636], [2005, 33598], [2006, 83610], [2007, 33655], [2008, 33695], [2009, 33673], [2010, 33553], [2011, 33774], [2012, 33728], [2013, 33618], [2014, 33638], [2015, 33467], [2016, 33770]]
         },
         "others": {
            label: "Others",
            data: [[1998, 4382], [1999, 4498], [2000, 4535], [2001, 4398], [2002, 4766], [2003, 4441], [2004, 4670], [2005, 4217], [2006, 4275], [2007, 4203], [2008, 4482], [2009, 4506], [2010, 4358], [2011, 4385], [2012, 5269], [2013, 5066], [2014, 5194], [2015, 4887], [2016, 4891]]
         }
      };

      // hard-code color indices to prevent them from shifting as
      // countries are turned on/off

      var zx = 0;
      $.each(datasets, function (key, val) {
         val.color = zx;
         ++zx;
      });

      // insert checkboxes 
      var choiceContainer = $("#choices");
      choiceContainer.find("input").click(plotAccordingToChoices);

      function plotAccordingToChoices() {
         var data = [];
         choiceContainer.find("input:checked").each(function () {
            var key = $(this).attr("name");
            if (key && datasets[key]) {
               data.push(datasets[key]);
            }
         });
         if (data.length > 0) {
            $.plot("#placeholder9", data, {
               series: {
                  lines: {
                     show: true,
                     lineWidth: 7,
                     fill: true,
                     fillColor: {
                        colors: [{
                           opacity: .8
                        }, {
                           opacity: .8
                        }]
                     }
                  },

                  points: {
                     show: true,
                     fillColor: "#fff",
                     lineWidth: 3,
                     radius: 3
                  },
                  shadowSize: 0,
                  stack: true
               },

               colors: ["#f0ad4e", "#5fb6c7", "#f2e291", "#9ab946", "#226dad", "#db7093", "#01b5a1"],

               grid: {
                  hoverable: true,
                  clickable: true,
                  color: '#fff',
                  borderWidth: 0
               },

               legend: {
                  show: false,
                  // noColumns: 3,
                  // margin: -15,
                  // backgroundColor: 'rgba(255,255,255,0)',
                  // backgroundOpacity: 1,
                  // labelBoxBorderColor: 'rgba(255,255,255,0)'
               },
               yaxis: {
                  show: false,
                  min: 0,
                  font: {
                     color: "#9099aa",
                     size: 11,
                     family: "Montserrat, sans-serif",
                  }
               },
               xaxis: {
                  tickDecimals: 0,
                  font: {
                     color: "#9099aa",
                     size: 11,
                     family: "Montserrat, sans-serif",
                  }
               },
               tooltip: true,
               tooltipOpts: {
                  content: "$%y.2",
                  shifts: {
                     x: -10,
                     y: 25
                  }
               }
            });
         }
      }
      plotAccordingToChoices();
   });
}