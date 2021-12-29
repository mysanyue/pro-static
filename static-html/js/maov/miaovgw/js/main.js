define(function(require, exports) {
  var aA = document.getElementsByTagName('a');
  var aDiv = document.getElementsByTagName('div');

  window.onhashchange = function() {
    window.location.reload();
  }

  require('show.js').show(aA, aDiv);
  require('hide.js').hide(aA, aDiv);
});