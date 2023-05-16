// ========================================================================
//	ChartJS
// ========================================================================

$(document).ready(function () {

   Chart.defaults.global.defaultFontColor = '#9099aa';
   Chart.defaults.global.defaultFontFamily = "'Montserrat','Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
   Chart.defaults.global.defaultFontSize = 11;
   Chart.defaults.global.defaultFontStyle = 'normal';

   // Charts on charts-chartjs.html
   //Line Chart

   if (document.getElementById("chartjs-line")) {
      var ctx = document.getElementById("chartjs-line"),
         myChart = new Chart(ctx, {
            type: 'line',
            data: {
               labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
               datasets: [
                  {
                     label: "iPhone 5",
                     fill: true,
                     lineTension: 0.1,
                     backgroundColor: "rgba(1, 181, 161, .7)",
                     borderColor: "#01b5a1",
                     borderCapStyle: 'butt',
                     borderDash: [],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBorderColor: "#01b5a1",
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "#01b5a1",
                     pointHoverBorderColor: "#01b5a1",
                     pointHoverBorderWidth: 3,
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [25, 49, 60, 67, 66, 35, 40, 22, 54, 27, 24, 55]
                  },
                  {
                     label: "iPhone 6",
                     fill: false,
                     lineTension: 0.1,
                     borderColor: "#db7093",
                     borderCapStyle: 'butt',
                     borderDash: [5, 5],
                     borderDashOffset: 2.2,
                     borderJoinStyle: 'miter',
                     pointBorderColor: "#db7093",
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "rgba(255,218,69,1)",
                     pointHoverBorderColor: "rgba(255,255,255,1)",
                     pointHoverBorderWidth: 3,
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [31, 22, 55, 59, 87, 66, 22, 32, 64, 17, 74, 25]
                  },
                  {
                     label: "iPhone 6S",
                     fill: true,
                     lineTension: 0.1,
                     backgroundColor: "rgba(255,218,69,.5)",
                     borderColor: "rgba(255,218,69,1)",
                     borderCapStyle: 'butt',
                     borderDash: [],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBorderColor: "rgba(75,192,192,1)",
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "rgba(255,218,69,1)",
                     pointHoverBorderColor: "rgba(255,255,255,1)",
                     pointHoverBorderWidth: 3,
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [65, 59, 80, 81, 56, 55, 40, 42, 44, 47, 34, 50]
                  }

               ]
            },
            options: {
               title: {
                  display: true,
                  text: 'ChartJS Line Chart',
                  fontSize: 17,
                  padding: 0
               },


               scales: {
                  yAxes: [
                     {
                        display: false,
                        ticks: {
                           beginAtZero: false
                        }
                     }]
               }
            }
         });
   }

   //Line Chart on Dark
   if (document.getElementById("chartjs-line-on-dark")) {
      var ctx2 = document.getElementById("chartjs-line-on-dark"),
         myChart2 = new Chart(ctx2, {
            type: 'line',
            data: {
               labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
               datasets: [
                  {
                     label: "iPad",
                     fill: false,
                     lineTension: 0.2,
                     borderColor: "#fff",
                     borderCapStyle: 'butt',
                     borderDash: [7, 7],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBorderColor: "#fff",
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "#fff",
                     pointHoverBorderColor: "#fff",
                     pointHoverBorderWidth: 3,
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [25, 49, 60, 67, 66, 35, 40, 22, 54, 27, 24, 55]
                  },

                  {
                     label: "iPod",
                     fill: false,
                     lineTension: 0.1,
                     borderColor: "#db7093",
                     borderCapStyle: 'butt',
                     borderDash: [5, 5],
                     borderWidth: 3,
                     borderDashOffset: 2.2,
                     borderJoinStyle: 'round',
                     pointBorderColor: "#db7093",
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "rgba(255,218,69,1)",
                     pointHoverBorderColor: "rgba(255,255,255,1)",
                     pointHoverBorderWidth: 3,
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [31, 22, 55, 59, 87, 66, 22, 32, 64, 17, 74, 25]
                  },



                  {
                     label: "iMac",
                     fill: true,
                     lineTension: 0.1,
                     backgroundColor: "rgba(191, 64, 142, .7)",
                     borderColor: "#bf408e",
                     borderCapStyle: 'square',
                     borderDash: [],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBorderColor: "rgba(75,192,192,1)",
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "rgba(255,218,69,1)",
                     pointHoverBorderColor: "rgba(255,255,255,1)",
                     pointHoverBorderWidth: 3,
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [65, 59, 78, 21, 56, 75, 30, 42, 44, 47, 34, 50]
                  }

               ]
            },
            options: {

               title: {
                  display: true,
                  text: 'ChartJS Line Chart',
                  fontColor: "#fff",
                  fontSize: 17,
                  padding: 0
               },


               legend: {
                  display: true,
                  labels: {
                     fontColor: "#fff"
                  }
               },

               scales: {
                  yAxes: [{
                     display: false,
                     ticks: {
                        beginAtZero: false
                     }
                  }]
               }
            }
         });

   }
   //Bar Chart

   if (document.getElementById("chartjs-bar")) {
      var ctx3 = document.getElementById("chartjs-bar"),
         myChart3 = new Chart(ctx3, {
            type: 'bar',
            data: {
               labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
               datasets: [
                  {
                     label: "MacBook Air",
                     backgroundColor: "rgba(240, 173, 78, .7)",
                     borderColor: "#f0ad4e",
                     borderWidth: 2,
                     hoverBackgroundColor: "rgba(240, 173, 78, .9)",
                     hoverBorderColor: "#f0ad4e",
                     data: [25, 49, 60, 67, 66, 35, 40, 22, 54, 27, 24, 55]
                  },

                  {
                     label: "MacBook Pro",
                     backgroundColor: "rgba(154, 185, 70, .7)",
                     borderColor: "#9ab946",
                     borderWidth: 2,
                     hoverBackgroundColor: "rgba(154, 185, 70, .9)",
                     hoverBorderColor: "#9ab946",
                     data: [31, 22, 55, 59, 87, 66, 22, 32, 64, 17, 74, 25]
                  },



                  {
                     label: "BigMac",
                     backgroundColor: "rgba(129, 71, 58, .7)",
                     borderColor: "#81473a",
                     borderWidth: 2,
                     hoverBackgroundColor: "rgba(129, 71, 58, .9)",
                     hoverBorderColor: "#81473a",
                     data: [65, 59, 78, 21, 56, 75, 30, 42, 44, 47, 34, 50]
                  }

               ]
            },
            options: {
               title: {
                  display: true,
                  text: 'ChartJS Bar Chart',
                  fontSize: 17,
                  padding: 0
               },
               legend: {
                  display: true
               },
               scales: {
                  yAxes: [{
                     display: false,
                     ticks: {
                        beginAtZero: false
                     }
                  }]
               }
            }
         });
   }


   //Bar Chart On Dark
   if (document.getElementById("chartjs-bar-on-dark")) {
      var ctx4 = document.getElementById("chartjs-bar-on-dark"),
         myChart4 = new Chart(ctx4, {
            type: 'horizontalBar',
            data: {
               labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
               datasets: [
                  {
                     label: "MacBook Air",
                     backgroundColor: "rgba(240, 173, 78, .7)",
                     borderColor: "#f0ad4e",
                     borderWidth: 2,
                     hoverBackgroundColor: "rgba(240, 173, 78, .9)",
                     hoverBorderColor: "#f0ad4e",
                     data: [25, 49, 60, 67, 66, 35, 40, 22, 54, 27, 24, 55]
                  },

                  {
                     label: "MacBook Pro",
                     backgroundColor: "rgba(154, 185, 70, .7)",
                     borderColor: "#9ab946",
                     borderWidth: 2,
                     hoverBackgroundColor: "rgba(154, 185, 70, .9)",
                     hoverBorderColor: "#9ab946",
                     data: [31, 22, 55, 59, 87, 66, 22, 32, 64, 17, 74, 25]
                  },



                  {
                     label: "BigMac",
                     backgroundColor: "rgba(231, 73, 88, .7)",
                     borderColor: "#e74958",
                     borderWidth: 2,
                     hoverBackgroundColor: "rgba(231, 73, 88, .7)",
                     hoverBorderColor: "#e74958",
                     data: [65, 59, 78, 21, 56, 75, 30, 42, 44, 47, 34, 50]
                  }

               ]
            },
            options: {
               title: {
                  display: true,
                  text: 'ChartJS Bar Chart',
                  fontSize: 17,
                  fontColor: "#fff",
                  padding: 0
               },
               legend: {
                  display: true,
                  labels: {
                     fontColor: "#fff"
                  }
               },

               scales: {
                  yAxes: [{
                     ticks: {
                        beginAtZero: false
                     }
                  }]
               }
            }
         });

   }
   //Bar Chart

   if (document.getElementById("chartjs-radar")) {
      var ctx5 = document.getElementById("chartjs-radar"),
         myChart5 = new Chart(ctx5, {
            type: 'radar',
            data: {
               labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
               datasets: [
                  {
                     label: "My First dataset",
                     backgroundColor: "rgba(179,181,198,0.2)",
                     borderColor: "rgba(179,181,198,1)",
                     pointBackgroundColor: "rgba(179,181,198,1)",
                     pointBorderColor: "#fff",
                     pointHoverBackgroundColor: "#fff",
                     pointHoverBorderColor: "rgba(179,181,198,1)",
                     data: [65, 59, 90, 81, 56, 55, 40]
                  },
                  {
                     label: "My Second dataset",
                     backgroundColor: "rgba(255,99,132,0.2)",
                     borderColor: "rgba(255,99,132,1)",
                     pointBackgroundColor: "rgba(255,99,132,1)",
                     pointBorderColor: "#fff",
                     pointHoverBackgroundColor: "#fff",
                     pointHoverBorderColor: "rgba(255,99,132,1)",
                     data: [28, 48, 40, 19, 96, 27, 100]
                  }
               ]

            },
            options: {
               title: {
                  display: true,
                  text: 'Radar Chart',
                  fontSize: 17,
                  padding: 0
               },
               legend: {
                  display: true
               }
            }
         });
   }

   //Polar Area Chart

   if (document.getElementById("chartjs-polar-area")) {

      var ctx6 = document.getElementById("chartjs-polar-area"),
         myChart6 = new Chart(ctx6, {
            type: 'polarArea',
            data: {
               datasets: [{
                  data: [
                     11,
                     16,
                     7,
                     3
                  ],
                  backgroundColor: [
                     "#FF6384",
                     "#4BC0C0",
                     "#FFCE56",
                     "#E7E9ED",
                  ],
                  label: 'My dataset' // for legend
               }],
               labels: [
                  "Calzone",
                  "Stromboli",
                  "Marinara",
                  "Neapolitan",
               ]
            },

            options: {
               title: {
                  display: true,
                  text: 'Polar Bear',
                  fontSize: 17,
                  padding: 0
               },
               legend: {
                  display: true
               }
            }
         });
   }


   //Pie Chart
   if (document.getElementById("chartjs-pie")) {

      var ctx7 = document.getElementById("chartjs-pie"),
         myChart7 = new Chart(ctx7, {
            type: 'pie',
            data: {
               labels: [
                  "Margherita",
                  "Mozzarella",
                  "Stagioni"
               ],
               datasets: [
                  {
                     data: [300, 50, 100],
                     backgroundColor: [
                        "#fff",
                        "#30353e",
                        "#f2e291"
                     ],
                     hoverBackgroundColor: [
                        "rgba(255, 255, 255, .7)",
                        "rgba(48, 53, 62, 0.7)",
                        "#rgba(242, 226, 145, .7)"
                     ],
                     borderWidth: 0
                  }]

            },

            options: {
               title: {
                  display: true,
                  text: 'Pie Chart',
                  fontSize: 17,
                  fontColor: "#fff",
                  padding: 0
               },
               legend: {
                  display: true,
                  labels: {
                     fontColor: "#fff"
                  }
               }
            }
         });
   }


   //Doughnut Chart

   if (document.getElementById("chartjs-doughnut")) {
      var ctx8 = document.getElementById("chartjs-doughnut"),
         myChart8 = new Chart(ctx8, {
            type: 'doughnut',
            data: {
               labels: [
                  "iPad",
                  "iPhone",
                  "iPod"
               ],
               datasets: [
                  {
                     data: [300, 50, 100],
                     backgroundColor: [
                        "#51596a",
                        "#30353e",
                        "#fff"
                     ],
                     hoverBackgroundColor: [
                        "rgba(81, 89, 106, .7)",
                        "rgba(48, 53, 62, .7)",
                        "rgba(255, 255, 255, .7)"
                     ],
                     borderWidth: 0
                  }]

            },

            options: {
               title: {
                  display: true,
                  text: 'Doughnut Chart',
                  fontSize: 17,
                  fontColor: "#fff",
                  padding: 0
               },
               legend: {
                  display: true,
                  labels: {
                     fontColor: "#fff"
                  }
               }
            }
         });
   }


   // Charts on widgets-vol-3.html

   if (document.getElementById("stock1")) {
      var ctx = document.getElementById("stock1"),
         myChart = new Chart(ctx, {
            type: 'line',
            data: {
               labels: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
               datasets: [
                  {
                     label: "SunLight Inc.",
                     fill: true,
                     lineTension: 0,
                     backgroundColor: "rgba(48, 53, 62, 0.75)",
                     borderColor: "#30353e",
                     borderCapStyle: 'butt',
                     borderDash: [],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBorderColor: "#01b5a1",
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "#01b5a1",
                     pointHoverBorderColor: "#01b5a1",
                     pointHoverBorderWidth: 4,
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [1225, 1249, 1260, 1267, 1366, 1235, 1240, 1225, 1223, 1225]
                  }
               ]
            },
            options: {
               title: {
                  display: false,
                  padding: 0
               },

               legend: {
                  display: false,
               },
               scales: {
                  yAxes: [{
                     display: true,
                  }],
                  xAxes: [{
                     display: false,
                  }],
               }
            }
         });
   }

   if (document.getElementById("stock2")) {
      var ctx = document.getElementById("stock2"),
         myChart = new Chart(ctx, {
            type: 'line',
            data: {
               labels: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
               datasets: [
                  {
                     label: "Enwado Corp",
                     fill: true,
                     lineTension: 0,
                     backgroundColor: "rgba(48, 53, 62, 0.75)",
                     borderColor: "#30353e",
                     borderCapStyle: 'butt',
                     borderDash: [],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBorderColor: "#01b5a1",
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "#01b5a1",
                     pointHoverBorderColor: "#01b5a1",
                     pointHoverBorderWidth: 4,
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [225, 211, 213, 217, 220, 235, 240, 260, 270, 280]
                  }
               ]
            },
            options: {
               title: {
                  display: false,
                  padding: 0
               },

               legend: {
                  display: false,
               },
               scales: {
                  yAxes: [{
                     display: true,
                  }],
                  xAxes: [{
                     display: false,
                  }],
               }
            }
         });
   }

   if (document.getElementById("stock3")) {
      var ctx = document.getElementById("stock3"),
         myChart = new Chart(ctx, {
            type: 'line',
            data: {
               labels: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
               datasets: [
                  {
                     label: "Gold",
                     fill: true,
                     lineTension: 0,
                     backgroundColor: "rgba(48, 53, 62, 0.75)",
                     borderColor: "#30353e",
                     borderCapStyle: 'butt',
                     borderDash: [],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBorderColor: "#01b5a1",
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "#01b5a1",
                     pointHoverBorderColor: "#01b5a1",
                     pointHoverBorderWidth: 4,
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [2225, 1911, 2413, 2317, 2020, 1935, 1940, 1920, 1890, 1870]
                  }
               ]
            },
            options: {
               title: {
                  display: false,
                  padding: 0
               },

               legend: {
                  display: false,
               },
               scales: {
                  yAxes: [{
                     display: true,
                  }],
                  xAxes: [{
                     display: false,
                  }],
               }
            }
         });
   }

   if (document.getElementById("stock4")) {
      var ctx = document.getElementById("stock4"),
         myChart = new Chart(ctx, {
            type: 'line',
            data: {
               labels: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
               datasets: [
                  {
                     label: "Boyd Banking",
                     fill: true,
                     lineTension: 0,
                     backgroundColor: "rgba(48, 53, 62, 0.75)",
                     borderColor: "#30353e",
                     borderCapStyle: 'butt',
                     borderDash: [],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBorderColor: "#01b5a1",
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "#01b5a1",
                     pointHoverBorderColor: "#01b5a1",
                     pointHoverBorderWidth: 4,
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [100, 101, 101, 102, 103, 102, 101, 102, 100, 101]
                  }
               ]
            },
            options: {
               title: {
                  display: false,
                  padding: 0
               },

               legend: {
                  display: false,
               },
               scales: {
                  yAxes: [{
                     display: true,
                  }],
                  xAxes: [{
                     display: false,
                  }],
               }
            }
         });
   }


   if (document.getElementById("facebook-ref")) {
      var ctx = document.getElementById("facebook-ref"),
         myChart = new Chart(ctx, {
            type: 'line',
            data: {
               labels: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
               datasets: [
                  {
                     label: "Facebook Refs.",
                     fill: true,
                     lineTension: .3,
                     backgroundColor: "#fff",
                     borderColor: "#fff",
                     borderCapStyle: 'butt',
                     borderDash: [],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "#fff",
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [1315, 1249, 1260, 1267, 1366, 1235, 1240, 1425, 1223, 1225]
                  }
               ]
            },
            options: {
               title: {
                  display: false,
                  padding: 0
               },

               legend: {
                  display: false,
               },
               scales: {
                  yAxes: [{
                     display: false,
                  }],
                  xAxes: [{
                     display: false,
                  }],
               }
            }
         });
   }

   if (document.getElementById("twitter-ref")) {
      var ctx = document.getElementById("twitter-ref"),
         myChart = new Chart(ctx, {
            type: 'line',
            data: {
               labels: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
               datasets: [
                  {
                     label: "Twitter Refs.",
                     fill: true,
                     lineTension: .3,
                     backgroundColor: "#fff",
                     borderColor: "#fff",
                     borderCapStyle: 'butt',
                     borderDash: [],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "#fff",
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [1115, 1249, 1160, 1467, 1566, 1435, 1340, 1425, 1223, 1225]
                  }
               ]
            },
            options: {
               title: {
                  display: false,
                  padding: 0
               },

               legend: {
                  display: false,
               },
               scales: {
                  yAxes: [{
                     display: false,
                  }],
                  xAxes: [{
                     display: false,
                  }],
               }
            }
         });
   }

   if (document.getElementById("google-ref")) {
      var ctx = document.getElementById("google-ref"),
         myChart = new Chart(ctx, {
            type: 'line',
            data: {
               labels: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
               datasets: [
                  {
                     label: "Google Refs.",
                     fill: true,
                     lineTension: 0,
                     lineTension: .3,
                     backgroundColor: "#fff",
                     borderCapStyle: 'butt',
                     borderDash: [],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "#fff",
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [1115, 1249, 1160, 1467, 1566, 1435, 1340, 1425, 1223, 1225]
                  }
               ]
            },
            options: {
               title: {
                  display: false,
                  padding: 0
               },

               legend: {
                  display: false,
               },
               scales: {
                  yAxes: [{
                     display: false,
                  }],
                  xAxes: [{
                     display: false,
                  }],
               }
            }
         });
   }

   if (document.getElementById("instagram-ref")) {
      var ctx = document.getElementById("instagram-ref"),
         myChart = new Chart(ctx, {
            type: 'line',
            data: {
               labels: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
               datasets: [
                  {
                     label: "Google Refs.",
                     fill: true,
                     lineTension: .3,
                     backgroundColor: "#fff",
                     borderColor: "#fff",
                     borderCapStyle: 'butt',
                     borderDash: [],
                     borderDashOffset: 0.0,
                     borderJoinStyle: 'miter',
                     pointBackgroundColor: "#fff",
                     pointBorderWidth: 2,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "#fff",
                     pointRadius: 0,
                     pointHitRadius: 10,
                     data: [2200, 1987, 1160, 1467, 1566, 2435, 1340, 1425, 1999, 2225]
                  }
               ]
            },
            options: {
               title: {
                  display: false,
                  padding: 0
               },

               legend: {
                  display: false,
               },
               scales: {
                  yAxes: [{
                     display: false,
                  }],
                  xAxes: [{
                     display: false,
                  }],
               }
            }
         });
   }

   //Doughnut Chart

   if (document.getElementById("chartjs-doughnut-index")) {
      var ctx8 = document.getElementById("chartjs-doughnut-index"),
         myChart8 = new Chart(ctx8, {
            type: 'doughnut',
            data: {
               labels: [
                  "Internet Explorer",
                  "Google Chrome",
                  "Mozilla FireFox",
                  "Safari",
                  "Others"
               ],
               datasets: [
                  {
                     data: [41.33, 41.71, 10.06, 4.47, 2.43],
                     backgroundColor: [
                        "#226dad",
                        "#5fb6c7",
                        "#f0ad4e",
                        "#9ab946",
                        "#9099aa",
                     ],
                     hoverBackgroundColor: [
                        "rgba(81, 89, 106, .7)",
                        "rgba(48, 53, 62, .7)",
                        "rgba(255, 255, 255, .7)"
                     ],
                     borderWidth: 0
                  }]

            },

            options: {
               title: {
                  display: false,
                  text: 'Doughnut Chart',
                  fontSize: 17,
                  fontColor: "#fff",
                  padding: 0
               },
               legend: {
                  display: false,
                  labels: {
                     fontColor: "#fff"
                  }
               }
            }
         });
   }

   //Doughnut Chart

   if (document.getElementById("chartjs-doughnut-index-2")) {
      var ctx8 = document.getElementById("chartjs-doughnut-index-2"),
         myChart8 = new Chart(ctx8, {
            type: 'doughnut',
            data: {
               labels: [
                  "Samsung",
                  "Apple",
                  "Huawei",
                  "Xiaomi",
                  "Others"
               ],
               datasets: [
                  {
                     data: [22.3, 12.9, 8.9, 5.4, 46],
                     backgroundColor: [
                        "#226dad",
                        "#e74958",
                        "#f0ad4e",
                        "#9ab946",
                        "#9099aa",
                     ],
                     hoverBackgroundColor: [
                        "rgba(81, 89, 106, .7)",
                        "rgba(48, 53, 62, .7)",
                        "rgba(255, 255, 255, .7)"
                     ],
                     borderWidth: 0
                  }]

            },

            options: {
               title: {
                  display: false,
                  text: 'Doughnut Chart',
                  fontSize: 17,
                  fontColor: "#fff",
                  padding: 0
               },
               legend: {
                  display: false,
                  labels: {
                     fontColor: "#fff"
                  }
               }
            }
         });
   }


   if (document.getElementById("chartjs-doughnut-index-3")) {
      var ctx8 = document.getElementById("chartjs-doughnut-index-3"),
         myChart8 = new Chart(ctx8, {
            type: 'doughnut',
            data: {
               labels: [
                  "Android",
                  "iOS",
                  "Windows",
                  "Blackberry",
                  "Others"
               ],
               datasets: [
                  {
                     data: [64.42, 23.97, 1.68, 0.47, 18],
                     backgroundColor: [
                        "#226dad",
                        "#e74958",
                        "#f0ad4e",
                        "#9ab946",
                        "#9099aa",
                     ],
                     hoverBackgroundColor: [
                        "rgba(81, 89, 106, .7)",
                        "rgba(48, 53, 62, .7)",
                        "rgba(255, 255, 255, .7)"
                     ],
                     borderWidth: 0
                  }]

            },

            options: {
               title: {
                  display: false,
                  text: 'Doughnut Chart',
                  fontSize: 17,
                  fontColor: "#fff",
                  padding: 0
               },
               legend: {
                  display: false,
                  labels: {
                     fontColor: "#fff"
                  }
               }
            }
         });
   }


   if (document.getElementById("chartjs-doughnut-index-4")) {
      var ctx8 = document.getElementById("chartjs-doughnut-index-4"),
         myChart8 = new Chart(ctx8, {
            type: 'doughnut',
            data: {
               labels: [
                  "Males",
                  "Females",
                  "Teens",
                  "Aliens",
                  "Others"
               ],
               datasets: [
                  {
                     data: [45, 25, 15, 5, 5],
                     backgroundColor: [
                        "#226dad",
                        "#e74958",
                        "#f0ad4e",
                        "#9ab946",
                        "#9099aa",
                     ],
                     hoverBackgroundColor: [
                        "rgba(81, 89, 106, .7)",
                        "rgba(48, 53, 62, .7)",
                        "rgba(255, 255, 255, .7)"
                     ],
                     borderWidth: 0
                  }]

            },

            options: {
               title: {
                  display: false,
                  text: 'Doughnut Chart',
                  fontSize: 17,
                  fontColor: "#fff",
                  padding: 0
               },
               legend: {
                  display: false,
                  labels: {
                     fontColor: "#fff"
                  }
               }
            }
         });
   }


});