(function ($) {
  $(document).ready(function(){
 
    // hide .navbar first
    $(".navbar").hide();
 
    // fade in .navbar
    $(function () {
        $(window).scroll(function () 
        	{
            var elemento = document.getElementById("header").offsetHeight;
            // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() >= elemento) 
            	{
                $('.navbar').fadeIn();
            	} 
            else 
            	{
                $('.navbar').fadeOut();
            	}
        	});
    });

});
  }(jQuery));

$('a.scroll').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});
