$(document).ready(function () {

  //Initiate glightbox
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  //Initiate Portfolio glightbox
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  // Testimonials slider
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  // Portfolio details slider
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  // Animation on scroll
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // Remove preloader
  if ($('#preloader').length) {
    $('#preloader').remove()
  }

});


$(window).scroll(() => {

  // Header fixed top on scroll
  if ($('#header').length) {
    if ($(window).scrollTop() > $('#topbar').height()) {
      $('#header').addClass("fixed-top header-scrolled")
      $('#header').next().addClass("scrolled-offset")
    } else {
      $('#header').removeClass("fixed-top")
      $('#header').next().removeClass("scrolled-offset")
    }
  }

  // Back to top button
  if ($('.back-to-top').length) {
    if ($(window).scrollTop() > 100) {
      $('.back-to-top').addClass('active')
    } else {
      $('.back-to-top').removeClass('active')
    }
  }

  // Active navbar links with respective sections
  if ($('#navbar .scrollto').length) {
    let position = $(window).scrollTop() + 200
    $('#navbar .scrollto').each((index, element) => {
      if ($(element).attr('href') == '#') return
      var sec = $($(element).attr('href'))
      if (!sec.length) return
      if (position >= sec.offset().top && position <= (sec.offset().top + sec.height())) {
        $(element).addClass('active')
      } else {
        $(element).removeClass('active')
      }
    })
  }

})


// Mobile nav toggle
$('.mobile-nav-toggle').click(function () {
  $('#navbar').toggleClass('navbar-mobile')
  $(this).toggleClass('bi-list bi-x')
});

// Mobile nav dropdowns activate
$('.navbar .dropdown > a').click(function (e) {
  if ($('#navbar').hasClass('navbar-mobile')) {
    e.preventDefault()
    $(this).next().toggleClass('dropdown-active')
  }
});

// Scroll with ofset on links with a class name .scrollto
$('.scrollto').click(function (e) {
  if ($(this).attr('href') == '#') return
  e.preventDefault()
  if ($('#navbar').hasClass('navbar-mobile')) {
    $('#navbar').removeClass('navbar-mobile')
    $('.mobile-nav-toggle').toggleClass('bi-list bi-x')
  }  
  $(window).scrollTop($($(this).attr('href')).position().top - $('#header').height() -16)
});