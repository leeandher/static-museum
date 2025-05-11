var showcase = document.querySelector('#projects .bg');
var screenGrabs = [
  'https://goo.gl/Gg6WUS',
  'https://goo.gl/BHqJDP',
  'https://goo.gl/fdZVs1',
  'https://goo.gl/qSSkhL',
  'https://goo.gl/9Y35rA',
  'https://goo.gl/AKXDXT',
  'https://goo.gl/J74Vum',
  'https://goo.gl/fgrRKB'
];

var currLoop = 0;
var timer = setInterval(function() {
  showcase.style.backgroundImage = 'url(' + screenGrabs[currLoop] + ')';
  currLoop ++;
  currLoop = currLoop === screenGrabs.length ?
    0: currLoop; 
}, 5000)


$(window).scroll(function() {
  var navHeight = $(document).scrollTop() > 50 ? '0px' : '-500px';
  $('nav').css('top', navHeight);
});

$('nav a').click(function() {
  var href = $(this).attr('href');
  $('html, body').animate({scrollTop: $(href).offset().top}, 1000);
  if ($(window).width() < 650) {
    $('#toggler').removeClass('show');
    $('#collapse-nav').css('max-height', '0px');
  }
});

$('#toggler').click(function() {
  $(this).toggleClass('show');
  var heightVal = $(this).hasClass('show') ? '200px' : '0px';
  $('#collapse-nav').css('max-height', heightVal);
});