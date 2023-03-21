$('.add-slide-image').owlCarousel({
    loop:true,
    autoplay:true,
    // autoplayTimeout: 1000,
    autoplayHoverPause:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1.6
        },
        600:{
            items:2
        },
        800:{
            items:1.2
        }
    }
})
$(document).ready(function(){
    $(".more").click(function(){
        $(this).removeClass("li-item")
        $(this).children(".menu-text").toggle()
        $(this).addClass("li-item")
        if($(this).hasClass("li-item")){
            // $(this).siblings().removeClass("li-item")
            $(this).siblings().children(".menu-text").hide()

        }
    })
})







