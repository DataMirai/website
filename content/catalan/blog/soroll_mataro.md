---
title: "Mataró a tot volum"
meta_title: "Mataró a tot volum"
description: "Analitzem les dades del soroll dels carrers de Mataró"
date: 2025-04-20T00:00:00.000Z
image: "images/gallery/banners_posts/soroll-mataro.png"
categories: ["Data Visualization"]
author: "Mireia Camacho"
tags: ["Scrollytelling", "D3"]
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

    .titols {
        font-size: 35px;
        font-weight: bold;
        text-align: center;
        padding: 0 10%;
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
        height: 100%;
    }

    .sticky-thing {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    margin-bottom: 15vw;
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
        border-radius: 40px;
        border: solid 1px black;
        background: #fff;
        color: #000;
        pointer-events: auto;
        line-height: 1.35;
        word-wrap: break-word;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        z-index: 999;
    }

    .step:last-child {
        margin-bottom: 50vh;
    }

    .step p {
    text-align: center;
    padding: 10px;
    margin: 10px;
    font-size: 21px;
    background-color: #ffffff;
    color:#222!important;
    }

    #footer {
    height: 2vw;
    }

    .maplibregl-ctrl-attrib {
        background-color: rgba(255, 255, 255, 0.4)!important;
    }

    #scrolly-2, #scrolly-2-5{
        background-color: #fff;
        position: relative;
        padding: 0px 50px;
        margin-top:0px;
        width:100vw;
    }
    
    #scrolly-2-5 {
            margin-top: 0px!important;
            padding-bottom: 20vh!important;
            max-width:100vw;
            pointer-events: none;
        }

    .span-colored {
        border-radius: 10px;
        font-weight: bold;
        padding: 0px 10px;}

    #map2{
        position: sticky; 
        margin: 0 auto;
        margin-top: 10vw; 
        height:100%; 
        width: 100%;
        max-width: 1200px;
        
        }

    #map2-5 {
        position: sticky; 
        margin:auto;
        z-index: 100;
        width:min(1000px,95vw);
        max-width: 800px;
        overflow: visible !important;
        pointer-events: auto;
        margin-top:3vh;
    }
        
    #map2 svg {
        width: 100%;
        height: auto;
        display: block;
        padding-bottom: 30vh;
        
    }


    #map2-5 svg {
        pointer-events: auto;
        width: 100%;
        max-width: 800px;
        min-height: 500px;
        height:auto;
        display: block;
        }

    #titol-piramide p{
            width: 100%;
            text-align: center!important;
            margin:0;
        }

    #map2-5 svg text{
        opacity: 1!important;
    }

    .sticky-thing2, .sticky-thing2-5 {
        position: -webkit-sticky;
        position: sticky;
        left: 0;
        width: 100%;
        max-width: 100vw;
        margin: 0;
        background-color: transparent;
        z-index: 0;
        top: 0vh;
        height: 75vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: visible!important
    }

    .sticky-thing2-5 {
        padding-top:10vh;
        flex-direction: column;
        justify-content: flex-start;
    }

    #tooltip {
        position: fixed;
        padding: 6px 10px;
        color: white;
        border-radius: 4px;
        border-color: white;
        border-style: solid;
        border-width: 1px;
        pointer-events: none;
        font-size: 16px;
        display: none;
        z-index:1000;
    }
    
    .step.map2{
        margin-top: 500px;
        display:block;
        
    }
    .step.map2:last-child {
        margin-bottom: 0px;
    }

    .step.map25:first-child{
        margin-top: 10vh;
        
    }
    .step.map25:last-child{
        margin-bottom: 1000px;
        
    }

    table th{
        font-size: 20px;
        font-family: "Tex";
        color: #595959!important;
    }

    table td{
        text-align: center;
        font-size: 20px;
        font-family: "Tex";
        color: #595959!important;
    }


    .fjalla-one-regular {
        font-family: "Fjalla One", sans-serif;
        font-weight: 200;
        font-style: normal;
    }

    .sticky-thing3, .sticky-thing4 {
        position: sticky;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: visible!important;
    }

    #map3, #map4 { 
        position: sticky;
        width:100%; 
        height:100vh;
    }

    #scrolly-3, #scrolly-4 {
        padding-bottom: 20px; 
    }

    #map51, #map52, #map53 { 
        width:25vw; 
        height:55vh; 
        margin: 0px;
        position: sticky;
        overflow: visible!important;
        display: block;
        }

    .franges-horaries {
        width:100%; 
        height:60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5vh;
    }

    #llegenda-sync { 
        display:flex;
        justify-content: center;
        align-items: center;
    }

    #llegenda-colors{
        display:inline-flex;
        text-align:center;
    }
    .llegenda2{
        border-radius: 40px;
        margin: 0px 0px 0px 20px;
        width: 5vw;
        font-size: 16px;
        color: #000!important;
    }

    .arbres{
        padding-top:0;
    }

    .arbres .titols {
        margin-top:0;
        }

    .map-button {
        position: absolute;
        top: 30px;
        left: 30px;
        z-index: 9999;
        background-color: white;
        border: none;
        padding: 8px 12px;
        font-size: 14px;
        cursor: pointer;
        border-radius: 4px;
        box-shadow: 0 1px 5px rgba(0,0,0,0.3);
    }

    .map-title h3 {
        margin: 0;
        padding: 5px;
        font-size: 18px;
        font-weight: bold;
        background: transparent;
        color: white;
        text-align: center;
    }
  

    #map6 { 
        position: sticky; 
        width:100%; 
        height:75vh;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    /* ==========================
   TABLET
   ========================== */

@media (max-width: 1024px) {

    #scrolly {
        margin-top:0;
        padding:0;
     }

    #scrolly .step:last-child {
        margin-bottom: 0;
    }

    .sticky-thing {
            height: 100vh;
            width: 100vw;
            margin-bottom:0;
        }

    #scrolly-2,
    #scrolly-2-5 {
        padding: 1rem 0px;
    }

    #map {
        height: 100vh;
        width: 100vw;
        padding: 0;
        margin: 0;
    }

    #map2 {
        padding-bottom: 150vh;
        width: min(100vw, 700px);
    }

    .sticky-thing2 {
        overflow: hidden !important;
        height: 100vh;
        
    }

    #map2-5 {
        width: 95vw;
        margin-top:0;
        width: min(100vw, 700px);
        padding-bottom: 20vh;
    }

    .sticky-thing2-5 {
        padding-top: 0;
        height: 150vh;
        gap: 0;
        }

    .step {
            width: min(90vw, 650px);
            margin-bottom: 55vh;
            z-index: 999!important;
        }
    
    .step:last-child {
            margin-bottom: 80vw;
        }

    table th,
    table td {
        font-size: 16px;
    }

    .llegenda2 {
        width: 80px;
        font-size: 14px;
    }

    #map51,
    #map52,
    #map53 {
        width: 30vw;
        height: 45vh;
    }
}


/* ==========================
   MÓVIL
   ========================== */

@media (max-width: 768px) {

    #scrolly {
        margin-top:0;
        padding:0;
    }

    #scrolly .step:last-child {
        margin-bottom: 0;
    }

    .step {
            z-index: 999!important;
        }

    .sticky-thing {
            height: 100vh;
            width: 100vw;
            margin-bottom:0;
        }

    .titols {
        padding: 0;
        margin-top: 0;
    }

    #scrolly-2,
    #scrolly-2-5 {
        padding: 0 10px;
    }

    #scrolly-2-5 {
        padding-bottom: 4vh!important;
    }

    .sticky-thing2,
    .sticky-thing2-5 {
        height: auto;
        min-height: 30vh;
    }

    .sticky-thing2 {
        height: 100vh;
        width: 100vw;
        margin-right: 60vw;
        
    }

     #map2 {
        width: min(900vw, 650px);
        margin-top: 0;
        padding: 0;
        display: flex;   
        justify-content: center;
    }

    #map2 svg {
        padding-bottom: 0;
        width: min(900vw, 650px);
        
    }

    .sticky-thing2-5 {
        padding-top: 2vh;
        gap: 1rem;
        
    }

    #titol-piramide {
        width: 95%;
    }

    #titol-piramide p:first-child {
        font-size: 15px;
        line-height: 1.3;
    }


    #map2-5 {
        width: 100%;
        max-width: none;
        min-height: 320px;
        height: auto;
    }

    #map2-5 svg {
        max-width: 100%;
        min-height: auto;
    }

    .step.map2 {
        margin-top: 250px;
    }

    .step.map25:first-child {
        margin-top: 5vh;
    }

    .step.map25:last-child {
        margin-bottom: 500px;
    }

    table {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }

    table th,
    table td {
        font-size: 13px;
        padding: 6px;
    }

    .franges-horaries {
        flex-direction: column;
        height: auto;
        gap: 2rem;
    }

    #map51,
    #map52,
    #map53 {
        width: 90vw;
        height: 40vh;
    }

    #llegenda-colors {
        flex-wrap: wrap;
        justify-content: center;
    }

    .llegenda2 {
        width: 70px;
        margin: 5px;
        font-size: 12px;
    }

    #map6 { 
        position: sticky; 
        width:100%; 
        height:55vh;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .map-button {
        top: 10px;
        left: 10px;
        font-size: 12px;
        padding: 6px 10px;
    }

    #tooltip {
        font-size: 13px;
        max-width: 200px;
    }
}

