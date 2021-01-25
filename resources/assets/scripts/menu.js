
// action toggle menu
$(document).ready(function(){
    $(".navbar-toggler").click(function(){
      $("body").toggleClass("nav-open nav-close");
    });
});
$(document).ready(function(){
    $(".bg-overlay, .close").click(function(){
      $("body").removeClass("nav-open");
    });
});


// toggle button search
$(document).ready(function(){
  $(".btn-search").click(function(){
    $("body").toggleClass("search-open");
  });
});
$(document).ready(function(){
  $(".close").click(function(){
    $("body").removeClass("search-open");
  });
});