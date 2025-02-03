---
title: "Jo només sé quant cobro jo, la resta…"
meta_title: "Jo només sé quant cobro jo, la resta…"
description: "Les definicions importen tant com els propis resultats. Perquè… Què passa quan aquests resultats afecten directament la butxaca de les persones?"
date: 2025-01-20T00:00:00.000Z
image: "images/gallery/banners_posts/Reest_YoSoloSeCuantoCobro.jpeg"
categories: ["ReEstimando", "Estadística"]
author: "Aitor González"
tags: ["ReEstimando"]
draft: false
---

Les definicions importen tant com els propis resultats. Perquè… Què passa quan aquests resultats afecten directament la butxaca de les persones? Aquí realment el foc de cadascun surt a la palestra i abrasa fins a una mare si fos necessari. Quan cal fer segons quines lectures d'estadístics per a entendre una situació, hem de prestar més atenció fins i tot al context dels números que als números en si. Aquí és on l'estadística es torna un camp de batalla, i el disseny experimental una arma carregada d'implicacions legals, ètiques i econòmiques. **Idees abans que números.**

Jugar amb els càlculs és relativament fàcil i l'impacte i la interpretació s'entenen immediatament. En qualsevol problema, en analitzar-lo amb una mitjana o una mediana, canvien les nostres conclusions sobre la població d'estudi. Canvia la narrativa. Per complet. Això de fet és “intuïtiu” i es veu molt ràpid. Precisament és intuïtiu pel fet que les definicions de mitjana i mediana estan ben delimitades i acceptades. No per res hi ha gent “de números”. Gent que no cavalca contradiccions.

La cosa es torna molt més complicada quan es juga amb la definició dels números que s'usaran en els càlculs. Si manipular els càlculs canvia el relat, manipular les definicions canvia el paradigma sencer.

<hr>

{{< notice "tip" >}}

