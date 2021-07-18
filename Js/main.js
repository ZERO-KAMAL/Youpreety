// AOS.init();
$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('.back-to-top').show();
    } else {
        $('.back-to-top').hide();
    }
});
// ON DOM READY
$(function () {
  // VARIABLES
  var rateYo = $(".rateYo");
  var rateYoField = $("input[name='rateYoField']");

  // ON CLICK ASSIGN RATING TO HIDDEN FIELD
  $(rateYo).rateYo({
    onSet: function (rating, rateYoInstance) {
      $(rateYoField).val(rating);
    },
  });
});
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel(

//   );
// });

var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});


