onload = function () {
	var FuckAss = document.getElementById("FuckAss");
	var FuckYouAvatar = document.getElementById("FuckYouAvatar");

	window.onscroll = function () {
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(osTop);
		if (osTop <= 50) {
			$("#FuckYouAvatar").css({
				'transform':'scale(1.2)'
			});
		}
		if (osTop > 0) {
			
			$("#FuckYouAvatar").css({
				'transform':'scale(0.8) rotate(360deg)'
			});
			
		}
	}

}
