# ServiYa

Web App de Servicios domésticos Figma: https://www.figma.com/file/MLpNO7bHRWnEaZGo5faFGx/UX-%7C-No-Country-%7C-NC-c16-n-22?type=design&node-id=0%3A1&mode=design&t=8Ang2lsylu9qIWMO-1

MVP: Web app para buscar profesionales que ofrezcan servicios en CABA. Esta app busca centralizar la información de profesionales matriculados y recomendados para los usuarios. A su vez, ofrece un sistema de calificación y opiniones de otros usuarios que ayudan a elegir el mejor servicio posible y la posibilidad de contactar con el profesional desde whatsapp. Cuenta con filtro de búsqueda por categorías (plomero, gasista, electricista, etc.), zona de búsqueda, costo, valoración y servicio de guardias 24hs. y se suma un buscador mediante el cual filtrar por palabras clave.
Cada profesional tiene un perfil con datos de contacto, zona de trabajo, y fotos de trabajos realizados para ofrecer más seguridad al cliente.
A su vez, ofrece un sistema de calificación y opiniones de otros usuarios que ayudan a elegir el mejor servicio posible y la posibilidad de contactar con el profesional desde whatsapp. 
Cuenta con filtro de búsqueda por categorías (plomero, gasista, electricista, etc.), zona de búsqueda, costo, valoración y servicio de guardias 24hs. y se suma un buscador mediante el cual filtrar por palabras clave.  
Cada profesional tiene un perfil con datos de contacto, zona de trabajo, y fotos de trabajos realizados para ofrecer más seguridad al cliente.

## Run Locally

Clona el proyecto

```bash
  git clone https://github.com/No-Country/c16-22-n-node-react.git
```

Para ingresar a la rama develop

```bash
  git checkout develop
```

Ingresar y trabajar en la carpeta front:

```bash
  cd front
```

Crear una subrama en front

```bash
  git checkout -b feature/NOMBRE-DE-LA-RAMA (Ejm: git checkout -b feature/header)
```

Realizar cambios y confirmar en la subrama

```bash
  git add .
  git commit -m "Agrega cambios en la subrama feature/header"
```

Volver a la rama front

```bash
  git checkout front
```

Fusionar los cambios de la subrama a front

```bash
  git merge feature/NOMBRE-DE-LA-RAMA (Ejm: git merge feature/header)
```

Fusionar cambios de la rama front a develop

```bash
  git checkout develop
  git merge front
```

Ingresar y trabajar en la carpeta back:

```bash
  cd back
```

Crear una subrama en back

```bash
  git checkout -b feature/NOMBRE-RAMA (Ejm: git checkout feature/database)
```

Realizar cambios y confirmar en la subrama

```bash
  git add .
  git commit -m "Agrega cambios en la subrama feature/database"
```

Volver a la rama back

```bash
  git checkout back
```

Fusionar los cambios de la subrama a back

```bash
  git merge feature/NOMBRE-RAMA (Ejm: git merge feature/database)
```

Fusionar cambios de la rama back a develop

```bash
  git checkout develop
  git merge back
```

Para actualizar tu copia local con los cambios más recientes del repositorio remoto, puedes usar el siguiente comando:

```bash
  git pull origin main (necesitas estar en la rama main)  ó git pull origin develop (necesitas estar en la rama develop)
```

Para llevar los cambios de la rama develop a la rama main:

```bash
  git checkout main
  git merge develop
  git push origin main
```

