//multiple item owl carousel js
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    autoHeight: true,
    // autoWidth:true,
    responsiveClass:true,
    center:true,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3,
            autoWidth:true,
        },
        992:{
            items:3
        }
    }
})



