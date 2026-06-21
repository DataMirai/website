---
title: "Quan l'oceà floreix"
meta_title: "Quan l'oceà floreix"
description: "Explora com canvia la població de fitoplàncton al llarg de l'any."
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
            <p>El fitoplàncton està format per algues microscòpiques. Viuen en les aigües superficials i suren i es deixen arrossegar pels corrents. Presenten una impressionant varietat de formes, colors i patrons. <span class= "span-colored" style="background-color:#1A5A5C;color:#fff">Per què són tan importants?</span></p>
            <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/PlanktonCommunity.jpg">Fitoplàncton. Foto de Annegret Stuhr, GEOMAR</img>
            <p>El fitoplàncton són organismes capaços de realitzar la fotosíntesi. Utilitzen la llum solar, el diòxid de carboni (CO₂) i els nutrients per a produir energia. Exerceixen la mateixa funció que les plantes terrestres i <span class="span-colored" style="background-color:#1A5A5C;color:#fff">produeixen fins al 50% de l'oxigen de la Terra.</span></p>
            <p>Encara que són microscòpics, <span class="span-colored" style="background-color:#1A5A5C;color:#fff">constitueixen la base de la cadena alimentària marina.</span> El fitoplàncton serveix d'aliment al zooplàncton, que al seu torn alimenta als peixos petits, els quals són consumits posteriorment per peixos més grans i altres depredadors. Aquesta cadena sustenta els nivells tròfics superiors i manté les explotacions pesqueres de tot el món.</p>
            <p>Encara que les partícules individuals de fitoplàncton no es poden veure a simple vista, les grans concentracions poden tenyir el color de l'oceà i fer-se visibles des de l'espai. <span class= «span-colored» style="background-color:#FF7062;color:#fff;font-weight: bold;">Això es coneix com a «floració».</span></p>
            <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/baltic%20bloom.jpg">Floració en la mar Bàltica. Foto de NASA Science</img>
        </section>
        <section id="scrolly">
            <div class="sticky-thing">
                <div id="map"></div>
            </div>
            <article>
            <div class="step map1" data-step="1">
                <p>Les<strong style="color:black;">floracions</strong> poden presentar una àmplia gamma de colors, creant cridaners contrastos amb les aigües blau fosc de l'oceà. Creen <strong style="color:black;">patrons de gran magnitud,</strong> formant línies, ones i filaments que poden cobrir vastes àrees de l'oceà.</p>
            </div>
            <div class="step map1" data-step="2">
                <p>No obstant això, les floracions no es produeixen a tot arreu, ja que <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">el fitoplàncton no creix de manera uniforme</span> en tot l'oceà. La seva distribució és molt variable i està influenciada per factors com la llum solar, la temperatura, la disponibilitat de nutrients i els corrents oceànics.</p>
            </div>
            <div class="step map1" data-step="3">
                <p>Hi ha <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">dos fenòmens principals associats als floriments</span> als oceans. Es produeixen en regions diferents i funcionen a través de mecanismes diferents, però estan vinculats per processos similars que impliquen la disponibilitat de nutrients per al creixement del fitoplàncton.</p>
            </div>
            <div class="step map1" data-step="4">
                <p>El primer fenomen són els <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">sistemes d'aflorament.</span> Existeixen quatre regions principals en el món, situades a les costes dels límits orientals dels oceans Atlàntic i Pacífic. Aquest sistema <strong style="color:black;">aporta fins al 25% de la pesca mundial</strong> malgrat ocupar menys de l'1% de la superfície oceànica.</p>
            </div>
            <div class="step map1" data-step="5">
                <p>A la regió de Califòrnia, aquest fenomen és <strong style="color:black;">fortament estacional.</strong> Durant la <strong style="color:black;">primavera,</strong> els vents del nord s'intensifiquen i bufen al llarg de la costa cap a l'equador. Això fa que l'aigua freda, profunda i rica en nutrients pugi a la superfície i es donin les condicions ideals perquè es reactivi l'aflorament. <strong style="color:black;">S'aconsegueix la màxima intensitat durant l'estiu.</strong></p>
            </div>
            <div class="step map1" data-step="6">
                <p>A la <strong style="color:black;">tardor i l'hivern,</strong> els vents amainen, de la mateixa manera que la productivitat biològica de la regió.</p>
            </div>
            <div class="step map1" data-step="7">
                <p>El segon fenomen és la <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">floració primaveral de l'Atlàntic Nord.</span> Es tracta d'un <strong style="color:black;"> dels fenòmens biològics més importants</strong> dels oceans del món. Es produeix cada any a la primavera i pot estendre's al llarg de milers de quilòmetres, la qual cosa fa que sigui clarament visible des dels satèl·lits.</p>
                <div style="text-align:center;">
                <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/north%20atlantic%20bloom%20nasa%202024.jpg" style="display:block;margin:auto;">La floració primaveral de l'Atlàntic Nord captada per la NASA en 2024</img>
                </div>
            </div>
            <div class="step map1" data-step="8">
                <p>Durant <strong style="color:black;">l'hivern,</strong> les hores de llum són més curtes i la superfície de l'oceà es refreda. Les tempestes s'intensifiquen i barregen les aigües superficials amb les més profundes. Tal com s'explica en el fenomen dels sistemes d'aflorament, aquesta mescla porta nutrients de les aigües profundes cap a la superfície. No obstant això, pel fet que la llum solar és limitada durant l'hivern, <strong style="color:black;">les condicions no són prou favorables</strong> perquè el fitoplàncton creixi ràpidament.</p>
            </div>
            <div class="step map1" data-step="9">
                <p>A la <strong style="color:black;">primavera,</strong> els dies més llargs i la llum solar més intensa escalfen la superfície de l'oceà, la qual cosa redueix la mescla entre les aigües superficials i les més profundes. Com a resultat, els nutrients que han pujat a la superfície durant l'hivern romanen disponibles allà, de manera que el <strong style="color:black;">fitoplàncton pot accedir tant als abundants nutrients com a la llum solar.</strong></p>
            </div>
            <div class="step map1" data-step="10">
                <p>Aquestes condicions favorables promouen el ràpid creixement del fitoplàncton a través de la fotosíntesi, la qual cosa dona lloc a la <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">floració primaveral.</span> A mesura que avança l'estiu, <strong style="color:black;">els nutrients de la superfície s'esgoten,</strong> la qual cosa provoca que l'abundància de fitoplàncton disminueixi fins que les condicions tornin a ser favorables la primavera següent.</p>
                <div style="text-align:center;">
                <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/Norway%20bloom.jpeg" style="display:block;margin:auto;" height="500" width="500">Floració en les costes de Noruega. Foto de NASA Science</img>
                </div>
            </div>
            <div class="step map1" data-step="11">
                <p>Donat que la floració primaveral de l'Atlàntic Nord s'estén al llarg de milers de quilòmetres, <span class="span-colored" style="background-color:#FF7062;color:#fff;font-weight: bold;">aquesta no succeeix a tot arreu alhora.</span> Comença més aviat a les regions amb latituds més baixes i arriba més tard a les latituds més altes.</p>
            </div>
            <div class="step map1" data-step="12">
                <p>La majoria del temps, el fitoplàncton roman invisible sota la superfície de l'oceà. No obstant això, les seves floracions estacionals transformen extenses regions de la mar i sustenten la vida en tota la xarxa tròfica marina. Des de cèl·lules microscòpiques fins a patrons visibles des de l'espai, <span class="span-colored" style="background-color:#1A5A5C;color:#fff;font-weight: bold;">la seva influència s'estén per tot el planeta.</span></p>
                <div style="text-align:center;">
                <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/phytoplankton2.png" style="display:block;margin:auto;" height="150" width="150"></img>
                </div>
            </div>
        </section>
        <section class="paragraph last">
        <p>Aquí pots veure com <span class="span-colored" style="background-color:#1A5A5C;color:#fff">evoluciona la població de fitoplàncton al llarg de 2025</span> o consultar un mes concret fent clic.</p>
            <div class="timeline-slider">
                <img id="main-image" src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/north%20atlantic%20bloom%20nasa%202024.jpg">
                <div class="timeline" id="timeline">
                    <button data-index="0">Gen</button>
                    <button data-index="1">Feb</button>
                    <button data-index="2">Mar</button>
                    <button data-index="3">Abr</button>
                    <button data-index="4">Mai</button>
                    <button data-index="5">Jun</button>
                    <button data-index="6">Jul</button>
                    <button data-index="7">Ago</button>
                    <button data-index="8">Set</button>
                    <button data-index="9">Oct</button>
                    <button data-index="10">Nov</button>
                    <button data-index="11">Des</button>
                </div>
            </div>
            <img src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/patagonia%20bloom.jpg">Floració colorida a la Patagònia. Foto de NASA Science</img>
            <p>Aquesta obra ha estat desenvolupada per al Dataviz Challenge organitzat pel Copernicus Marine Service amb l'objectiu de donar visibilitat i sensibilitzar sobre els fenòmens que tenen lloc en els oceans del planeta, a partir de la informació facilitada per Elodie Gutknecht. Gràcies per arribar fins aquí. Espero que el paper del fitoplàncton t'hagi semblat tan interessant com a mi quan vaig triar el tema del repte.</p>
        </section>
        {{< image src="https://raw.githubusercontent.com/DataMirai/Copernicus/refs/heads/main/Cat_Infographic_When%20the%20ocean%20blooms_MireiaCamacho.png" caption="" alt="" height="600" width="1000" command="Fit" option="" class="" title="image title" position="center" webp="true" zoomable="true">}}
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