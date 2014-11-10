$(document).ready(function(){
    $(".letitappear").click(function () {
    	$(".nav").toggle("fast");
        $(".searchbox").slideToggle("fast");
    });

});


var playAudio = $("audio")[0];
$(".icon")
	.mouseenter(function() {
		playAudio.play();
	});

