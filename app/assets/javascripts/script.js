$(document).ready(function(){
    $(".lupe").click(function () {
    	console.log('YO!')
    	$(".nav").toggle("fast");
        $(".searchbox").slideToggle("fast");
    });

});


var playAudio = $("audio")[0];
$(".icon")
	.mouseenter(function() {
		playAudio.play();
	});

