// JustGage Examples
// Syntax provided by vendor


window.onload = function () {
    var g1 = new JustGage({
        id: "g1",
        value: getRandomInt(350, 980),
        min: 350,
        max: 980,
        title: "Visitors",
        label: "Per Minute",
        levelColors: ["#9ab946"],
        titleFontColor: '#969ead',
        gaugeColor: '#969ead',
        valueFontColor: "#969ead",
        showInnerShadow: false,
        titleFontFamily: "iran",
        valueFontFamily: "iran"

    });

    var g2 = new JustGage({
        id: "g2",
        value: getRandomInt(90, 100),
        min: 5,
        max: 100,
        symbol: "\xB0",
        gaugeColor: '#565e6e',
        title: "درجه حرارت",
        label: "Current",
        customSectors: [{
            color: "#9ab946",
            lo: 0,
            hi: 25
		}, {
            color: "#f0ad4e",
            lo: 25,
            hi: 50
		}, {
            color: "#f85050",
            lo: 50,
            hi: 100
		}],
        gaugeWidthScale: 0.6,
        titleFontColor: '#969ead',
        valueFontColor: "#969ead",
        showInnerShadow: false,
        titleFontFamily: "iran",
        valueFontFamily: "iran"
    });

    var g3 = new JustGage({
        id: "g3",
        value: getRandomInt(50, 100),
        min: 50,
        max: 100,
        title: "Disc Usage",
        label: "Current",
        titleFontColor: '#969ead',
        gaugeColor: '#969ead',
        levelColors: ["#f85050"],
        valueFontColor: "#969ead",
        showInnerShadow: false,
        titleFontFamily: "iran",
        valueFontFamily: "iran"
    });

    var g4 = new JustGage({
        id: "g4",
        value: getRandomInt(350, 980),
        min: 350,
        max: 980,
        gaugeColor: '#969ead',
        titleFontColor: '#969ead',
        levelColors: ["#5bc0de"],
        valueFontColor: "#969ead",
        title: "DB Queries",
        label: "Current",
        showInnerShadow: false,
        titleFontFamily: "iran",
        valueFontFamily: "iran"
    });

    var g5 = new JustGage({
        id: "g5",
        value: getRandomInt(5, 100),
        hideMinMax: true,
        symbol: "\xB0",
        gaugeColor: '#30353e',
        title: "حرارت سیستم 1",
        customSectors: [{
            color: "#9ab946",
            lo: 0,
            hi: 25
		}, {
            color: "#f0ad4e",
            lo: 25,
            hi: 50
		}, {
            color: "#f85050",
            lo: 50,
            hi: 100
		}],
        gaugeWidthScale: 1,
        titleFontColor: '#fff',
        valueFontColor: "#fff",
        showInnerShadow: false,
        titleFontFamily: "iran",
        valueFontFamily: "iran"
    });

    var g6 = new JustGage({
        id: "g6",
        value: getRandomInt(5, 100),
        hideMinMax: true,
        symbol: "\xB0",
        gaugeColor: '#30353e',
        title: "حرارت سیستم 2",
        customSectors: [{
            color: "#9ab946",
            lo: 0,
            hi: 25
		}, {
            color: "#f0ad4e",
            lo: 25,
            hi: 50
		}, {
            color: "#f85050",
            lo: 50,
            hi: 100
		}],
        gaugeWidthScale: 1,
        titleFontColor: '#fff',
        valueFontColor: "#fff",
        showInnerShadow: false,
        titleFontFamily: "iran",
        valueFontFamily: "iran"
    });

    var g7 = new JustGage({
        id: "g7",
        value: getRandomInt(5, 100),
        hideMinMax: true,
        symbol: "\xB0",
        gaugeColor: '#30353e',
        title: "حرارت سیستم 3",
        customSectors: [{
            color: "#9ab946",
            lo: 0,
            hi: 25
		}, {
            color: "#f0ad4e",
            lo: 25,
            hi: 50
		}, {
            color: "#f85050",
            lo: 50,
            hi: 100
		}],
        gaugeWidthScale: 1,
        titleFontColor: '#fff',
        valueFontColor: "#fff",
        showInnerShadow: false,
        titleFontFamily: "iran",
        valueFontFamily: "iran"
    });

    var g8 = new JustGage({
        id: "g8",
        value: getRandomInt(5, 100),
        hideMinMax: true,
        symbol: "\xB0",
        gaugeColor: '#30353e',
        title: "حرارت سیستم 4",
        customSectors: [{
            color: "#9ab946",
            lo: 0,
            hi: 25
		}, {
            color: "#f0ad4e",
            lo: 25,
            hi: 50
		}, {
            color: "#f85050",
            lo: 50,
            hi: 100
		}],
        gaugeWidthScale: 1,
        titleFontColor: '#fff',
        valueFontColor: "#fff",
        showInnerShadow: false,
        titleFontFamily: "iran",
        valueFontFamily: "iran"
    });



    setInterval(function () {
        g1.refresh(getRandomInt(350, 980));
        g2.refresh(getRandomInt(0, 49));
        g3.refresh(getRandomInt(50, 100));
        g4.refresh(getRandomInt(350, 980));
    }, 1500);


    document.getElementById('gauges-refresher').addEventListener('click', function (e) {
        e.preventDefault();
        g5.refresh(getRandomInt(0, 90));
        g6.refresh(getRandomInt(0, 90));
        g7.refresh(getRandomInt(0, 90));
        g8.refresh(getRandomInt(0, 90));
    });


};