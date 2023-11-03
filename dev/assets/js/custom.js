
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

   mobileOnlySlider("#advantages-slider", true, false, 991);

   function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
      var slider = $($slidername);
      var settings = {
         mobileFirst: true,
         dots: $dots,
         arrows: $arrows,
         responsive: [
            {
               breakpoint: $breakpoint,
               settings: "unslick"
            }
         ]
      };

      slider.slick(settings);

      $(window).on("resize", function () {
         if ($(window).width() > $breakpoint) {
            return;
         }
         if (!slider.hasClass("slick-initialized")) {
            return slider.slick(settings);
         }
      });
   } // Mobile Only Slider
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