
$(document).ready(function () {
   $('.first-screen-slider').slick({
      dots: true,
      appendArrows: '.first-screen-nav',
      responsive: [
         {
            breakpoint: 991,
            settings: {
               arrows: false,
            }
         },
      ]
   });
});

const burger = document.querySelector('.hamburger');

burger.addEventListener('click', function () {
   burger.classList.toggle('is-active')
});


document.getElementById('fileInput').onchange = function () {
   document.getElementById('fileName').innerHTML = this.files[0].name;
};

const checkButton = document.querySelectorAll('[type="checkbox"]');

checkButton.forEach((item, index) => {
   item.closest('.calculation-column').classList.add('calculation-column__margin');
   index === 0 ? item.closest('.input-box').classList.add('has-checkbox') : null

});