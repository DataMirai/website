---
title: "Cuando el océano florece"
meta_title: "Cuando el océano florece"
description: "Explora cómo varían las poblaciones de fitoplancton a lo largo del año"
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
            <p>El fitoplancton está formado por algas microscópicas. Viven en las aguas superficiales y flotan y se dejan llevar por las corrientes. Presentan una impresionante variedad de formas, colores y patrones. <span class= "span-colored" style="background-color:#1A5A5C;color:#fff">¿Por qué son tan importantes?</span></p>
            <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/PlanktonCommunity.jpg">Fitoplancton. Foto de Annegret Stuhr, GEOMAR</img>
            <p>El fitoplancton son organismos capaces de realizar la fotosíntesis. Utilizan la luz solar, el dióxido de carbono (CO₂) y los nutrientes para producir energía. Desempeñan la misma función que las plantas terrestres y <span class="span-colored" style="background-color:#1A5A5C;color:#fff">producen hasta el 50 % del oxígeno de la Tierra.</span></p>
            <p>Aunque son microscópicos, <span class="span-colored" style="background-color:#1A5A5C;color:#fff">constituyen la base de la cadena alimentaria marina.</span> El fitoplancton sirve de alimento al zooplancton, que a su vez alimenta a los peces pequeños, los cuales son consumidos posteriormente por peces más grandes y otros depredadores. Esta cadena sustenta los niveles tróficos superiores y mantiene las explotaciones pesqueras de todo el mundo.</p>
            <p>Aunque las partículas individuales de fitoplancton no se pueden ver a simple vista, las grandes concentraciones pueden teñir el color del océano y hacerse visibles desde el espacio. <span class= «span-colored» style="background-color:#FF7062;color:#fff;font-weight: bold;">Esto se conoce como «floración».</span></p>
            <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/baltic%20bloom.jpg">Floración en el mar Báltico. Foto de NASA Science</img>
        </section>
        <section id="scrolly">
            <div class="sticky-thing">
                <div id="map"></div>
            </div>
            <article>
            <div class="step map1" data-step="1">
                <p>Las<strong style="color:black;">floraciones</strong> pueden presentar una amplia gama de colores, creando llamativos contrastes con las aguas azul oscuro del océano. Crean <strong style="color:black;">patrones de gran magnitud,</strong> formando líneas, olas y filamentos que pueden cubrir vastas áreas del océano.</p>
            </div>
            <div class="step map1" data-step="2">
                <p>Sin embargo, las floraciones no se producen en todas partes, ya que <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">el fitoplancton no crece de manera uniforme</span> en todo el océano. Su distribución es muy variable y está influenciada por factores como la luz solar, la temperatura, la disponibilidad de nutrientes y las corrientes oceánicas.</p>
            </div>
            <div class="step map1" data-step="3">
                <p>Existen <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">dos fenómenos principales relacionados con las floraciones</span> en los océanos. Se producen en regiones diferentes y funcionan mediante mecanismos distintos, pero están vinculados por procesos similares que implican la disponibilidad de nutrientes para el crecimiento del fitoplancton.</p>
            </div>
            <div class="step map1" data-step="4">
                <p>El primer fenómeno son los <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">sistemas de afloramiento.</span> Existen cuatro regiones principales en el mundo, situadas a lo largo de los límites orientales de los océanos Atlántico y Pacífico. Este sistema <strong style="color:black;">aporta hasta el 25% de la pesca mundial</strong> a pesar de ocupar menos del 1% de la superficie oceánica.</p>
            </div>
            <div class="step map1" data-step="5">
                <p>En la región de California, este fenómeno es <strong style="color:black;">fuertemente estacional.</strong> Durante la <strong style="color:black;">primavera,</strong> los vientos del norte se intensifican y soplan a lo largo de la costa hacia el ecuador. Esto hace que el agua fría, profunda y rica en nutrientes suba a la superficie y se den las condiciones ideales para que se reactive el afloramiento. <strong style="color:black;">Se alcanza la máxima intensidad durante el verano.</strong></p>
            </div>
            <div class="step map1" data-step="6">
                <p>En <strong style="color:black;">otoño e invierno,</strong> los vientos amainan, al igual que la productividad biológica de la región.</p>
            </div>
            <div class="step map1" data-step="7">
                <p>El segundo fenómeno es la <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">floración primaveral del Atlántico Norte.</span> Se trata de <strong style="color:black;">uno de los fenómenos biológicos más importantes</strong> de los océanos del mundo. Se produce cada año en primavera y puede extenderse a lo largo de miles de kilómetros, lo que lo hace claramente visible desde los satélites.</p>
                <div style="text-align:center;">
                <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/north%20atlantic%20bloom%20nasa%202024.jpg" style="display:block;margin:auto;">La floración primaveral del Atlántico Norte captada por la NASA en 2024</img>
                </div>
            </div>
            <div class="step map1" data-step="8">
                <p>Durante <strong style="color:black;">el invierno,</strong> las horas de luz son más cortas y la superficie del océano se enfría. Las tormentas se intensifican y mezclan las aguas superficiales con las de mayor profundidad. Tal y como se explica en el fenómeno de los sistemas de afloración, esta mezcla lleva nutrientes de las aguas profundas hacia la superficie. Sin embargo, debido a que la luz solar es limitada durante el invierno, <strong style="color:black;">las condiciones no son lo suficientemente favorables</strong> para que el fitoplancton crezca rápidamente.</p>
            </div>
            <div class="step map1" data-step="9">
                <p>En <strong style="color:black;">primavera,</strong> los días más largos y la luz solar más intensa calientan la superficie del océano, lo que reduce la mezcla entre las aguas superficiales y las más profundas. Como resultado, los nutrientes que han subido a la superficie durante el invierno permanecen disponibles allí, de modo que el <strong style="color:black;">fitoplancton puede acceder tanto a los abundantes nutrientes como a la luz solar.</strong></p>
            </div>
            <div class="step map1" data-step="10">
                <p>Estas condiciones favorables promueven el rápido crecimiento del fitoplancton a través de la fotosíntesis, lo que da lugar a la <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">floración primaveral. </span> A medida que avanza el verano,  <strong style="color:black;">los nutrientes de la superficie se agotan,</strong> lo que provoca que la abundancia de fitoplancton disminuya hasta que las condiciones vuelvan a ser favorables la primavera siguiente.</p>
                <div style="text-align:center;">
                <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/Norway%20bloom.jpeg" style="display:block;margin:auto;" height="500" width="500">Floración en las costas de Noruega. Foto de NASA Science</img>
                </div>
            </div>
            <div class="step map1" data-step="11">
                <p>Dado que la floración primaveral del Atlántico Norte se extiende a lo largo de miles de kilómetros, <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">esta no se produce en todas partes al mismo tiempo.</span> Comienza más temprano en las regiones de latitudes más bajas y llega más tarde a las latitudes más altas.</p>
            </div>
            <div class="step map1" data-step="12">
                <p>La mayor parte del tiempo, el fitoplancton permanece invisible bajo la superficie del océano. Sin embargo, sus floraciones estacionales transforman vastas regiones del mar y sustentan la vida en toda la red trófica marina. Desde células microscópicas hasta patrones visibles desde el espacio, <span class="span-colored" style="background-color:#1A5A5C;color:#fff;font-weight: bold;">su influencia se extiende por todo el planeta.</span></p>
                <div style="text-align:center;">
                <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/phytoplankton2.png" style="display:block;margin:auto;" height="150" width="150"></img>
                </div>
            </div>
        </section>
        <section class="paragraph last">
        <p>Aquí puedes ver cómo <span class="span-colored" style="background-color:#1A5A5C;color:#fff">evoluciona la población de fitoplancton a lo largo de 2025</span> o consultar un mes concreto haciendo clic.</p>
            <div class="timeline-slider">
                <img id="main-image" src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/north%20atlantic%20bloom%20nasa%202024.jpg">
                <div class="timeline" id="timeline">
                    <button data-index="0">Ene</button>
                    <button data-index="1">Feb</button>
                    <button data-index="2">Mar</button>
                    <button data-index="3">Abr</button>
                    <button data-index="4">May</button>
                    <button data-index="5">Jun</button>
                    <button data-index="6">Jul</button>
                    <button data-index="7">Ago</button>
                    <button data-index="8">Sep</button>
                    <button data-index="9">Oct</button>
                    <button data-index="10">Nov</button>
                    <button data-index="11">Dic</button>
                </div>
            </div>
            <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/patagonia%20bloom.jpg">Floración colorida en la Patagonia. Foto de NASA Science</img>
            <p>Esta obra ha sido desarrollada para el Dataviz Challenge organizado por el Copernicus Marine Service con el objetivo de dar visibilidad y sensibilizar sobre los fenómenos que tienen lugar en los océanos del planeta, a partir de la información facilitada por Elodie Gutknecht. Gracias por llegar hasta aquí. Espero que el papel del fitoplancton te haya parecido tan interesante como a mí cuando elegí el tema del reto.</p>
        </section>
        {{< image src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/Esp_Infographic_When%20the%20ocean%20blooms_MireiaCamacho.png" caption="" alt="" height="600" width="1000" command="Fit" option="" class="" title="image title" position="center" webp="true" zoomable="true">}}
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