// Just the defaults.
$("span.pie").peity("pie", {
	radius: '7',
	fill: ["#0099cc", "#5fb6c7", "#f85050"]

});
$(".donut").peity("donut", {
	radius: '7',
	fill: ["#0099cc", "#9ab946", "#565e6e"]
});

$(".line").peity("line", {
	strokeWidth: '2',
	stroke: "#9ab946",
	fill: "rgba(154, 185, 70, 0.3)",
	width: '80'
});

$(".bar").peity("bar", {
	width: '80'
});


// Using data attributes
$(".data-attributes span").peity("donut");



// Updating charts.
var updatingChart = $(".updating-chart").peity("line", {
	strokeWidth: '2',
	stroke: "#0099cc",
	fill: "rgba(0, 153, 204, 0.3)",
	width: 80
});

setInterval(function () {
	var random = Math.round(Math.random() * 10),
		values = updatingChart.text().split(",");
	values.shift();
	values.push(random);

	updatingChart
		.text(values.join(","))
		.change();
}, 1000);

// Updating charts.
var updatingChart2 = $(".updating-chart2").peity("line", {
	strokeWidth: '2',
	stroke: "#0099cc",
	fill: "rgba(0, 153, 204, 0.3)",
	width: 80
});

setInterval(function () {
	var random = Math.round(Math.random() * 10),
		values = updatingChart2.text().split(",");
	values.shift();
	values.push(random);

	updatingChart2
		.text(values.join(","))
		.change();
}, 1000);


//Admin Monitor

// Updating charts

var updatingcpu = $(".updating-cpu").peity("line", {
	strokeWidth: '2',
	stroke: "#f2e291",
	fill: "rgba(242, 226, 145, .8)",
	width: 130
});

setInterval(function () {
	var random = Math.round(Math.random() * 10),
		values = updatingcpu.text().split(",");
	values.shift();
	values.push(random);

	updatingcpu
		.text(values.join(","))
		.change();
}, 1000);

var updatingram = $(".updating-ram").peity("line", {
	strokeWidth: '2',
	stroke: "#886caf",
	fill: "rgba(136, 108, 175, .8)",
	width: 130
});

setInterval(function () {
	var random = Math.round(Math.random() * 10),
		values = updatingram.text().split(",");
	values.shift();
	values.push(random);

	updatingram
		.text(values.join(","))
		.change();
}, 1000);


var updatingethernet = $(".updating-ethernet").peity("line", {
	strokeWidth: '2',
	stroke: "#db7093",
	fill: "rgba(219, 112, 147, 0.8)",
	width: 130
});

setInterval(function () {
	var random = Math.round(Math.random() * 10),
		values = updatingethernet.text().split(",");
	values.shift();
	values.push(random);

	updatingethernet
		.text(values.join(","))
		.change();
}, 1000);

