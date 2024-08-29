# Reto tecnico

## Descripción

API que consulta personajes de StarWars a SWAPI. Tambien guarda y consulta personajes creados por el usuario
a una BD de dymanoDB

Contiene 4 endpoints que se refleja en el SWAGGER de abajo

Se hizo testing con las herramientas mocha, chai y sinon. correr comando "npm test"

el proyecto, luego de configurar el entorno, podra desplegarse en la cuenta propia serverless y AWS del usuario con el comando "serverless deploy"

## Requisitos Previos

- Node.js v20+
- AWS CLI configurado y sus respectivos IAM Roles
- Cuenta serverless "serverless login"
- Se deja el archivo .env para facilidad (no contiene keys)

## SWAGGER

https://kx4st4km7k.execute-api.us-east-1.amazonaws.com/dev/api-docs

## Instalación

```bash
git clone URL_REPOSITORIO
cd <nombre de carpeta >
npm install


```
