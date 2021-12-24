$(function() {
  const target = '.common-grid-container.move>canvas'
  // 网格
  $('body').on('mousemove.grid', target, openhand)
  $('body').on('mouseover.grid', target, openhand)
  $('body').on('mouseout.grid', target, cursorDefault)
  $('body').on('mouseup.grid', target, function() {
    $('body').on('mousemove.grid', target, openhand)
    openhand.call(this)
  })
  $('body').on('mousedown.grid', target, function(event) {
    $('body').off('mousemove.grid')
    closedhand.call(this, event)
  })

  function openhand() {
    $(this).css('cursor', 'url(/assets/images/openhand.cur), default')
  }

  function closedhand(event) {
    if (event.button == 0) {
      $(this).css('cursor', 'url(/assets/images/closedhand.cur), move')
    }
  }

  function cursorDefault() {
    $(this).css('cursor', 'default')
  }
});