$(document).ready(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
		var waypoint = $("#apply-container").offset().top;
		var progress = scroll / waypoint;
		// console.log(progress);
		var translate = -160 * progress
		// var zoom = 1 + 0.1*progress
		if (progress >= 0 && progress <= 1){
			$("#background").css(
			'transform', 'translateY('+translate+'px)' );
			
			$("#home-overlay").css(
			'transform', 'translateY('+translate+'px)' );
		}


        if (scroll >= 100) {
            $("#topbar").addClass("smaller");
            $("#topbar #logo").addClass("smaller");
            $("#topbar #logo #at").addClass("smaller");
            $("#topbar #logo #cal").addClass("smaller");
            $("#topbar #profile-pic").addClass("smaller");

        } else {
            $("#topbar").removeClass("smaller");
            $("#topbar #logo").removeClass("smaller");
            $("#topbar #logo #at").removeClass("smaller");
            $("#topbar #logo #cal").removeClass("smaller");
            $("#topbar #profile-pic").removeClass("smaller");
        };

        // if (scroll >= 450) {
        // 	$("#topbar.smaller").addClass("about");
        // } else {
        // 	$("#topbar.smaller.about").removeClass("about");
        // };

        // if (scroll >= 850) {
        // 	$("#topbar.smaller").addClass("staff");
        // } else {
        // 	$("#topbar.smaller.staff").removeClass("staff");
        // };

        // if (scroll >= 2170) {
        // 	$("#topbar.smaller").addClass("apply");
        // } else {
        // 	$("#topbar.smaller.apply").removeClass("apply");
        // };

	});

	// $(".intern-photo").hover(
	// 	function() {
	// 		$(".intern-photo").not(this).addClass("dimmed");
	// 		$("#bio-sample").css("opacity", "0");
	// 	},
	// 	function() {
	// 		$(".intern-photo").not(this).removeClass("dimmed");
	// 		$("#bio-sample").css("opacity", 1);
	// 	}
	// );

	// $("#deg0").hover(
	// 	function() {
	// 		$("#bio-deg0").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg0").css("opacity", 0);
	// 	}
	// );

	// $("#deg30").hover(
	// 	function() {
	// 		$("#bio-deg30").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg30").css("opacity", 0);
	// 	}
	// );

	// $("#deg60").hover(
	// 	function() {
	// 		$("#bio-deg60").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg60").css("opacity", 0);
	// 	}
	// );

	// $("#deg90").hover(
	// 	function() {
	// 		$("#bio-deg90").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg90").css("opacity", 0);
	// 	}
	// );

	// $("#deg120").hover(
	// 	function() {
	// 		$("#bio-deg120").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg120").css("opacity", 0);
	// 	}
	// );

	// $("#deg150").hover(
	// 	function() {
	// 		$("#bio-deg150").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg150").css("opacity", 0);
	// 	}
	// );

	// $("#deg180").hover(
	// 	function() {
	// 		$("#bio-deg180").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg180").css("opacity", 0);
	// 	}
	// );

	// $("#deg210").hover(
	// 	function() {
	// 		$("#bio-deg210").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg210").css("opacity", 0);
	// 	}
	// );

	// $("#deg240").hover(
	// 	function() {
	// 		$("#bio-deg240").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg240").css("opacity", 0);
	// 	}
	// );

	// $("#deg270").hover(
	// 	function() {
	// 		$("#bio-deg270").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg270").css("opacity", 0);
	// 	}
	// );

	// $("#deg300").hover(
	// 	function() {
	// 		$("#bio-deg300").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg300").css("opacity", 0);
	// 	}
	// );

	// $("#deg330").hover(
	// 	function() {
	// 		$("#bio-deg330").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg330").css("opacity", 0);
	// 	}
	// );

	// $("#deg360").hover(
	// 	function() {
	// 		$("#bio-deg360").css("opacity", 1);
	// 	},
	// 	function() {
	// 		$("#bio-deg360").css("opacity", 0);
	// 	}
	// );

	$("a").click(function() {
		$("html, body").animate({
			scrollTop: $($.attr(this,"href")).offset().top
		}, 500);
		return false;
	});



});

