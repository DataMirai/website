---
title: "Mataró out loud"
meta_title: "Mataró out loud"
description: "Analysis of noise data from the streets of Mataró"
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
    html, body{height: 100%; width: 100vw;}
    .row.items-start.justify-between, .mt-20, .section.pb-0, footer{padding:0px 5vw;}
    #map { 
        position: sticky; 
        margin-top: 300px; 
        width:100vw; 
        height:100vh; 
    }
    .paragraph {
    font-size: 19px;
    text-align: left;
    margin: 50px 50vw 80px 37vw!important; 
    padding-left:10px;
    align-items: center;
    justify-content: center;
    width:15vw;
    min-width:600px!important;
    color: #000000;
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
    position: relative;
    padding: 0;
    max-width: 1rem;
    margin: 0 auto;
    
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
    margin: 50px auto 1000px -12vw;
    background-color: #ffffff;
    padding: 15px;
    position: relative;
    border-radius: 40px;
    border: solid 1px black;
    width: 50vw;
    min-width: 300px;
    max-width: 700px;
    display: block;
    unicode-bidi: isolate;
    pointer-events: auto;
    font-family: "Tex";
    line-height: 1.2;
    color: #000;
    word-wrap: break-word;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    align-items: center;
    justify-content: center;
    }

    .step:last-child {
    margin-bottom: 100px;
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
    height: 20px;
    }

    .maplibregl-ctrl-attrib {
        background-color: rgba(255, 255, 255, 0.4)!important;
    }

    #scrolly-2, #scrolly-2-5{
        background-color: #fff;
        position: relative;
        display: flex;  /* Alinea el mapa y el texto en fila */
        justify-content: space-between; /* Separa los elementos */
        align-items: flex-start;
        padding: 50px 50px;
        margin-top:20px;
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
        margin-top: 15vh;
        margin-bottom:2vh;
        margin-left:3vw;
        }
    #map2-5 {
        position: sticky; 
        margin-left: -10vw;
        z-index: 100;
        width: 80vw;
        max-width: 800px;
        min-height: 500px;
        height: 100vh;
        overflow: visible !important;
        pointer-events: auto;
        }

    #map2-5 svg {
        pointer-events: auto;
        width: 80vw;
        max-width: 800px;
        min-height: 500px;
        height: 80vh;
        display: block;
        margin-top:3vh;
        }

    #titol-piramide p{
            font-size: 22px!important;
            position: absolute;
            z-index: 10;
            margin-top: 7vw;
            margin-bottom:50px;
            width: 100%;
            text-align: center!important;
        }

    .sticky-thing2, .sticky-thing2-5 {
        position: sticky;
        top: 0;
        width: 50%; /* Ocupa la mitad izquierda */
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .sticky-thing2-5 {
        position: sticky;
        width: 60vw;
        overflow: visible;
        padding-left:5vw;
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
    .step.map25{
        margin-left:-18vw;
    }

    .step.map25:first-child{
        margin-top: 1000px;
        
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
        width:99vw; 
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
        margin: 20px -10vw 20px -25vw; 
        width:100vw; 
        height:60vh;
        display: flex;
    }

    #llegenda-sync { 
        display:flex;
    }

    #llegenda-colors{
        display:inline-flex;
        width:50vw;
        margin: 5px -10vw 20px -5vw; 
        text-align:center;
    }
    .llegenda2{
        border-radius: 40px;
        margin: 0px 0px 0px 20px;
        width: 5vw;
        font-size: 16px;
        color: #000!important;
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
        margin: 20px -10vw 20px -10vw; 
        width:50vw; 
        height:75vh;
        display: block;
        overflow: visible!important;
    }

    @media (max-width: 1400px) {
        
        .step {
            margin: 50px auto 1000px -22vw;
        }
        .paragraph {
            align-items: center;
            display: block;
            margin: 50px 30vh 200px 0vh;
            padding-left: 0px;
            min-width:300px!important;
        }

        #map2{
            display: block;
            width: 80vw;
            margin-left: -30vw;
            margin-right:20vw;
            padding:0;
            padding-top:20vh;
            align-items: center;
            justify-content: center;
        }
        #map2-5{
            margin-left:-20vw;
            margin-right:-20vw;
            padding-left: 0vw;
            padding-right:0vw;
            width: 80vw;
            max-width: 800px;
            min-height: 500px;
            height: auto;
            aspect-ratio: auto;
            overflow: scroll;
            position:relative;
        }
        #map2-5 svg {
            width: 80vw;
            max-width: 800px;
            min-height: 500px;
            height: 80vh;
            display: block;
            margin-top:0px;
        }

        #titol-piramide p{
            margin-top: 15vw;
            margin-bottom:50px;
        }

        #scrolly-2, #scrolly-2-5 {
            display: block;
            justify-content: center;
            align-items: center;
            width:100vw;
            padding:0;
        }
        #scrolly-2-5 {
            margin-top: 0px;
        }

        .sticky-thing2, .sticky-thing2-5 {
            width: 100vw;
            padding:0%;
        }

        .sticky-thing2-5 {
            padding-top:50vh;
            padding-bottom:500px;
        }

        .sticky-thing2 article, .sticky-thing25 article {
            margin: 0;
    
            }
        
        .step.map2 {
            margin-top: 100px;
            margin-right:20vw;
        }

        .step.map25 {
            margin-right:20vw;
            margin-top:0px;
        }

        .step.map25:last-child{
            margin-bottom: 80px;
            
        }
        .step:last-child {
            margin-bottom: 20vh;
    }
    
    table th{
        font-size: 12px;
    }

    table td{
        font-size: 12px;
    }

    .franges-horaries {
        margin: 20px -60vw 20px -5vw; 
        width:100vw; 
        height:115vh;
        display: grid;
        align-items:center;
    }
    .map-title h3 {
        width:35vw;
    }
    #map51, #map52, #map53 { 
        width:35vw; 
        height:35vh; 
        margin: 0px;
        position: sticky;
        overflow: visible!important;
        display: block;
        }

    #llegenda-colors{
        display:grid;
        margin: 5px 0vw 5px 0vw;
    }
    .llegenda2{
        margin: 5px 20vw 5px -5vw;
        width: 35vw;
    }
    
    }
    .step.map1 {
    margin-right: -20vh;}
    .step.map1 div p{
        padding:7px;
        margin:7px;
    }      
    
    
    .maplibregl-popup {
        border-style: solid;
        border-width: 3px 3px 0 3px; /* top right bottom left */
        border-top-left-radius: 20px !important;
        border-top-right-radius: 20px !important;
        border-bottom-right-radius: 30px; 
        border-bottom-left-radius: 30px; 
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        border-color: transparent; /* Color inicial (serà canviat amb JS) */
        }

        .maplibregl-popup-content {
        border-radius: 0px !important; /* Per evitar doble border-radius */
        padding: 10px 15px;
        font-family: sans-serif;
        font-size: 14px;
        }
