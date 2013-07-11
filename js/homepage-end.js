/* get all my fancy big text looking good */
$('#slogan').fitText();
$('#footnote').fitText();
$('#nums').fitText(0.75);
$('.banner-text').fitText(2);
$('.banner-icons').fitText(0.9);
$('.toggle-text-right').fitText(0.3);
$('#finisher').fitText(0.4);
$('.toggle-footer').fitText(0.4);
$('.toggle-banner').fitText(0.5);

/* when a link is clicked in the side bar don't make the bar disappear! */
$('a').click(function(event) {
  event.stopPropagation();
})

/* when the body of the sidebar is clicked, make it appear / disappear! */
$('.toggle').click(function() {
  swapit($(this));
});

/* initially runs the resize function after everything loaded */
$(window).resize();