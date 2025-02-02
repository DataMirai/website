---
title: "¿Los datos de las administraciones públicas son siempre fiables?"
meta_title: "Los datos de las administraciones públicas son siempre fiables"
description: "En esta entrada voy a contaros una pequeña anécdota que me ha ocurrido recientemente."
date: 2024-10-10T00:00:00.000Z
image: "images/gallery/banners_posts/datos-admin-publicas-fiables.png"
categories: ["Data", "Artículo"]
author: "Mireia Camacho"
tags: ["fuentes datos", "administración pública"]
draft: false
---

En esta entrada voy a contaros una pequeña anécdota que me ha ocurrido recientemente. Aún así, hay que remontarse a 2020 para encontrar su principio.

<hr>

{{< notice "tip" >}}
Este proyecto puede seguir adelante gracias a nuestros patronos. Si tú también quieres colaborar puedes hacerlo [aquí](https://www.patreon.com/user/creators?u=136816989 "Mirai Data Patreon page").
{{< /notice >}} 

<hr>

En 2020 el confinamiento acercó a muchas comunidades de vecinos y las incentivó a "hacer barrio". Fue más o menos por esas fechas que muchos se pusieron de acuerdo para colgar una pancarta en su balcón con la frase "¡Basta ya! Por una Mataró segura" *(Mataró es mi ciudad)*.

{{< image src="images/gallery/bbdd_publiques_fiables/cartell_mataro_segura.png" caption="Cartel en una ventana del barrio de Cerdanyola, Mataró." alt="Cartel Mataró Segura" position="center" command="fill" option="q100" class="img-fluid" title="Cartel Mataró Segura"  webp="false" >}} 


¿Realmente el problema era tan grave? A principios de 2021 decidí hacer una *solicitud de acceso a la información pública* y pedí literalmente "los datos de las denuncias en Mataró de 2015 a 2020, por tipo de delito, desglosado por barrios y con el sexo y la edad de la persona denunciada". Hasta ahí todo bien, a ver qué podíamos sacar de estos datos.

El excel llegó al cabo de un mes. Al hacer un análisis rápido, vi que entre 2015 y 2019 había una media de 2.200 denuncias por año, a excepción de 2020, donde la cifra se disparaba hasta las 3.700 denuncias. ¿Qué estaba pasando aquí? Me llevé una buena sorpresa al ver que casi la mitad de las denuncias de 2020 se debían a *(redoble de tambores)* ¡denuncias puestas a personas que se habían saltado el confinamiento! Quitando ese excedente, la realidad de los datos de 2020 era muy parecida a la de los años anteriores.

Por suerte o por desgracia (más suerte que desgracia, ya os lo adelanto), el proyecto quedó en *stand by* hasta 2022. Pero las quejas de los vecinos seguían y decidí retomar el proyecto pidiendo los datos de 2021 con las mismas variables y la misma descripción. 

El archivo que me llegó nuevo no tenía nada demasiado llamativo: esta vez, según los datos, en 2021 habían habido 2.600 denuncias. Ligeramente más que en los años anteriores, pero para una ciudad de 130.000 habitantes esa tasa parecía bastante baja.

De nuevo por cosas de la vida, volví a dejar aparcado el proyecto y no ha sido hasta ahora en 2024 que he retomado lo que había dejado en segundo plano.

Para no perder el factor inmediatez, volví a pedir los datos actualizados desde 2020 hasta 2023. Pedí los datos de 2020 y 2021 pese a tenerlos ya para poder hacer comprobaciones, como por ejemplo si han cambiado el nombre de algún tipo de delito o si las cifras son muy distintas. Dio la casualidad de que no tuve que mover ni un dedo para darme cuenta de que **los datos eran totalmente distintos**.

Qué lejos habían quedado las "disparadas" 3.700 denuncias de 2020 en el dataset anterior que en los datos actualizados me aparecía que en 2020 había habido 7.500 denuncias y las multas del confinamiento ya no estaban incluídas. A eso había que añadirle que **la tendencia subía año a año a un ritmo bastante más llamativo** de lo que aparecía en el otro dataset. Si bien en los datos anteriores teníamos una diferencia de decenas o cientos de denuncias entre año y año, en los nuevos datos había una clara tendencia ascendente que crecía a ritmo de cientos o miles.

La única diferencia del nuevo dataset fue que aquí me habían dado los datos en dos pestañas de excel separadas: una con los delitos de cada barrio y la otra pestaña con el perfil de las personas denunciadas. Sin ninguna posibilidad de unir unos datos con los otros como los tenía en el dataset anterior. 

Mi primera reacción fue pensar que me habían dado estos últimos datos mal, porque de 3 veces que los había pedido, 2 de ellas habían coincidido y una no. Esa misma tarde fui a hacer una visita a los Mossos d'Esquadra y me dijeron que no sabían nada del tema, pero que los números que les cuadraban más eran los del último dataset. 

*Mención especial a la frase textual que me dijeron: "Acabamos de empezar el turno y llevamos 14 denuncias puestas, es imposible que en un año te salgan sólo 2.000 denuncias."*  

Sabiendo entonces que los datos que estaban *mal* eran los antiguos, volví a hacer otra solicitud con los datos de 2016 a 2023, pidiendo explícitamente que los datos de las personas denunciadas no estuvieran en una tabla a parte. 

Para mi sorpresa (o a estas alturas para sorpresa de nadie), llegó un nuevo dataset **completamente distinto de los anteriores.** Ahora la media de denuncias no rondaba las 2.000 anuales del primer dataset o las 8.000 del segundo. Ahora me encontraba ante unos datos que decían que había 1.500 denuncias de media cada año.

Por lo menos esta vez el perfil de los denunciados sí estaba en la misma fila que los delitos por los que habían sido denunciados. También habían añadido la columna "Origen", pese a que yo no la había pedido explícitamente. 

A estas alturas los más avispados ya os habréis dado cuenta de lo que estaba pasando. A mí me lo tuvo que explicar un buen hombre de la Conselleria de Interior por teléfono después de haber puesto una queja pidiendo explicaciones.

Resulta que en su lógica no existen los datasets con NAs. Si una fila tiene algún NA, la eliminan del dataset antes de entregártelo. Entonces, la **solución del misterio** es que en el primer dataset sólo constaban las denuncias en las que se sabía el sexo y la edad de la persona denunciada, y en el último debía cumplir con las variables *Sexo*, *Edad* y además *Orígen*. Por eso había menos filas. 

En el de las 8.000 denuncias anuales de media, como me habían separado la información en dos pestañas, el número de denuncias no se había visto demasiado afectado y, tal como dijeron los mossos, es el que más se acerca a la realidad (Aunque en los datos abiertos de los mossos salen números superiores, posiblemente también han aplicado otro filtro y me han enviado sólo los casos en los que sí se sabe el barrio del delito).

Entonces, contestando a la pregunta del título "¿Los datos de las administraciones públicas son fiables?", mi respuesta es: *depende*. Al fin y al cabo, los datos que me enviaron eran correctos. El *error* estaba en que estaban **incompletos**. ¿Si los hubiera pedido explícitamente con los NAs me los hubieran enviado completos? Eso tengo pendiente comprobarlo, pero espero que sí. ¿Me han creado cierto grado de desconfianza? Desde luego que sí, para qué negarlo.

A partir de ahora habrá que hacer mejor nuestro trabajo: habrá que escribir solicitudes más detalladas y comprobar los datos por otras vías. Sobretodo porque pocos vienen con documentación ni metadatos, por lo que las conclusiones de los análisis muchas veces salen de nuestras suposiciones de lo que representan los datos. Y eso no puede ser. 

Lo verdaderamente importante es saber el contexto de lo que queremos tratar y ver si los datos están reflejando la realidad, y si no es así, buscar qué es lo que está pasando. Ese es el trabajo de un analista o periodista de datos y ¡aquí queremos hacer bien nuestro trabajo!