</style>
<body>
        <section class="paragraph">
            <p>Traffic, terraces, markets, construction sites, public festivals... Everyday life in cities is noisy. But how noisy?</p>
            <p>The WHO recommends that ambient noise should not exceed 55 dB during the day to avoid negative health impacts. Continuous exposure to levels of 55 dB or higher can cause stress, sleep disorders, cardiovascular problems and concentration difficulties for those exposed. In areas with constant noise above this threshold, quality of life is seriously affected.</p>
        </section>
        <section id="scrolly">
            <div class="sticky-thing">
                <div id="map"></div>
            </div>
            <article>
            <div class="step map1" data-step="1">
                <p>To address this problem, the EU established a directive that requires cities with more than 100,000 inhabitants to draw up noise maps and action plans every 5 years to identify the most affected areas and implement mitigation measures.</p>
            </div>
            <div class="step map1" data-step="2">
                <p style="margin-bottom:10px;">In Mataró, the data collected in 2022 for each street divides noise pollution into 6 sections:</p>
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
                <p>We can think that industrial areas such as the Pla d'en Boet and El Cros industrial complexes are one of the main causes of noise in the city due to the large affluence of heavy vehicles and the sound of machinery during the day; as well as the activity of bars and discotheques during the weekend nights.</p>
            </div>
            <div class="step map1" data-step="4">
                <p>But the industrial areas are in an isolated position from the city, so they cannot be considered as one of the main causes affecting the surrounding residential areas.</p>
            </div>
            <div class="step map1" data-step="5">
                <p>If we look at the noisiest streets, we find that many of the areas with the most noise pollution are those with direct connections to the entrances and exits of the city, such as Via Europa, Camí del Mig and the N-II.</p>
            </div>
            <div class="step map1" data-step="6">
                <p>The streets that absorb outside traffic are the same ones used by the mataronins to move nimbly through the city without having to enter alleyways.</p>
            </div>
            <div class="step map1" data-step="7">
                <p>The trend in noise pollution in the streets of Mataró divides the city into two areas.</p>
            </div>
            <div class="step map1" data-step="8">
                <p>The north-western neighbourhoods (Cerdanyola, La Llàntia, Cirera, Els Molins, Rocafonda...) concentrate noise in the main streets and on the outskirts, leaving alleys and residential areas in silence. The lack of shops also contributes to the lack of movement.</p>
            </div>
            <div class="step map1" data-step="9">
                <p>In contrast, in the south-eastern part of the city there are few streets with less than 65 dB. The Centre and Eixample have dense commercial areas and a lack of large streets that attract mobility. The lack of main streets means that traffic is dispersed between alleyways and most have high levels of noise pollution.</p>
            </div>
            <div class="step map1" data-step="10">
                <p>The mobility logic is also applied to public transport: in the outer districts, <span style="background-color:#FBBA33; border-radius: 40px; padding:0 7px;">MataróBus buses</span> run along the main and busiest streets, while in the centre and the Eixample they have to meander through narrower streets.</p>
            </div>
            <div class="step map1" data-step="11">
                <p>Traffic and commerce are probably the main causes of noise pollution in Mataró and approximately 96% of the population lives with levels above the 55 dB recommended by the WHO.</p>
            </div>
            </article>
        </section>
        <section class="paragraph" style= "margin-top:350px!important; background-color:#1C1C1C;">
            <p class="titols">96% of mataronins live with more than 55 decibels daily</p>
            <p>According to data from the Generalitat de Catalunya and Mataró City Hall, almost all Mataró residents live daily exposed to noise levels that exceed the 55dB recommended by the WHO.</p>
            <p>Most streets in Mataró recorded figures between 60dB and 74dB during 2022. Even so, the distribution of the population plays an important role in determining the degree to which Mataró residents are affected by noise.</p>
        </section>
        <section id="scrolly-2">
            <div class="sticky-thing2">
                <div id="map2"></div>
            </div>
            <article>
            <div class="step map2" data-step="12" >
                <p>The most populated neighbourhoods in Mataró are Cerdanyola and Rocafonda-El Palau, which also concentrate the highest numbers of affected population at the east and west ends of the city.</p>
            </div>
            <div class="step map2" data-step="13">
                <p>The proximity to main and surrounding streets and the high population density mean that a larger number of people are affected by the noise caused by the same street, as is the case of Camí del Mig, Ronda Bellavista or Carretera de Mata.</p>
            </div>
            <div class="step map2" data-step="14">
                <p>A similar situation exists in Pla d'en Boet, where the neighbours of the residential area find themselves between two main streets, avinguda de Lluís Companys and ronda President Macià, which absorb traffic from the C-32 and the N-II.</p>
            </div>
            <div class="step map2" data-step="15">
                <p>In the Centre and the other neighbourhoods, although practically all streets suffer from high noise levels, the population density is considerably lower, as is the number of people affected.</p>
            </div>
            <div class="step map2" data-step="16">
                <p>Of the nearly 132,000 inhabitants of Mataró, <span class = "span-colored" style="background-color:#57C4AD; ">10,11%</span> are exposed to noise <span class = "span-colored" style="background-color:#57C4AD;">between 55 and 59 dB</span>; <span class = "span-colored" style="background-color:#E7E0BC;">16,9% between 65 and 69 dB</span>; <span class = "span-colored" style="background-color:#EDA147;">30,9%</span> are affected by noise of between <span class = "span-colored" style="background-color:#EDA147;">65 and 69 dB</span>; the largest group, with  <span class = "span-colored" style="background-color:#DB4325;">32,57%</span> of the population suffering levels of between <span class = "span-colored" style="background-color:#DB4325;">70 and 74 dB</span> and <span class = "span-colored" style="background-color:#9D1642; color:white!important;">6,38%</span> live with noise of <span class = "span-colored" style="background-color:#9D1642; color:white!important;">more than 75 dB</span>.</p>
            </div>
            <div class="step map2" data-step="17">
                <p>If we analyse Mataró's population by age and sex, we can see that high noise levels have a <b>transversal impact on all age groups</b>.</p>
            </div>
            </article>
        </section>
        <section id="scrolly-2-5">
            <div class="sticky-thing2-5">
                <div id="map2-5">
                <div id="titol-piramide">
                <p>Number of people affected by noise pollution by gender and age</p>
                <p style="font-size:18px!important; padding-top:6vh;">💡<em>Interact with the chart</em></p>
                </div>
                </div>
                <div id="tooltip"></div>
            </div>
            <article>
            <div class="step map25" data-step="18" >
                <p>Although the proportions of noise exposure are adjusted to the population size of each age group, people over 70 years of age stand out as the group most exposed to levels above <span class = "span-colored" style="background-color:#DB4325;">70dB</span>. <b>43,5%</b> <em>(7,379 people)</em>  live on streets with noise levels above <span class = "span-colored" style="background-color:#DB4325;">70dB</span>.</p>
            </div>
            <div class="step map25" data-step="19">
                <p>The number of <b>children</b> exposed to high levels of noise pollution is also relevant. <b>89,1% <em>(20,117 children)</em> live with levels above </b> <span class = "span-colored" style="background-color:#EDA147;">65dB</span>. Although the proportions are similar to the other age groups, according to the WHO, <b>children are more vulnerable</b> to noise pollution because it can affect their rest, their ability to concentrate and their cognitive development.</p>
            </div>
            <div class="step map25" data-step="20">
                <p>On the other hand, the 17 to 49 age groups are composed by heterogeneous profiles, but they are also the main ones in which <b>two groups that spend many hours at home</b> and are constantly exposed to the noise of their street are to be found: students and teleworkers.</p>
            </div>
            <div class="step map25" data-step="21">
                <p>They need low noise levels to ensure concentration for long periods of time and in these age groups <b>88,9%</b> <em>(50,179 people)</em> live with noise levels above <span class = "span-colored" style="background-color:#EDA147;">65dB</span>. If noise exposure is continuous, they are likely to seek alternatives such as libraries or coworking facilities.</p>
            </div>
            <div class="step map25" data-step="18" >
                <p>Each of the age groups of mataronins has its own characteristics that make noise pollution affect their daily lives in different ways. But where does the noise originate?</p>
            </div>
            </article>
        </section>
        <section class="paragraph" style= "margin-top:5vh!important;">
            <p class="titols">Traffic and shops are probably the main cause of noise in the city</p>
            <p>Vehicles are presumably the main cause of noise pollution in Mataró. The data from the Generalitat de Catalunya for 2022 provides a variable that isolates the level of noise caused by vehicles, but when compared with the total, the difference between columns is zero.</p>
            <p>Since much of the noise recorded on the streets comes from traffic, it is possible that the records simply aggregate the annual data and the average decibel level on each street is almost the same in both cases. The database approach would have to be seen to be able to make strong statements in this aspect.</p>
            <p style="color:#808080!important; font-size:18px;">💡<em>You can explore the map by zooming in with the control at the top right and see the number of cars per block by clicking on the circles that will appear when you scroll.</em></p>
        </section>
        <section id="scrolly-3">
            <div class="sticky-thing3">
                <div id="map3"></div>
            </div>
            <article>
            <div class="step map3" data-step="18" >
                <p>In a context like this, where we cannot know exactly what percentage of the noise comes from vehicles, another question arises: is the noise on the streets related to the cars of the neighbours living there, or is there no clear relationship between the number of vehicles registered on each block of houses and the noise that is heard?</p>
            </div>
            <div class="step map3" data-step="19">
                <p>At first glance, one might think that the number of vehicles is directly related to the population of each neighbourhood, but this is not the case.</p>
            </div>
            <div class="step map3" data-step="20">
                <p><b>Number of vehicles and inhabitants of Mataró's neighbourhoods</b></p>
                <table>
                    <tr>
                        <th>Neighbourhood</th>
                        <th>No. of inhabitants</th>
                        <th>No. of vehicles</th>
                        <th>% population with vehicle</th>
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
                <p>La Llàntia and Vista Alegre are the neighbourhoods with the highest number of cars per inhabitant (55.8% and 59.8%) and outnumber other more populated areas.</p>
            </div>
            <div class="step map3" data-step="22">
                <p>On the other hand, Cerdanyola is the area with most vehicles, but at the same time has one of the lowest percentages with only 35.5% of inhabitants owning a car.</p>
            </div>
            <div class="step map3" data-step="23">
                <p>The same is true for Rocafonda and El Palau, which, despite being among the most populated neighbourhoods, have percentages of 27.2% and 39.1% respectively.</p>
            </div>
            </article>
        </section>
        <section class="paragraph" style= "margin-top:20px!important;">
            <p>The areas with the most registered vehicles are not directly related to streets with high levels of noise pollution. In other words, the noise from cars and motorbikes does not originate from where the residents live, but the main cause is that drivers have a preference for driving on certain streets regardless of their origin and destination.</p>
            <p>The main streets are the busiest because they allow you to move around easily and connect with all the neighbourhoods and the entrances and exits of the city. The junction point for all this traffic is Granollers square, which is surrounded by the noisiest streets in Mataró and can exceed 75dB.</p>
            <p>In addition to vehicles, but without neglecting them, commercial areas are also responsible for street noise. Terraces, delivery drivers, goods distributors and the very movement of customers contribute to increasing the decibels in the streets.</p>
        </section>
        <section id="scrolly-4">
            <div class="sticky-thing4">
                <div id="map4">
                <button id="toggle-botigues" class="map-button">Hide noise lines</button>
                </div>
            </div>
            <article>
            <div class="step map4" data-step="21" >
                <p>Although the Open Street Maps data lacks <span class = "span-colored" style="background-color:#BA5C70; color:white!important;">shops</span> and <span class = "span-colored" style="background-color:#FBBA33">services</span>, the trend in the distribution of shops in the city is well represented.</p>
            </div>
            <div class="step map4" data-step="22">
                <p>In the north-western neighbourhoods of the city, shops and services are concentrated in the main streets such as Avinguda Puig i Cadafalch, Via Europa, Avinguda dels Països Catalans and Ronda de Sant Oleguer.</p>
            </div>
            <div class="step map4" data-step="23">
                <p>In comparison, the shopping areas in the south-eastern part of the city are more dispersed. The density and variety of shops in the Centre and Eixample also play an important role in attracting residents from the peripheral neighbourhoods of the city and other towns in the region.</p>
            </div>
            <div class="step map4" data-step="24">
                <p>The location of city establishments in the streets with the highest levels of noise pollution suggests that, like vehicles, they are possibly one of the most important sources of noise in the city.</p>
            </div>
            </article>
        </section>
        <section class="paragraph" style= "margin-top:5vw!important;">
            <p class="titols">Mataró's nights are quieter</p>
            <p>If traffic and commerce are probably the main causes of noise pollution in the city, what happens during off-peak hours and when everything is closed? What happens at night?</p>
            <p>The data collected by the administration split the noise measurement into three time slots: from 7am to 9pm during the day, from 9pm to 11pm for the evening and from 11pm to 7am for the night.</p>
            <p>According to WHO recommendations, the recommended decibels for a peaceful night's sleep and good quality sleep are 50dB.</p>
            <p style="font-size:18px!important; text-align:center;">💡<em>Click and interact with the chart</em></p>
            <div class="franges-horaries">
                <div class="map-title">
                    <h3>Day (7 - 21h)</h3>
                    <div id="map51"></div>
                </div>
                <div class="map-title">
                    <h3>Evening (21-23h)</h3>
                    <div id="map52"></div>
                </div>
                <div class="map-title">
                    <h3>Night (23-7h)</h3>
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
            <p>In the evening, the busiest streets during the day experience a slight decrease in noise pollution levels. The main streets continue to be the noisiest in the city, but many of the alleyways that had had high decibel levels during the day, especially those in the Centre and the Eixample, manage to reach the 55dB range.</p>
            <p>At night the whole city is practically deserted and the vast majority of streets do not exceed 59dB. However, the main streets and the entrances and exits of the city still maintain quite high levels even late at night. It is possible that residents in these areas may find their quality of sleep disturbed because of this problem.</p>
        </section>
        <section class="paragraph arbres">
            <p class="titols">Trees and green areas to mitigate noise</p>
            <p>High noise levels can cause health problems according to the WHO, but it is difficult to achieve figures below 55dB in cities with so many inhabitants.</p>
            <p>The City Council has established regulations such as restricting the opening hours of terraces or limiting traffic on certain streets, but the main solution to prevent noise from spreading through the streets and reaching homes are <span class= "span-colored" style="background-color:#5CBA70;color:#000">trees</span> and <span class= "span-colored" style="background-color:#137448; color:#fff;">green areas</span>.</p>
            <div id="map6">
                <button id="toggle-arbres" class="map-button">Hide noise lines</button>
            </div>
            <p>Mataró has a wide range of green areas spread throughout the city and is also committed to trees in main streets, squares and parks.</p>
            <p>But it will face a challenge in the coming years. The long drought that has affected most of Catalonia has caused hundreds of trees to die and the city council has cut them down for safety's sake, but this year they have started a replanting campaign. This year they have started a replanting campaign, but the new trees are too young, too thin and too low to fulfil their function of mitigating noise. Will the mataronins notice the difference now that the good weather is coming and the streets are busier again?</p>
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
        const width = 1000, height = 2000, margin = { top: 50, right: 50, bottom: 100, left: 100 };
    //
        const svg = d3.select("#map2")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
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
                            // 📌 Crear simulación de fuerzas para beeswarm con `d3-force`
                            const simulation = d3.forceSimulation(nodos)
                                .force("x", d3.forceX(d => escalaX(d.TOTDEN)).strength(0.5)) // Alinear en X
                                .force("y", d3.forceY(height / 2).strength(0.2)) // Distribución vertical
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
                .attr("transform", `translate(0, ${height - 810})`) // 🔥 Ajustamos posición
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
                .attr("x", width - 460)
                .attr("y", height - 750)
                .text("Nº decibels")
                .style("font-size", "16px")
                .style("font-family", "Fjalla One")
                .style("fill", "#595959");
