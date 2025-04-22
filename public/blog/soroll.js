
    fetch('https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json')
        .then(response => response.json()) 
        .then(style => {
            if (style.sources && style.sources.openmaptiles) {
                style.sources.openmaptiles.attribution = "Mirai Data | ICGC - Mediambient Gencat - © OSM contributors";
            }

        const map = new maplibregl.Map({
            container: 'map',
            style: style, 
            center: [2.4445, 41.54211],
            zoom: 13.8,
            attributionControl: false
        });

        
        map.addControl(new maplibregl.AttributionControl({
            customAttribution: style.sources.openmaptiles.attribution,
            compact: true 
            
        }));


        map.scrollZoom.disable();
        

        map.on('load', () => {
            // 1️⃣ Agregar la fuente del polígono GeoJSON
            map.addSource('polygon-source', {
                type: 'geojson',
                data: 'https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/soroll_mataro.geojson'
            });

            // 2️⃣ Agregar la capa del polígono (ESTE VA PRIMERO, MÁS ABAJO)
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
                        '#000000' // Color por defecto si no hay coincidencia
                    ],
                    'line-width': 3
            }
        });
    });

            const scroller = scrollama();

            scroller.setup({
                step: ".step",
                offset: 0.5,  // Esto significa que el 50% del elemento debe ser visible
                debug: false
            }).onStepEnter(response => {
                const { index } = response;

                // Aquí cambiaremos la posición del mapa cuando lleguemos al segundo paso
                if (index === 1) {
                    map.flyTo({
                        center: [2.4445, 41.540], // Cambia estas coordenadas a las que necesites
                        zoom: 16,
                        essential: true  // Hace que el cambio de zoom y posición sea suave
                    });
                }
                // Puedes añadir más pasos si quieres cambiar más posiciones del mapa
            }).onStepExit(response => {
                const { index } = response;

                // Volver a la posición inicial cuando salimos del segundo paso (al desplazarnos hacia arriba)
                if (index === 1) {
                    map.flyTo({
                        center: [2.4445, 41.54211],
                        zoom: 13.8,
                        essential: true
                    });
                }
            });

            // Inicializar el scroller
            scroller.init();


        })
        .catch(error => console.error('Error:', error));

        const width = 1000, height = 2000;

    const svg = d3.select("#map2")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // 📌 Crear una proyección y escala para el mapa
    const projection = d3.geoMercator()
        .center([2.4445, 41.54211]) 
        .scale(950000)
        .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // 📌 Cargar ambos GeoJSON
    Promise.all([
        d3.json("https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/soroll_mataro.geojson"), // Líneas
        d3.json("https://raw.githubusercontent.com/DataMirai/Soroll_Mat/refs/heads/main/illes_soroll.geojson") // Puntos
    ]).then(([multilines, puntos]) => {

        // 📌 Escala de tamaño de burbujas
        const tamañoMin = 21, tamañoMax = 1546; // Rango del radio de los puntos
        
        puntos.features.forEach(d => console.log("TOTDEN:", d.properties.TOTDEN));
        const minTOTDEN = d3.min(puntos.features, d => d.properties.TOTDEN);
        const maxTOTDEN = d3.max(puntos.features, d => d.properties.TOTDEN);

        // Escala para el tamaño (ejemplo: "valor" es la variable en el dataset)
        const escalaTamaño = d3.scaleLinear()
            .domain(d3.extent(puntos.features, d => d.properties.NOMBRE_HABITANTS)) // Ajusta con el rango de la variable
            .range([tamañoMin, tamañoMax]);

        // 📌 Escala de posición X para gráfico de burbujas
        const categorias = [...new Set(puntos.features.map(d => d.properties.nivell_soroll_TOTDEN))];
        const escalaX = d3.scaleLinear()
            .domain([minTOTDEN, maxTOTDEN]) 
            .range([200, width - 200]);

        // 📌 Paleta de colores personalizada
        const coloresPersonalizados = ["#FDDBC7", "#EF8A62", "#67A9CF", "#D1E5F0", "#2166AC", "#B2182A","#FFFFFF4C"];
        const escalaColor = d3.scaleOrdinal()
            .domain(categorias)
            .range(coloresPersonalizados);

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

        // 📌 Dibujar puntos en el mapa
        const puntosMapa = svg.append("g")
            .selectAll("circle")
            .data(nodos)
            .enter()
            .append("circle")
            .attr("cx", d => d.xMapa)
            .attr("cy", d => d.yMapa)
            .attr("r", d => d.radio)
            .attr("fill", d => d.color)
            .attr("stroke", "#808080")
            .attr("stroke-width", .4);


        let beeswarmActivo = false; 

        // 📌 Configurar Scrollama.js
        const scroller = scrollama();

        scroller.setup({
            step: ".map2",
            offset: 0.5,
            debug: false
        }).onStepEnter(response => {
            const step = response.element.getAttribute("data-step");

            if (step === "2" || step === "3") {
                if (!beeswarmActivo) { // Solo activar la simulación una vez
                    beeswarmActivo = true;

                    // 📌 Ocultar líneas del mapa
                    lineasMapa.transition()
                        .duration(500)
                        .style("opacity", 0);

                    // 📌 Crear simulación de fuerzas para beeswarm con `d3-force`
                    const simulation = d3.forceSimulation(nodos)
                        .force("x", d3.forceX(d => escalaX(d.TOTDEN)).strength(0.5)) // Alinear en X
                        .force("y", d3.forceY(height / 2).strength(0.2)) // Distribución vertical
                        .force("collide", d3.forceCollide(d => d.radio + 5)) // Evitar solapamientos
                        .force("charge", d3.forceManyBody().strength(-10)) // Repulsión
                        .on("tick", () => { // 📌 Actualizar posiciones en cada iteración
                            puntosMapa.transition()
                            .duration(500)
                                .attr("cx", d => d.x)
                                .attr("cy", d => d.y);
                        });

                    setTimeout(() => simulation.stop(), 500); // 📌 Detener la simulación tras 3s
                }
            }
        }).onStepExit(response => {
            const step = response.element.getAttribute("data-step");

            if (step === "1" || step >= "4") {
                // 🔥 Solo reseteamos el gráfico si volvemos a `data-step="1"`
                beeswarmActivo = false;

                // 📌 Mostrar líneas del mapa de nuevo
                lineasMapa.transition()
                    .duration(500)
                    .style("opacity", 1);

                // 📌 Volver al mapa si se hace scroll hacia arriba
                puntosMapa.transition()
                    .duration(500)
                    .attr("cx", d => d.xMapa)
                    .attr("cy", d => d.yMapa)
                    .attr("fill", d => d.color);
            }
        });

    });
