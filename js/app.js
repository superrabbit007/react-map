var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 23.3790333, lng: 113.76328280000007},
    	zoom: 13
	});
	var markers = [];
	var locations=[
		{title:'深圳红树湾', location:{lat: 22.53056, lng: 113.96632799999998}},
		{title:'欢乐谷', location: {lat: 22.533468, lng: 113.99344819999999}},
		{title:'深圳白石洲华侨城', location: {lat: 22.533583, lng: 113.96849799999995}},
		{title:'深圳市盐田区大梅沙东部华侨城', location:{lat:22.631358 ,lng:114.28218500000003 }}];

	// for(i=0) {}
	locations.map(loc=>{
		let title=loc.title;
		let location=loc.location;
		let marker = new google.maps.Marker({
			position: location,
			map: map,
			title: title
		});
		return marker;
	});
	// var marker = new google.maps.Marker({
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

});