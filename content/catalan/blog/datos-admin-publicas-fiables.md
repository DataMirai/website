---
title: "Les dades de les administracions públiques són sempre fiables?"
meta_title: "Les dades de les administracions públiques són sempre fiables?"
description: "En aquesta entrada us explicaré una petita anècdota que m'ha passat recentment."
date: 2024-10-10T00:00:00.000Z
image: "images/gallery/banners_posts/datos-admin-publicas-fiables.png"
categories: ["Data", "Article"]
author: "Mireia Camacho"
tags: ["fonts dades", "administració pública"]
draft: false
---

En aquesta entrada us explicaré una petita anècdota que m'ha passat recentment. Tot i així, cal remuntar-se a 2020 per a trobar el seu principi.

<hr>

{{< notice "tip" >}}

Aquest projecte pot seguir endavant gràcies als nostres patrons. Si tu també vols col·laborar pots fer-ho [aquí](https://www.patreon.com/user/creators?u=136816989 "Mirai Data Patreon page").

{{< /notice >}} 

<hr>

El 2020, el confinament va acostar a moltes comunitats de veïns i les va incentivar a "fer barri". Va ser més o menys per aquestes dates que molts es van posar d'acord per a penjar una pancarta al seu balcó amb la frase "¡Basta ya! Por una Mataró segura" *(Mataró és la meva ciutat)*.

{{< image src="images/gallery/bbdd_publiques_fiables/cartell_mataro_segura.png" caption="Cartell en una finestra del barri de Cerdanyola, Mataró." alt="Cartell Mataró Segura" position="center" command="fill" option="q100" class="img-fluid" title="Cartell Mataró Segura"  webp="false" >}} 


Era el problema tan greu? A principis de 2021 vaig decidir fer una *sol·licitud d'accés a la informació pública* i vaig demanar literalment: "les dades de les denúncies a Mataró de 2015 a 2020, per tipus de delicte, desglossat per barris i amb el sexe i l'edat de la persona denunciada". Fins aquí tot bé, a veure què podíem treure d'aquestes dades.

L'Excel va arribar al cap d'un mes. En fer una anàlisi ràpida, vaig veure que entre 2015 i 2019 hi havia una mitjana de 2.200 denúncies per any, a excepció de 2020, on la xifra es disparava fins a les 3.700 denúncies. Què estava passant aquí? 

{{< image src="images/gallery/bbdd_publiques_fiables/dataset1.png" caption="" alt="Gràfica 1" position="center" command="resize" option="q100" class="img-fluid" title="Gràfica 1"  webp="false" height="500px" width="600px" >}}

Em vaig emportar una bona sorpresa en veure que gairebé la meitat de les denúncies de 2020 es devien a *(redoblament de tambors)* denúncies posades a persones que s'havien saltat el confinament! Eliminant aquest excedent, la realitat de les dades de 2020 era molt semblant a la dels anys anteriors.

{{< image src="images/gallery/bbdd_publiques_fiables/dataset1-5.png" caption="" alt="Gràfica 1.5" position="center" command="resize" option="q100" class="img-fluid" title="Gràfica 1.5"  webp="false" height="500px" width="600px" >}} 

Per sort o per desgràcia (més sort que desgràcia, ja us ho avanço), el projecte va quedar en *stand by* fins el 2022. Les queixes dels veïns seguien i vaig optar per reprendre el projecte demanant les dades de 2021 amb les mateixes variables i la mateixa descripció.

L'arxiu que em va arribar nou no tenia res massa cridaner: aquesta vegada, segons les dades, el 2021 havien hagut 2.600 denúncies. Lleugerament més que en els anys anteriors, però per a una ciutat de 130.000 habitants aquesta taxa semblava bastant baixa.

{{< image src="images/gallery/bbdd_publiques_fiables/dataset2.png" caption="" alt="Gràfica 2" position="center" command="resize" option="q100" class="img-fluid" title="Gràfica 2"  webp="false" height="500px" width="600px" >}} 

De nou per coses de la vida, vaig tornar a deixar aparcat el projecte i no ha estat fins ara al 2024 que he reprès el que havia deixat en segon pla.

Per a no perdre el factor immediatesa, vaig tornar a demanar les dades actualitzades des del 2020 fins al 2023. Vaig demanar les dades de 2020 i 2021 malgrat tenir-les ja per a poder fer comprovacions, com per exemple si havien canviat el nom d'algun delicte o si les xifres havien canviat gaire. Va donar la casualitat que no vaig haver de moure ni un dit per a adonar-me de que **les dades eren completament diferents**.

Què lluny havien quedat les "disparades" 3.700 denúncies del 2020 en el dataset anterior que en les dades actualitzades m'apareixia que el 2020 hi havia hagut 7.500 denúncies i les multes del confinament ja no estaven incloses. A això calia afegir-li que **la tendència pujava any a any a un ritme bastant més cridaner** del que apareixia en l'altre dataset. Si bé en les dades anteriors teníem una diferència de desenes o centenars de denúncies entre any i any, en les noves dades hi havia una clara tendència ascendent que creixia a ritme de centenars o milers.

{{< image src="images/gallery/bbdd_publiques_fiables/dataset3.png" caption="" alt="Gràfica 3" position="center" command="resize" option="q100" class="img-fluid" title="Gràfica 3"  webp="false" height="500px" width="600px" >}}

L'única diferència del nou dataset va ser que aquí m'havien donat les dades en dues pestanyes d'Excel separades: una amb els delictes de cada barri i l'altra pestanya amb el perfil de les persones denunciades. Sense cap possibilitat d'unir unes dades amb les altres com les tenia en el dataset anterior.

La meva primera reacció va ser pensar que m'havien donat aquestes últimes dades malament, perquè de 3 vegades que les havia demanat, 2 d'elles havien coincidit i una no. Aquella mateixa tarda vaig anar a fer una visita als Mossos d'Esquadra i em van dir que no sabien res del tema, però que els números que els quadraven més eren els de l'últim dataset.

*Menció especial a la frase textual que em van dir: "Acabem de començar el torn i portem 14 denúncies posades, és impossible que en un any te'n surtin només 2.000."*  

Sabent llavors que les dades que estaven *malament* eren les antigues, vaig tornar a fer una altra sol·licitud per a les dades de 2016 a 2023, demanant explícitament que les dades de les persones denunciades no estiguessin en una taula a part.

Per a la meva sorpresa (o a hores d'ara per a sorpresa de ningú), va arribar un nou dataset **completament diferent dels anteriors.** Ara la mitjana de denúncies no rondava les 2.000 anuals del primer dataset o les 8.000 del segon. Ara em trobava davant unes dades que deien que hi havia **1.500 denúncies** de mitjana cada any.

{{< image src="images/gallery/bbdd_publiques_fiables/dataset4.png" caption="" alt="Gràfica 4" position="center" command="resize" option="q100" class="img-fluid" title="Gràfica 4"  webp="false" height="500px" width="600px" >}}

Almenys aquesta vegada el perfil dels denunciats sí que estava en la mateixa fila que els delictes pels quals havien estat denunciats. També havien afegit la columna "Orígen", malgrat que jo no l'havia demanat explícitament.

A hores d'ara els més espavilats ja us haureu adonat del que estava passant. A mi m'ho va haver d'explicar un bon home de la Conselleria d'Interior per telèfon després d'haver posat una queixa demanant explicacions.

Resulta que en la seva lògica no existeixen els datasets amb NAs. Si una fila té algun NA, l'eliminen del dataset abans de lliurar-te'l. Llavors, la **solució del misteri** és que en el primer dataset només constaven les denúncies en les quals se sabia el sexe i l'edat de la persona denunciada, i en l'últim havia de complir amb les variables *Sexe*, *Edat* i a més *Orígen*. Per això hi havia menys files.

En el de les 8.000 denúncies anuals de mitjana, com m'havien separat la informació en dues pestanyes, el nombre de denúncies no s'havia vist massa afectat i, tal com van dir els mossos, és el que més s'acosta a la realitat (Encara que en les dades obertes dels Mossos surten números superiors, possiblement perquè també han aplicat un altre filtre de NAs i m'han enviat només els casos en els quals sí que se sap el barri del delicte).

Llavors, contestant a la pregunta del títol "Les dades de les administracions públiques són fiables?", la meva resposta és: *depèn*. Al cap i a la fi, les dades que em van enviar eren correctes. L'*error* estava en el fet de que estaven **incompletes**. Si les hagués demanat explícitament amb els NAs me les haguessin enviat completes? Això tinc pendent comprovar-ho, però espero que sí. M'han creat un cert grau de desconfiança? Per descomptat que sí, per a què negar-ho.

A partir d'ara caldrà fer millor la nostra feina: caldrà escriure sol·licituds més detallades i comprovar les dades per altres vies. Sobretot perquè poques venen amb documentació ni metadades, per la qual cosa les conclusions de les anàlisis moltes vegades surten de les nostres suposicions del que representen les dades. I això no pot ser.

El veritablement important és saber el context de què volem tractar i veure si les dades estan reflectint la realitat; i si no és així, buscar què és el que està passant. Aquest és el treball d'un analista o periodista de dades i aquí volem fer bé la nostra feina!