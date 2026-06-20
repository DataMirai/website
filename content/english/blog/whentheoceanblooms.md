---
title: "When the ocean blooms"
meta_title: "When the ocean blooms"
description: "Explore how phytoplankton population change over the year"
date: 2026-06-19T00:00:00.000Z
image: "images/gallery/banners_posts/phytoplankton_banner.png"
categories: ["Data Visualization"]
author: "Mireia Camacho"
tags: ["Scrollytelling"]
draft: false
---

<meta charset='utf-8'>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel='stylesheet' href='https://unpkg.com/maplibre-gl@5.3.0/dist/maplibre-gl.css' />
<script src='https://unpkg.com/maplibre-gl@5.3.0/dist/maplibre-gl.js'></script>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://unpkg.com/scrollama"></script>

<style>
            
    body {margin: 0; padding: 0; overflow-x: hidden;}
    html, body{height: 100%; width: 100%;}
    .row.items-start.justify-between, .mt-20, .section.pb-0, footer{padding:0px 5vw;}
    
    #map { 
        position: sticky; 
        margin-top: 10vw; 
        width:100vw; 
        height:100vh; 
    }
    .paragraph {
        width: min(90vw, 850px);
        margin: 0 auto;
        padding: 3rem 1.25rem;
        font-size: clamp(1rem, 1.3vw, 1.2rem);
        line-height: 1.7;
        color: #000;
        text-align: left;
        }
    
    .last p{
        margin-top:5vw;
    }

    h1, h3, .paragraph p {
    color: #B4AFB6;
    }

    .titols {
        font-size: 35px;
        font-weight: bold;
    }

    div.container{
    max-width:100%; 
    padding:0px; 
    overflow: visible!important;
    }
    
    .lg\:col-10{
    width: 100vw; 
    margin:0px; 
    padding:0px;
    overflow: visible!important;
    }

    h1.h2.mb-4, ul.mb-4{
    text-align: center;
    }
    h1.h2.mb-4{font-size:70px;}

    #scrolly {
        position: relative;
        background-color: transparent;
        padding: 1rem 0px;
    }
    
    article {
        width: 100%;
        max-width: 100%;
    }

    .sticky-thing {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    background-color: transparent;
    z-index: 0;
    top: 0vh;
    height: 75vh;
    /* Center everything inside */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible!important
    }

    .sticky-thing p {
    font-size: 8rem;
    font-weight: 900;
    color: #fff;
    }

    .step {
        position: relative;
        width: min(88vw, 700px);
        margin: 0 auto 65vh auto;
        padding: 1rem;
        border-radius: 20px;
        border: 5px solid #FF7062;
        background: #fff;
        color: #000;
        pointer-events: auto;
        line-height: 1.35;
        word-wrap: break-word;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        z-index: 2;
    }

    .step:last-child {
    margin-bottom: 80vw;
    }

    .step p {
    text-align: center;
    padding: 10px;
    margin: 10px;
    font-size: 21px;
    background-color: #ffffff;
    color:#222!important;
    }


    .step img{
        text-align:center;
        align-items: center;
        justify-content: center;
    }

    #footer {
    height: 20vw;
    }

    .span-colored {
        padding: 0px 5px;}



    .timeline-slider{
    max-width:900px;
    margin:auto;
    }

    #main-image{
        width:100%;
        display:block;
    }

    .timeline{
        display:flex;
        justify-content:space-between;
        margin-top:1rem;
    }

    .timeline button{
        cursor:pointer;
        color: white;
    }
    .timeline button.active {
        background: #4E9A70;
        padding: 3px 7px;
        color: #000;
        border-radius: 10%;
        font-weight: bold;
    }

    /* ===== TABLET ===== */

        @media (max-width: 1024px) {
        .step {
            width: min(90vw, 650px);
            margin-bottom: 55vh;
        }

        .last p{
            margin-top:0;
        }
        
        #map {
            height: 100vh;
            width: 100vw;
            padding: 0;
            margin: 0;
        }

        .sticky-thing {
            height: 100vh;
            width: 100vw;
        }

        #scrolly {
            padding: 1rem 0px;
        }

        .step:last-child {
            margin-bottom: 80vw;
        }

        #footer {
            height: 0;
            }

        }

    /* ===== MÓVIL ===== */

        @media (max-width: 768px) {

        .paragraph {
            width: 100%;
            padding: 2rem 1rem;
        }

        .step {
            width: calc(100vw - 5rem);
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 50vh;
            padding: 0.8rem;
        }

        .step p {
            font-size: 1rem;
        }

        .step:last-child {
            margin-bottom: 80vw;
        }

        .sticky-thing {
            height: 100vh;
            width: 100vw;
        }

        #scrolly {
            position: relative;
            background-color: transparent;
            padding: 1rem 0px;
        }

        #map {
            height: 100vh;
            width: 100vw;
            padding: 0;
            margin: 0;
        }

        .timeline {
            gap: 0.35rem;
        }

        .timeline button {
            min-width: 2vw;
            font-size: 0.8rem;
        }
        }
