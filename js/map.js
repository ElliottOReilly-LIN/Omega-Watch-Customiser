var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    
    // amended to my own chosen location
    center: {lat: 53.430930, lng: -2.961707}, // lat/long of center of map
    zoom: 17, // 8 or 9 is typical zoom 
    mapTypeControl: true, //default
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    zoomControl: true, //default
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    streetViewControl: true, //default
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    }, 
    fullscreenControl: true
  });
  var marker = new google.maps.Marker({
  position: {lat: 53.430930, lng: -2.961707}, // lat/long of marker
  map: map,
  animation: google.maps.Animation.DROP, // drops marker in from top
  title: '*****The unofficial Elliott OReilly***** OMEGA Workshop', // title on hover over marker
  
});
}