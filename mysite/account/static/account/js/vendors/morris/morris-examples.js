$(document).ready(function () {

if (document.getElementById('morris-area')) {
	Morris.Area({
		element: 'morris-area',
		data: [{
			period: '2012 Q1',
			iphone: 2666,
			ipad: 6000,
			ipadmini: 2647,
			itouch: 2647,
			imac: 2647
		}, {
			period: '2012 Q2',
			iphone: 2778,
			ipad: 2294,
			ipadmini: 1333,
			itouch: 2441,
			imac: 200
		}, {
			period: '2012 Q3',
			iphone: 4912,
			ipad: 1969,
			ipadmini: 1267,
			itouch: 2501,
			imac: 4234
		}, {
			period: '2012 Q4',
			iphone: 3767,
			ipad: 3597,
			ipadmini: 2001,
			itouch: 5689,
			imac: 7585
		}, {
			period: '2013 Q1',
			iphone: 6810,
			ipad: 1914,
			ipadmini: 6421,
			itouch: 2293,
			imac: 1290
		}, {
			period: '2013 Q2',
			iphone: 5670,
			ipad: 4293,
			ipadmini: 5692,
			itouch: 6881,
			imac: 3987
		}, {
			period: '2013 Q3',
			iphone: 4820,
			ipad: 3795,
			ipadmini: 2647,
			itouch: 1588,
			imac: 5690
		}, {
			period: '2013 Q4',
			iphone: 15073,
			ipad: 5967,
			ipadmini: 2100,
			itouch: 5175,
			imac: 6890
		}, {
			period: '2014 Q1',
			iphone: 10687,
			ipad: 4460,
			ipadmini: 1902,
			itouch: 2028,
			imac: 4523
		}, {
			period: '2014 Q2',
			iphone: 8432,
			ipad: 5713,
			ipadmini: 2647,
			itouch: 1791,
			imac: 907
		}

			  ],
		fillOpacity: '0.85',
		pointSize: 0,
		lineWidth: '5',
		hideHover: 'auto',
		gridTextSize: 11,
		smooth: 'false',
		pointStrokeWidths: '3',
		gridTextFamily: 'Roboto, Open Sans, sans-serif',
		lineColors: ["#a69958", "#bc5b34", "#0099cc", "#e97e51", "#f2d750", "#d24d33", "#f0ad4e"],
		xkey: 'period',
		ykeys: ['iphone', 'ipad', 'ipadmini', 'itouch', 'imac'],
		labels: ['iPhone', 'iPad', 'iPad Mini', 'iPod Touch', 'IMac']
	});

}

if (document.getElementById('morris-area-lines')) {
	Morris.Area({
		element: 'morris-area-lines',
		behaveLikeLine: true,
		data: [{
			period: '2012 Q1',
			iphone: 9666,
			ipad: 16500,
			ipadmini: 7647
		}, {
			period: '2012 Q2',
			iphone: 2778,
			ipad: 2294,
			ipadmini: 11333
		}, {
			period: '2012 Q3',
			iphone: 10912,
			ipad: 16969,
			ipadmini: 5267
		}, {
			period: '2012 Q4',
			iphone: 7767,
			ipad: 3597,
			ipadmini: 2001
		}, {
			period: '2013 Q1',
			iphone: 11810,
			ipad: 9914,
			ipadmini: 4421
		}, {
			period: '2013 Q2',
			iphone: 18670,
			ipad: 2200,
			ipadmini: 11692
		}, {
			period: '2013 Q3',
			iphone: 8820,
			ipad: 9195,
			ipadmini: 2647
		}, {
			period: '2013 Q4',
			iphone: 15073,
			ipad: 5967,
			ipadmini: 2100
		}, {
			period: '2014 Q1',
			iphone: 10687,
			ipad: 14460,
			ipadmini: 1902
		}, {
			period: '2014 Q2',
			iphone: 8432,
			ipad: 5713,
			ipadmini: 2647
		}

			  ],
		pointSize: 0,
		gridTextFamily: 'Roboto, Open Sans, sans-serif',
		gridTextSize: 11,
		gridTextColor: '#fff',
		pointStrokeWidths: '3',
		lineWidth: '0',
		lineColors: ["#9ab946", "#bc5b34", "#0099cc", "#e97e51", "#f2d750", "#d24d33"],
		xkey: 'period',
		resize: true,
		ykeys: ['iphone', 'ipad', 'ipadmini'],
		labels: ['iPhone', 'iPad', 'iPad Mini']
	});

}

if (document.getElementById('morris-line')) {

	var week_data = [{
		"period": "2011 W21",
		"licensed": 3171,
		"sorned": 660,
		"leaked": 839
	}, {
		"period": "2011 W20",
		"licensed": 3171,
		"sorned": 676,
		"leaked": 2999
	}, {
		"period": "2011 W19",
		"licensed": 666,
		"sorned": 656,
		"leaked": 660
	}, {
		"period": "2011 W18",
		"licensed": 3215,
		"sorned": 622,
		"leaked": 2650
	}, {
		"period": "2011 W17",
		"licensed": 3148,
		"sorned": 632,
		"leaked": 1890
	}, {
		"period": "2011 W16",
		"licensed": 3155,
		"sorned": 300,
		"leaked": 660
	}, {
		"period": "2011 W15",
		"licensed": 1491,
		"sorned": 667,
		"leaked": 660

	}, {
		"period": "2011 W14",
		"licensed": 3226,
		"sorned": 620,
		"leaked": 781
	}, {
		"period": "2011 W13",
		"licensed": 2245,
		"sorned": 200,
		"leaked": 660
	}, {
		"period": "2011 W12",
		"licensed": 999,
		"sorned": 300,
		"leaked": 660
	}, {
		"period": "2011 W11",
		"licensed": 3263,
		"sorned": 234,
		"leaked": 660
	}, {
		"period": "2011 W10",
		"licensed": 1250,
		"sorned": 3987,
		"leaked": 660
	}, {
		"period": "2011 W09",
		"licensed": 121,
		"sorned": 555,
		"leaked": 660
	}, {

		"period": "2011 W08",
		"licensed": 3085,
		"sorned": 234,
		"leaked": 532
	}, {
		"period": "2011 W07",
		"licensed": 3055,
		"sorned": 342,
		"leaked": 789
	}, {
		"period": "2011 W06",
		"licensed": 590,
		"sorned": 546,

		"leaked": 334
	}, {
		"period": "2011 W05",
		"licensed": 2943,
		"sorned": 2573,
		"leaked": 454
	}, {
		"period": "2011 W04",
		"licensed": 2806,
		"sorned": 489,
		"leaked": 2343
	}, {
		"period": "2011 W03",
		"licensed": 953,
		"sorned": 490,
		"leaked": 345
	}, {
		"period": "2011 W02",
		"licensed": 2702,
		"sorned": 23,
		"leaked": 660
	}, {
		"period": "2011 W01",
		"licensed": 132,
		"sorned": 2342,
		"leaked": 660
	}];

	Morris.Line({
		element: 'morris-line',
		lineWidth: '5',
		hideHover: 'auto',
		pointStrokeWidths: '3',
		gridTextFamily: 'Roboto, Open Sans, sans-serif',
		gridTextSize: 11,
		lineColors: ["#bc5b34", "#0099cc", "#e97e51", "#f2d750", "#d24d33", "#f0ad4e"],
		data: week_data,
		xkey: 'period',
		ykeys: ['licensed', 'sorned', 'leaked'],
		labels: ['Licensed', 'SORN', 'Pirates']
	});

}

if (document.getElementById('morris-stacked')) {
	Morris.Bar({
		element: 'morris-stacked',
		data: [{
			x: '2013 Q1',
			y: 3,
			z: 2,
			a: 3,
			b: 6
		}, {
			x: '2013 Q2',
			y: 2,
			z: null,
			a: 1,
			b: 3
		}, {
			x: '2013 Q3',
			y: 0,
			z: 2,
			a: 4,
			b: 2
		}, {
			x: '2013 Q4',
			y: 2,
			z: 4,
			a: 3,
			b: 1
		}],
		gridTextFamily: 'Roboto, Open Sans, sans-serif',
		gridTextSize: 11,
		barColors: ["#a69958", "#bc5b34", "#0099cc", "#e97e51", "#f2d750", "#d24d33"],
		xkey: 'x',
		ykeys: ['y', 'z', 'a', 'b'],
		labels: ['Y', 'Z', 'A', 'B'],
		stacked: true,
		hideHover: 'auto',
		resize: true

	});
}



if (document.getElementById('morris-bar')) {
	Morris.Bar({
		element: 'morris-bar',
		data: [{
			x: '2011 Q1',
			y: 3,
			z: 2,
			a: 3
		}, {
			x: '2011 Q2',
			y: 2,
			z: 3,
			a: 1
		}, {
			x: '2011 Q3',
			y: 1,
			z: 2,
			a: 4
		}, {
			x: '2011 Q4',
			y: 2,
			z: 4,
			a: 3
		}],
		gridTextFamily: 'Roboto, Open Sans, sans-serif',
		gridTextSize: 11,
		barColors: ["#8c6c84", "#81473a", "#a69958", "#bc5b34"],
		xkey: 'x',
		hideHover: 'auto',
		ykeys: ['y', 'z', 'a'],
		labels: ['Y', 'Z', 'A'],
		resize: true
	});
}
});