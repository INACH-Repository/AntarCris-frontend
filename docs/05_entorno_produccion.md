# Entorno de produccion
En este archivo se expone los detalles de la maquina usada al momento de escribir estos documentos, 
ademas de una descripcion de los pipelines.

## Entorno de produccion
El entorno de produccion definido es una maquina virtual de Digital Ocean con Ubuntu 24.04 LTS. En ella 
se intalaron los elementos detallados en `02_configuracion_instalacion.md` y por temas de seguridad, se 
instalo `nginx` y `certbot` para configurar el proxy inverso y los certificados respectivamente.

En el entorno de produccion se manejan dos urls:
1. `https://tomcat.antarcris.cl` esta destinada al trafico del backend.
2. `https://repository.antarcris.cl` esta destinada al trafico del frontend.

Dentro del archivo `/etc/nginx/sites-available/default` se configuraron dos rutas para diferentes urls. 
La primera ruta es `tomcat.antarcris.cl` que tiene como ruta valida `/server`, esta apunta al punto de entrada 
del backend de DspaceCris 8. La otra url es `repository.antarcris.cl` que tiene como ruta valida `/` que apunta 
al frontend de DspaceCris 8.

Ambas urls deben ser accedidas mediante `https`, cuyos certificados fueron generados y manejados por Certbot.


## Pipelines de CICD
Para construir un pipeline para la actualizacion automatica, se considero el entorno de Github Actions, 
los diferentes pipelines se encuentran almacenados en `.github/workflows/`, estos son ejecutados dentro 
de la maquina virtual, ya que, los runners son `self-hosted`.

El pipeline `build` tiene tres etapas y su objetivo es dejar operativa la nueva version en funcion del codigo 
en la rama `main`. Para ello, se utilizan las funcionalidades de PM2 para actualizar la version de acceso.

Autor: Javier Norambuena Leiva