$(document).ready(function() {
  // Toggle the accordion content on click of the header
  $('.accordion-header').click(function() {
    // Close other accordion sections
    $('.accordion-header').not(this).removeClass('active');
    $('.accordion-arrow').not($(this).find('.accordion-arrow')).removeClass('active');
    $('.accordion-content').not($(this).next()).slideUp();
    // Toggle the selected accordion section
    $(this).toggleClass('active');
    $(this).find('.accordion-arrow').toggleClass('active');
    $(this).next('.accordion-content').slideToggle();
  });
});
