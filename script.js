
// Define the map and its center and zoom. 
let centerUS = [38,-97]
let myMap = L.map("map",
{
    center: centerUS,
    zoom: 2
}
);
// Attach the tile layer with the access token to mapbox.com
L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoiY2hyaXNwcmFiaHUiLCJhIjoiY2poMWFpc2kyMDE1NzJxcW1lbWwydXloaSJ9.cBLhPIYvao6w7h6zR12nsQ"
).addTo(myMap);

// Define the color deciding function
function colorDecider(magnitude) {

    if (magnitude > 7) {
        return "red";
    } else if (magnitude > 4.5) {
        return "orange";
    } else if (magnitude > 2.5) {
        return "yellow";
    } else if (magnitude > 1.0) {
        return "lightblue";
    } else if (magnitude > 0) {
        return "white";
    }
};
// Fetch the JSON and parse it
let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson'
fetch(url)

// Parse the response object into a JSON
.then((response) => response.json())


.then(
    
    function(data) 
        {

            // Run a loop to output the circles
            for (let i = 0; i < data.features.length; i++)
                {
                    // Pull the data needed and set them to variables
                    let coords = data.features[i].geometry.coordinates.slice(0,2)
                    let magnitude = data.features[i].properties.mag
                    let circleColor = colorDecider(magnitude)
                    let place = data.features[i].properties.place
                    

                    // console.log(circleColor)
                    // console.log(coords)

                    // Create the circles
                    L.circle(coords, 
                    {
                        radius: (magnitude * 50000),
                        color: circleColor,
                        fillOpacity: .5,
                        stroke: false

                    }).addTo(myMap)
                    .bindPopup(`This earthquake had a magnitude of ${magnitude} and occured ${place}`);
                }
        });

let overlayMaps = {
    "bike" : 
}

    

/*        function getColor(d) {
            return d > 1000 ? '#800026' :
                   d > 500  ? '#BD0026' :
                   d > 200  ? '#E31A1C' :
                   d > 100  ? '#FC4E2A' :
                   d > 50   ? '#FD8D3C' :
                   d > 20   ? '#FEB24C' :
                   d > 10   ? '#FED976' :
                              '#FFEDA0';
        }
        let legend = L.control({position: 'bottomRight'});
    
        legend.onAdd = function (map) {
        
            let div = L.DomUtil.create('div', 'info legend');
            let grades = [0, 1, 2.5, 4.5, 7];
            let labels = [];
            // "Less than 1", "1.0 - 2.5", "2.5 - 4.5", "4.5 - 7.0", "Above 7.0"
            // loop through our density intervals and generate a label with a colored square for each interval
            for (let i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + colorDecider(grades[i] + 1) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }
        
            return div;
        };
        legend.addTo(myMap);  */
   
        





/* 
Draw a circle: 


let marker = L.marker([38, -97], {
    draggable: false, 
    title: "My First Marker", 

}).addTo(myMap);

marker.bindPopup("The Center of the Contiguous US");



L.polygon([[45.54, -122.68], [45.55, -122.68], [45.55, -122.66]], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: .75,
}).addTo(myMap); */