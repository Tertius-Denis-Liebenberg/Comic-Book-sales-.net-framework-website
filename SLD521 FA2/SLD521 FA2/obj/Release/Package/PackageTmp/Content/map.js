// Shop's lat and lng to display on map
const shopLocations = [
    {
        position: { "lat": -26.175670, "lng": 28.172990 },
        title:"Hero Comics 'n T-Shirts"
    },
    {
        position: { "lat": -26.168310, "lng": 28.158510 },
        title: "Comic Warehouse"
    },
    {
        position: { "lat": -26.132840, "lng": 28.068960 },
        title: "Exclusive Books Melrose Arch"
    },
    {
        position: { "lat": -26.204080, "lng": 28.055680 },
        title: "Collectors Treasury"
    },
    {
        position: { "lat": -26.157980, "lng": 28.076280 },
        title: "Chapter 1"
    },
    {
        position: { "lat": -26.179450, "lng": 28.267270 },
        title: "Bargain Books East Point Mall"
    }
]

//creates map
function initMap() {
    const myLatlng = { "lat": -26.179450, "lng": 28.094550 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: myLatlng,
    });

    // Create markers.
    for (let i = 0; i < shopLocations.length; i++) {
        const marker = new google.maps.Marker({
            position: shopLocations[i].position,
            title: shopLocations[i].title,
            map: map,
        });
    }

    // To add the marker to the map, call setMap();
    marker.setMap(map);

}