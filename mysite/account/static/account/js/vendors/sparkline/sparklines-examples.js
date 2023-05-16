(function () {
   "use strict";

   $(document).ready(function () {
      // ========================================================================
      // Sparklines at chart-others.html
      // ========================================================================

      if ($('.demo-sparkline').length) {
         $('.demo-sparkline').sparkline('html', {
            disableHiddenCheck: true,
            fillColor: false,
            lineWidth: 2,
            lineColor: '#858689',
            spotColor: '#f4b66d'
         });
      }

      // Bar charts using inline values
      if ($('.demo-sparkbar').length) {
         $('.demo-sparkbar').sparkline('html', {
            type: 'bar',
            barColor: '#0099cc',
            negBarColor: '#f85050',
            stackedBarColor: ['#0099cc', '#f85050']
         });
      }

      // Composite line charts, the second using values supplied via javascript
      if ($('.demo-compositeline').length) {
         $('.demo-compositeline').sparkline('html', {
            fillColor: false,
            lineColor: '#858689',
            spotColor: '#f4b66d',
            lineWidth: 2,
            changeRangeMin: 0,
            chartRangeMax: 10
         });
      }

      if ($('.demo-compositeline').length) {
         $('.demo-compositeline').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
            composite: true,
            fillColor: false,
            lineColor: '#f85050',
            changeRangeMin: 0,
            lineWidth: 2,
            chartRangeMax: 10
         });
      }

      // Line charts with normal range marker
      if ($('.demo-normalline').length) {
         $('.demo-normalline').sparkline('html', {
            fillColor: false,
            normalRangeColor: "rgba(0,0,0,.1)",
            lineColor: '#f85050',
            lineWidth: 2,
            normalRangeMin: -1,
            normalRangeMax: 8
         });
      }

      if ($('.demo-normalExample').length) {
         $('.demo-normalExample').sparkline('html', {
            fillColor: false,
            lineWidth: 2,
            normalRangeMin: 80,
            normalRangeMax: 95,
            normalRangeColor: '#0099cc'
         });
      }


      if ($('.demo-compositebar').length) {
         // Bar + line composite charts
         $('.demo-compositebar').sparkline('html', {
            type: 'bar',
            barColor: '#0099cc'
         });
      }


      if ($('.demo-compositebar').length) {
         $('.demo-compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
            lineWidth: 2,
            composite: true,
            fillColor: false,
            lineColor: '#f85050'
         });
      }

      // Discrete charts

      if ($('.demo-discrete1').length) {
         $('.demo-discrete1').sparkline('html', {
            type: 'discrete',
            lineColor: '#58b868',
            xwidth: 28
         });
      }

      if ($('.demo-discrete2').length) {
         $('.demo-discrete2').sparkline('html', {
            type: 'discrete',
            lineColor: '#58b868',
            thresholdColor: '#f85050',
            thresholdValue: 4
         });
      }

      // Tri-state charts using inline values
      if ($('.demo-sparktristatecols').length) {
         $('.demo-sparktristatecols').sparkline('html', {
            type: 'tristate',
            colorMap: {
               '-2': '#0099cc',
               '2': '#f85050'
            },
            posBarColor: '#0099cc',
            negBarColor: '#f85050'
         });
      }

      // Box plots
      if ($('.demo-sparkboxplot').length) {
         $('.demo-sparkboxplot').sparkline('html', {
            type: 'box',
            boxLineColor: '#222',
            lineColor: "#969ead",
            boxFillColor: '#c4c5c5',
            whiskerColor: '#222',
            outlierLineColor: '#222',
            medianColor: '#969ead',
            outlierFillColor: '#969ead'
         });
      }

      // Box plot with specific field order
      if ($('.demo-boxfieldorder').length) {
         $('.demo-boxfieldorder').sparkline('html', {
            type: 'box',
            boxLineColor: '#222',
            boxFillColor: '#c4c5c5',
            whiskerColor: '#222',
            outlierLineColor: '#222',
            medianColor: '#333',
            outlierFillColor: '#969ead',
            tooltipFormatFieldlist: ['med', 'lq', 'uq'],
            tooltipFormatFieldlistKey: 'field'
         });
      }

      // Bullet charts
      if ($('.demo-sparkbullet').length) {
         $('.demo-sparkbullet').sparkline('html', {
            type: 'bullet',
            targetColor: '#f85050',
            performanceColor: '#969fa1',
            rangeColors: ['#f4cc13', '#8960a7', '#0099cc', '#9ab946']
         });
      }

      // Pie charts
      if ($('.demo-sparkpie').length) {
         $('.demo-sparkpie').sparkline('html', {
            type: 'pie',
            height: '14px',
            sliceColors: ['#f85050', '#0099cc', '#9ab946']
         });
      }


      // Sparklines at tables.html, widgets-vol-3.html

      if ($('.table-sparkline-pie').length) {
         $('.table-sparkline-pie').sparkline('html', {
            disableHiddenCheck: true,
            type: 'pie',
            width: '30',
            height: '30',
            sliceColors: ['#226dad', '#9ab946']
         });
      }

      if ($('.table-sparkline-pie2').length) {
         $('.table-sparkline-pie2').sparkline('html', {
            type: 'pie',
            width: '30',
            height: '30',
            sliceColors: ['#226dad', '#e74958']
         });
      }


      if ($('.table-sparkline-lines').length) {
         $(".table-sparkline-lines").sparkline('html', {
            disableHiddenCheck: true,
            type: 'line',
            lineColor: '#5fb6c7',
            width: '90',
            height: '23',
            fillColor: false,
            lineWidth: 4,
            spotRadius: 2,
            spotColor: '#fff',
            minSpotColor: '#fff',
            maxSpotColor: '#fff',
            highlightSpotColor: '#a6c172'
         });
      }



      // Sparklines at index.html

      if ($('.indexchart-1').length) {
         $('.indexchart-1').sparkline('html', {
            disableHiddenCheck: true,
            type: 'line',
            width: '125',
            height: '30',
            lineColor: '#5fb6c7',
            fillColor: false,
            lineWidth: 5,
            highlightSpotColor: false,
            spotColor: false,
            drawNormalOnTop: true
         });
      }

      if ($('.indexchart-2').length) {
         $('.indexchart-2').sparkline('html', {
            disableHiddenCheck: true,
            type: 'line',
            width: '125',
            height: '30',
            lineColor: '#ffffff',
            fillColor: false,
            lineWidth: 5,
            highlightSpotColor: false,
            spotColor: false,
            drawNormalOnTop: false
         });
      }

      if ($('.traffic-sparkline-pie').length) {
         $('.traffic-sparkline-pie').sparkline('html', {
            disableHiddenCheck: true,
            type: 'pie',
            width: '110',
            height: '110',
            sliceColors: ['#30353e', '#caced6', '#5fb6c7']
         });
      }

   });
}(jQuery));