Aquest projecte pot seguir endavant gràcies als nostres patrons. Si tu també vols col·laborar pots fer-ho [aquí](https://www.patreon.com/user/creators?u=136816989 "Mirai Data Patreon page").

{{< /notice >}}

<hr>

#### Un exemple de joguina:

Considera una empresa amb 100 treballadors, entre els quals s'inclouen 3 directius. L'empresa està situada en una regió en la qual el cost de vida mitjà és d'uns 20.000€.

Arriba el final de l'any fiscal i toca fer comptes. L'empresa en si no ha anat malament. Però hi ha prou descontentament. Els treballadors, organitzats en sindicats, denuncien que els seus sous no són suficients per a cobrir el bàsic, mentre l'empresa genera beneficis molt alts. Els titulars corren com la pólvora: “empresa malvada és acusada per esclavitzar treballadors. Les protestes comencen a posar en escac la imatge de la companyia.

La dirección fa números: 

- Beneficis: 750.000€ a repartir entre 3; 250.000€ per a cada directiu. 
- Salari de la direcció: 50.000€ per directiu. (3 directius) 
- Salari de cada treballador: 15.500€ por treballador. (97 treballador)

De quant és el salari total pagat? Una senzilla mitjana ponderada ho dirà; 3 directius i 97 empleats.

```r
weighted.mean(c(50000,15500),c(3,97))

[1] 16535
```

L'empresa reporta en xifres oficials un salari mitjà de 16.535€. Això suposa un problema de cara a la galeria, doncs el salari que aquesta empresa paga no arriba per a cobrir els 20.000€ de cost de vida per als treballadors situats a la regió de l'empresa. Tot això recordant que els directius s'emporten 300.000€ en total pels beneficis.

La premsa i els sindicats ataquen amb l'argument que el salari mitjà no cobreix per a les despeses de la regió. Tenen tota la raó, però cometen un error. Confiar únicament en que la xifra que la mateixa companyia reporta és correcta. No es preocupen de la definició. L'empresa s'adona d'això i llavors juguen les seves cartes.

Com només estan sent atacats per la mitjana salarial, decideixen canviar la forma de retribució. Els beneficis passen a pagar-se com a part del sou dels directius. Així maten dos ocells d'un tir: baixen els beneficis i augmenten el salari mitjà, blanquejant així la seva imatge.

No podran posar tots els beneficis en el salari dels directius, perquè algunes coses no es poden per la legalitat, però la màgia de l'enginyeria fiscal sí que aconseguirà fer gairebé tot el traspàs.

La direcció fa de nou els números amb “màgia fiscal”: 

- Beneficis: 33.333€ per a cada directiu. Ara només 100.000€ en total.
- Salari de la direcció: 266.666€ en total (50.000€ originals + 216.666€ de “beneficis”).
- Salari de cada treballador: 15.500€ per treballador. Ho deixen exactament igual.

```r
(750000-100000)/3

[1] 216666.7
```

De quant és ara el nou salari total pagat? De nou amb la mitjana ponderada:

```r
weighted.mean(c(266666,15500),c(3,97))

[1] 23034.98
```

Vaja! quina sorpresa. Un treballador de mitjana ara cobra 23.034€. El relat ara és que l'empresa ha tingut uns beneficis molt baixos, i que està vetllant pels seus treballadors, ha pujat el salari mitjà al punt que tots els treballadors ara cobren més i que pot ser que vinguin turbulències properament, així que podem aprofitar i acomiadar plantilla que no compleixi criteris per a maximitzar encara encara més beneficis. Qui podria queixar-se?

Canviant el relat a través dels números, l'empresa s'ha tret de sobre al gran germà que tot veu i tot jutja. Els números, capdavanters de l'objectivitat, no són més que abstraccions d'idees de la gent.

#### Quan l'exemple es torna real

Però bo! Tot són riures i procrastinació en exemples aïllats sense context. De manera que posarem una mica de realitat a l'assumpte, salvant unes certes diferències.

Anys 90, l'empresa Nike es trobava en una etapa de gran expansió global, consolidant-se com una de les marques líders en la indústria esportiva.

Nike, com altres grans marques globals, van implementar un model de producció basat en la subcontractació. Nike externalitzava la producció a fàbriques en països en desenvolupament, on els costos de mà d'obra eren considerablement més baixos.

Mobilitzar la producció sempre deixa descontents, i més sent una marca global amb una gran visibilitat. Nike s'enfrontava al risc de diversos tipus de crítiques, tant econòmiques per part dels locals abandonats, com a ètiques en la seva cadena de subministrament global. Amb l'objectiu de protegir la seva imatge, Nike va exigir que les seves fàbriques subcontractades complissin amb uns certs estàndards.

Entre aquests estàndards calia complir un pagament digne al treballador, però mantenint els costos extremadament baixos. Nike negociava preus molt ajustats per als productes, deixant a les fàbriques amb marges de guany “mínims”. No obstant això, es va desencadenar una competència feroç entre els proveïdors. Les fàbriques estrangeres, sobretot a Vietnam i Tailàndia, competien entre si per a obtenir els contractes de Nike.

L'estratègia de Nike semblava perfecta. No només blanquejaven la seva imatge de cara a la galeria, evitant acusacions d'explotació, ja que s'assegurava de mantenir “salaris dignes”, sinó que a més evitava l'aparició de competència forta a causa de deixar escassíssims marges de guany a les companyies franquiciades. No obstant això, i per suposat, Nike no va ser l'única amb “grans idees”. Com s'acostuma a dir, feta la llei, fet el parany.

Moltes de les fàbriques subcontractades per Nike van recórrer a males praxis per a complir amb els estàndards i guanyar-se el favor de ser franquícies de Nike. Una de les més comunes era la manipulació dels informes salarials. Per a aparentar que complien amb els estàndards laborals de salari al treballador, les fàbriques inflaven les mitjanes salarials. Això distorsionava les mètriques ja que en els càlculs es barrejaven les categories dels sous. Gerents, supervisors i personal administratiu, els salaris del qual eren significativament més alts que els dels treballadors de les línies de producció, eren comptabilitzats en els còmputs de salari mitjà.

De esta forma, las fábricas “maquillaban” las cifras, manteniendo el relato de que sus trabajadores base estaban muy bien pagados, cuando la realidad era que los salarios para operarios eran extremadamente bajos, muy a menudo insuficientes para cubrir siquiera sus necesidades básicas en países en vías de desarrollo.

Además, las auditorías realizadas por Nike o por las autoridades locales rara vez detectaban estas manipulaciones. Las inspecciones eran en muchos casos esporádicas o superficiales, y las fábricas sabían cómo prepararse para aparentar el cumplimiento de las normativas. Incluso en países donde existían leyes laborales más estrictas, la corrupción y la falta de regulación efectiva contribuían a perpetuar estas prácticas.
