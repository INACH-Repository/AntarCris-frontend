# Tema custom CRIS Antártico

Dspace ofrece muchas maneras de poder customizar la interfaz, una es editar directamente los archivos 
base del sistema, pero otra opcion es crear un `theme`, en el cual se pueden crear componentes especificos 
que van a ser tomados antes que los archivos base.

Para ello, nos vamos a la carpeta `[source-code]/src/themes/`, por defecto vienen dos carpetas, `custom/` y `dspace/` las 
cuales pueden ser utilizadas como base para construir el tema personalizado, para este proyecto se utilizo la carpeta `dspace/`.

Entonces, dentro de esta carpeta se encontran todos los componentes de Angular que se muestran en la vista web, y si el componente 
no aparece se utiliza la version por defecto. Por lo tanto, en caso de querer agregar nuevos componentes se tienen que agregar en esta 
carpeta.

De todas formas, se recomienda leer como [customizar](https://wiki.lyrasis.org/display/DSDOC8x/User+Interface+Customization), de la wiki 
oficial para comprender todas las posibles opciones disponibles, aca no se utilizaron todas.

Autor: Javier Norambuena Leiva