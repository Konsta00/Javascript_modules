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

    const Q = `{
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
        console.log(result.data);
        const googleEncodedRoute = result.data.plan.itineraries[0].legs;
        for (let i = 0; i < googleEncodedRoute.length; i++) {
            let color = '';
            switch (googleEncodedRoute[i].mode) {
                case 'WALK':
                    color = 'green';
                    break;
                case 'BUS':
                    color = 'red';
                    break;
                case 'RAIL':
                    color = 'cyan'
                    break;
                case 'TRAM':
                    color = 'magenta'
                    break;
                default:
                    color = 'blue';
                    break;
            }
            const route = (googleEncodedRoute[i].legGeometry.points);
            const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
            L.polyline(pointObjects).setStyle({
                color
            }).addTo(map);
        }
        map.fitBounds([[origin.latitude, origin.longitude], [target.lat, target.lon]]);
    }).catch(e => console.log('Error: ', e)
    );

    console.log(target);

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

getRoute(origin_coords, school_coords);