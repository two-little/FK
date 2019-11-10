onload = function () {
	var FuckAss = document.getElementById("FuckAss");
	var FuckYouAvatar = document.getElementById("FuckYouAvatar");
	//					var confirms = document.getElementsByClassName("confirm");
	//					for(var i = 0; i < confirms.length; i++) {
	//						confirms[i]
	//					}


	window.onscroll = function () {
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(osTop);
		if (osTop <= 50) {
//			FuckAss.style.top = "90%";
			FuckYouAvatar.style.width = "200px";
			FuckYouAvatar.style.height = "200px";
			FuckYouAvatar.style.top = "calc(0px - (200px / 2))";
			


		}

		if (osTop > 0) {
//			FuckAss.style.top = "20%";
			FuckYouAvatar.style.width = "150px";
			FuckYouAvatar.style.height = "150px";
			FuckYouAvatar.style.top = "calc(0px - (150px / 2))";
		}
	}

}
