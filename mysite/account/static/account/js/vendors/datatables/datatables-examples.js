// ========================================================================
//	Datatables
// ========================================================================	


$(document).ready(function () {

   var table = $('#datatablesexample1').DataTable();
   var table2 = $('#datatablesexample2').DataTable({
      dom: 'RC<"clear">lfrtip',
      columnDefs: [
         { visible: false, targets: 1 }
      ]
   });



   // Setup - add a text input to each footer cell
   $('#datatablesexample3 tfoot th').each(function () {
      var title = $('#datatablesexample3 thead th').eq($(this).index()).text();
      $(this).html('<input type="text" placeholder="Ø¬Ø³ØªØ¬Ùˆ ' + title + '" />');
   });

   // DataTable
   var table3 = $('#datatablesexample3').DataTable();

   // Apply the search
   table3.columns().eq(0).each(function (colIdx) {
      $('input', table3.column(colIdx).footer()).on('keyup change', function () {
         table3
            .column(colIdx)
            .search(this.value)
            .draw();
      });
   });


   var table4 = $('#datatablesexample4').DataTable({
      "paging": false,
      "searching": false
   });

   $('a.toggle-vis').on('click', function (e) {
      e.preventDefault();

      // Get the column API object
      var column = table4.column($(this).attr('data-column'));

      // Toggle the visibility
      column.visible(!column.visible());
   });

});