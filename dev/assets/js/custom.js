
$(document).ready(function () {
   $('.first-screen-slider').slick({
      dots: true,
      appendArrows: '.first-screen-nav',

   });
});

const burger = document.querySelector('.hamburger');

burger.addEventListener('click', function () {
   burger.classList.toggle('is-active')
});

