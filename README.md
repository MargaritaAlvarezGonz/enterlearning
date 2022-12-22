# Calendario De Adviento Seleccionador

## Información General

El objetivo de este proyecto era crear una ruleta de la suerte que seleccionara diferentes nombres de forma aleatoria, enfocándola al ámbito educativo.
Hemos escogido una temática navideña acorde a la tarea asignada, consiguiendo 
el mínimo entregable que se nos pedía hasta la fecha.

Hemos terminado satisfechas con nuestro trabajo ya que sólo llevamos un mes de BootCamp y estamos obteniendo buenos resultados.

A continuación, se expondrá una explicación más detallada del diseño y las tecnologías que hemos utilizado.

## Diseño escogido

Previamente el diseño del proyecto se ha llevado a cabo con el editor Figma, aunque hemos tenido que modificar algunos aspectos de éste a medida que hemos 
avanzado en el código. 

Como he mencionado con anterioridad, hemos escogido una temática navideña. El diseño está basado en un christmas que se abre y da paso a 
un calendario de adviento. A la izquierda del calendario, como podemos observar, hay unos botones que indican qué es lo que se puede hacer en la página web. 
También, en el aside, encima de los botones hay un recuadro en el que se puede añadir una lista de nombres, que correspondería con una lista de alumnos.

Por último, hemos escogido este diseño ya que es una fecha muy bonita del año y muy importante para los niños, lo que puede encajar muy bien en el ámbito 
educativo, así como su presentación al cliente. Se trata de un formato divertido, colorido, alegre y siempre se puede dar utilidad como alternativa educativa 
cuando se acerca el periodo de fiestas navideñas. Por tanto, los alumnos y alumnas estarán más motivados a trabajar con éste método de selección. 



<img width="946" alt="image" src="https://user-images.githubusercontent.com/117834441/209214059-0127c720-682c-442b-82b1-82d323585dde.png">

<img width="943" alt="image" src="https://user-images.githubusercontent.com/117834441/209214397-109ca689-23d1-4b5e-abc9-e1369b1f64ec.png">

<img width="944" alt="image" src="https://user-images.githubusercontent.com/117834441/209214582-3bba608c-bccf-43fb-b356-c812e9b57de3.png">



## Tecnologías utilizadas

En cuanto al código, primero, hemos basado la estructura en el sistema de containers para crear el documento HTML para facilitar posteriormente 
la forma del estilo en CSS. 

En principio, le dimos prioridad al HTML para tener el esqueleto de la web y posteriormente adaptamos la base del diseño 
con CSS para que cogiera forma. Una vez finalizado este trabajo, comenzamos a investigar en el lenguaje de JavaScript y así poder plasmar las funciones
de ruleta y aleatoreridad. Cuando hemos conseguido todo lo anterior, hemos procedido a introducirle música, poner alguna animación y hacerlo más bonito visualmente.

HTML:                                         

- Aside (izquierda)                
* Section (derecha)
+ Empleo de técnicas para buenas prácticas como CamellCase
- Empleo de Id y Clases 
* Empleo de Divs para englobar el contenido

CSS:

- Flex --> Para distribuir los elementos del Aside
- Grid --> Para distribuir las imágenes de la derecha
- Media Queries --> Adaptar a modo Responsive en diferentes resoluciones de pantalla (Tablet,Móvil y Ordenadores) Más de lo que se especificaba
- Animaciones --> En los botones

Hemos creido conveniente que se utilizara Flex y Grid en cada caso, para facilitar y optimizar el trabajo. 
Los mediaQueries han servido para poder hacer el diseño responsive.

JavaScript:

- Función para ocultar la portada
- Formulario --> generador de una lista 
- Selección aleatoria de números (imágenes de la section)
- Selección aleatoria de nombres (procedentes del formulario)
- Empleo del DOM tanto para que aparezcan las imágenes como para que aparezca el resultado
- Funciones para que al darle click a los botones se activen y realicen una acción
- Función para colorear detrás de la imagen para indicar que ha sido seleccionada

El empleo de JavaScript ha sido muy necesario para realizar este proyecto, ya que para que el juego de selección que habíamos escogido funcionara de forma aleatoria,
era una parte imprescindible aprender a utilizarlo. Había que generar un número aleatorio junto con un nombre aleatorio que proviniese de la lista del formulario y 
relacionarlo de tal forma para que saliera en conjunto. Por ejemplo; **Maria 2** 
Además, gracias al DOM heoms podido plasmar ciertos elementos como las imágenes en el propio documento, así como colocar botones y activarlos mediante funciones 
cuando le interese al usuario obtener resultados.

# COLABORADORAS

**Marta Muñoz, Margarita Álvarez y María Giménez**







