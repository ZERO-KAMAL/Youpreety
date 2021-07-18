// AOS.init();
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 150) {
//         $('.arrow').show();
//     } else {
//         $('.arrow').hide();
//     }
// });
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

var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
   item.addEventListener("click", event => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
   });
});
document.querySelector(".close").addEventListener("click", () => {
   modalEle.style.display = "none";
});
