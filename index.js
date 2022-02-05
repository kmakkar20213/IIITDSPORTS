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