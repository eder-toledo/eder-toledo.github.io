---
title: Migración de 11.6 millones de tweets de MongoDB a Elasticsearch
layout: post
---

Una de las estrategias planteadas en el artículo de “Consultas a 11.6 millones de registros en MongoDB” era realizar la migración de los 11.6 millones de registros a Elasticsearch.

Dada la cantidad de registros lo mejor es utilizar una herramienta especializada que permita asegurar el traspaso de esta cantidad considerable de registros.

De todas las opciones existentes me incline por utilizar [Logstash](https://www.elastic.co/es/logstash), ya que al encontrarse dentro del stack de Elastic, nos aseguramos el tener un nivel de compatibilidad alto.

Para poder realizar la migración necesitaremos tener instalados tanto Elasticsearch como Logstash.

Una vez instaladas procederemos a realizar el proceso:

Primero deberemos agregar a Logstash un plugin que nos permita realizar la conexión a MongoDB y para ello seguimos los siguientes pasos:

Asegurarnos de estar ejecutando nuestra instancia de Elasticsearch

![](/static/img/post3/01.png)

![](/static/img/post3/02.png)

![](/static/img/post3/03.png)

Ingresar a la ubicación de nuestro Logstash y ejecutar lo siguiente:

![](/static/img/post3/09.png)

Una vez instalado el plugin crearemos un archivo de configuración el cual contendrá lo siguiente:

![](/static/img/post3/08.png)

Con nuestro archivo de configuración ya realizado procederemos a ejecutar nuestro Logstash indicando que tome la configuración creada en el archivo que hemos realizado:

![](/static/img/post3/06.png)

![](/static/img/post3/07.png)

Con esto ya podremos observar que en nuestro elasticcsearch se ha creado un nuevo indice y que al ejecutar una búsqueda esta ya nos responde.

![](/static/img/post4/04.png)

![](/static/img/post3/05.png)

El tiempo de migración dependerá de la cantidad de datos a migrar y de la velocidad de procesamiento.
Con esto ya tenemos una forma de realizar la migración sin embargo este proceso puede ser optimizado para permitir que se pueda realizar la transferencia en bloques.