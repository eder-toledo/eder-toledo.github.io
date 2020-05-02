---
title: Recolección de tweets con node-red
---

Antes que nada, me gustaría poner en contexto por qué decidí realizar la recolección de datos, principalmente para poder mejorar mis conocimientos relacionados al procesamiento y presentación de datos, además surgió como parte de la colaboración con el [Dr. Ramón Abraham Mena Farrera](https://www.ecosur.mx/academico/rmena/) quien realiza estudio de género y tiene gran interés por el análisis de dinámicas sociales en internet y después de plantear los requerimientos puse manos a la obra.

Para este ejemplo de recolección de tweets nos apoyaremos de la herramienta [node-red](https://nodered.org/).

Como almacén de datos utilizaremos la base de datos No-SQL [MongoDB](https://www.mongodb.com/).

Para el acceso a los tweets necesitaremos registrar una aplicación en la sección de desarrolladores de Twitter para obtener nuestra key y secret-key.

Una vez que tengamos nuestras llaves de Twitter, una instalación de node-red y MongoDB podemos comenzar a realizar la configuración.

Antes que nada, necesitaremos en nuestro node-red contar con el plugin de conexión para MongoDB
Una vez que tengamos ese plugin en nuestra mesa de trabajo de node-red necesitaremos tres elementos:
1.	El conector a Twitter 
2.	Un elemento de función de node red
3.	El conector a MongoDB

El conector de Twitter nos permitirá obtener desde el api una muestra de Tweets, para este caso en su configuración pondremos que queremos de todos los tweets públicos aquellos que tenga un conjunto de hashtags en específico, recordemos que para tener acceso al api tenemos que configurar nuestro key y secret-key.
![](/static/img/post1/01.png)

El elemento de función de node-red nos ayudara a tomar un subconjunto de elementos de todos los que contiene un tweet normal, esto solo para reducir el tamaño y peso de cada uno de los tweets.
![](/static/img/post1/02.png)

Por defecto para la transferencia de datos entre nodos en node-red se encuentra definida una variable llamada “msg” la cual contiene a su vez la variable “payload”.
![](/static/img/post1/03.png)

La variable “msg” al ser un objeto pueden agregarse mas atributos, para cuando recibimos esta variable del nodo de conexión a Twitter se ha agregado la variable “tweet” la cual contiene toda la información entregada por el api por cada uno de los tweets recibidos.

Crearemos un nuevo objeto con los elementos que nos interesen de cada uno de los tweets y se la asignaremos a la variable “payload”, con esto dejaremos lista la variable payload para ser enviada al siguiente nodo que en nuestro caso será el encargado de conectarse a MongoDB y realizar la inserción.

Para insertar en MongoDB utilizaremos el nodo out y para ello necesitamos configurar nuestra conexión a MongoDB especificando el url, el usuario, contraseña y puerto; adicionalmente especificaremos la colección a la cual se realizara la inserción, el tipo de operación que realizaremos y para nuestro caso, dado que asignamos toda la información necesaria a la variable “payload” indicaremos que únicamente almacenaremos el contenido de “msg.payload”.
![](/static/img/post1/04.png)

Una vez configurados nuestros nodos realizaremos la conexión entre ellos y le daremos deploy a nuestra mesa de trabajo.

Para mi caso específico después de dejar por aproximadamente 3 días la recolección de tweets con node-red almacena poco más de 11,600 000.