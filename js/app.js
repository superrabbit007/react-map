var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.7413549, lng: -73.9980244},
    	zoom: 13
	});
	var markers = [];
	// var marker;
	// marker = new google.maps.Marker({
	// 	position: ,
	// 	map: map,
	// 	title: 
	// })
};

let menu = document.querySelector('#menu');
let nav = document.querySelector('nav');
let maping = document.querySelector('#map');
console.log(menu);
menu.addEventListener('click', function(e) {
	console.log(e.target);
	nav.classList.toggle('open');
	// maping.classList.toggle('move');

});