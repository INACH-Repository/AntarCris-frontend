# Instalando DspaceCris 8 desde el repositorio
Esta guia fue hecha usando un dispositivo con el sistema operativo 24.04 (LTS), por lo tanto, dependiendo del sistema 
operativo pueden haber algunas diferencias respecto a lo expresado aca. La guia oficial puede encontrarse en aca 
[dspace 8 wiki](https://wiki.lyrasis.org/display/DSDOC8x/Installing+Dspace).

## Usuarios a usar
- Dspace

## Softwares necesarios
Para la instalaccion se necesitan los siguientes softwares, se indican las versiones instaladas como referencia.
- Nodejs v20.19.0
- Yarn 1.22.22
- PM2 6.0.5
- git 

Estos son softwares ampliamente usados por lo tanto se pueden encontrar en cualquier sistema de manejo de paquetes 
como. Cabe destacar que es necesario tener en ejecucion el backend de lo contrario el frontend solo mostrara un mensaje 
de error.


## Instalando y ejecutando la vista web
A diferencia de instalar una version limpia, en este caso se tiene que realizar un `git clone` al repositorio, esta es una version 
ya operativa, por lo tanto solo se tiene que crear el archivo `config.dev.yml` dentro de la carpeta `config/`. Los elementos mas 
importantes dentro de este archivo son las direcciones del backend y del frontend, ya que, una mala configuracion genera 
errores de permisos ya que solo una ruta tiene posible acceso al  backend. Por lo tanto, en los archivos de configuracion ambas rutas deben coincidir.
```
ui:
  ssl: false
  host: localhost
  port: 4000
  nameSpace: /

# This example is valid if your Backend is publicly available at https://api.mydspace.edu/server/
# The REST settings MUST correspond to the primary/public URL of the backend. Usually, this means they must be kept in sync
# with the value of "dspace.server.url" in the backend's local.cfg
rest:
  ssl: false
  host: localhost
  port: 8080
  nameSpace: /server
```

Dentro del archivo `config.yml` se pueden encontrar mas opciones que se pueden considerar, se invita al lector a revisar 
el archivo y buscar aquellas que necesita.

Despues de configurar el archivo, se tienen que instalar las dependencias necesarias, para ello usaremos el `yarn` que es un `package manager`, dentro 
de la ruta base del repositorio clonado ejecutamos `yarn install`, este comando se encargara de instalar todo lo necesario.

Una vez el comando anterior termina, para levantar la intefaz tenemos dos opciones, una es usando `yarn start:dev`, la cual 
levanta la aplicacion en modo desarrollo y la otra es compilando el codigo.

Para esta ultima se necesita usar `yarn build:prod`, esto crea una carpeta llamada `dist/`, el siguiente paso es crear una carpeta fuera de la que contiene 
el codigo del repositorio, para efectos de esta guia la llamaremos `dspace-ui/`. 

Entonces, copiamos la carpeta `dist/` y su contenido a `dspace-ui/`. Dentro de `dspace-ui/` creamos una carpeta `config/` con un archivo `config.yml`.
La carpeta tiene que lucir. 

```
[dspace-ui]
    /dist
       /browser 
       /server 
    /config
       /config.yml
    dspace-ui.json
```

Finalmente, podemos ejecutar la interfaz usando `node ./dist/server/main.js` (dentro de `dspace-ui/`) o utilizando PM2 (para ello hay que configurar 
el archivo `dspace-ui.json`) con el comando `pm2 start dspace-ui.json`.

El archivo `dspace-ui.json` debe tener a lo minimo lo siguiente
```
{
    "apps": [
        {
           "name": "dspace-ui",
           "cwd": "/full/path/to/dspace-ui-deploy",
           "script": "dist/server/main.js",
           "instances": "max",
           "exec_mode": "cluster",
           "env": {
              "NODE_ENV": "production"
           }
        }
    ]
}
```


Autor: Javier Norambuena Leiva