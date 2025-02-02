---
title: "Yo solo sé cuanto cobro yo, el resto…"
meta_title: "Yo solo sé cuanto cobro yo, el resto…"
description: "Las definiciones importan tanto como los propios resultados. Porque… ¿Qué pasa cuando esos resultados afectan directamente al bolsillo de las personas?"
date: 2025-01-20T00:00:00.000Z
image: "images/gallery/banners_posts/Reest_YoSoloSeCuantoCobro.jpeg"
categories: ["ReEstimando", "Estadística"]
author: "Aitor González"
tags: ["ReEstimando"]
draft: false
---

Las definiciones importan tanto como los propios resultados. Porque… ¿Qué pasa cuando esos resultados afectan directamente al bolsillo de las personas? Ahí realmente el fuego de cada uno sale a la palestra y abrasa hasta a una madre si fuera preciso. Cuando hay que hacer según que lecturas de estadísticos para entender una situación. debemos prestar más atención incluso al contexto de los números que a los números en si. Aquí es dónde la estadística se vuelve un campo de batalla, y el diseño experimental, un arma cargada de implicaciones legales, éticas y económicas. **Ideas antes que números.**

Jugar con los cálculos es relativamente fácil y el impacto y la interpretación se entiende de imediato. En cualquier problema, al analizarlo con una media o una mediana, cambian nuestras conclusiones sobre la población de estudio. Cambia la narrativa. Por completo que la cambia. Esto de hecho es “intuitivo”, se ve muy rápido. Precisamente es intuitivo debido a que las deficiones de media y mediana están bien acotadas y aceptadas. No por nada hay gente “de números”. Gente que no cabalga contradicciones.

La cosa se vuelve mucho más complicada cuando se juega con la deficinión de los números que se usarán en los cálculos. Si manipular los cálculos cambia el relato, manipular las deficiones cambia el paradigma entero.

<hr>

{{< notice "tip" >}}

