function myMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 24.3667, lng: 88.6229 },
        zoom: 16,
        mapId: '8232d2cfbf4e794b'
    });

    const potableWaterIcon = {
        url: "https://cdn-icons-png.flaticon.com/512/4497/4497450.png",
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 40)
    };

    const locations = [
        { lat: 24.3667, lng: 88.6229, title: "Talaimari Center" },
        { lat: 24.3675, lng: 88.6240, title: "Talaimari Jame Masjid" },
        { lat: 24.3704, lng: 88.6386, title: "University of Rajshahi" },
        { lat: 24.3723, lng: 88.6011, title: "Rajshahi Medical College Hospital" },
        { lat: 24.3672, lng: 88.6215, title: "Kashem Hotel and Restaurant" },
        { lat: 24.3664, lng: 88.6205, title: "Baliapukur Jame Mosjid" },
        { lat: 24.3701, lng: 88.6248, title: "RH Students' Hostel" },
        { lat: 24.3651, lng: 88.6182, title: "Sadhur More" },
        { lat: 24.3642, lng: 88.6191, title: "Rani Nagar Jame Masjid" },
        { lat: 24.3683, lng: 88.6212, title: "Boro Bottolar Math" },
        { lat: 24.3690, lng: 88.6220, title: "Sayed Tower Student Palace" }
    ];

    const infoWindow = new google.maps.InfoWindow();

    locations.forEach(loc => {
        const marker = new google.maps.Marker({
            position: { lat: loc.lat, lng: loc.lng },
            map: map,
            icon: potableWaterIcon,
            title: loc.title
        });

        marker.addListener("click", () => {
            const mapsUrl = `https://www.google.com/maps?q=${loc.lat},${loc.lng}`;
            infoWindow.setContent(`
                <div style="font-family: 'Nunito Sans', sans-serif; max-width: 250px; color: black;">
                    <strong>${loc.title}</strong><br>
                    Water service point<br>
                    <a href="${mapsUrl}" target="_blank" style="color: #1a73e8; text-decoration: none;">
                        View on Google Maps
                    </a>
                </div>
            `);
            infoWindow.open(map, marker);
        });
    });
}

window.initMap = myMap;
