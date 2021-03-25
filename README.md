# Amazon Clon
Este proyecto es un clon de la versión estadounidense de Amazon. 
## Funcionalidades
En este proyecto se pueden agregar productos del Home Page a la canasta, tiene la funcionalidad de Authentication de Usuario en el que puedes registrar uno, e iniciar sesión sólo con la contraseña y mail correctos. También los productos agregados en la canasta pueden ser eliminados y se calcula el total de dinero en base a los productos.
En diseño replica tal cual la página de Amazon, pero muchas partes no tienen las funcionalidades completas.
## Tecnologías utilizadas
En este proyecto se utilizó React, CSS, y React Context API. Esto es útil para no tener que pasar la información de componente a componente, y poder saltearse todo el “árbol” de objetos, sin tener que hacer el prop dripping que resulta ineficaz. Lo bueno es que de una forma directa tienes acceso a una base de datos, que se puede modificar desde cualquier componente. Una alternativa más minimalista a Redux.
### Firebase
Se utilizó Firebase para Hostear el proyecto, y además para la Autenticación de usuario. Se puede registrar un usuario e ingresar con este.
