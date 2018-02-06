# TP API Rest

Esta api tiene una interfaz de loggeo que permite entrar a la pantalla principal clickeando en el botón de log in. Es decir que no requiere autenticación.  
Una vez adentro, nos lista unos usuarios existentes de los que nos permite entrar en una pantalla de modificación de información, así como tamién borrar al usuario.   
La información de los usuarios está en memoria en el archivo storage.js, en el que también están definidas las funciones para interactuar con ellos.  

En base a esta se pide:   
1. Crear los endpoints necesarios para modificar los datos de los usuarios y para permitir eliminarlos. La lógica en el front-end ya está implementada.   
2. Incorporar mongoose a la aplicación para no tener los datos de los usuarios en memoria, sino en una base de datos MongoDB.   
3. Implementar autenticación para que se requiera loggearse con un usuario existente para poder ingresar.   
4. Agregar un boton de creación de usuario en la pantalla de visualización de usuarios y el endpoint necesario para completar la creación en el sistema.   


Primero se deberá instalar los módulos necesarios para la aplicación y luego podremos lanzarla:  
```
cd ejemplo & npm install  
```
En Linux:   
```
DEBUG=ejemplo:* npm start    
```
En Windows:   
```
set DEBUG=ejemplo:* & npm start     
```
Se recomienda utilizar el modulo nodemon que reiniciará la aplicación cada vez que se cambia el código:    
```
npm install -g nodemon    
```
y luego:    
```
DEBUG=ejemplo:* nodemon npm start     
```