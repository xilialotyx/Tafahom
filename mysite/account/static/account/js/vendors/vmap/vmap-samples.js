// ========================================================================
// Administry Power DashBoard JS Document
// Vector Maps Samples File (js/vendors/vector-map)
// ***Style and syntax of code below suggeted by vendor***
// ========================================================================

$(document).ready(function () {

   if ($('#vmap').length) {
      $('#vmap').vectorMap({
         map: 'world_en',
         backgroundColor: '#fff',
         color: '#5bc0de',
         borderColor: '#5bc0de',
         hoverOpacity: 0.7,
         selectedColor: '#82b964',
         enableZoom: true,
         showTooltip: true,
         values: sample_data,
         scaleColors: ['#5bc0de', '#006491'],
         normalizeFunction: 'polynomial'
      });
   }

   if ($('#vmap-usa').length) {
      $('#vmap-usa').vectorMap({
         map: 'usa_en',
         backgroundColor: 'transparent',
         color: '#fff',
         hoverOpacity: 0,
         hoverColor: '#f4cc13',
         selectedColor: '#ccd600',
         enableZoom: true,
         showTooltip: true,
         selectedRegion: 'NY'
      });
   }

   if ($('#vmap-europe').length) {
      $('#vmap-europe').vectorMap({
         map: 'europe_en',
         backgroundColor: '#c4c5c5',
         hoverColor: '#f87aa0',
         selectedColor: '#5bc0de',
         enableZoom: true,
         showTooltip: true
      });
   }

   if ($('#vmap-russia').length) {
      $('#vmap-russia').vectorMap({
         map: 'russia_en',
         backgroundColor: '#f1f1f1',
         color: '#d24d33',
         hoverOpacity: 0.7,
         selectedColor: '#999999',
         enableZoom: true,
         borderColor: '#d24d33',
         showTooltip: true,
         values: sample_data,
         scaleColors: ['#f0ad4e', '#d24d33'],
         normalizeFunction: 'polynomial'
      });
   }
});