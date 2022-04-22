$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 12,
        nav: true,
        loop:true,
        navigation: true,
        dots: false,
        navText:["<div class='nav-btn prev-slide prev-btn'><svg width='14.6' height='27' viewBox='0 0 16 27' xmlns='http://www.w3.org/2000/svg' class='FXox6K'><path d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z' fill='#000' class='FXox6K'></path></svg></div>","<div class='next-btn nav-btn next-slide'><svg width='14.6' style='transform: rotate(180deg);' height='27' viewBox='0 0 16 27' xmlns='http://www.w3.org/2000/svg' class='_2-wzdc'><path d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z' fill='#000' class='FXox6K'></path></svg></div>"],
        responsive: {
        0: {
            items: 2
        },

        600: {
            items: 3
        },

        1000: {
            items: 4
        },

        1200: {
          items: 6
        }
        }
        });

    
     $('.owl-carousel-single').owlCarousel({
      margin:0,
      loop:true,     
      nav:false,       
      items: 5,    
    })
  });


  $(' #client .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:6
        },
        600:{
            items:8
        },
        1000:{
            items:10
        },

        1200: {
          items: 12
        }
    }
})


$(' #offer .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
        1200: {
          items: 6
        }
    }
})



// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         margin: 12,
//         nav: true,
//         loop:true,
//         navigation: true,
//         navText:["<div class='nav-btn prev-slide prev-btn'><svg width='14.6' height='27' viewBox='0 0 16 27' xmlns='http://www.w3.org/2000/svg' class='FXox6K'><path d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z' fill='#000' class='FXox6K'></path></svg></div>","<div class='next-btn nav-btn next-slide'><svg width='14.6' style='transform: rotate(180deg);' height='27' viewBox='0 0 16 27' xmlns='http://www.w3.org/2000/svg' class='_2-wzdc'><path d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z' fill='#000' class='FXox6K'></path></svg></div>"],
    
//         responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 6
//         }
//         }
//         });

//         $('.owl-carousel-single').owlCarousel({
//             margin:0,
//             autoplay:false,  
//             loop:false,     
//             nav:false,     
//             items: 4,  
//           })
// });

$('.offcanvas-backdrop').click(function (e) { 
    console.log("dnnnsdn")
    $('.offcanvas-backdrop').closest('div').remove(); 
});

$(".mobile-menu--btn").click(function(){
    $(".offcanvas.offcanvas-start").toggleClass("show");
    $(".offcanvas.offcanvas-start").css("visibility", "visible");
    setTimeout(() => {
        $(".mobile-bg-color").css("display", "block");
    }, 100);
  });

  $(".mobile-bg-color").click(function(){
    $(".offcanvas.offcanvas-start").toggleClass("show");
    $(".offcanvas.offcanvas-start").removeAttr("visibility");
    $(".mobile-bg-color").css("display", "none");
  });

  	window.addEventListener("resize", function() {
		"use strict"; window.location.reload(); 
	});


	document.addEventListener("DOMContentLoaded", function(){
        
        /////// Prevent closing from click inside dropdown
		document.querySelectorAll('.dropdown-menu').forEach(function(element){
			element.addEventListener('click', function (e) {
			  e.stopPropagation();
			});
		});

		// make it as accordion for smaller screens
		if (window.innerWidth < 992) {

			// close all inner dropdowns when parent is closed
			document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
				everydropdown.addEventListener('hidden.bs.dropdown', function () {
					// after dropdown is hidden, then find all submenus
					  this.querySelectorAll('.megasubmenu').forEach(function(everysubmenu){
					  	// hide every submenu as well
					  	everysubmenu.style.display = 'none';
					  });
				})
			});

			document.querySelectorAll('.has-megasubmenu a').forEach(function(element){
				element.addEventListener('click', function (e) {
		
				  	let nextEl = this.nextElementSibling;
				  	if(nextEl && nextEl.classList.contains('megasubmenu')) {	
				  		// prevent opening link if link needs to open dropdown
				  		e.preventDefault();

				  		if(nextEl.style.display == 'block'){
				  			nextEl.style.display = 'none';
				  		} else {
				  			nextEl.style.display = 'block';
				  		}

				  	}
				});
			})
		}

	}); 