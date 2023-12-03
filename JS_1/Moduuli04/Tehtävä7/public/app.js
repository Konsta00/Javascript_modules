'use strict';

const map = L.map('map').setView([60.1785553, 24.8786212], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const school_coords = {
    'lat': 60.22387, 
    'lon': 24.75806
};

function getRoute(origin, target) {

    const apiKey = '6c99d3f2d8c54e66871c0d27e54fd17e';
    const routeUrl = 'https://dev-api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

    const Q = `
        {
            plan(
                from: {lat: ${origin.latitude}, lon: ${origin.longitude}}
                to: {lat: ${target.lat}, lon: ${target.lon}}
        ) {
            itineraries {  
                              
                legs {
                    startTime
                    endTime
                    mode
                    duration
                    distance
                    realTime
                    from {
                        lat
                        lon
                        name
                    }
                    to {
                        stop {
                            gtfsId
                            code
                            name
                            lat
                            lon
                        }
                    }
                    legGeometry {
                        points
                    }
                }
            } 
        } 
    }`;

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'digitransit-subscription-key': apiKey,
        },
        body: JSON.stringify({query: Q}),
    };
    
    fetch(routeUrl, fetchOptions).then(function (response) {
        return response.json();
    }).then(function(result) {
        
        const googleEncodedRoute = result.data.plan.itineraries[0].legs;
        
        const start = document.querySelector('.start');
        const end = document.querySelector('.end');
        const start_timestamp = new Date(googleEncodedRoute[0].startTime).toTimeString().split(' ')[0];
        const end_timespamp = new Date(googleEncodedRoute[googleEncodedRoute.length - 1].endTime).toTimeString().split(' ')[0];
        start.innerHTML = `Start of the trip is ${start_timestamp}`;
        end.innerHTML = `End of the trip is ${end_timespamp}`;

        let walked = 0;
        let bus = 0;
        let train = 0;
        let tram = 0;
        let other = 0;

        // DRAW ROUTE ON MAP
        for (let i = 0; i < googleEncodedRoute.length; i++) {
            let color = '';

            switch (googleEncodedRoute[i].mode) {
                case 'WALK':
                    color = 'black';
                    walked += googleEncodedRoute[i].distance;
                    break;
                case 'BUS':
                    color = 'red';
                    bus += googleEncodedRoute[i].distance;
                    break;
                case 'RAIL':
                    color = 'yellow'
                    train += googleEncodedRoute[i].distance;
                    break;
                case 'TRAM':
                    color = 'magenta'
                    tram += googleEncodedRoute[i].distance;
                    break;
                default:
                    color = 'blue';
                    other += googleEncodedRoute[i].distance;
                    break;
            }
            const route = (googleEncodedRoute[i].legGeometry.points);
            const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
            L.polyline(pointObjects).setStyle({
                color
            }).addTo(map);
        }


        // DRAW STOPS TO MAP
        googleEncodedRoute.forEach(element => {
            console.log(element);
            
            const stop = element.to.stop;
            if (stop != null) {
                const lat = stop.lat;
                const lon = stop.lon;


                const stop_marker = L.circleMarker([lat, lon], {
                    radius: 6,
                    fillColor: "white",
                    color: "black",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                }).addTo(map);

                stop_marker.on('mouseover', (e) => {
                    e.target.bindPopup(`STOP INFO: <br> ${stop.name} <br> ${stop.code} <br> ${lat} <br> ${lon}`).openPopup();
                });
            } else {

                const t_lat = target.lat;
                const t_lon = target.lon;
                const target_marker = L.circleMarker([t_lat, t_lon ], {
                    radius: 10,  
                    fillColor: "yellow",
                    color: "black",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                }).addTo(map);

                target_marker.on('mouseover', (e) => {
                    e.target.bindPopup(`TARGET INFO: <br> Metropolia Ammattikorkeakoulu <br> Karaportti 2 <br> 02610 Espoo <br> ${t_lat} <br> ${t_lon}`).openPopup();
                });


                const o_lat = origin.latitude;
                const o_lon = origin.longitude;
                const origin_marker = L.circleMarker([o_lat, o_lon], {
                    radius: 10,  
                    fillColor: "black",
                    color: "white",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                }).addTo(map);

                origin_marker.on('mouseover', (e) => {
                    e.target.bindPopup(`STARTING POINT: <br> ${o_lat} <br> ${o_lon}`).openPopup();
                });
            }            
        });

        map.fitBounds([[origin.latitude, origin.longitude], [target.lat, target.lon]]);

        const walk_element = document.querySelector('.walked');
        const bus_element = document.querySelector('.bus');
        const train_element = document.querySelector('.train');
        const tram_element = document.querySelector('.tram');
        const other_element = document.querySelector('.other');

        if (walked > 0) {
            walk_element.innerHTML = `Distance walked: ${Math.floor(walked)} meters`;
        }
        if (bus > 0) {
            bus_element.innerHTML = `Distance travelled using bus: ${Math.floor(bus)} meters`;
        }
        if (train > 0) {
            train_element.innerHTML = `Distance travelled using train: ${Math.floor(train)} meters`;
        }
        if (tram > 0) {
            tram_element.innerHTML = `Distance travelled using tram: ${Math.floor(tram)} meters`;
        }
        if (other > 0) {
            other_element.innerHTML = `Distance travelled using other modes of transport: ${Math.floor(other)} meters`;
        }

    }).catch(e => console.log('Error: ', e)
    );
};

function getCoordinatesFromURL() {
    const pathSegments = window.location.pathname.split('/');

    const latitude = pathSegments[2];
    const longitude = pathSegments[3];

    return {
        latitude: latitude,
        longitude: longitude
    };
}

const origin_coords = getCoordinatesFromURL();

if (origin_coords.latitude > 2) {
    getRoute(origin_coords, school_coords);
}