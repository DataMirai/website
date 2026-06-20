---
title: "Mataró a todo volumen"
meta_title: "Mataró a todo volumen"
description: "Analizamos los datos del ruido de las calles de Mataró"
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
        z-index: 2;
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
            <p>Tráfico, terrazas, mercados, obras, fiestas populares... El día a día de las ciudades es ruidoso. Pero qué tan ruidoso?</p>
            <p>La OMS recomienda que el ruido ambiental no supere los 55 dB durante el día para evitar impactos negativos a la salud. La exposición continuada a niveles de 55 dB o superiores puede provocar estrés, trastornos del sueño, problemas cardiovasculares y dificultades de concentración a las personas expuestas. En zonas con ruido constante por encima de este umbral, la calidad de vida se ve seriamente afectada.</p>
        </section>
        <section id="scrolly">
            <div class="sticky-thing">
                <div id="map"></div>
            </div>
            <article>
            <div class="step map1" data-step="1">
                <p>Para abordar este problema, la UE estableció una directiva que obliga a las ciudades de más de 100.000 habitantes a elaborar mapas de ruido y planes de acción cada 5 años para localizar las zonas más afectadas y aplicar medidas de mitigación.</p>
            </div>
            <div class="step map1" data-step="2">
                <p style="margin-bottom:10px;">En Mataró, los datos recogidos el 2022 para cada calle dividen la contaminación acústica en 6 tramos:</p>
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
                <p>Podemos pensar que las zonas industriales como los polígonos de Pla d'en Boet y El Cros son una de las principales causas de ruido en la ciudad por la gran afluencia de vehículos pesados y el sonido de la maquinaria durante el día; así como la actividad de bares y discotecas durante las noches del fin de semana.</p>
            </div>
            <div class="step map1" data-step="4">
                <p>Pero los polígonos están en una posición aislada de la ciudad, por lo cual no se pueden considerar como una de las causas principales que afectan las zonas residenciales de los alrededores.</p>
            </div>
            <div class="step map1" data-step="5">
                <p>Si nos fijamos en las calles más ruidosas, encontramos que buena parte de las áreas con más contaminación acústica son aquellas con conexión directa con las entradas y salidas de la ciudad, como la Vía Europa, el Camí del Mig y la N-II.</p>
            </div>
            <div class="step map1" data-step="6">
                <p>Las calles que absorben el tráfico exterior son los mismos que utilizan los mataronins para moverse ágilmente por la ciudad sin tener que adentrarse en callejones.</p>
            </div>
            <div class="step map1" data-step="7">
                <p>La tendencia que sigue la contaminación acústica en las calles de Mataró divide la ciudad en dos áreas.</p>
            </div>
            <div class="step map1" data-step="8">
                <p>Los barrios del noroeste (Cerdanyola, La Llàntia, Cirera, Els Molins, Rocafonda...) concentran el ruido en las calles principales y en las periferias, dejando callejones y zonas residenciales en silencio. La carencia de comercios también favorece que haya poco movimiento.</p>
            </div>
            <div class="step map1" data-step="9">
                <p>En cambio, en la zona sudeste de la ciudad hay pocas calles con menos de 65 dB. El Centro y el Eixample cuentan con zonas comerciales densas y tienen carencia de calles grandes que atraigan la movilidad. La falta de calles principales favorece que el tráfico se disperse entre los callejones y que la mayoría tenga niveles altos de contaminación acústica.</p>
            </div>
            <div class="step map1" data-step="10">
                <p>La lógica de movilidad también se traslada al transporte público: en los barrios exteriores los <span style="background-color:#FBBA33; border-radius: 40px; padding:0 7px;">autobuses de MataróBus</span> circulan por las calles principales y más transitadas mientras que en el Centro y el Eixample necesariamente tienen que pasar serpenteando por calles más estrechas.</p>
            </div>
            <div class="step map1" data-step="11">
                <p>El tráfico y el comercio son probablemente las causas principales de contaminación acústica a Mataró y aproximadamente un 96% de la población convive con niveles superiores a los 55 dB recomendados por la OMS.</p>
            </div>
            </article>
        </section>
        <section class="paragraph" style= "background-color:#1C1C1C;">
            <p class="titols">Un 96% de mataronins conviven con más de 55 decibelios diariamente</p>
            <p>Según los datos de la Generalitat de Cataluña y del Ayuntamiento de Mataró, casi la totalidad de los mataronins viven diariamente expuestos a niveles de ruido que superan los 55dB recomendados por la OMS.</p>
            <p>La mayoría de las calles de Mataró registraron cifras de entre 60dB y 74dB durante el 2022. Aun así, la distribución de la población juega un papel importante en la hora de ver el grado de afectación por el ruido que sufren los mataronins.</p>
        </section>
        <section id="scrolly-2">
            <div class="sticky-thing2">
                <div id="map2"></div>
            </div>
            <article>
            <div class="step map2" data-step="12" >
                <p>Los barrios con más población en Mataró son Cerdanyola y Rocafonda-El Palau, los cuales también concentran las cifras más altas de población afectada a los extremos Este y Oeste de la ciudad.</p>
            </div>
            <div class="step map2" data-step="13">
                <p>La proximidad a las calles principales y periféricas y la alta densidad de población facilitan que un número más elevado de personas se vea afectado por el ruido causado por una misma calle, como es el caso del Camí del Mig, la ronda Bellavista o la carretera de Mata.</p>
            </div>
            <div class="step map2" data-step="14">
                <p>Una situación similar hay a Pla d'en Boet, dónde los vecinos de la zona residencial se encuentran entre dos calles principales, la avenida de Lluís Companys y la Ronda President Macià, que absorben el tráfico de la C-32 y la N-II.</p>
            </div>
            <div class="step map2" data-step="15">
                <p>En el Centro y el resto de barrios, a pesar de que prácticamente todas las calles sufren niveles altos de ruido, la densidad de población es considerablemente más baja así como el número de afectados.</p>
            </div>
            <div class="step map2" data-step="16">
                <p>De los casi 132.000 habitantes de Mataró, un <span class = "span-colored" style="background-color:#57C4AD; ">10,11%</span> está expuesto a ruido <span class = "span-colored" style="background-color:#57C4AD;">de entre 55 y 59 dB</span>; un <span class = "span-colored" style="background-color:#E7E0BC;">16,9% entre 65 y 69 dB</span>; un <span class = "span-colored" style="background-color:#EDA147;">30,9%</span> se ven afectados por ruido de entre <span class = "span-colored" style="background-color:#EDA147;">65 y 69 dB</span>; el grupo más grande, con el <span class = "span-colored" style="background-color:#DB4325;">32,57%</span> de la población sufren niveles de entre <span class = "span-colored" style="background-color:#DB4325;">70 y 74 dB</span> y el <span class = "span-colored" style="background-color:#9D1642; color:white!important;">6,38%</span> convive con ruidos de <span class = "span-colored" style="background-color:#9D1642; color:white!important;">más de 75 dB</span>.</p>
            </div>
            <div class="step map2" data-step="17">
                <p>Si analizamos la población de Mataró desglosada por edad y sexo, se puede observar que los niveles de ruido elevados <b>impactan de forma transversal a todas las franjas</b>.</p>
            </div>
            </article>
        </section>
        <section id="scrolly-2-5">
            <div class="sticky-thing2-5">
                <div id="titol-piramide">
                    <p style="color:#595959;font-family:Fjalla One;">NÚMERO DE PERSONAS AFECTADAS POR LA CONTAMINACIÓN ACÚSTICA POR SEXO Y EDAD</p>
                    <p style="margin-top:0;">💡<em>Interactúa con el gráfico</em></p>
                </div>
                <div id="map2-5">
                </div>
                <div id="tooltip"></div>
            </div>
            <article>
            <div class="step map25" data-step="18" >
                <p>A pesar de que las proporciones de exposición al ruido se ajustan a la cantidad de población de cada grupo de edad, <b>las personas de más de 70 años</b> destacan como el colectivo más expuesto a niveles superiores a los <span class = "span-colored" style="background-color:#DB4325;">70dB</span>. Un <b>43,5%</b> <em>(7.379 personas)</em>  viven en calles con registros de más de <span class = "span-colored" style="background-color:#DB4325;">70dB</span>.</p>
            </div>
            <div class="step map25" data-step="19">
                <p>También es relevante la cantidad de <b>niños</b> expuestos a niveles elevados de contaminación acústica. <b>Un 89,1% <em>(20.117 niños)</em> conviven con niveles superiores a los</b> <span class = "span-colored" style="background-color:#EDA147;">65dB</span>. Aunque las proporciones son similares a los otros grupos de edad, según la OMS <b>los niños son más vulnerables</b> a la contaminación acústica porque puede afectar su descanso, a su capacidad de concentración y a su desarrollo cognitivo.</p>
            </div>
            <div class="step map25" data-step="20">
                <p>Por otro lado, las franjas de los 17 años hasta los 49 están formadas por perfiles heterogéneos, pero son también las principales en las cuales se encuentran <b>dos grupos que pasan muchas horas a casa</b> y se ven constantemente expuestos en el ruido de su calle: los estudiantes y los teletrabajadores. </p>
            </div>
            <div class="step map25" data-step="21">
                <p>Estos necesitan niveles de ruido bajos para garantizar la concentración durante largos periodos de tiempos y en estas franjas de edad un <b>88,9%</b> <em>(50.179 personas)</em> convive con niveles superiores a los <span class = "span-colored" style="background-color:#EDA147;">65dB</span>. Si la exposición al ruido es continua, es muy probable que acaben buscando alternativas como bibliotecas o coworkings.</p>
            </div>
            <div class="step map25" data-step="18" >
                <p>Cada uno de los grupos de edad de los mataronins tiene rasgos propios que hacen que la contaminación acústica afecte de maneras diferentes de su día a día. ¿Pero dónde se origina el ruido?</p>
            </div>
            </article>
        </section>
        <section class="paragraph">
            <p class="titols">El tráfico y los comercios son probablemente la principal causa de ruido en la ciudad</p>
            <p>Los vehículos son presumiblemente la causa principal de contaminación acústica de Mataró. Los datos de la Generalitat de Cataluña del 2022 ofrecen una variable que aísla el nivel de ruido originado por los vehículos, pero a la hora de compararla con el total la diferencia entre columnas es nula.</p>
            <p>Dado que buena parte del ruido registrado en las calles proviene del tráfico, es posible que los registros se limiten a agregar los datos anuales y la media de decibelios en cada calle sea prácticamente la misma en ambos casos. Habría que ver el planteamiento de la base de datos para poder hacer afirmaciones contundentes en este aspecto.</p>
            <p style="color:#808080!important; font-size:18px;">💡<em>Puedes explorar el mapa haciendo zoom con el control de la parte superior derecha y ver la cantidad de coches por isla haciendo clic en los círculos que aparecerán al hacer scroll.</em></p>
        </section>
        <section id="scrolly-3">
            <div class="sticky-thing3">
                <div id="map3"></div>
            </div>
            <article>
            <div class="step map3" data-step="18" >
                <p>En un contexto como este, en que no podemos saber con exactitud qué porcentaje del ruido proviene de los vehículos, surge otra pregunta: ¿el ruido de las calles tiene que ver con los coches de los vecinos que viven, o bien no hay una relación clara entre el número de vehículos registrados en cada isla y el ruido que se escucha?</p>
            </div>
            <div class="step map3" data-step="19">
                <p>En un primer momento podemos pensar que el número de vehículos está directamente relacionado con la población de cada barrio, pero no es así.</p>
            </div>
            <div class="step map3" data-step="20">
                <p><b>Número de vehículos y habitantes de los barrios de Mataró</b></p>
                <table>
                    <tr>
                        <th>Barrio</th>
                        <th>Nº Habitantes</th>
                        <th>Nº Vehículos</th>
                        <th>% población con vehículo</th>
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
                <p>La Llàntia y Vista Alegre son los barrios con más coches por habitante (55,8% y 59,8%) y superan en número otros más poblados.</p>
            </div>
            <div class="step map3" data-step="22">
                <p>Por otro lado, Cerdanyola es la zona con más vehículos, pero a la vez tiene uno de los porcentajes más bajos con un 35,5% de habitantes con coche.</p>
            </div>
            <div class="step map3" data-step="23">
                <p>Lo mismo ocurre con Rocafonda y El Palau, que a pesar de ser de los barrios más poblados tienen porcentajes del 27,2% y 39,1% respectivamente.</p>
            </div>
            </article>
        </section>
        <section class="paragraph" style= "margin-top:20px!important;">
            <p>Las zonas con más vehículos registrados no tienen relación directa con las calles con niveles elevados de contaminación acústica. Es decir, que el ruido derivado de coches y motos no viene originado del lugar donde residen los vecinos, sino que la causa principal es que los conductores tienen preferencia por circular por determinados calles independientemente de su origen y destino.</p>
            <p>Las calles principales son las más transitados porque permiten moverse ágilmente y conectar con todos los barrios y las entradas y salidas de la ciudad. El punto de unión de todo este tráfico es la plaza Granollers, la cual queda abrazada por las calles más ruidosas de Mataró y llega a sobrepasar los 75dB.</p>
            <p>Además de los vehículos, pero sin dejarlos de lado, las zonas comerciales también son responsables del ruido en la calle. Terrazas, repartidores, distribuidores de mercancías y el propio movimiento de los clientes contribuye a aumentar los decibelios de las calles.</p>
        </section>
        <section id="scrolly-4">
            <div class="sticky-thing4">
                <div id="map4">
                <button id="toggle-botigues" class="map-button">Ocultar líneas de ruido</button>
                </div>
            </div>
            <article>
            <div class="step map4" data-step="21" >
                <p>A pesar de que en los datos de Open Street Maps faltan <span class = "span-colored" style="background-color:#BA5C70; color:white!important;">comercios</span> y <span class = "span-colored" style="background-color:#FBBA33">servicios</span>, se puede ver muy representada la tendencia que sigue la distribución de las tiendas en la ciudad.</p>
            </div>
            <div class="step map4" data-step="22">
                <p>En los barrios de la zona noroeste de la ciudad las tiendas y servicios se concentran en las calles principales como la avenida Puig i Cadafalch, la via Europa, la avenida dels Països Catalans y la ronda de Sant Oleguer.</p>
            </div>
            <div class="step map4" data-step="23">
                <p>Por el contrario, las zonas comerciales de la parte sudeste de la ciudad son más dispersas. La densidad y variedad de tiendas del Centro y del Eixample también juegan un papel importante a la hora de atraer vecinos de los barrios periféricos de la ciudad y de otras pueblos de la comarca.</p>
            </div>
            <div class="step map4" data-step="24">
                <p>La ubicación de los establecimientos de la ciudad en las calles con niveles más altos de contaminación acústica permite pensar que, del mismo modo que los vehículos, son posiblemente una de las fuentes de ruido más relevantes en la ciudad.</p>
            </div>
            </article>
        </section>
        <section class="paragraph">
            <p class="titols">Las noches de Mataró son más silenciosas</p>
            <p>Si el tráfico y el comercio son probablemente las principales causas de la contaminación acústica de la ciudad, ¿qué pasa durante las horas con menos circulación y cuando todo está cerrado? ¿Qué pasa durante la noche?</p>
            <p>Los datos recogidos por la administración separan en tres franjas horarias la medida del ruido: de 7h a 21h durante el día, de 21h a 23h para el anochecer y de 23h a 7h para la noche.</p>
            <p>Según las recomendaciones de la OMS, los decibelios recomendados para pasar una noche tranquila y garantizar una buena calidad del sueño son 50dB.</p>
            <p style="font-size:18px!important; text-align:center;">💡<em>Haz click e interactúa con el gráfico</em></p>
            <div class="franges-horaries">
                <div class="map-title">
                    <h3>Día (7 - 21h)</h3>
                    <div id="map51"></div>
                </div>
                <div class="map-title">
                    <h3>Anochecer (21-23h)</h3>
                    <div id="map52"></div>
                </div>
                <div class="map-title">
                    <h3>Noche (23-7h)</h3>
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
            <p>Al anochecer, las calles más transitadas durante el día experimentan una ligera disminución en los niveles de contaminación acústica. Las calles principales continúan siendo las más ruidosos de la ciudad, pero muchos de los callejones que durante el día habían tenido niveles elevados de decibelios, sobre todo los del Centro y el Eixample, consiguen llegar a la franja de los 55dB.</p>
            <p>Por la noche toda la ciudad queda prácticamente desierta y la gran mayoría de las calles no superan los 59dB. Aun así, las calles principales y las entradas y salidas de la ciudad todavía mantienen niveles bastante elevados incluso a altas horas de la noche. Es posible que los vecinos de estas zonas vean alterada su calidad del sueño a causa de este problema.</p>
        </section>
        <section class="paragraph arbres">
            <p class="titols">Árboles y zonas verdes para paliar el ruido</p>
            <p>Los niveles de ruido altos pueden causar problemas de salud según la OMS, pero es difícil conseguir cifras inferiores a los 55dB en ciudades con tantos habitantes.</p>
            <p>El Ayuntamiento ha establecido normativas como la de restringir a un horario fijo los permisos de terrazas o limitar el tráfico por ciertas calles, pero la principal solución para evitar que el ruido se esparza por las calles y llegue a las viviendas son los <span class= "span-colored" style="background-color:#5CBA70;color:#000">árboles</span> y las <span class= "span-colored" style="background-color:#137448; color:#fff;">zonas verdes</span>.</p>
            <div id="map6">
                <button id="toggle-arbres" class="map-button">Ocultar líneas de ruido</button>
            </div>
            <p>Mataró cuenta con un ancho abanico de zonas verdes repartidas por la ciudad y también apuesta por los árboles en calles principales, plazas y parques.</p>
            <p>Pero tendrá que afrontar un reto en los próximos años. La larga sequía que ha afectado gran parte de Cataluña ha causado que centenares de árboles hayan muerto y el Ayuntamiento los haya talado por seguridad. Este año han empezado una campaña de replantación, pero los nuevos árboles son muy jóvenes, delgados y bajos como para cumplir con la función de mitigar el ruido. ¿Notarán la diferencia los mataronins ahora que viene el buen tiempo y vuelve a haber más actividad en las calles?</p>
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
                .text("Decibelios")
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
                    .data((d, i) => d.map((p, j) => ({ ...p, key: d.key, sexo: "HOMBRES", age: data[j].age })))
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
                                .html(`${d.sexo}<br> Nivel ruido: ${d.key}<br> Nº afectados: ${Math.abs(d[1] - d[0])}`);
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
                            .html(`${d.sexo}<br> Nivel ruido: ${d.key}<br> Nº afectados: ${Math.abs(d[1] - d[0])}`);
                    });
//
            // Dibujar barras apiladas para mujeres (positivas)
            piramide.append("g")
                .selectAll("g")
                .data(stack(data.map(d => d.female)))
                .enter().append("g")
                .attr("fill", d => color(d.key))
                .selectAll("rect")
                .data((d, i) => d.map((p, j) => ({ ...p, key: d.key, sexo: "MUJERES", age: data[j].age })))
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
                            .html(`${d.sexo}<br> Niveles de ruido: ${d.key}<br> Afectados: ${Math.abs(d[1] - d[0])}`);
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
                        .html(`${d.sexo}<br> Niveles de ruido: ${d.key}<br> Afectados: ${Math.abs(d[1] - d[0])}`);
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
                .text("HOMBRES")
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
                .text("MUJERES")
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
                .text("EDAD")
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
                                                <strong>🚗 Vehículos:</strong> ${nombreVehicles}<br>
                                                <strong>🔊 Ruido:</strong> ${nivellSoroll}
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
                    sorollVisible ? 'Ocultar líneas de ruido' : 'Mostrar líneas de ruido';
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
                            sorollVisibleArbres ? 'Ocultar líneas de ruido' : 'Mostrar líneas de ruido';
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