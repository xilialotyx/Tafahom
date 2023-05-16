// ========================================================================
//	Inbox Page
// ========================================================================


// Preload DOM of Inbox functions:
inbox();


function inbox() {
   // check all checkboxes in table
   $('.checkall').click(function () {
      var $parentTable = $(this).parents('table');
      var $checkboxes = $parentTable.find('.checkbox');
      var isChecked = $(this).is(':checked');
      $checkboxes.prop('checked', isChecked).parent().toggleClass('checked', isChecked);
      $parentTable.find('tbody tr').toggleClass('selected', isChecked);
   });
   // star
   $('.mailinbox .fa-flag').click(function () {
      var isStarred = $(this).is('.flagged-yellow');
      $(this).toggleClass('flagged-yellow', !isStarred).toggleClass('flagged-grey', isStarred);
   });
   //add class selected to table row when checked
   $('.mailinbox tbody input:checkbox').click(function () {
      $(this).parents('tr').toggleClass('selected', $(this).prop('checked'));
   });
   // trash
   $('.delete').click(function (e) {
      e.preventDefault();
      var $checked = $('.mailinbox .checkbox:checked');
      var toDelete = $checked.length;
      if (toDelete === 0) {
         showAlert('پیامی انتخواب نشده');
         return;
      }
      $checked.parents('tr').remove();
      var msg = $checked.length > 1 ? 'پیام ' : 'پیام';
      var info = $checked.length + ' ' + msg + ' حذف شده';
      showAlert(info);
   });
   // mark as read/unread
   $('.mark_read, .mark_unread').click(function (e) {
      e.preventDefault();
      var $checked = $('.mailinbox .checkbox:checked');
      var toMark = $checked.length;
      if (toMark === 0) {
         showAlert('پیامی انتخواب نشده');
         return;
      }
      $checked.parents('tr').toggleClass('unread', !$(this).is('.mark_read'));
      var msg = $checked.length > 1 ? 'messages were' : 'message was';
      var state = $(this).is('.mark_read') ? ' read' : ' unread';
      var info = $checked.length + ' ' + msg + ' marked as ' + state;
      showAlert(info);
   });
   // Refresh stub
   $('.refresh').click(function (e) {
      e.preventDefault();
      showLoader();
   });
   // bootstrap alert div
   var $alertDiv = $('<div class="alert alert-danger alert-inbox">').css({
      display: 'none',
      position: 'absolute',
      top: '40%'
   }).appendTo('.table-relative');
   // show alert
   function showAlert(message) {
      var w = $alertDiv.text(message).width();
      $alertDiv.show();
      var left = ($alertDiv.parent().width() - w) / 2;
      $alertDiv.css('left', left);
      setTimeout(function () {
         $alertDiv.fadeOut();
      }, 1000);
   }
   // ajax loader div
   var $loader = $('<div class="dummy-loader">').appendTo('.table-relative');
   // show ajax loader
   function showLoader() {
      $loader.show();
      setTimeout(function () {
         $loader.hide();
      }, 1000);
   }
}