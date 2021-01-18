import 'bootstrap';
import './particles.min.js';
import './particlesjs-config';
import 'slick-carousel/slick/slick.min';
import 'modal-video/js/jquery-modal-video.min';
// $(document).ready( (function()) => {
//   $('.slide-news').slick({
//     prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//             nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
//         });
//   });
// })


$(document).ready(function(){
  $('.slide-news, .slide-related').slick({
      prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'></button>"
  });

  $(".popup-video").modalVideo({
    controls: 0,
  });
});

import './menu';
