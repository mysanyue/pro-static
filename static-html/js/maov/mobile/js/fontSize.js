(function() {
  setSize();
  window.addEventListener('resize', setSize, false);
  window.addEventListener('orientationchange', setSize, false);

  function setSize() {
    var oHtml = document.getElementsByTagName('html')[0];
    var iWidth = oHtml.getBoundingClientRect().width;
    oHtml.style.fontSize = iWidth / 16 + 'px';
  }
})();