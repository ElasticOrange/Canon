
resize = function() {
  $('.picture-container').animate({
    height: '507px',
    width: '760px',
    top: '0'
  }, 1500);
  return $('.grey-container').fadeOut(1500);
};