//
            svg.append("text")
                .attr("class", "comentari")
                .attr("text-anchor", "end")
                .attr("x", width - 705)
                .attr("y", height - 1140)
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
                .attr("y1", height - 1170) // 🔥 Ajustamos para que cubra el beeswarm
                .attr("y2", height - 810)
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
                    .attr("y1", height - 1170) // Ajustamos para que cubra el beeswarm
                    .attr("y2", height - 810)
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
                            .attr("viewBox", "0 0 800 500")
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
                    .data((d, i) => d.map((p, j) => ({ ...p, key: d.key, sexo: "MEN", age: data[j].age })))
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
                .data((d, i) => d.map((p, j) => ({ ...p, key: d.key, sexo: "WOMEN", age: data[j].age })))
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
                        .style("left", `${event.clientX + 20}px`)
                        .style("top", `${event.clientY - 20}px`)
                        .html(`${d.sexo}<br> Nivel ruido: ${d.key}<br> Nº afectados: ${Math.abs(d[1] - d[0])}`);
                });
//
            // Eje Y
            const ejeYPiramid = piramide.append("g")
                .attr("transform", `translate(${width_map25 / 2+10.8}, 0)`)
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
                .attr('dx', '-370px')
                .style('font-size', "14px")
                .style("font-family", "Fjalla One");
