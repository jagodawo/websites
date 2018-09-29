function upDate() { 
	var allCorrectRadios = document.getElementsByClassName('input_correct');
	var points = 0;

    for (var i=0; i<allCorrectRadios.length; i++) {
    	var currentRadio = allCorrectRadios[i];
    	var isHidden = (currentRadio.offsetParent === null);

    	if (!isHidden && currentRadio.checked) {
    		points = points + 1;
    	}
    }

	document.getElementById('score').value = points;
}

function showCorrect(){
	var allCorrectLabels = document.getElementsByClassName('label_correct');

	for (var i=0; i<allCorrectLabels.length; i++) {
		allCorrectLabels[i].style.color ='#ffffff';
		allCorrectLabels[i].style.background ='rgb(92, 157, 125)';
	}
}

function resetAll(){

	var allResetLabels = document.getElementsByClassName('label_correct');
	var allResetRadios = document.getElementsByTagName('input');

	document.getElementById('score').value = '';

	for (var i=0; i<allResetLabels.length; i++) {
		allResetLabels[i].style.color ='#121212';
		allResetLabels[i].style.background ='rgb(92, 157, 125)';	
	}


	for (var i=0; i<allResetRadios.length; i++) {
		allResetRadios[i].checked = false;
	}
	
}

function showQuiz1(){

	document.getElementById('FirstQuiz').style.display = 'inline-block';
	document.getElementById('SecondQuiz').style.display = 'none';
	document.getElementById('ThirdQuiz').style.display = 'none';
	document.getElementById('end-buttons').style.display = 'inline-block';

	resetAll();
}

function showQuiz2(){

	document.getElementById('SecondQuiz').style.display = 'inline-block';
	document.getElementById('FirstQuiz').style.display = 'none';
	document.getElementById('ThirdQuiz').style.display = 'none';
	document.getElementById('end-buttons').style.display = 'inline-block';

	resetAll();
}

function showQuiz3(){

	document.getElementById('ThirdQuiz').style.display = 'inline-block';
	document.getElementById('FirstQuiz').style.display = 'none';
	document.getElementById('SecondQuiz').style.display = 'none';
	document.getElementById('end-buttons').style.display = 'inline-block';

	resetAll();
}

function pageLoaded() {
	// Hide div with end buttons because intially no quiz is visible
	document.getElementById('end-buttons').style.display = 'none';
}

function createMapOfBerlin() {
	var location = new google.maps.LatLng(52.5200, 13.4050);

    var mapProp = {
        center: location,
        zoom: 5,
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp);

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Berlin" 
    });
}