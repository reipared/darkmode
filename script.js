$(".toggle-overlay").on("click", function () {
	let $t = $(".toggle");
	let $b = $("body");
	$t.toggleClass("night day");
	$b.toggleClass("night day");
});
