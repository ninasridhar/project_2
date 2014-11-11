$(document).ready(function(){
    $(".lupe").click(function () {
    	console.log('YO!')
    	$(".nav").toggle("fast");
        $(".searchbox").slideToggle("fast");
    });
    $('.drawers').find('h5').click(function(){
    $(this).next().slideToggle();
    $(".drawers p").not($(this).next()).slideUp();
	});
});





var playAudio = $("audio")[0];
$(".icon")
	.mouseenter(function() {
		playAudio.play();
	});

