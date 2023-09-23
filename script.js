$(document).ready(function () {
    function fadeOutEffect() {
      var fadeTarget = document.querySelector("#pageloader");
      var fadeEffect = setInterval(function () {
           
              fadeTarget.style.display = "none";
         
      }, 3000);
  }
  
  fadeOutEffect();
      $(window).scroll(function () {
        // ------------------------------ sticky navbar on scroll script ------------------------------ //
        if (this.scrollY > 20) {
          $(".navbar").addClass("sticky");
        } else {
          $(".navbar").removeClass("sticky");
        }
    
        // ------------------------------ scroll-up button show/hide script ------------------------------ //
        if (this.scrollY > 500) {
          $(".scroll-up-btn").addClass("show");
        } else {
          $(".scroll-up-btn").removeClass("show");
        }
      });
    
      // ------------------------------ slide-up script ------------------------------ //
    
      $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        // ------------------------------ removing smooth scroll on slide-up button click ------------------------------ //
        $("html").css("scrollBehavior", "auto");
      });
    
      $(".navbar .menu li a").click(function () {
        // ------------------------------ Smooth scroll on Menu Items click ------------------------------ //
    
        $("html").css("scrollBehavior", "smooth");
      });
    
      // ------------------------------ Toggle Navbar ------------------------------ //
    
      $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
      });
    
      // ------------------------------ Typing Text Animation ------------------------------ //
    
      var typed = new Typed(".typing", {
        strings: ["Frontend Developer", "Designer", "Backend Developer" , "Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
    
      var typed = new Typed(".typing-2", {
        strings: ["Frontend Developer", "Designer", "Backend Developer" , "Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
    
      // ------------------------------ Owl Carousel ------------------------------ //
    
      $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: false
          }
        }
      });
    });
    
    
    
      var t1 = gsap.timeline(
        { 
            scrollTrigger :{
            trigger : "#about",
            start : "top 20% ",
            end : " center bottom",
            markers : true,
            scrub : 4 ,
            pin : true
            }
               
        }
    )
    t1.from(".title", {
        y : 700,
        duration : 10,
        stagger : .8,
        // ease : Expo.easeIn
        ease: "slow(0.7, 0.7, false)"
    })
    
    t1.from(".column " , {
      y : 400,
      duration : 15,
      stagger : .8,
      // ease : Expo.easeIn
      ease: "slow(0.7, 0.7, false)"
    })
    // $('#about1').textillate({ in: { effect: 'rollIn' } });
  
  
  
  