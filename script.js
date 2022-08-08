$(document).ready(function () {
  $('.start-modal').fadeIn();
  $('.dark-block').fadeIn();
  $('body').addClass('overflow-hidden');
})

$('#onSoundBtn').click(function () {
  document.getElementById('audioFirst').play();
  document.getElementById('1').classList.add('active');
  $('.start-modal').fadeOut();
  $('.dark-block').fadeOut();
  $('body').removeClass('overflow-hidden');
})

$('#offSoundBtn').click(function () {
  $('.start-modal').fadeOut();
  $('.dark-block').fadeOut();
  $('body').removeClass('overflow-hidden');
})


$('.buttons a').click(function () {
  if (this.classList.contains('active')) {
    this.removeAttribute('class');
    this.childNodes[1].pause();
    this.childNodes[1].currentTime = 0;
  } else {
    this.classList.add('active');
    $('.buttons a').not(this).removeClass('active');
    for (let i = 0; i < $('.buttons a').not(this).length; i++) {
      $('.buttons a').not(this).children('audio')[i].pause();
      $('.buttons a').not(this).children('audio')[i].currentTime = 0;
    }
    this.childNodes[1].play();
  }
})
