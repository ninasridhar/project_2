$(document).ready(function(){

    $(".lupe").click(function () {
    	console.log('YO!')
        $(".navr").toggle("slow");
    	$(".nav").toggle("slow");
        $(".searchbox").slideToggle("fast");
    });

    $(".more").click(function () {
        console.log('YO!')
        $(".nav").toggle("slow");
        $(".navr").toggle("slow");
        $(".searchbox").slideToggle("fast");
    });

    //$(".albumbutton").click(function () {
    //    console.log('YO!')
    //    $(".albumsswitch").toggle("fast");
    //    $(".imagesswitch").slideToggle("fast");
    //});
    //$(".imagebutton").click(function () {
    //    console.log('YO!')
    //    $(".imagesswitch").toggle("fast");
    //    $(".albumsswitch").slideToggle("fast");
    //});

    $('.drawers').find('h5').click(function(){
    $(this).next().slideToggle();
    $(".drawers p").not($(this).next()).slideUp();
	});


    $('.accordion').find('h3').click(function(){
    $(this).next().slideToggle();
    $(".accordion img").not($(this).next()).slideUp();
    });

    //$('li ul').hide().removeClass('fallback');
    //$('li').hover(
    //    function () {
    //$('ul', this).stop().slideDown(1000);
    //    },
    //    function () {
    //$('ul', this).stop().slideUp(1000);
    //    }
    //);
});



