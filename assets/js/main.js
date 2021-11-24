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
  }

  const swiperBusinesses = new Swiper(".swiper-businesses", {
    slidesPerView: 5,
    slidesPerColumn: 3,
    slidesPerGroup: 3,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-businesses .swiper-button-next",
      prevEl: ".swiper-businesses .swiper-button-prev",
    },
    breakpoints: {
      500: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          slidesPerGroup :2,
          spaceBetween: 15,
      },
      1200: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          slidesPerGroup :3,
          spaceBetween: 15,
      },
    
    },
  });

  const swiperPartners = new Swiper(".swiper-partners", {
    slidesPerView: 3,
    slidesPerColumn: 3,
    slidesPerGroup: 3,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-partners .swiper-button-next",
      prevEl: ".swiper-partners .swiper-button-prev",
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup :2,
        spaceBetween: 15,
    },
      1200: {
          slidesPerView: 3,
          slidesPerColumn: 3,
          slidesPerGroup :3,
          spaceBetween: 15,
      },
    },
  });
});
