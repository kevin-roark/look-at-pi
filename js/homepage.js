/* function is passed one of the sidebars. If its big, it makes it small, and vice versa */
function swapit(elem) {
  if ( elem.outerWidth() > 100) {
    makeHidden(elem);
  }
  else {
    makeVisible(elem);
  }
}

/* makes a sidebar appear in 'small-mode' */
function makeHidden(elem) {
  $(elem.children()[0]).css('display', 'none');
  elem.css('overflow-y', 'hidden');
  elem.fadeTo(0, 0.5);
  elem.animate({width: "35px"}, 400);
}

/* makes a sidebar appear in 'big-mode' */
function makeVisible(elem) {
  elem.animate({width: "22.5%"}, 600, function() {
    elem.fadeTo(0, 0.65);
    elem.css('overflow-y', 'auto');
    $(elem.children()[0]).css('display', 'block');
  });
}

/* an event for window resizing that realigns sidebars */
$(window).resize(function(){
  makeHidden($('.toggle#right'));
  makeHidden($('.toggle#left'));
  var ht = $(window).height() - ($('.banner').height()+20) - 20;
  $('.toggle').css('height', ht);
}); 