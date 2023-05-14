// ========================================================================
//	Easy Pie Charts
// ========================================================================

$(document).ready(function () {

	//Facebook//
	if ($('#easy1').length) {
		$('#easy1').easyPieChart({
			easing: 'easeOutBounce',
			lineWidth: '10',
			size: 110,
			trackColor: '#343943',
			lineCap: 'butt',
			barColor: '#47639e',
			scaleColor: "#fff",
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if ($('#easy1-1').length) {
		$('#easy1-1').easyPieChart({
			easing: 'easeOutBounce',
			lineWidth: '10',
			size: 110,
			trackColor: '#343943',
			lineCap: 'butt',
			barColor: '#47639e',
			scaleColor: "#343943",
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}

	//Twitter//
	if ($('#easy2').length) {
		$('#easy2').easyPieChart({
			easing: 'easeOutBounce',
			lineWidth: '10',
			size: 110,
			trackColor: '#343943',
			lineCap: 'round',
			barColor: '#55acee',
			scaleColor: false,
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if ($('#easy2-1').length) {
		$('#easy2-1').easyPieChart({
			easing: 'easeOutBounce',
			lineWidth: '10',
			size: 110,
			trackColor: '#f5f5f7',
			lineCap: 'round',
			barColor: '#55acee',
			scaleColor: false,
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	//Pinterest//
	if ($('#easy3, #easy3-1').length) {
		$('#easy3, #easy3-1').easyPieChart({
			easing: 'easeOutBounce',
			lineWidth: '5',
			size: 110,
			trackColor: '#343943',
			lineCap: 'butt',
			barColor: '#cb2027',
			scaleColor: false,
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	//Dribble//
	if ($('#easy4').length) {
		$('#easy4').easyPieChart({
			easing: 'easeOutBounce',
			lineWidth: '10',
			size: 110,
			trackColor: '#343943',
			lineCap: 'butt',
			barColor: '#f2e291',
			scaleColor: '#fff',
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	
	if ($('#easy4-1').length) {
		$('#easy4-1').easyPieChart({
			easing: 'easeOutBounce',
			lineWidth: '10',
			size: 110,
			trackColor: '#f2e291',
			lineCap: 'butt',
			barColor: '#343943',
			scaleColor: '#343943',
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}

	//GooglePlus//
	if ($('#easy5, #easy5-1').length) {
		$('#easy5, #easy5-1').easyPieChart({
			easing: 'easeOutBounce',
			lineWidth: '25',
			size: 110,
			trackColor: '#fff',
			lineCap: 'butt',
			barColor: '#a0c3ff',
			scaleColor: false,
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}

	//VK//
	if ($('#easy6, #easy6-1').length) {
		$('#easy6, #easy6-1').easyPieChart({
			easing: 'easeOutBounce',
			lineWidth: '10',
			size: 110,
			trackColor: '#f85050',
			lineCap: 'butt',
			barColor: '#597da3',
			scaleColor: false,
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));

			}
		});
	}

	if ($('#easy7').length) {
		$('#easy7').easyPieChart({
			easing: 'easeOutBounce',
			lineWidth: '23',
			trackColor: '#999',
			lineCap: 'butt',
			barColor: '#fff',
			scaleColor: false,
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}

	if ($('#easy8').length) {
		$('#easy8').easyPieChart({
			easing: 'easeOutBounce',
			lineWidth: '23',
			trackColor: '#cacac8',
			lineCap: 'butt',
			barColor: '#949fb2',
			scaleColor: false,
			onStep: function (from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}

});