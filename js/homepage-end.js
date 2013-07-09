$('#slogan').fitText();
$('#footnote').fitText();
$('#nums').fitText(0.75);
$('.banner-text').fitText(2);
$('.banner-icons').fitText(0.9);

$('.toggle').hover(function() {
  swapit($(this));
});

// To initially run the function:
$(window).resize();