# API: vista general

![](https://github.com/DraCaster/autism-app/blob/master/api/doc/API.png)


## Estructura del proyecto:

- **doc**: se almacena toda la documentación relacionada a la API.
- **SMTP**: contiene la configuración del servicio de envio de emails.
- **src**: contiene el código en general.

A su vez la carpeta **src** se encuentra dividida en dos partes:

- **modules**: donde se almacena el funcionamiento de cada modulo de la api.
- **utils**: métodos y funciones que no pertenecen a ningún modulo en especifico pero que pueden ser utilizados por cualquiera de ellos.

La carpeta **modules** es la que contiene todos los recursos que administra nuestra api, dividida en modulos. Cada módulo contiene:

- **controllers**: contiene distintos controladores que reciben las peticiones del webservice y delegan la operacion a su respectivo servicio(provisto por otro archivo, ver carpeta service). Hace de intermediario. También puede ser el encargado de verificar que el que solicite un determinado recurso de ese modulo en particular, tenga los permisos necesarios para poder acceder.

- **middleware**: contiene una serie de middlewares que utiliza nuestro modulo. 

- **models**: donde se almacena los distintos schemas de Mongo de nuestro módulo. 

- **permissions**: contiene los permisos permitidos que deberia tener el webservice para consumir los servicios provistos en nuestro módulo.

- **service**: contiene las operaciones necesarias para operar contra la base de datos. Los servicios son llamados desde el controller unicamente si el usuario que desea utilizarlo posee los permisos adecuados.

- **Archivo routes.js**: contiene las rutas o endpoints pertenecientes a ese módulo en particular.


La carpeta **modules** contiene los siguientes modulos:

- **Areas**: operaciones relacionadas con las distintas areas que se evaluan en los examenes(Ejemplo: motricidad fina, habla, etc)
- **Evaluations**: todo lo relacionado con las evaluaciones.
- **Patients**: operaciones sobre los datos de los pacientes.
- **Routines**: operaciones sobre los datos de las rutinas.
- **Security**: contiene todo lo relacionado a los usuarios del sistema, sus roles, permisos, un sistema de rbac(sistema de control basado en roles y permisos) que permite hacer seguro todos los endpoints del sistema. 




