$(document).ready(function(){

    $(".lupe").click(function () {
    	console.log('YO!')
    	$(".nav").toggle("slow");
        $(".searchbox").slideToggle("fast");
    });

    $(".albumbutton").click(function () {
        console.log('YO!')
        $(".albumsswitch").toggle("fast");
        $(".imagesswitch").slideToggle("fast");
    });

    $('.drawers').find('h5').click(function(){
    $(this).next().slideToggle();
    $(".drawers p").not($(this).next()).slideUp();
	});
    
    $(".lupe").mouseenter(function(){
    $("<audio></audio>").attr({ 
        'src':'audios/snap.wav', 
        'volume':0.4,
        'autoplay':'autoplay'
    }).appendTo("body");
});
});