Este proyecto puede seguir adelante gracias a nuestros patronos. Si tú también quieres colaborar puedes hacerlo [aquí](https://www.patreon.com/user/creators?u=136816989 "Mirai Data Patreon page").

{{< /notice >}}

<hr>

#### Un ejemplo de juguete:

Considera una empresa con 100 empleados, entre los que se incluyen los 3 directivos. La empresa está ubicada en una región en la que el coste de vida promedio es de unos 20.000€.

Llega el final del año fiscal y toca hacer cuentas. La empresa en sí no ha ido mal. Pero hay bastante desconteto. Los empleados, organizados en sindicatos, denuncian que sus sueldos no son suficientes para cubrir lo básico, mientras la empresa genera beneficios muy altos. Los titulares corren como la pólvora: “empresa malvada es acusada por esclavizar empleados”. Las protestas comienzan a poner en jaque la imagen de la compañía.

La dirección hace números: 

- Beneficios : 750.000€ a repartir entre los 3. 250.000€ para cada directivo. 
- Salario de la dirección: 50.000€ por directivo. (3 directivos) 
- Salario de cada empleado : 15.500€ por empleado. (97 empleados)

¿De cuanto es el salario total pagado? Una sencilla media ponderada lo dirá; 3 directivos y 97 empleados

```r
weighted.mean(c(50000,15500),c(3,97))

[1] 16535
```

La empresa reporta en cifras oficiales un salario promedio 16.535€. Esto supone un problema de cara a la galería, pues el salario que esta empresa paga no llega para cubrir los 20.000€ de coste de vida para los empleados ubicados en la región de la empresa. Todo esto recordando que los directivos se llevan 300.000€ en total por beneficios.

La prensa y los sindicatos mayores atacan con el argumento de que el salario promedio no cubre para los gastos de la región. Tienen toda la razón, pero cometen un fallo. Confiar únicamente en la cifra que la misma compañía reporta es correcta. No se preocupan de esa definción. La empresa se da cuenta de esto y entonces juegan su baza.

Como únicamente están siendo atacados por el promedio salarial, deciden cambiar la forma de retribución. Los beneficios pasan a pagarse como parte del sueldo de los directivos. Así matan dos pájaros de un tiro: bajan los beneficios y encima aumentan el salario promedio, blanqueando así su imagen.

No podrán poner todos los beneficios en el salario de los directivos, pues algunas cosas no se pueden por la legalidad, pero la magia de la ingeniería fiscal si conseguirá hacer casi todo el traspaso casi todo.

La dirección hace de nuevo los números con “magia fiscal” : 

- Beneficios : 33.333€ para cada directivo. Ahora solo 100.000€ en total 
- Salario de la dirección: 266.666€ en total (50.000€ originales + 216666€ de “beneficios”) 
- Salario de cada empleado : 15.500€ por empleado. lo dejan exactamente igual.

```r
(750000-100000)/3

[1] 216666.7
```

¿De cuanto es ahora el nuevo salario total pagado? de nuevo con la media ponderada:

```r
weighted.mean(c(266666,15500),c(3,97))

[1] 23034.98
```

¡Vaya! que grata sorpresa. un trabajador promedio ahora cobra 2.3035^{4}€. El realto ahora es que la empresa ha tenido unos beneficios muy bajos, y que está velando por sus empleados, ha subido el salario promedio al punto de que todos los empleados ahora cobran más y que puede que vengan turbulencias en tiempos venideros. así que podemos aprovechar y despedir plantilla que no cumpla criterios para maximizar todavía aún más beneficios. ¿De que se podrían quejar?

Cambiando el relato a través de los números, la empresa se ha quitado de encima al gran hermano que todo ve y todo juzga. los números, adalides de la objetividad, no son más que abstractiones de ideas de la gente.

#### Cuando ejemplo se vuelve real

¡Pero bueno! Todo son risas y procrastinación en ejemplos aislados sin contexto. De modo que vamos a poner algo de realidad al asunto, salvando ciertas diferencias.

Años 90, la empresa Nike se encontraba en una etapa de gran expansión global, consolidándose como una de las marcas líderes en la industria deportiva.

Nike, como otras grandes marcas globales, implementraron un modelo de producción basado en la subcontratación. Nike externalizaba la producción a fábricas en países en desarrollo, donde los costos de mano de obra eran considerablemente más bajos.

Mobilizar la producción siempre deja descontetos, y más siendo una marca global con una gran visibilidad. Nike se enfrentaba al riesgo de diversos tipos críticas, tanto económicas por parte de los locales abandonados, como éticas en su cadena de suministro global. Coon el objetivo de proteger su proteger su imagen, Nike exigió que sus fábricas subcontratadas cumplieran con ciertos estándares.

Entre estos estándares había que cumplir un pago digno al trabajador, pero manteniendo los costos extremadamente bajos. Nike negociaba precios muy ajustados para los productos, dejando a las fábricas con márgenes de ganancia “mínimos”. Sin embargo, se desencadenó una competencia feroz entre los proveedores. Las fábricas extranjeras, sobre todo en Vietnam y Tailandia, competían entre sí para obtener los contratos de Nike.

La estrategia de Nike parecía perfecta. No solo blanqueaban su imagen de cara a la galería, evitando acusanciones de explotación, ya que se aseguraba de mantener “salarios dignos”, sino que además evitaba la aparición de competencia fuerte debido a dejar escasísimos márgenes de gananacia en los compañía franquiciadas. Sin embargo, y por supuestísimo, Nike no fue la única con “grandes ideas”. como se suele decir, hecha la ley, hecha la trampa.

Muchas de las fábricas subcontratadas por Nike recurrieron a malas praxis para cumplir con los estándares y ganarse el favor de ser franquiciado de Nike. Una de las más comunes era la manipulación de los informes salariales. Para aparentar que cumplían con los estándares laborales de salario al trabajador, las fábricas inflaban los promedios salariales. Esto distorsionaba las métricas ya que en los cálculos se mezclaban las categorías de los sueldos. Gerentes, supervisores y personal administrativo, cuyos salarios eran significativamente más altos que los de los trabajadores de las líneas de producción, eran contabilizados en los cómputos de salario promedio. De esta forma, las fábricas “maquillaban” las cifras, manteniendo el relato de que sus trabajadores base estaban muy bien pagados, cuando la realidad era que los salarios para operarios eran extremadamente bajos, muy a menudo insuficientes para cubrir siquiera sus necesidades básicas en países en vías de desarrollo.

Además, las auditorías realizadas por Nike o por las autoridades locales rara vez detectaban estas manipulaciones. Las inspecciones eran en muchos casos esporádicas o superficiales, y las fábricas sabían cómo prepararse para aparentar el cumplimiento de las normativas. Incluso en países donde existían leyes laborales más estrictas, la corrupción y la falta de regulación efectiva contribuían a perpetuar estas prácticas.

Detrás de este sistema, los trabajadores de las fábricas quedaban atrapados en condiciones de explotación laboral. Salarios bajos, jornadas extenuantes, ambientes laborales inseguros y la falta de representación sindical eran la norma. Este modelo no solo reveló las fallas estructurales de la industria, sino que también demostró cómo las grandes corporaciones globales podían beneficiarse de un sistema que privilegiaba los márgenes de ganancia sobre el bienestar de los trabajadores.

Al final, varias organizaciones se hicieron eco de los hehchos. La ONG Oxfam, en su artículo [“Sweatshop wages and unpaid care work”](https://www.oxfam.org/en/press-releases/sweatshop-wages-and-unpaid-care-work-double-burden-asias-women-its-economy-booms "Artículo Oxfam"), expuso en detalle las condiciones laborales precarias en las fábricas subcontratadas, destacando la manipulación de informes salariales Su investigación, junto con las campañas de otras organizaciones como Global Exchange, ayudó a visibilizar estas prácticas y a generaruna presión pública significativa sobre Nike.

Las medidas tuvieron éxito, y Nike finalmente optó por replantearse su modelo y políticas laborales. Sobretodo reforzando las auditorías, externalizando también el proceso para poder mantener un rigurosos control de que se cumplan las condiciones.

Sin embargo, el caso Nike en los años 90 sigue siendo un ejemplo emblemático de los dilemas éticos y sociales de lo que puede suponer una manipulación en el cálculo de una cifra como un salario.