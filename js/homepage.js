function swapit(elem) {
  if ( elem.outerWidth() > 100) {
    $(elem.children()[0]).css('display', 'none');
    elem.css('overflow-y', 'hidden');
    elem.fadeTo(0, 0.5);
    elem.animate({width: "35px"}, 400);
  }
  else {
    elem.animate({width: "22.5%"}, 600, function() {
      elem.fadeTo(0, 0.65);
      elem.css('overflow-y', 'auto');
      $(elem.children()[0]).css('display', 'block');
    });
  }
}

$(window).resize(function(){
  var ht = $(window).height() - ($('.banner').height()+20) - 20;
  $('.toggle').css('height', ht);
});