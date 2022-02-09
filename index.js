var lastScroll = 0;
var navbar = $("header");
$(window).scroll(function(){
        var scrollP = window.scrollY;
        if (scrollP > lastScroll){
            navbar.slideUp();
        }
        else{
            navbar.slideDown();
        }
        lastScroll = scrollP;
    
});

$(".nav-logo").click(function(){
    $(window).scrollTop(0);
})

$(".nav-link").click(function(e){
    e.preventDefault();
    $("body,html").animate({
        scrollTop: $(this.hash).offset().top
    },700)
    setTimeout(function(){navbar.slideUp()} , 800);
})
