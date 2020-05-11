---
title: Consultas a 11.6 millones de registros en MongoDB
layout: post
---

[En el artículo pasado](/recoleccion-tweets-nodered.html) realizamos la cosecha de poco mas de 11.6 millones de tweets a través de node-red a MongoDB.

Ahora que ya tenemos nuestro conjunto de datos procederemos a ejecutar una serie de búsquedas con la finalidad de observar el rendimiento que tiene nuestra base de datos.

Para tener un punto de comparación crearemos otra base de datos con una colección similar de datos, pero reduciendo considerablemente la cantidad de elementos a solo 10000 registros, así podemos ver el rendimiento de las diferentes consultas que ejecutemos en ambos conjuntos de datos.

![](/static/img/post2/01.png)

![](/static/img/post2/02.png)

Hemos de resaltar que en ningún momento se ha realizado una estrategia de optimización en las bases de datos que pondremos a prueba, únicamente se crearon las bases de datos y se procedió a insertarle los datos.

Para la ejecución de las consultas utilizaremos el gestor [Studio 3T](https://studio3t.com/) el cual es presentado como el IDE para MongoDB, la versión que estaremos usando será la de prueba de 30 días.

La estructura base de cada uno de los registros que tenemos es la siguiente:

![](/static/img/post2/03.png)

Al ejecutar un análisis de los tipos de datos que contienen nuestra colección obtendremos lo siguiente:

![](/static/img/post2/04.png)

Una vez conociendo los datos con los que contamos ejecutaremos diversas consultas tomando como base lo siguiente:
1.	Tres consultas donde un campo sea igual a cierto criterio
2.	Tres consultas donde un campo contenga cierto criterio
3.	Tres consultas donde un campo sea igual a cierto criterio y que otro campo sea igual a cierto criterio
4.	Tres consultas donde un campo sea igual a cierto criterio o igual a un criterio diferente
5.	Tres consultas donde un campo sea igual a un criterio y en otro campo sea igual a uno u otro criterio

Con esto tendremos un total de 15 consultas que ejecutaremos tanto en la colección con 11.6 millones de tweets como en la de 10000 tweets

1.1.	Donde el campo Lang sea igual a “es”

![](/static/img/post2/05.png)

![](/static/img/post2/20.png)

1.2.	Donde retweeted sea igual a false

![](/static/img/post2/06.png)

![](/static/img/post2/21.png)

1.3.	Donde user.verified sea igual a true

![](/static/img/post2/07.png)

![](/static/img/post2/22.png)

2.1. Donde el campo created_at contenga el numero “14”

![](/static/img/post2/08.png)

![](/static/img/post2/23.png)

2.2. Donde el campo text contenga la palabra “people”

![](/static/img/post2/09.png)

![](/static/img/post2/24.png)

2.3. Donde el campo user.description contenga la palabra “doctor”

![](/static/img/post2/10.png)

![](/static/img/post2/25.png)

3.1. Donde el campo Lang sea igual a “es” y el campo user.verified sea igual a true

![](/static/img/post2/11.png)

![](/static/img/post2/26.png)

3.2 Donde el campo user.geo_enabled sea igual a true y el campo user.is_translator sea igual a false

![](/static/img/post2/12.png)

![](/static/img/post2/27.png)

3.3 Donde el campo Lang sea igual a “en” y el campo user.geo_enabled sea igual a true

![](/static/img/post2/13.png)

![](/static/img/post2/28.png)

4.1 Donde el campo user.location sea igual a “Mexico” o “México”

![](/static/img/post2/14.png)

![](/static/img/post2/29.png)

4.2 Donde el campo Lang sea igual a “es” o “en”

![](/static/img/post2/15.png)

![](/static/img/post2/30.png)

4.3 Donde el campo user.friends_count sea igual a 100 o 150

![](/static/img/post2/16.png)

![](/static/img/post2/31.png)

5.1	Donde el campo Lang sea igual a “es” y el user.location sea igual a “Mexico” o  “México”

![](/static/img/post2/17.png)

![](/static/img/post2/32.png)

5.2	Donde el campo Lang sea igual a “en” y el campo user.friends_count sea igual a 100 o 150

![](/static/img/post2/18.png)

![](/static/img/post2/33.png)

5.3	Donde el campo user.verified sea igual a true y el user.location sea igual a “Mexico” o “México”

![](/static/img/post2/19.png)

![](/static/img/post2/34.png)

Con estas consultas realizadas en ambas colecciones podemos crear un grafico de tiempo de ejecución:

![](/static/img/post2/36.png)

![](/static/img/post2/37.png)

Los resultados obtenidos de las consultas ejecutadas nos muestran que a pesar de ser un conjunto sencillo de consultas, a mayor volumen de datos se aumenta el tiempo de respuesta, volviendo esto algo inviable para la presentación de información para el usuario final (Recordemos que esto resultado de una instalación sencilla sin ninguna optimización o configuración especial).

Dado este comportamiento se buscará reducir el tiempo de ejecución de las consultas ya sea modificando la arquitectura de la base de datos o cambiando a otro motor de búsquedas como lo es Elasticseach.