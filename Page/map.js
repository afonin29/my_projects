  window.onload = function () {
                getMap();

                let picture = document.getElementById("img-with-map");

                let map1 = document.getElementById("map1");

                map1.style.display = "none";

                picture.addEventListener("click", function () {
                    if (map1.style.display === "none") {
                        map1.style.display = "block";
                    }
                    else {
                        map1.style.display = "none";
                    }

                });
                function getMap() {
                    let center = [49.8240194,73.0568504];

                    let map1 = L.map('map1').setView(center, 20);

                    L.tileLayer(
                        'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 15
                    }).addTo(map1);

                    L.marker(center).addTo(map1);
                }
            }