document.addEventListener('DOMContentLoaded', function() {
  var el = document.querySelector('.breadcrumb-scroll.ps');
  if (el) {
    new PerfectScrollbar(el, { suppressScrollY: true });
  }
});
