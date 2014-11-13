$(document).ready(function(){

    $(".lupe").click(function () {
    	console.log('YO!')
    	$(".nav").toggle("slow");
        $(".navr").toggle("slow");
        $(".searchbox").slideToggle("fast");
    });

    $(".more").click(function () {
        console.log('YO!')
        $(".nav").toggle("slow");
        $(".navr").toggle("slow");
        $(".searchbox").slideToggle("fast");
    });


    // $(".albumbutton").click(function () {
        // console.log('YO!')
        // $(".albumsswitch").toggle("fast");
        // $(".imagesswitch").slideToggle("fast");
    // });
    
    // $(".imagebutton").click(function () {
        // $(".imagesswitch").toggle("fast");
        // $(".albumsswitch").slideToggle("fast");
    // });



    $('.drawers').find('h5').click(function(){
    $(this).next().slideToggle();
    $(".drawers p").not($(this).next()).slideUp();
	});
});