</style>
<body>
        <section class="paragraph">
            <p>Phytoplankton are microscopic algae. They live in surface waters and float and drift with the currents. They have an impressive variety of shapes, colors, and patterns. <span class= "span-colored" style="background-color:#1A5A5C;color:#fff">Why are they so important?</span></p>
            <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/PlanktonCommunity.jpg">Phytoplankton. Photo by Annegret Stuhr, GEOMAR</img>
            <p>Phytoplankton are photosynthetic organisms. They use sunlight, carbon dioxide (CO₂), and nutrients to produce energy through photosynthesis. They perform the same role as plants on land and <span class= "span-colored" style="background-color:#1A5A5C;color:#fff">produce up to 50% of the Earth's oxygen.</span></p>
            <p>Even though they are microscopic, <span class= "span-colored" style="background-color:#1A5A5C;color:#fff">they form the base of the marine food web.</span> Phytoplankton are eaten by zooplankton, which in turn feed small fish, which are then consumed by larger fish and other predators. This chain supports higher trophic levels and sustains global fisheries.</p>
            <p>Although individual phytoplankton cannot be seen with the naked eye, large concentrations can tint the color of the ocean and become visible from space. <span class= "span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">This is known as a Bloom.</span></p>
            <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/baltic%20bloom.jpg">Bloom in the Baltic sea. Photo by NASA Science</img>
        </section>
        <section id="scrolly">
            <div class="sticky-thing">
                <div id="map"></div>
            </div>
            <article>
            <div class="step map1" data-step="1">
                <p><strong style="color:black;">Blooms</strong> can display a wide range of colors, creating striking contrasts with the deep blue ocean waters. They generate <strong style="color:black;">massive patterns</strong>, forming edges, waves, and filaments that can cover vast areas of the ocean.</p>
            </div>
            <div class="step map1" data-step="2">
                <p>However, blooms do not occur everywhere, as <span class= "span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">phytoplankton do not grow uniformly</span> throughout the ocean. Their distribution is highly variable and influenced by factors such as sunlight, temperature, nutrient availability, and ocean currents.</p>
            </div>
            <div class="step map1" data-step="3">
                <p>There are <span class= "span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">two major bloom-related phenomena</span> in the oceans. They occur in different regions and operate through different mechanisms, but they are linked by similar processes involving nutrient availability for phytoplankton growth.</p>
            </div>
            <div class="step map1" data-step="4">
                <p>The first phenomenon is the <span class= "span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">Upwelling Systems.</span> There are four major regions in the world, located along the eastern boundaries of the Atlantic and Pacific Oceans. This system <strong style="color:black;">contributes up to 25% of global fisheries</strong> while occupying less than 1% of the ocean area.</p>
            </div>
            <div class="step map1" data-step="5">
                <p>In the California region, this phenomenon is <strong style="color:black;">strongly seasonal.</strong> During <strong style="color:black;">spring,</strong> northerly winds become intense and blow along the coast toward the equator. This causes cold, deep, nutrient-rich water to rise to the surface and establish ideal conditions for upwelling to reactivate. <strong style="color:black;">Maximum intensity is reached during summer.</strong></p>
            </div>
            <div class="step map1" data-step="6">
                <p>In <strong style="color:black;">autumn and winter,</strong> the winds weaken, and so does the biological productivity of the region.</p>
            </div>
            <div class="step map1" data-step="7">
                <p>The second phenomenon is the <span class= "span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">North Atlantic Spring Bloom.</span> This is <strong style="color:black;">one of the most significant biological events</strong> in the world's oceans. It occurs every year in spring and can extend over thousands of kilometers, making it clearly visible from satellites.</p>
                <div style="text-align:center;">
                <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/north%20atlantic%20bloom%20nasa%202024.jpg" style="display:block;margin:auto;">The North Atlantic Spring Bloom captured by NASA in 2024</img>
                </div>
            </div>
            <div class="step map1" data-step="8">
                <p>During <strong style="color:black;">winter,</strong> daylight hours are shorter and the ocean surface cools. Storms become stronger and mix surface waters with deeper waters. As explained in the upwelling phenomenon, this mixing brings nutrients from deep waters to the surface. However, because sunlight is limited during winter, <strong style="color:black;">conditions are not favorable enough</strong> for phytoplankton to grow rapidly.</p>
            </div>
            <div class="step map1" data-step="9">
                <p>In <strong style="color:black;">spring,</strong> longer days and stronger sunlight warm the ocean’s surface, reducing the mixing between surface and deeper waters. As a result, nutrients brought up during winter remain available near the surface, where <strong style="color:black;">phytoplankton can access both abundant nutrients and sunlight.</strong></p>
            </div>
            <div class="step map1" data-step="10">
                <p>These favorable conditions promote rapid phytoplankton growth through photosynthesis, leading to the <span class= "span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">spring bloom.</span> As summer progresses,  <strong style="color:black;">surface nutrients become depleted,</strong> causing phytoplankton abundance to decline until conditions become favorable again the following spring.</p>
                <div style="text-align:center;">
                <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/Norway%20bloom.jpeg" style="display:block;margin:auto;" height="500" width="500">Bloom in Norway coasts. Photo by NASA Science</img>
                </div>
            </div>
            <div class="step map1" data-step="11">
                <p>As the North Atlantic Spring Bloom extends across thousands of kilometers, <span class= "span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">it does not occur everywhere at the same time.</span> It starts earlier in lower-latitude regions and appears later at higher latitudes.</p>
            </div>
            <div class="step map1" data-step="12">
                <p>Most of the time, phytoplankton remain invisible beneath the ocean surface. Yet their seasonal blooms transform vast regions of the sea and sustain life throughout the marine food web. From microscopic cells to patterns visible from space, <span class= "span-colored" style="background-color:#1A5A5C;color:#fff;font-weight: bold;">their influence reaches across the entire planet.</span></p>
                <div style="text-align:center;">
                <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/phytoplankton2.png" style="display:block;margin:auto;" height="150" width="150"></img>
                </div>
            </div>
        </section>
        <section class="paragraph last">
        <p>Here you can explore how <span class= "span-colored" style="background-color:#1A5A5C;color:#fff">phytoplankton population change over 2025</span> or view a specific month by clicking.</p>
            <div class="timeline-slider">
                <img id="main-image" src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/north%20atlantic%20bloom%20nasa%202024.jpg">
                <div class="timeline" id="timeline">
                    <button data-index="0">Jan</button>
                    <button data-index="1">Feb</button>
                    <button data-index="2">Mar</button>
                    <button data-index="3">Apr</button>
                    <button data-index="4">May</button>
                    <button data-index="5">Jun</button>
                    <button data-index="6">Jul</button>
                    <button data-index="7">Aug</button>
                    <button data-index="8">Sep</button>
                    <button data-index="9">Oct</button>
                    <button data-index="10">Nov</button>
                    <button data-index="11">Dec</button>
                </div>
            </div>
            <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/patagonia%20bloom.jpg">Colorful bloom in Patagonia. Photo by NASA Science</img>
            <p>This piece was created for the Dataviz Challenge established by the Copernicus Marine Service with the aim of making visible and raising awareness of the phenomena that occur in the planet's oceans. Thank you for getting this far. I hope you found the role of phytoplankton as interesting as I did when choosing the challenge's theme. </p>
        </section>
        {{< image src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/Infographic_When%20the%20ocean%20blooms_MireiaCamacho.png" caption="" alt="" height="600" width="1000" command="Fit" option="" class="" title="image title" position="center" webp="true" zoomable="true">}}
        <section id="footer"></section>
    <script>
            fetch('https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json')
        .then(response => response.json()) 
        .then(style => {
            if (style.sources && style.sources.openmaptiles) {
                style.sources.openmaptiles.attribution = "Mirai Data | ICGC - Mediambient Gencat - © OSM contributors";
            }
            style.layers.forEach(layer => {
                if (layer.id === 'place-country-1' || layer.id === 'place-continent') {
                    layer.layout = layer.layout || {};
                    layer.layout.visibility = 'none';
                }
            });
    //
            const map = new maplibregl.Map({
                container: 'map',
                style: style,
                attributionControl: false,
                center: [-17.024540,28.495168],
                zoom: 2
            });
    //
            map.addControl(new maplibregl.AttributionControl({
                customAttribution: style.sources.openmaptiles.attribution,
                compact: true 
            }));
    //
            map.scrollZoom.disable();
    //
            map.on('load', () => {
            map.addSource('overlay-image', {
                type: 'image',
                url: 'https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/plot1.png',
                coordinates: [
                     [-198, 86.2881],
                    [198, 86.2881],
                    [198, -80.135],
                    [-198, -80.135]
                        ]
            });
            map.addLayer({
                id: 'overlay-layer',
                type: 'raster',
                source: 'overlay-image',
                paint: {
                    'raster-opacity': 0.8,
                    'raster-opacity-transition': {
                        duration: 300,
                        delay: 0
                    }
                }
            });
            map.addSource('hivern-image', {
                type: 'image',
                url: 'https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/plot_hivern.png',
                coordinates: [
                     [-198, 86.2881],
                    [198, 86.2881],
                    [198, -80.135],
                    [-198, -80.135]
                        ]
            });
//
            map.addLayer({
                id: 'hivern-layer',
                type: 'raster',
                source: 'hivern-image',
                paint: {
                    'raster-opacity': 0,
                    'raster-opacity-transition': {
                        duration: 300,
                        delay: 0
                    }
                }
            });
            map.addSource('upwelling-image', {
                type: 'image',
                url: 'https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/plot_upwelling.png',
                coordinates: [
                     [-198, 86.2881],
                    [198, 86.2881],
                    [198, -80.135],
                    [-198, -80.135]
                        ]
            });
//
            map.addLayer({
                id: 'upwelling-layer',
                type: 'raster',
                source: 'upwelling-image',
                paint: {
                    'raster-opacity': 0,
                    'raster-opacity-transition': {
                        duration: 300,
                        delay: 0
                    }
                }
            });
            });
            //
                const scroller = scrollama();
    //
                scroller.setup({
                    step: ".map1",
                    offset: 0.5,  
                    debug: false
                }).onStepEnter(response => {
                    const { index } = response;
//
                    if (index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 6  || index === 8 || index === 9 || index === 10 || index === 11) {
                        map.setPaintProperty(
                            'overlay-layer',
                            'raster-opacity',
                            0.8
                        );
                        map.setPaintProperty(
                            'hivern-layer',
                            'raster-opacity',
                            0
                        );
                    }
                    if (index === 3) {
                        map.setPaintProperty(
                            'upwelling-layer',
                            'raster-opacity',
                            0.8
                        );
                    }
                    if (index === 4 || index === 5) {
                        map.flyTo({
                            center: [-127.093793,33.857847],
                            zoom: 3,
                            essential: true
                        });
                    }
//
                    if (index === 7 || index === 8 || index === 9 || index === 10) {
                        map.flyTo({
                            center: [-26.867136,52.606666],
                            zoom: 3,
                            essential: true
                        });
                    }
                    if (index === 6 || index === 11 ) {
                        map.flyTo({
                            center: [-17.024540,28.495168],
                            zoom: 2,
                            essential: true
                        });
                    }
//
                    if (index === 5 || index === 7 ) {
                        map.setPaintProperty(
                            'hivern-layer',
                            'raster-opacity',
                            0.8
                        );
                    }
//
                }).onStepExit(response => {
                    const { index } = response;
//
                    if (index === 3 || index === 6 ) {
                        map.flyTo({
                            center: [-17.024540,28.495168],
                            zoom: 2,
                            essential: true
                        });
                    }
                    if (index === 6) {
                         map.setPaintProperty(
                            'overlay-layer',
                            'raster-opacity',
                            0
                        );
                        map.setPaintProperty(
                            'hivern-layer',
                            'raster-opacity',
                            0.8
                        );
                    }
                     if (index === 2 || index === 4) {
                        map.setPaintProperty(
                            'upwelling-layer',
                            'raster-opacity',
                            0
                        );
                    }
                    if (index === 7 || index === 8 ||  index === 9) {
                        map.setPaintProperty(
                            'hivern-layer',
                            'raster-opacity',
                            0
                        );
                        map.setPaintProperty(
                            'overlay-layer',
                            'raster-opacity',
                            0.8
                        );
                    }
                    });
    //
        });
//
        const photos = [
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/gener2025.png",
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/febrer2025.png",
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/marc%CC%A72025.png",
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/abril2025.png",
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/maig2025.png",
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/juny2025.png",
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/juliol2025.png",
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/agost2025.png",
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/setembre2025.png",
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/octubre2025.png",
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/novembre2025.png",
            "https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/desembre2025.png"
        ];
//
        let current = 0;
//
        const image = document.getElementById("main-image");
        const buttons = document.querySelectorAll(".timeline button");
//
        function showImage(index){
            current = index;
            image.src = photos[index];
            buttons.forEach(btn => btn.classList.remove("active"));
            if (buttons[index]) {
                buttons[index].classList.add("active");
            }
        }
//
        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                showImage(Number(btn.dataset.index));
            });
        });
//
        setInterval(() => {
            current = (current + 1) % photos.length;
            showImage(current);
        }, 2000);
        showImage(0);
     </script>