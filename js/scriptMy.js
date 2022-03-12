(function () {
	'use strict';
	//Auto hide mine menu

	//Animate main page
	$(document).ready(function () {
		var div = $('#animate-text>h1');
		div.animate({
			fontSize: '5.5em'
		}, 5000);
	});
	$(document).ready(function () {
		var div1 = $('#animate-text>h3');
		div1.animate({
			fontSize: '2.5em'
		}, 500);
	});

	// Show/hide product items.
	var overlay = document.getElementById('overlay'),
		overlayBox = document.getElementById('overlay-content'),
		btnMenu = document.getElementById('menu-toggle');

	$(document).ready(function () {
		$("#show-more").click(function () {
			if ($(this).find($(".fa")).hasClass('fa-angle-double-down')) {
				var div = $("#container-item");
				div.animate({
					height: '108em'
				}, 1000);
				$(this).find($(".fa")).removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
			} else {
				var div = $("#container-item");
				div.animate({
					height: '54em'
				}, 1000);
				$(this).find($(".fa")).removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
			}
		});
	});

	//Overlay
	$(document).ready(function () {
		$(".price-item").click(function () {
			overlay.style.display = "block";
			overlayBox.style.display = "block";
			btnMenu.style.display = "none";

		});
		$("#close-overlay").click(function () {
			overlay.style.display = "none";
			overlayBox.style.display = "none";
			btnMenu.style.display = "inline-block";
		});

	})

	$(document).ready(function () {
		$("#overlay-creator").hide();
		$("#overlayproduct-tab").click(function () {
			$("#overlaycreator-tab").removeClass('active');
			$("#overlay-product").show();
			$("#overlay-creator").hide();
		});
		$("#overlaycreator-tab").click(function () {
			$("#overlayproduct-tab").removeClass('active');
			$("#overlay-product").hide();
			$("#overlay-creator").show();
		});

	})
})();