//
            piramide.append("text")
                .attr("class", "x-label")
                .attr("text-anchor", "end")
                .attr("x", width_map25 -500)
                .attr("y", height_map25 -3)
                .text("MEN")
                .style("font-size", "18px")
                .style("font-family", "Fjalla One")
                .style("fill", "#595959");
//           
            piramide.append("text")
                .attr("class", "x-label")
                .attr("text-anchor", "end")
                .attr("x", width_map25 -200)
                .attr("y", height_map25 -3)
                .text("WOMEN")
                .style("font-size", "18px")
                .style("font-family", "Fjalla One")
                .style("fill", "#595959");
//            
            piramide.append("text")
                .attr("class", "x-label")
                .attr("text-anchor", "end")
                .attr("x", width_map25 -760)
                .attr("y", height_map25 -470)
                .text("AGE")
                .style("font-size", "15px")
                .style("font-family", "Fjalla One")
                .style("fill", "#595959");
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
                                                <strong>🔊 Noise:</strong> ${nivellSoroll}
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
                        // 2️⃣ Agregar la capa del polígono
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
                    sorollVisible ? 'Hide noise lines' : 'Show noise lines';
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
                                    // 🔹 Crear el mapa en <div id="map6">
                                    const map6 = new maplibregl.Map({
                                        container: 'map6', // 📌 Se mantiene 'map6'
                                        style: style, 
                                        center: [2.437061, 41.540358],
                                        zoom: 13.5,
                                        attributionControl: false
                                    });
//
                                    // 🔹 Agregar control de atribución
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
                                    // 🔹 Cargar la capa GeoJSON cuando el mapa esté listo
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
                                                sorollVisibleArbres ? 'Hide noise lines' : 'Show noise lines';
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
            // Añadir la capa de ruido con la variable correspondiente en cada mapa
            map51.on('idle', () => addCapaSoroll(map51, "nivell_soroll_TOTDIA"));
            map52.on('idle', () => addCapaSoroll(map52, "nivell_soroll_TOTVES"));
            map53.on('idle', () => addCapaSoroll(map53, "nivell_soroll_TOTNIT"));
        });
</script>


