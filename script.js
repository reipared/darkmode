$(".toggle-overlay").on("click", function () {
	let $t = $(".toggle");
	let $b = $("body");
	if ($t.hasClass("night")) {
		$t.removeClass("night");
		$t.addClass("day");
		$b.removeClass("night");
		$b.addClass("day");
	} else {
		$t.addClass("night");
		$t.removeClass("day");
		$b.addClass("night");
		$b.removeClass("day");
	}
});
