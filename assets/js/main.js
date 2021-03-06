$(document).ready(function () {
  if ($(window).innerWidth() >= 992) {
    $('#fullview').pagepiling({
        menu: '#navbar',
        anchors: ['home', 'about-us', 'products', 'benefits', 'clients', 'contact'],
        // sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
        navigation: {
            'position': 'right',
            'tooltips': ['Home', 'About Us', 'Products', 'Benefits', 'Clients', 'Contact']
        },
    });
    // var fv = $("#fullview").fullView({
    //   //Navigation
    //   navbar: "#navbar",
    //   dots: true,
    //   dotsPosition: "right",
    //   dotsTooltips: true,

    //   //Scrolling
    //   easing: "swing",
    //   backToTop: true,

    //   // Accessibility
    //   keyboardScrolling: true,

    //   // Callback
    //   onScrollEnd: function (currentView, previousView, direction) {
    //     // console.log("Direction", direction)
    //     // console.log("Current", currentView)
    //     // console.log("Previus", previousView)
    //   },
    //   onScrollStart: function (currentView, destinationView, direction) {
    //     console.log("Direction", direction);
    //     console.log("Current", currentView);
    //     console.log("Destination", destinationView);
    //   },
    // });

    // $("#down").click(function () {
    //   // To Scroll Down 1 Section
    //   fv.data("fullView").scrollDown();

    //   // To Scroll Up 1 Section
    //   // fv.data('fullView').scrollDown();
    // });
  } else {
    $(".nav-home").removeClass("active");
    $(".navbar .navbar-nav .nav-item").click(function(){
      $(".navbar .navbar-toggler").click();
    });
  }

  const swiperBusinesses = new Swiper(".swiper-businesses", {
    slidesPerView: 5,
    slidesPerColumn: 3,
    slidesPerGroup: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-businesses .swiper-button-next",
      prevEl: ".swiper-businesses .swiper-button-prev",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          slidesPerGroup: 1,
          spaceBetween: 15,
      },
      1200: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          slidesPerGroup: 1,
          spaceBetween: 15,
      },
    
    },
  });

  const swiperPartners = new Swiper(".swiper-partners", {
    slidesPerView: 3,
    slidesPerColumn: 3,
    slidesPerGroup: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-partners .swiper-button-next",
      prevEl: ".swiper-partners .swiper-button-prev",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 1,
        spaceBetween: 15,
    },
      1200: {
          slidesPerView: 3,
          slidesPerColumn: 3,
          slidesPerGroup: 1,
          spaceBetween: 15,
      },
    },
  });

  if ($('.products').length) {
    $('.products .products-tabs .nav-link').click(function() {
        var imgSrc = $(this).attr('imgsrc');
        $('.products .products-tabs .nav-link').removeClass("active");
        $(this).addClass("active")
        $('.tab_img img').attr('src', imgSrc);

    })
    $('.products .products-tabs .nav-link').mouseover(function() {
      var imgSrc = $(this).attr('imgsrc');
      $('.products .products-tabs .nav-link').removeClass("active");
      $(this).addClass("active")
      $('.tab_img img').attr('src', imgSrc);

  })

}

  // $(".products .products-tabs .nav-link").hover(function(){
  //   $(this).click()
  // });
});
