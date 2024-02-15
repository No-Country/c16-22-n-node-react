# c16-22-n-node-react
Web App de Servicios domésticos
Figma: https://www.figma.com/file/MLpNO7bHRWnEaZGo5faFGx/UX-%7C-No-Country-%7C-NC-c16-n-22?type=design&node-id=0%3A1&mode=design&t=8Ang2lsylu9qIWMO-1

Se trabajará en la rama develop por lo cual deben usar este comando antes de ingresar a cualquier carpeta

-Para ingresar a la rama develop
git checkout develop

Ingresar y trabajar en la carpeta front:

-Cambiar a la carpeta front
cd front

-Crear una subrama en front
git checkout -b feature/NOMBRE-DE-LA-RAMA (Ejm: git checkout -b feature/header)

-Realizar cambios y confirmar en la subrama
-(Por ejemplo, crear o modificar archivos en la carpeta front)
git add .
git commit -m "Agrega cambios en la subrama feature/header"

-Volver a la rama front
git checkout front

-Fusionar los cambios de la subrama de front a front
git merge feature/NOMBRE-DE-LA-RAMA (Ejm: git merge feature/header)

-Fusionar cambios de la rama front a develop
git checkout develop
git merge front

Ingresar y trabajar en la carpeta back:

-Cambiar a la carpeta back
cd back

-Crear una subrama en back
git checkout -b feature/NOMBRE-RAMA (Ejm: git checkout feature/database)

-Realizar cambios y confirmar en la subrama
-(Por ejemplo, crear o modificar archivos en la carpeta back)
git add .
git commit -m "Agrega cambios en la subrama feature/database"

-Volver a la rama back
git checkout back

-Fusionar los cambios de la subrama de back a back
git merge feature/NOMBRE-RAMA (Ejm: git merge feature/database)

-Fusionar cambios de la rama front a develop
git checkout develop
git merge back

-Para actualizar tu copia local con los cambios más recientes del repositorio remoto, puedes usar el siguiente comando:
git pull origin main (necesitas estar en la rama main)  ó git pull origin develop (necesitas estar en la rama develop)

-Para llevar los cambios de la rama develop a la rama main:
Asegúrate de estar en la rama main
git checkout main

Fusiona los cambios de develop en main
git merge develop

Empuja los cambios a la rama main en el repositorio remoto
git push origin main


MVP: Web app para buscar profesionales que ofrezcan servicios en CABA. Esta app busca centralizar la información de profesionales matriculados y recomendados para los usuarios. 
A su vez, ofrece un sistema de calificación y opiniones de otros usuarios que ayudan a elegir el mejor servicio posible y la posibilidad de contactar con el profesional desde whatsapp. 
Cuenta con filtro de búsqueda por categorías (plomero, gasista, electricista, etc.), zona de búsqueda, costo, valoración y servicio de guardias 24hs. y se suma un buscador mediante el cual filtrar por palabras clave.  
Cada profesional tiene un perfil con datos de contacto, zona de trabajo, y fotos de trabajos realizados para ofrecer más seguridad al cliente.