</style>
<body>
        <section class="paragraph">
            <p>Trànsit, terrasses, mercats, obres, festes populars... El dia a dia de les ciutats és sorollós. Però com de sorollós?</p>
            <p>L'OMS recomana que el soroll ambiental no superi els 55 dB durant el dia per evitar impactes negatius a la salut. L'exposició continuada a nivells de 55 dB o superiors pot provocar estrès, trastorns del son, problemes cardiovasculars i dificultats de concentració a les persones exposades. En zones amb soroll constant per sobre d'aquest llindar, la qualitat de vida es veu seriosament afectada.</p>
        </section>
        <section id="scrolly">
            <div class="sticky-thing">
                <div id="map"></div>
            </div>
            <article>
            <div class="step map1" data-step="1">
                <p>Per a abordar aquest problema, la UE va establir una directiva que obliga a les ciutats de més de 100.000 habitants a elaborar mapes de soroll i plans d'acció cada 5 anys per a localitzar les zones més afectades i aplicar-hi mesures de mitigació.</p>
            </div>
            <div class="step map1" data-step="2">
                <p style="margin-bottom:10px;">A Mataró, les dades recollides el 2022 per a cada carrer divideixen la contaminació acústica en 6 trams:</p>
                <div>
                    <p style="background-color:#016164; color:white!important; border-radius: 40px;"> < 55 dB</p> 
                    <p style="background-color:#57C4AD; border-radius: 40px;">55 - 59 dB</p>
                    <p style="background-color:#E7E0BC; border-radius: 40px;">60 - 64 dB</p>
                    <p style="background-color:#EDA147; border-radius: 40px;">65 - 69 dB</p>
                    <p style="background-color:#DB4325; border-radius: 40px;">70 - 74 dB</p>
                    <p style="background-color:#9D1642; color:white!important; border-radius: 40px;"> >= 75 dB</p> 
                </div>
            </div>
            <div class="step map1" data-step="3">
                <p>Podem pensar que les zones industrials com els polígons de Pla d'en Boet i El Cros són una de les principals causes de soroll a la ciutat per la gran afluència de vehicles pesats i el so de la maquinària durant el dia; així com l'activitat de bars i discoteques durant les nits del cap de setmana.</p>
            </div>
            <div class="step map1" data-step="4">
                <p>Però els polígons estan en una posició aïllada de la ciutat, per la qual cosa no es poden considerar com a una de les causes principals que afecten les zones residencials de la vora.</p>
            </div>
            <div class="step map1" data-step="5">
                <p>Si ens fixem en els carrers més sorollosos, trobem que bona part de les àrees amb més contaminació acústica són aquelles amb connexió directa amb les entrades i sortides de la ciutat, com la Via Europa, el Camí del Mig i l'N-II.</p>
            </div>
            <div class="step map1" data-step="6">
                <p>Els carrers que absorbeixen el trànsit exterior són els mateixos que utilitzen els mataronins per a moure's àgilment per la ciutat sense haver d'endinsar-se en carrerons.</p>
            </div>
            <div class="step map1" data-step="7">
                <p>La tendència que segueix la contaminació acústica en els carrers de Mataró divideix la ciutat en dues àrees.</p>
            </div>
            <div class="step map1" data-step="8">
                <p>Els barris del nord-oest (Cerdanyola, La Llàntia, Cirera, Els Molins, Rocafonda...) concentren el soroll en els carrers principals i a les perifèries, deixant carrerons i zones residencials en silenci. La manca de comerços també afavoreix que hi hagi poc moviment.</p>
            </div>
            <div class="step map1" data-step="9">
                <p>En canvi, a la zona sud-est de la ciutat hi ha pocs carrers amb menys de 65 dB. El Centre i l'Eixample compten amb zones comercials denses i tenen manca de carrers grans que atreguin la mobilitat. La falta de carrers principals afavoreix que el trànsit es dispersi entre els carrerons i que la majoria tingui nivells alts de contaminació acústica.</p>
            </div>
            <div class="step map1" data-step="10">
                <p>La lògica de mobilitat també es trasllada al transport públic: als barris exteriors els <span style="background-color:#FBBA33; border-radius: 40px; padding:0 7px;">autobusos de MataróBus</span> circulen pels carrers principals i més transitats mentre que al Centre i l'Eixample necessàriament han de passar serpentejant per carrers més estrets.</p>
            </div>
            <div class="step map1" data-step="11">
                <p>El trànsit i el comerç són probablement les causes principals de contaminació acústica a Mataró i aproximadament un 96% de la població conviu amb nivells superiors als 55 dB recomanats per l'OMS.</p>
            </div>
            </article>
        </section>
        <section class="paragraph" style= "background-color:#1C1C1C;">
            <p class="titols">Un 96% de mataronins conviuen amb més de 55 decibels diàriament</p>
            <p>Segons les dades de la Generalitat de Catalunya i de l'Ajuntament de Mataró, gairebé la totalitat dels mataronins viuen diàriament exposats a nivells de soroll que superen els 55dB recomanats per l'OMS. </p>
            <p>La majoria dels carrers de Mataró van registrar xifres d'entre 60dB i 74dB durant el 2022. Tot i això, la distribució de la població juga un paper important a l'hora de veure el grau d'afectació pel soroll que pateixen els mataronins. </p>
        </section>
        <section id="scrolly-2">
            <div class="sticky-thing2">
                <div id="map2"></div>
            </div>
            <article>
            <div class="step map2" data-step="12" >
                <p>Els barris amb més població a Mataró són Cerdanyola i Rocafonda-El Palau, els quals també concentren les xifres més altes de població afectada als extrems Est i Oest de la ciutat.</p>
            </div>
            <div class="step map2" data-step="13">
                <p>La proximitat als carrers principals i perifèrics i l'alta densitat de població faciliten que un nombre més elevat de persones es vegi afectat pel soroll causat per un mateix carrer, com és el cas del Camí del Mig, la ronda Bellavista o la carretera de Mata.</p>
            </div>
            <div class="step map2" data-step="14">
                <p>Una situació similar hi ha a Pla d'en Boet, en què els veïns de la zona residencial es troben entre dos carrers principals, l'avinguda de Lluís Companys i la Ronda President Macià, que absorbeixen el trànsit de la C-32 i l'N-II.</p>
            </div>
            <div class="step map2" data-step="15">
                <p>Al Centre i la resta de barris, tot i que pràcticament tots els carrers pateixen nivells alts de soroll, la densitat de població és considerablement més baixa així com el nombre d'afectats.</p>
            </div>
            <div class="step map2" data-step="16">
                <p>Dels gairebé 132.000 habitants de Mataró, un <span class = "span-colored" style="background-color:#57C4AD; ">10,11%</span> està exposat a soroll <span class = "span-colored" style="background-color:#57C4AD;">d'entre 55 i 59 dB</span>; un <span class = "span-colored" style="background-color:#E7E0BC;">16,9% entre 65 i 69 dB</span>; un <span class = "span-colored" style="background-color:#EDA147;">30,9%</span> es veuen afectats per soroll d'entre <span class = "span-colored" style="background-color:#EDA147;">65 i 69 dB</span>; el grup més gran, amb el <span class = "span-colored" style="background-color:#DB4325;">32,57%</span> de la població pateixen nivells d'entre <span class = "span-colored" style="background-color:#DB4325;">70 i 74 dB</span> i el <span class = "span-colored" style="background-color:#9D1642; color:white!important;">6,38%</span> conviu amb soroll de <span class = "span-colored" style="background-color:#9D1642; color:white!important;">més de 75 dB</span>.</p>
            </div>
            <div class="step map2" data-step="17">
                <p>Si analitzem la població de Mataró desglossada per edat i sexe, es pot observar que els nivells de soroll elevats <b>impacten de forma transversal a totes les franges</b>.</p>
            </div>
            </article>
        </section>
        <section id="scrolly-2-5">
            <div class="sticky-thing2-5">
                <div id="map2-5">
                <div id="titol-piramide">
                <p style="color:#595959;font-family:Fjalla One;">NOMBRE DE PERSONES AFECTADES PER LA CONTAMINACIÓ ACÚSTICA PER SEXE I EDAT</p>
                <p style="margin-top:0;">💡<em>Interactúa amb la gràfica</em></p>
                </div>
                </div>
                <div id="tooltip"></div>
            </div>
            <article>
            <div class="step map25" data-step="18" >
                <p>Tot i que les proporcions d'exposició al soroll s'ajusten a la quantitat de població de cada grup d'edat, <b>les persones de més de 70 anys</b> destaquen com el col·lectiu més exposat a nivells superiors als <span class = "span-colored" style="background-color:#DB4325;">70dB</span>. Un <b>43,5%</b> <em>(7.379 persones)</em> viuen en carrers amb registres de més de <span class = "span-colored" style="background-color:#DB4325;">70dB</span>.</p>
            </div>
            <div class="step map25" data-step="19">
                <p>També és rellevant la quantitat de <b>nens</b> exposats a nivells elevats de contaminació acústica. <b>Un 89,1% <em>(20.117 nens)</em> conviuen amb nivells superiors als</b> <span class = "span-colored" style="background-color:#EDA147;">65dB</span>. Encara que les proporcions són similars als altres grups d'edat, segons l'OMS <b>els nens són més vulnerables</b> a la contaminació acústica perquè pot afectar el seu descans, a la seva capacitat de concentració i al seu desenvolupament cognitiu.</p>
            </div>
            <div class="step map25" data-step="20">
                <p>D'altra banda, les franges dels 17 anys fins als 49 estan formades per perfils heterogenis, però són també les principals en les quals es troben <b>dos grups que passen moltes hores a casa</b> i es veuen constantment exposats al soroll del seu carrer: els estudiants i els teletreballadors. </p>
            </div>
            <div class="step map25" data-step="21">
                <p>Aquests necessiten nivells de soroll baixos per a garantir la concentració durant llargs períodes de temps i en aquestes franges d'edat un <b>88,9%</b> <em>(50.179 persones)</em> conviu amb nivells superiors als <span class = "span-colored" style="background-color:#EDA147;">65dB</span>. Si l'exposició al soroll és contínua, és molt probable que acabin buscant alternatives com biblioteques o coworkings.</p>
            </div>
            <div class="step map25" data-step="18" >
                <p>Cadascun dels grups d'edat dels mataronins té trets propis que fan que la contaminació acústica afecti de maneres diferents del seu dia a dia. Però on s'origina el soroll? </p>
            </div>
            </article>
        </section>
        <section class="paragraph" style= "margin-top:5vh!important;">
            <p class="titols">El trànsit i els comerços són probablement la principal causa de soroll a la ciutat</p>
            <p>Els vehicles són presumiblement la causa principal de contaminació acústica de Mataró. Les dades de la Generalitat de Catalunya del 2022 ofereixen una variable que aïlla el nivell de soroll originat pels vehicles, però a l'hora de comparar-la amb el total la diferència entre columnes és nul·la.</p>
            <p>Donat que bona part del soroll registrat als carrers prové del trànsit, és possible que els registres es limitin a agregar les dades anuals i la mitjana de decibels en cada carrer sigui pràcticament la mateixa en ambdós casos. S'hauria de veure el plantejament de la base de dades per a poder fer afirmacions contundents en aquest aspecte.</p>
            <p style="color:#808080!important; font-size:18px;">💡<em>Pots explorar el mapa fent zoom amb el control de la part superior dreta i veure la quantitat de cotxes per illa fent clic als cercles que apareixeran en fer scroll.</em></p>
        </section>
        <section id="scrolly-3">
            <div class="sticky-thing3">
                <div id="map3"></div>
            </div>
            <article>
            <div class="step map3" data-step="18" >
                <p>En un context com aquest, en què no podem saber amb exactitud quin percentatge del soroll prové dels vehicles, sorgeix una altra pregunta: el soroll dels carrers té a veure amb els cotxes dels veïns que hi viuen, o bé no hi ha una relació clara entre el nombre de vehicles registrats a cada illa i el soroll que s’hi sent?</p>
            </div>
            <div class="step map3" data-step="19">
                <p>En un primer moment podem pensar que el nombre de vehicles està directament relacionat amb la població de cada barri, però no és així.</p>
            </div>
            <div class="step map3" data-step="20">
                <p><b>Nombre de vehicles i habitants dels barris de Mataró</b></p>
                <table>
                    <tr>
                        <th>Barri</th>
                        <th>Nº Habitants</th>
                        <th>Nº Vehicles</th>
                        <th>% població amb vehicle</th>
                    </tr>
                    <tr>
                        <td>El Rengle</td><td>1.564</td><td>534</td><td>34.1%</td>
                    </tr>
                    <tr>  
                        <td>La Llàntia</td><td>3.982</td><td>2.221</td><td>55.8%</td>   
                    </tr>
                    <tr>  
                        <td>Pla d'en Boet</td><td>4.116</td><td>1.660</td><td>40.3%</td> 
                    </tr>
                    <tr> 
                        <td>Peramàs</td><td>4.435</td><td>1.901</td><td>42.8%</td> 
                    </tr>
                    <tr> 
                        <td>Els Molins</td><td>5.380</td><td>2.608</td><td>48.5%</td>  
                    </tr>
                    <tr>  
                        <td>Vista Alegre</td><td>9.928</td><td>5.942</td><td>59.8%</td>
                    </tr>
                    <tr>  
                        <td>Cirera</td><td>10.648</td><td>5.251</td><td>49.3%</td> 
                    </tr>
                    <tr> 
                        <td>Centre</td><td>12.969</td><td>5.650</td><td>43.5%</td> 
                    </tr>
                    <tr> 
                        <td>Rocafonda</td><td>11.532</td><td>3.134</td><td>27.2%</td> 
                    </tr>
                    <tr>  
                        <td>El Palau</td><td>16.984</td><td>6.639</td><td>39.1%</td>
                    </tr>
                    <tr>  
                        <td>Eixample</td><td>18.047</td><td>7.480</td><td>41.4%</td>
                    </tr>
                    <tr>  
                        <td>Cerdanyola</td><td>32.269</td><td>11.404</td><td>35.3%</td>
                    </tr>
                    </table>
            </div>
            <div class="step map3" data-step="21">
                <p>La Llàntia i Vista Alegre són els barris amb més cotxes per habitant (55,8% i 59,8%) i superen en nombre d'altres més poblats.</p>
            </div>
            <div class="step map3" data-step="22">
                <p>D'altra banda, Cerdanyola és la zona amb més vehicles, però alhora té un dels percentatges més baixos amb un 35,5% d'habitants amb cotxe.</p>
            </div>
            <div class="step map3" data-step="23">
                <p>El mateix succeeix amb Rocafonda i El Palau, que tot i ser dels barris més poblats tenen percentatges del 27,2% i 39,1% respectivament.</p>
            </div>
            </article>
        </section>
        <section class="paragraph">
            <p>Les zones amb més vehicles registrats no tenen relació directa amb els carrers amb nivells elevats de contaminació acústica. És a dir, que el soroll derivat de cotxes i motos no ve originat del lloc on resideixen els veïns, sinó que la causa principal és que els conductors tenen preferència per circular per determinats carrers independentment del seu origen i destí.</p>
            <p>Els carrers principals són els més transitats perquè permeten moure's àgilment i connectar amb tots els barris i les entrades i sortides de la ciutat. El punt d'unió de tot aquest trànsit és la plaça Granollers, la qual queda abraçada pels carrers més sorollosos de Mataró i arriba a sobrepassar els 75dB.</p>
            <p>A més a més dels vehicles, però sense deixar-los de banda, les zones comercials també són responsables del soroll al carrer. Terrasses, repartidors, distribuïdors de mercaderies i el propi moviment dels clients contribueix a augmentar els decibels dels carrers.</p>
        </section>
        <section id="scrolly-4">
            <div class="sticky-thing4">
                <div id="map4">
                <button id="toggle-botigues" class="map-button">Ocultar línies de soroll</button>
                </div>
            </div>
            <article>
            <div class="step map4" data-step="21" >
                <p>Tot i que a les dades de Open Street Maps falten <span class = "span-colored" style="background-color:#BA5C70; color:white!important;">comerços</span> i <span class = "span-colored" style="background-color:#FBBA33">serveis</span>, es pot veure ben representada la tendència que segueix la distribució de les botigues a la ciutat.</p>
            </div>
            <div class="step map4" data-step="22">
                <p>Als barris de la zona nord-oest de la ciutat les botigues i serveis es concentren en els carrers principals com l'avinguda Puig i Cadafalch, la via Europa, l'avinguda dels Països Catalans i la ronda de Sant Oleguer.</p>
            </div>
            <div class="step map4" data-step="23">
                <p>Per contra, les zones comercials de la part sud-est de la ciutat són més disperses. La densitat i varietat de botigues del Centre i de l'Eixample també juguen un paper important a l'hora d'atreure veïns dels barris perifèrics de la ciutat i d'altres pobles de la comarca.</p>
            </div>
            <div class="step map4" data-step="24">
                <p>La ubicació dels establiments de la ciutat en els carrers amb nivells més alts de contaminació acústica permet pensar que, de la mateixa manera que els vehicles, són possiblement una de les fonts de soroll més rellevants a la ciutat.</p>
            </div>
            </article>
        </section>
        <section class="paragraph">
            <p class="titols">Les nits de Mataró són més silencioses</p>
            <p>Si el trànsit i el comerç són probablement les principals causes de la contaminació acústica de la ciutat, què passa durant les hores amb menys circulació i quan tot està tancat? Què passa durant la nit? </p>
            <p>Les dades recollides per l'administració separa en tres franges horàries la mesura del soroll: de 7h a 21h durant el dia, de 21h a 23h per al vespre i de 23h a 7h per a la nit.</p>
            <p>Segons les recomanacions de l'OMS, els decibels recomanats per a passar una nit tranquil·la i garantir una bona qualitat de la son són 50dB.</p>
            <p style="font-size:18px!important; text-align:center;">💡<em>Fes clic i interactúa amb la gràfica</em></p>
            <div class="franges-horaries">
                <div class="map-title">
                    <h3>Dia (7 - 21h)</h3>
                    <div id="map51"></div>
                </div>
                <div class="map-title">
                    <h3>Vespre (21-23h)</h3>
                    <div id="map52"></div>
                </div>
                <div class="map-title">
                    <h3>Nit (23-7h)</h3>
                    <div id="map53"></div>
                </div>
            </div>
            <div id="llegenda-sync">
                <div id="llegenda-colors">
                    <p class= "llegenda2" style="background-color:#016164; color:white!important;"> < 55 dB</p> 
                    <p class= "llegenda2" style="background-color:#57C4AD;">55 - 59 dB</p>
                    <p class= "llegenda2" style="background-color:#E7E0BC;">60 - 64 dB</p>
                    <p class= "llegenda2" style="background-color:#EDA147;">65 - 69 dB</p>
                    <p class= "llegenda2" style="background-color:#DB4325;">70 - 74 dB</p>
                    <p class= "llegenda2" style="background-color:#9D1642; color:white!important;"> >= 75 dB</p> 
                </div>
            </div>
            <p>Al vespre, els carrers més transitats durant el dia experimenten una lleugera disminució en els nivells de contaminació acústica. Els carrers principals continuen sent els més sorollosos de la ciutat, però molts dels carrerons que durant el dia havien tingut nivells elevats de decibels, sobretot els del Centre i l'Eixample, aconsegueixen arribar a la franja dels 55dB.</p>
            <p>A la nit tota la ciutat queda pràcticament deserta i la gran majoria dels carrers no superen els 59dB. Tot i això, els carrers principals i les entrades i sortides de la ciutat encara mantenen nivells bastant elevats fins i tot a altes hores de la nit. És possible que els veïns d'aquestes zones vegin alterada la seva qualitat de la son a causa d'aquest problema.</p>
        </section>
        <section class="paragraph arbres">
            <p class="titols">Arbres i zones verdes per pal·liar el soroll</p>
            <p>Els nivells de soroll alts poden causar problemes de salut segons l'OMS, però és difícil aconseguir xifres inferiors als 55dB en ciutats amb tants habitants.</p>
            <p>L'Ajuntament ha establert normatives com la de restringir a un horari fix els permisos de terrasses o limitar el trànsit per certs carrers, però la principal solució per a evitar que el soroll s'escampi pels carrers i arribi als habitatges són els <span class= "span-colored" style="background-color:#5CBA70;color:#000">arbres</span> i les <span class= "span-colored" style="background-color:#137448; color:#fff;">zones verdes</span>.</p>
            <div id="map6">
                <button id="toggle-arbres" class="map-button">Ocultar línies de soroll</button>
            </div>
            <p>Mataró compta amb un ample ventall de zones verdes repartides per la ciutat i també aposta pels arbres en carrers principals, places i parcs.</p>
            <p>Però haurà d'afrontar un repte en els pròxims anys. La llarga sequera que ha afectat gran part de Catalunya ha causat que centenars d'arbres hagin mort i l'Ajuntament els hagi talat per seguretat. Enguany han començat una campanya de replantació, però els nous arbres són molt joves, prims i baixos com per a complir amb la funció de mitigar el soroll. Notaran la diferència els mataronins ara que ve el bon temps i torna a haver-hi més activitat als carrers?</p>
        </section>
        <section id="footer"></section>
    <script>
            fetch('https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json')
        .then(response => response.json()) 
        .then(style => {
            if (style.sources && style.sources.openmaptiles) {
                style.sources.openmaptiles.attribution = "Mirai Data | ICGC - Mediambient Gencat - © OSM contributors";
            }
    //
            const map = new maplibregl.Map({
                container: 'map',
                style: style, 
                center: [2.4445, 41.54211],
                zoom: 13.8,
                attributionControl: false
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
                // 1️⃣ Agregar la fuente del polígono GeoJSON
                map.addSource('polygon-source', {
                    type: 'geojson',
                    data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/soroll_mataro.geojson'
                });
    //
                // 2️⃣ Agregar la capa del polígono
                map.addLayer({
                    id: 'polygon-layer',
                    type: 'line',
                    source: 'polygon-source',
                    paint: {
                        'line-color': [
                            'match',
                            ['get', 'nivell_soroll_TOTDEN'],
                            '<55 dB', '#016164',
                            '55 - 59 dB', '#57C4AD',
                            '60 - 64 dB', '#E7E0BC',
                            '65 - 69 dB', '#EDA147',
                            '70 - 74 dB', '#DB4325',
                            '>= 75 dB', '#9D1642',
                            '#000000'
                        ],
                        'line-width': 3
                    }
                });
    //
                // 3️⃣ Agregar la fuente de puntos (pero sin mostrarla todavía)
                map.addSource('line-source', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'properties': { 'color': '#DB4325' },
                                'geometry': {
                                    'type': 'LineString',
                                    'coordinates': [
                                        [2.431497, 41.550649],  // Via Europa
                                        [2.431948, 41.545834]   
                                    ]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': { 'color': '#DB4325' },
                                'geometry': {
                                    'type': 'LineString',
                                    'coordinates': [
                                        [2.430498, 41.536384],  // Camí del Mig 
                                        [2.422309, 41.533126]   
                                    ]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': { 'color': '#DB4325' },
                                'geometry': {
                                    'type': 'LineString',
                                    'coordinates': [
                                        [2.422156, 41.528193],  // C-31 1
                                        [2.427274, 41.529253]   
                                    ]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': { 'color': '#DB4325' },
                                'geometry': {
                                    'type': 'LineString',
                                    'coordinates': [
                                        [2.427274, 41.529253],  // C-31 2
                                        [2.433395, 41.529320]   
                                    ]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': { 'color': '#DB4325' },
                                'geometry': {
                                    'type': 'LineString',
                                    'coordinates': [
                                        [2.423661, 41.522531],  // N-II 1
                                        [2.428725, 41.524931]   
                                    ]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': { 'color': '#DB4325' },
                                'geometry': {
                                    'type': 'LineString',
                                    'coordinates': [
                                        [2.428725, 41.524931],  // N-II 2
                                        [2.433948, 41.529000]  
                                    ]
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': { 'color': '#9D1642' },
                                'geometry': {
                                    'type': 'LineString',
                                    'coordinates': [
                                        [2.435145, 41.529576],  // N-II 3
                                        [2.443200, 41.531933]  
                                    ]
                                }
                            }
                        ]
                    }
                });
    //
                // 4️⃣ Crear la capa de línea pero con visibilidad "none"
                map.addLayer({
                    'id': 'line-layer',
                    'type': 'line',
                    'source': 'line-source',
                    'layout': {
                        'visibility': 'none'
                    },
                    'paint': {
                        'line-color': ['get', 'color'], // Obtiene el color de cada línea
                        'line-width': 4
                        }            
                });
    //
                map.addSource('busos', {
                                type: 'geojson',
                                data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/rutes_bus.geojson'
                            });
    //
                map.addLayer({
                        'id': 'busos-layer',  // ID único para la capa de buses
                        'type': 'line',
                        'source': 'busos',  // Fuente correcta
                        'layout': {
                            'visibility': 'none'  // Oculta la capa al inicio
                        },
                        'paint': {
                            'line-color': "#FBBA33",
                            'line-width': 4
                        }            
                    });
    //
                // Inicializar Scrollama
                const scroller = scrollama();
    //
                scroller.setup({
                    step: ".map1",
                    offset: 0.5,  
                    debug: false
                }).onStepEnter(response => {
                    const { index } = response;
    //
                    if (index === 2 || index === 3) {
                        map.flyTo({
                            center: [2.431, 41.532], 
                            zoom: 15, 
                            essential: true  
                        });
                    } 
    //
                    if (index === 4) {
                        let opacity = 0; 
                        const interval = setInterval(() => {
                            opacity += 0.2; // Incremento gradual
                            if (opacity >= 1) {
                                clearInterval(interval); // Detener cuando llega a 1
                                opacity = 1;
                            }
                            map.setLayoutProperty('line-layer', 'visibility', 'visible');
                            map.setPaintProperty('line-layer', 'line-opacity', opacity);
                        }, 100); 
                        map.setLayoutProperty('polygon-layer', 'visibility', 'none');
                    }
                    if (index === 5){
                        map.setLayoutProperty('line-layer', 'visibility', 'visible');
                        map.setLayoutProperty('polygon-layer', 'visibility', 'none');
                    }
                    if (index === 7) {
                        map.flyTo({
                            center: [2.434361, 41.546658], 
                            zoom: 15, 
                            essential: true,
                            duration: 1000  
                        });
                    }
                    if (index === 8) {
                        map.flyTo({
                            center: [2.442818, 41.537635], 
                            zoom: 15, 
                            essential: true,
                            duration: 1000  
                        });
                    }
                    if (index === 9) {
                        map.setLayoutProperty('busos-layer', 'visibility', 'visible');  
                        map.setLayoutProperty('polygon-layer', 'visibility', 'none');  
                    }
                }).onStepExit(response => {
                    const { index } = response;
    //
                    if (index === 1 || index === 3 || index === 6 || index === 9) {
                        map.flyTo({
                            center: [2.4445, 41.54211],
                            zoom: 13.8,
                            essential: true
                        });
                    }
    //
                    if (index === 3 || index === 6) {
                        map.setLayoutProperty('line-layer', 'visibility', 'none'); // Ocultar el punto
                        map.setLayoutProperty('polygon-layer', 'visibility', 'visible');
                    }
                    if (index === 8 || index === 10) {
                        map.setLayoutProperty('busos-layer', 'visibility', 'none');  
                        map.setLayoutProperty('polygon-layer', 'visibility', 'visible');  
                    }
                });
    //
                scroller.init();
            });
        })
        .catch(error => console.error('Error:', error));
    //
        const width = 1000;
        const height = 800;
        const margin = { top: 50, right: 50, bottom: 100, left: 100 };
//
        const svg = d3.select("#map2")
        .append("svg")
        .attr(
            "viewBox",
            `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`
        )
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
            //
            //
        // 📌 Crear una proyección y escala para el mapa
        const projection = d3.geoMercator()
            .center([2.4445, 41.54211]) 
            .scale(950000)
            .translate([width / 2, height / 2]);
    //
        const pathGenerator = d3.geoPath().projection(projection);
    //
        // 📌 Cargar ambos GeoJSON
        Promise.all([
            d3.json("https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/soroll_mataro.geojson"), // Líneas
            d3.json("https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/illes_soroll.geojson") // Puntos
        ]).then(([multilines, puntos]) => {
    //
            // 📌 Escala de tamaño de burbujas
            const tamañoMin = 21, tamañoMax = 1546; // Rango del radio de los puntos
    //
            const minTOTDEN = d3.min(puntos.features, d => d.properties.TOTDEN);
            const maxTOTDEN = d3.max(puntos.features, d => d.properties.TOTDEN);
    //
            // Escala para el tamaño (ejemplo: "valor" es la variable en el dataset)
            const escalaTamaño = d3.scaleLinear()
                .domain(d3.extent(puntos.features, d => d.properties.NOMBRE_HABITANTS)) // Ajusta con el rango de la variable
                .range([tamañoMin, tamañoMax]);
    //
            // 📌 Escala de posición X para gráfico de burbujas
            const categorias = [...new Set(puntos.features.map(d => d.properties.nivell_soroll_TOTDEN))];
            const escalaX = d3.scaleLinear()
                .domain([50, 80]) 
                .range([200, width - 200]);
    //
            // 📌 Paleta de colores personalizada
            const coloresPersonalizados = ["#EDA147", "#DB4325", "#57C4AD", "#E7E0BC", "#016164", "#9D1642","#FFFFFF4C"];;
            const escalaColor = d3.scaleOrdinal()
                .domain(categorias)
                .range(coloresPersonalizados);
    //
            // 📌 Crear nodos con posiciones iniciales (mapa) y objetivo (burbujas)
            const nodos = puntos.features.map(d => ({
                TOTDEN: d.properties.TOTDEN,
                categoria: d.properties.nivell_soroll_TOTDEN,
                radio: escalaTamaño(d.properties.NOMBRE_HABITANTS / 60),
                color: escalaColor(d.properties.nivell_soroll_TOTDEN),
                xMapa: projection(d.geometry.coordinates)[0],
                yMapa: projection(d.geometry.coordinates)[1],
                xObjetivo: escalaX(d.properties.TOTDEN), 
                yObjetivo: height / 2 + Math.random() * 100 - 50
            }));
            // 📌 Dibujar líneas del mapa
            const lineasMapa = svg.append("g")
                .selectAll("path")
                .data(multilines.features)
                .enter()
                .append("path")
                .attr("d", pathGenerator)
                .attr("stroke", "#808080")
                .attr("stroke-width", 0.5)
                .attr("fill", "none");
    //
            // 📌 Dibujar puntos en el mapa
            const puntosMapa = svg.append("g")
                .selectAll("circle")
                .data(nodos)
                .enter()
                .append("circle")
                .attr("cx", d => d.xMapa)
                .attr("cy", d => d.yMapa)
                .attr("r", d => d.radio)
                .attr("fill", d => d3.color(d.color).copy({ opacity: 0.7 }))  // Color con transparencia (50%)
                .attr("stroke", d => d.color)  // Mismo color que el relleno
                .attr("stroke-width", 0.8);
                    // 🔥 **Añadir el eje X dentro del beeswarm**
      //          
                let beeswarmActivo = false; 
    //        
    //
                // 📌 Configurar Scrollama.js
                const scroller = scrollama();
    //
                scroller.setup({
                    step: ".map2",
                    offset: 0.5,
                    debug: false
                }).onStepEnter(response => {
                    const step = response.element.getAttribute("data-step");
    //
                    if (step === "16" || step === "17") {
                        if (!beeswarmActivo) { // Solo activar la simulación una vez
                            beeswarmActivo = true;
    //
                            // 📌 Ocultar líneas del mapa
                            lineasMapa.transition()
                                .duration(500)
                                .style("opacity", 0);
    //
                            const beeswarmTop = height * 0.15;
                            const beeswarmBottom = height * 0.85;
                            const beeswarmHeight = beeswarmBottom - beeswarmTop;
                            const ejeY = beeswarmBottom;
//
                            // 📌 Crear simulación de fuerzas para beeswarm con `d3-force`
                            const simulation = d3.forceSimulation(nodos)
                                .force("x", d3.forceX(d => escalaX(d.TOTDEN)).strength(0.5)) // Alinear en X
                                .force("y", d3.forceY(beeswarmTop + beeswarmHeight / 2).strength(0.2)) // Distribución vertical
                                .force("collide", d3.forceCollide(d => d.radio + 5)) // Evitar solapamientos
                                .force("charge", d3.forceManyBody().strength(-10)) // Repulsión
                                .on("tick", () => { 
                                    puntosMapa
                                        .attr("cx", d => d.x)
                                        .attr("cy", d => d.y)
                                        .transition()
                                        .duration(1500);
                                });
            const ejeX = d3.axisBottom(escalaX)
                .tickValues([50, 60, 70, 80])
                .tickFormat(d => d + " dB");
    //
            const ejeXGroup = svg.append("g")
                .attr("class", "eje-x")
                .attr("transform", `translate(0, ${ejeY})`)
                .call(ejeX);
    //
            ejeXGroup.select("path") // Selecciona la línea del eje X
                .attr("stroke", "none");
    //
            ejeXGroup.selectAll("text")
                .attr("class", "eje-x-text")
                .style("font-size", "16px")
                .style("font-family", "Tex");
    //
            svg.append("text")
                .attr("class", "x-label")
                .attr("text-anchor", "end")
                .attr("x", width / 2)
                .attr("y", ejeY + 50)
                .attr("text-anchor", "middle")
                .text("Nº decibels")
                .style("font-size", "16px")
                .style("font-family", "Fjalla One")
                .style("fill", "#595959");
//
            svg.append("text")
                .attr("class", "comentari")
                .attr("text-anchor", "end")
                .attr("x", escalaX(55))
                .attr("y", beeswarmTop - 10)
                .attr("text-anchor", "middle")
                .text("55dB")
                .style("font-size", "13px")
                .style("font-family", "Fjalla One")
                .style("fill", "#919191");
    //
            // 🔥 **Añadir línea vertical dashed en 55**
            svg.append("line")
                .attr("class", "linea-vertical")
                .attr("x1", escalaX(55))
                .attr("x2", escalaX(55))
                .attr("y1", beeswarmTop)
                .attr("y2", ejeY)
                .attr("stroke", "#C8C8C8")
                .attr("stroke-width", 1.5);
    //        
            const valoresX = [50, 60, 70, 80];
//
            valoresX.forEach(valor => {
                svg.append("line")
                    .attr("class", "linea-vertical-ejeX")
                    .attr("x1", escalaX(valor))
                    .attr("x2", escalaX(valor))
                    .attr("y1", beeswarmTop)
                    .attr("y2", ejeY)
                    .attr("stroke", "#D8D8D8")
                    .attr("stroke-width", 1.2)
                    .attr("stroke-dasharray", "5,5");
            });
    //
                            setTimeout(() => simulation.stop(), 1000); // 📌 Detener la simulación tras 3s
                        }
                    }
                }).onStepExit(response => {
                    const step = response.element.getAttribute("data-step");
    //
                    if (step === "15" || step == "18") {
                        // 🔥 Solo reseteamos el gráfico si volvemos a `data-step="1"`
                        beeswarmActivo = false;
    //
                        // 📌 Mostrar líneas del mapa de nuevo
                        lineasMapa.transition()
                            .duration(500)
                            .style("opacity", 1);
    //
                        // 📌 Volver al mapa si se hace scroll hacia arriba
                        puntosMapa.transition()
                            .duration(1000)
                            .attr("cx", d => d.xMapa)
                            .attr("cy", d => d.yMapa)
                            .attr("fill", d => d3.color(d.color).copy({ opacity: 0.7 }))  // Color con transparencia (50%)
                            .attr("stroke", d => d.color)  // Mismo color que el relleno
                            .attr("stroke-width", 0.8);
    //                   
                        d3.select(".eje-x")
                            .transition()
                            .duration(500)
                            .style("opacity", 0);
    //                    
                        d3.select(".eje-x-text")
                            .transition()
                            .duration(500)
                            .style("opacity", 0);
    //              
                        d3.selectAll(".linea-vertical")
                            .transition()
                            .duration(500)
                            .style("opacity", 0);
    //                  
                        d3.selectAll(".linea-vertical-ejeX")
                            .transition()
                            .duration(500)
                            .style("opacity", 0);
    //
                        d3.selectAll(".comentari")
                            .transition()
                            .duration(500)
                            .style("opacity", 0);
    //
                        d3.selectAll(".x-label")
                            .transition()
                            .duration(500)
                            .style("opacity", 0);
    //                    
                        d3.selectAll(".tick")
                            .transition()
                            .duration(500)
                            .style("opacity", 0);
                    }
                });
                });
    //
//
//
//
            const width_map25 = 800, height_map25 = 500, margin_map25 = { top: 20, right: 50, bottom: 30, left: 50 };
            //
            const piramide = d3.select("#map2-5")
                            .append("svg")
                            .attr("viewBox", `0 0 ${width_map25} ${height_map25}`)
                            .attr("preserveAspectRatio", "xMidYMid meet")
                            .classed("svg-content", true);
//
            // Datos de ejemplo
            const data = [
                        {age: "0-16",
                            male: {
                            "<55 dB": 108,
                            "55 - 59 dB": 1134,
                            "60 - 64 dB": 2094,
                            "65 - 69 dB": 3793,
                            "70 - 74 dB": 3698,
                            ">= 75 dB": 781
                            },
                            female: {
                            "<55 dB": 97,
                            "55 - 59 dB": 1121,
                            "60 - 64 dB": 2004,
                            "65 - 69 dB": 3619,
                            "70 - 74 dB": 3448,
                            ">= 75 dB": 680
                            }
                        },
                        {age: "17-29",
                            male: {
                            "<55 dB": 89,
                            "55 - 59 dB": 1017,
                            "60 - 64 dB": 1685,
                            "65 - 69 dB": 2900,
                            "70 - 74 dB": 3088,
                            ">= 75 dB": 567
                            },
                            female: {
                            "<55 dB": 68,
                            "55 - 59 dB": 901,
                            "60 - 64 dB": 1527,
                            "65 - 69 dB": 2599,
                            "70 - 74 dB": 2785,
                            ">= 75 dB": 550
                            }
                        },
                        {age: "30-49",
                            male: {
                            "<55 dB": 174,
                            "55 - 59 dB": 2013,
                            "60 - 64 dB": 3534,
                            "65 - 69 dB": 6517,
                            "70 - 74 dB": 6411,
                            ">= 75 dB": 1291
                            },
                            female: {
                            "<55 dB": 201,
                            "55 - 59 dB": 1812,
                            "60 - 64 dB": 3242,
                            "65 - 69 dB": 6189,
                            "70 - 74 dB": 6145,
                            ">= 75 dB": 1149
                            }
                        },
                        {age: "50-69",
                            male: {
                            "<55 dB": 104,
                            "55 - 59 dB": 1494,
                            "60 - 64 dB": 2894,
                            "65 - 69 dB": 5484,
                            "70 - 74 dB": 5634,
                            ">= 75 dB": 1232
                            },
                            female: {
                            "<55 dB": 148,
                            "55 - 59 dB": 1573,
                            "60 - 64 dB": 2916,
                            "65 - 69 dB": 5374,
                            "70 - 74 dB": 5467,
                            ">= 75 dB": 1217
                            }
                        },
                        {age: ">70",
                            male: {
                            "<55 dB": 38,
                            "55 - 59 dB": 792,
                            "60 - 64 dB": 1512,
                            "65 - 69 dB": 2973,
                            "70 - 74 dB": 2915,
                            ">= 75 dB": 624
                            },
                            female: {
                            "<55 dB": 83,
                            "55 - 59 dB": 1206,
                            "60 - 64 dB": 2101,
                            "65 - 69 dB": 3851,
                            "70 - 74 dB": 3636,
                            ">= 75 dB": 704
                            }
                        }
                        ];
//
            // Preparar datos para apilamiento
            const categories = ["<55 dB", "55 - 59 dB", "60 - 64 dB", "65 - 69 dB", "70 - 74 dB", ">= 75 dB"];
            const stack = d3.stack().keys(categories);
//                            
            // Escalas
            const y = d3.scaleBand()
                .domain(data.map(d => d.age))
                .range([height_map25 - margin_map25.bottom, margin_map25.top])
                .padding(0.1);
//
            const x = d3.scaleLinear()
                .domain([-d3.max(data, d => d3.sum(Object.values(d.male))), d3.max(data, d => d3.sum(Object.values(d.female)))])
                .range([margin_map25.left, width_map25 - margin_map25.right]);
//            
            const color = d3.scaleOrdinal()
                .domain(["<55 dB", "55 - 59 dB", "60 - 64 dB", "65 - 69 dB", "70 - 74 dB", ">= 75 dB"])
                .range([
                    'rgba(1, 97, 100, 0.9)',   // '#016164'
                    'rgba(87, 196, 173, 0.9)', // '#57C4AD'
                    'rgba(231, 224, 188, 0.9)',// '#E7E0BC'
                    'rgba(237, 161, 71, 0.9)', // '#EDA147'
                    'rgba(219, 67, 37, 0.9)',  // '#DB4325'
                    'rgba(157, 22, 66, 0.9)'   // '#9D1642'
                    ]);
//
            const tooltip = d3.select("#tooltip");
            d3.select("#map2-5 svg").style("pointer-events", "all");
//
            // Dibujar barras apiladas para hombres (negativas)
            piramide.append("g")
                    .selectAll("g")
                    .data(stack(data.map(d => d.male)))
                    .enter().append("g")
                    .attr("fill", d => color(d.key))
                    .selectAll("rect")
                    .data((d, i) => d.map((p, j) => ({ ...p, key: d.key, sexo: "HOMES", age: data[j].age })))
                    .enter().append("rect")
                    .attr("x", d => x(-d[1]))
                    .attr("y", (d, i) => y(data[i].age))
                    .attr("width", d => x(-d[0]) - x(-d[1]))
                    .attr("height", y.bandwidth())
                    .on("mouseover", (event, d) => {
                        const baseColor = d3.color(color(d.key)); 
                        if (baseColor) {
                            tooltip
                                .style("display", "block")
                                .style("background-color", `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0.8)`)
                                .html(`${d.sexo}<br> Nivell soroll: ${d.key}<br> Nº afectats: ${Math.abs(d[1] - d[0])}`);
                        }
                    })
                    .on("mousemove", (event) => {
                        tooltip.style("left", `${event.clientX + 20}px`)
                                .style("top", `${event.clientY - 20}px`);
                    })
                    .on("mouseout", () => {
                        tooltip.style("display", "none");
                    })
                    .on("click", (event, d) => {
                        tooltip.style("display", "block")
                            .style("left", `${event.clientX +20}px`)
                            .style("top", `${event.clientY - 20}px`)
                            .html(`${d.sexo}<br> Nivell soroll: ${d.key}<br> Nº afectats: ${Math.abs(d[1] - d[0])}`);
                    });
//
            // Dibujar barras apiladas para mujeres (positivas)
            piramide.append("g")
                .selectAll("g")
                .data(stack(data.map(d => d.female)))
                .enter().append("g")
                .attr("fill", d => color(d.key))
                .selectAll("rect")
                .data((d, i) => d.map((p, j) => ({ ...p, key: d.key, sexo: "DONES", age: data[j].age })))
                .enter().append("rect")
                .attr("x", d => x(d[0]))
                .attr("y", (d, i) => y(data[i].age))
                .attr("width", d => x(d[1]) - x(d[0]))
                .attr("height", y.bandwidth())
                .on("mouseover", (event, d) => {
                    const baseColor = d3.color(color(d.key)); 
                    if (baseColor) {
                        tooltip
                            .style("display", "block")
                            .style("background-color", `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0.8)`)
                            .html(`${d.sexo}<br> Nivell soroll: ${d.key}<br> Nº afectats: ${Math.abs(d[1] - d[0])}`);
                    }
                })
                .on("mousemove", (event) => {
                    tooltip.style("left", `${event.clientX + 20}px`)
                            .style("top", `${event.clientY - 20}px`);
                })
                .on("mouseout", () => {
                    tooltip.style("display", "none");
                })
                .on("click", (event, d) => {
                    tooltip.style("display", "block")
                        .style("left", `${event.clientX + 20}px`)
                        .style("top", `${event.clientY - 20}px`)
                        .html(`${d.sexo}<br> Nivell soroll: ${d.key}<br> Nº afectats: ${Math.abs(d[1] - d[0])}`);
                });
//
            // Eje Y
            const ejeYPiramid = piramide.append("g")
                .attr("transform", `translate(${x(0)},0)`)
                .call(d3.axisLeft(y)
                    .tickSize(0)
                    .tickSizeOuter(0));
//            
//          
            ejeYPiramid.selectAll("path")
                .style("stroke", "#595959")
                .attr("stroke-width", 1.2);
//            
            ejeYPiramid.selectAll("text")
                .style("fill", "#595959")
                .attr("dx", "-0.8em")
                .attr("text-anchor", "end")
                .style('font-size', "14px")
                .style("font-family", "Fjalla One")
                .style("opacity", 1);
//
            piramide.append("text")
                .attr("class", "x-label")
                .attr("text-anchor", "end")
                .attr("x", width_map25 * 0.25)
                .attr("y", height_map25 * 0.98)
                .text("HOMES")
                .style("font-size", "18px")
                .style("font-family", "Fjalla One")
                .style("fill", "#595959")
                .style("opacity", 1);
//           
            piramide.append("text")
                .attr("class", "x-label")
                .attr("text-anchor", "end")
                .attr("x", width_map25 * 0.75)
                .attr("y", height_map25 * 0.98)
                .text("DONES")
                .style("font-size", "18px")
                .style("font-family", "Fjalla One")
                .style("fill", "#595959")
                .style("opacity", 1);
//            
            piramide.append("text")
                .attr("class", "x-label")
                .attr("text-anchor", "middle")
                .attr("x", x(0) - 15)
                .attr("y", margin_map25.top )
                .text("EDAT")
                .style("font-size", "15px")
                .style("font-family", "Fjalla One")
                .style("fill", "#595959")
                .style("opacity", 1);
//
//
fetch('https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json')
    .then(response => response.json()) 
    .then(style_map3 => {
        if (style_map3.sources && style_map3.sources.openmaptiles) {
            style_map3.sources.openmaptiles.attribution = "Mirai Data | ICGC - © OSM contributors";
        }
//
        const map3 = new maplibregl.Map({
            container: 'map3',
            style: style_map3, 
            center: [2.439476, 41.540145],
            zoom: 14,
            attributionControl: false
        });
//
        map3.addControl(new maplibregl.AttributionControl({
            customAttribution: style_map3.sources.openmaptiles.attribution,
            compact: false 
        }));
//
        map3.scrollZoom.disable();
        map3.addControl(
            new maplibregl.NavigationControl({
                showZoom: true
            })
        );
//
        map3.on('load', () => {
                        // 1️⃣ Agregar la fuente del polígono GeoJSON
                        map3.addSource('polygon-cotxes', {
                            type: 'geojson',
                            data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/soroll_mataro.geojson'
                        });
            //
                        // 2️⃣ Agregar la capa del polígono
                        map3.addLayer({
                            id: 'polygon-cotxes',
                            type: 'line',
                            source: 'polygon-cotxes',
                            paint: {
                                'line-color': [
                                    'match',
                                    ['get', 'nivell_soroll_TVLDEN'],
                                    '<55 dB', '#016164',
                                    '55 - 59 dB', '#57C4AD',
                                    '60 - 64 dB', '#E7E0BC',
                                    '65 - 69 dB', '#EDA147',
                                    '70 - 74 dB', '#DB4325',
                                    '>= 75 dB', '#9D1642',
                                    '#000000'
                                ],
                                'line-width': 3
                            }
                        });
//
                        map3.addSource('vehicles_illa', {
                                        type: 'geojson',
                                        data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/illes_soroll.geojson'
                                    });
//
                        map3.addLayer({
                                'id': 'vehicles_illa_layer',  // ID único para la capa de buses
                                'type': 'circle',
                                'source': 'vehicles_illa',  // Fuente correcta
                                'layout': {
                                    'visibility': 'none'  // Oculta la capa al inicio
                                },
                                paint: {
                                    'circle-color': [
                                    'match',
                                    ['get', 'nivell_soroll_TVLDEN'],
                                    '<55 dB', '#016164',
                                    '55 - 59 dB', '#57C4AD',
                                    '60 - 64 dB', '#E7E0BC',
                                    '65 - 69 dB', '#EDA147',
                                    '70 - 74 dB', '#DB4325',
                                    '>= 75 dB', '#9D1642',
                                    '#EDA147'
                                    ], 
                                    'circle-radius': [
                                        'interpolate',
                                        ['linear'],
                                        ['get', 'NOMBRE_VEHICLES'],
                                        0, 2,      // valor mínimo → radio pequeño
                                        1015, 60    // valor máximo → radio grande
                                    ],
                                    'circle-opacity': 0.7,
                                    'circle-opacity-transition': { duration: 300 }
                                }           
                            });
                            let currentPopup = null; // 🟡 fora de l'esdeveniment
//
                            map3.on('click', 'vehicles_illa_layer', function (e) {
                                const feature = e.features[0];
                                const nombreVehicles = feature.properties.NOMBRE_VEHICLES;
                                const nivellSoroll = feature.properties.nivell_soroll_TVLDEN;
//
                                const colorMap = {
                                    '<55 dB': '#016164',
                                    '55 - 59 dB': '#57C4AD',
                                    '60 - 64 dB': '#E7E0BC',
                                    '65 - 69 dB': '#EDA147',
                                    '70 - 74 dB': '#DB4325',
                                    '>= 75 dB': '#9D1642'
                                };
//
                                const color = colorMap[nivellSoroll] || '#EDA147';
//
                                const popupContent = `
                                        <div style="overflow: hidden; font-family: sans-serif; font-size: 14px;">
                                            <div style="height: 6px; background-color: ${color};"></div>
                                            <div style="padding: 10px 15px;">
                                                <strong>🚗 Vehicles:</strong> ${nombreVehicles}<br>
                                                <strong>🔊 Soroll:</strong> ${nivellSoroll}
                                            </div>
                                        </div>
                                    `;
//
                                if (currentPopup) {
                                            currentPopup.remove();
                                        }
//
                                        currentPopup = new maplibregl.Popup()
                                            .setLngLat(e.lngLat)
                                            .setHTML(popupContent)
                                            .addTo(map3);
                                    });
//
            const scroller = scrollama();
//
            scroller.setup({
                step: ".map3",
                offset: 0.4,  
                debug: false
            }).onStepEnter(response => {
                    const { index } = response;
    //
                    if (index === 1) {
                        map3.setLayoutProperty('vehicles_illa_layer', 'visibility', 'visible');
                        setTimeout(() => {
                            map3.setPaintProperty('vehicles_illa_layer', 'circle-opacity', 0.7);
                        }, 10);
//
                        // Amagar polygon-cotxes
                        map3.setPaintProperty('polygon-cotxes', 'line-opacity', 0);
                        setTimeout(() => {
                            map3.setLayoutProperty('polygon-cotxes', 'visibility', 'none');
                        }, 300);
                    } 
            }).onStepExit(response => {
                    const { index } = response;
    //
                    if (index === 0 || index === 4) {
                        map3.setPaintProperty('vehicles_illa_layer', 'circle-opacity', 0);
                        setTimeout(() => {
                            map3.setLayoutProperty('vehicles_illa_layer', 'visibility', 'none');
                        }, 300);
//
                        // Mostrar polygon-cotxes amb transició
                        map3.setLayoutProperty('polygon-cotxes', 'visibility', 'visible');
                        setTimeout(() => {
                            map3.setPaintProperty('polygon-cotxes', 'line-opacity', 1);
                        }, 10);
                    }
                    });
    //
//
        });
    })
    .catch(error => console.error('Error:', error));
//
//
//
//
fetch('https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json')
    .then(response => response.json()) 
    .then(style_map4 => {
        if (style_map4.sources && style_map4.sources.openmaptiles) {
            style_map4.sources.openmaptiles.attribution = "Mirai Data | ICGC - © OSM contributors";
        }
//
        const map4 = new maplibregl.Map({
            container: 'map4',
            style: style_map4, 
            center: [2.439476, 41.540145],
            zoom: 14,
            attributionControl: false
        });
//
        map4.addControl(new maplibregl.AttributionControl({
            customAttribution: style_map4.sources.openmaptiles.attribution,
            compact: false 
        }));
//
        map4.scrollZoom.disable();
        map4.addControl(
            new maplibregl.NavigationControl({
                showZoom: true
            })
        );
//
        map4.on('load', () => {
//
            map4.addSource('polygon-soroll-botigues', {
                            type: 'geojson',
                            data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/soroll_mataro.geojson'
                        });
            //
                        // Agregar la capa del polígono
                        map4.addLayer({
                            id: 'polygon-soroll-botigues',
                            type: 'line',
                            source: 'polygon-soroll-botigues',
                            paint: {
                                'line-color': [
                                    'match',
                                    ['get', 'nivell_soroll_TOTDEN'],
                                    '<55 dB', '#016164',
                                    '55 - 59 dB', '#57C4AD',
                                    '60 - 64 dB', '#E7E0BC',
                                    '65 - 69 dB', '#EDA147',
                                    '70 - 74 dB', '#DB4325',
                                    '>= 75 dB', '#9D1642',
                                    '#000000'
                                ],
                                'line-width': 1.5,
                                'line-opacity': 1 
                            }
                        });
//
            map4.addSource('polygon-serveis', {
                type: 'geojson',
                data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/serveis_poly.geojson'
            });
//
            map4.addLayer({
                id: 'polygon-serveis',
                type: 'fill',
                source: 'polygon-serveis',
                paint: {
                    'fill-color': "#FBBA33", 
                    'fill-opacity': 0.7 
                }
            });
//
            map4.addSource('point-serveis', {
                type: 'geojson',
                data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/serveis_points.geojson'
            });
//
            map4.addLayer({
                id: 'point-serveis',
                type: 'circle', 
                source: 'point-serveis',
                paint: {
                    'circle-color': "#FBBA33", 
                    'circle-radius': 6, 
                    'circle-opacity': 0.9
                }
            });
//
            map4.addSource('botigues', {
                type: 'geojson',
                data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/botigues.geojson'
            });
//
            map4.addLayer({
                id: 'botigues',
                type: 'circle', 
                source: 'botigues',
                paint: {
                    'circle-color': "#BA5C70", 
                    'circle-radius': 6,  
                    'circle-opacity': 0.9
                }
            });
//
            let sorollVisible = true;
//
            document.getElementById('toggle-botigues').addEventListener('click', () => {
                sorollVisible = !sorollVisible;
//
                map4.setLayoutProperty(
                    'polygon-soroll-botigues',
                    'visibility',
                    sorollVisible ? 'visible' : 'none'
                );
//
                document.getElementById('toggle-botigues').textContent = 
                    sorollVisible ? 'Ocultar línies de soroll' : 'Mostrar línies de soroll';
                });
//
            const scroller = scrollama();
//
            scroller.setup({
                step: ".map4",
                offset: 0.2,  
                debug: false
            });
//
        });
    })
    .catch(error => console.error('Error:', error));
//
//
//
//
//
        fetch('https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json')
            .then(response => response.json()) 
            .then(style => {
                if (style.sources && style.sources.openmaptiles) {
                    style.sources.openmaptiles.attribution = "Mirai Data | ICGC - © OSM contributors";
                }
//
                // Crear el mapa en <div id="map6">
                const map6 = new maplibregl.Map({
                    container: 'map6', // Se mantiene 'map6'
                    style: style, 
                    center: [2.437061, 41.540358],
                    zoom: 13.5,
                    attributionControl: false
                });
//
                // Agregar control de atribución
                map6.addControl(new maplibregl.AttributionControl({
                    customAttribution: style.sources.openmaptiles.attribution,
                    compact: false 
                }));
                map6.addControl(
                    new maplibregl.NavigationControl({
                        showZoom: true
                    })
                );
//
                // Cargar la capa GeoJSON cuando el mapa esté listo
                map6.on('load', () => {
                    map6.addSource('polygon-soroll-arbres', {
                                    type: 'geojson',
                                    data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/soroll_mataro.geojson'
                                });
                    //
                    // 2️⃣ Agregar la capa del polígono
                    map6.addLayer({
                        id: 'polygon-soroll-arbres',
                        type: 'line',
                        source: 'polygon-soroll-arbres',
                        paint: {
                            'line-color': [
                                'match',
                                ['get', 'nivell_soroll_TOTDEN'],
                                '<55 dB', '#016164',
                                '55 - 59 dB', '#57C4AD',
                                '60 - 64 dB', '#E7E0BC',
                                '65 - 69 dB', '#EDA147',
                                '70 - 74 dB', '#DB4325',
                                '>= 75 dB', '#9D1642',
                                '#000000'
                            ],
                            'line-width': 1.7,
                            'line-opacity': .7 
                        }
                    });
                    map6.addSource('polygon-source', {
                        type: 'geojson',
                        data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/zones_verdes.geojson'
                    });
//
                    map6.addLayer({
                        id: 'polygon-source',
                        type: 'fill', 
                        source: 'polygon-source',
                        paint: {
                            'fill-color': "#137448", 
                            'fill-opacity': 0.35 
                        }
                    });
                    map6.addSource('arbres-source', {
                        type: 'geojson',
                        data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/arbres.geojson'
                    });
//
                    map6.addLayer({
                        id: 'arbres-source',
                        type: 'circle', 
                        source: 'arbres-source',
                        paint: {
                            'circle-color': "#5CBA70", 
                            'circle-radius': 2.5, 
                            'circle-opacity': 0.6
                        }
                    });
                    map6.addSource('linies-source', {
                        type: 'geojson',
                        data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/arbres2.geojson'
                    });
//
                    map6.addLayer({
                        id: 'linies-source',
                        type: 'line', 
                        source: 'linies-source',
                        paint: {
                            'line-color': "#5CBA70",
                            'line-width': 2
                        }
                    });
                    let sorollVisibleArbres = true;
//
                    document.getElementById('toggle-arbres').addEventListener('click', () => {
                        sorollVisibleArbres = !sorollVisibleArbres;
//
                        map6.setLayoutProperty(
                            'polygon-soroll-arbres',
                            'visibility',
                            sorollVisibleArbres ? 'visible' : 'none'
                        );
//
                        document.getElementById('toggle-arbres').textContent = 
                            sorollVisibleArbres ? 'Ocultar línies de soroll' : 'Mostrar línies de soroll';
                    });
//
//
                });
            });
</script>
<script type="module">
        import syncMove from "https://esm.sh/mapbox-gl-sync-move";
//
        function loadMap(containerId, styleUrl) {
            return fetch(styleUrl)
            .then(response => response.json())
            .then(style => {
                if (style.sources && style.sources.openmaptiles) {
                    style.sources.openmaptiles.attribution = "Mirai Data | ICGC - © OSM contributors";
                }
                return new Promise((resolve) => {
                    const map = new maplibregl.Map({
                        container: containerId,
                        style: style,
                        center: [2.437061, 41.540358],
                        zoom: 13.5,
                        attributionControl: false
                    });
                    map.once('idle', () => resolve(map)); // Espera a que el mapa termine de renderizarse
                });
            });
        }
//
        // Función para añadir la capa de líneas con la variable correspondiente
        function addCapaSoroll(map, variable) {
            fetch("https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/soroll_mataro.geojson")
            .then(response => response.json())
            .then(data => {
                map.addSource("soroll", {
                    type: "geojson",
                    data: data
                });
//
                map.addLayer({
                    id: "soroll-layer",
                    type: "line",
                    source: "soroll",
                    paint: {
                        "line-color": [
                            "match",
                            ["get", variable],
                            '<55 dB', '#016164',
                            '55 - 59 dB', '#57C4AD',
                            '60 - 64 dB', '#E7E0BC',
                            '65 - 69 dB', '#EDA147',
                            '70 - 74 dB', '#DB4325',
                            '>= 75 dB', '#9D1642',
                            '#000000'
                        ],
                        'line-width': 3
                    }
                });
            });
        }
//
        Promise.all([
            loadMap('map51', 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/ICGC_dia.json'),
            loadMap('map52', 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/ICGC_gris_ves.json'),
            loadMap('map53', 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/ICGC_fosc_nit.json')
        ]).then(([map51, map52, map53]) => {
            syncMove(map51, map52, map53);
//
            addCapaSoroll(map51, "nivell_soroll_TOTDIA");
            addCapaSoroll(map52, "nivell_soroll_TOTVES");
            addCapaSoroll(map53, "nivell_soroll_TOTNIT");
        });  
</script>