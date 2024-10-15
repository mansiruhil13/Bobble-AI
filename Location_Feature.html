<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Location Sharing App</title>
    <style>
        /* Basic styles for the map and button */
        #map {
            height: 400px;
            width: 100%;
        }
        #shareLocationBtn {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
        }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
</head>
<body>

    <h1>Share Your Location</h1>
    <button id="shareLocationBtn">Share My Location</button>
    <div id="map"></div>

    <script>
        let map;
        let userMarker;

        // Initialize and add the map
        function initMap() {
            // Create a map centered at a default location (e.g., New York City)
            const defaultLocation = { lat: 40.7128, lng: -74.0060 };
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 12,
                center: defaultLocation,
            });
        }

        // Function to share the user's current location
        function shareLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    // Set the map center to the user's location
                    map.setCenter(userLocation);

                    // Place a marker at the user's location
                    if (userMarker) {
                        userMarker.setPosition(userLocation);
                    } else {
                        userMarker = new google.maps.Marker({
                            position: userLocation,
                            map: map,
                            title: "You are here!",
                        });
                    }

                    alert(`Your current location is:\nLatitude: ${userLocation.lat}\nLongitude: ${userLocation.lng}`);
                }, (error) => {
                    alert("Unable to retrieve your location. Please allow location access.");
                });
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        // Add event listener to the button
        document.getElementById("shareLocationBtn").addEventListener("click", shareLocation);

        // Load the map
        window.onload = initMap;
    </script>
</body>
</html>
