const express = require("express");
const characterController = require("../controllers/characterController");
const router = express.Router();

/**
 * @swagger
 * /characters:
 *   get:
 *     summary: Obtener personajes de DynamoDB
 *     parameters:
 *         description: Obtener personajes de DynamoDB
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Personajes encontrado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID character
 *                 nombre:
 *                   type: string
 *                   description: Name characters
 *                 sableColor:
 *                   type: string
 *                   description: Saber color character
 *                 raza:
 *                   type: string
 *                   description: Race character
 *       '500':
 *         description: Hubo un problema al buscar personajes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  error:
 *                      type: string
 */
router.get("/characters", characterController.getCharacters);

/**
 * @swagger
 * /characters:
 *   post:
 *     summary: Cargar personaje a DynamoDB
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         description: Nombre del personaje que deseas crear
 *       - in: path
 *         name: sableColor
 *         required: true
 *         description: Asignale un color de sable
 *       - in: path
 *         name: raza
 *         required: true
 *         description: De que raza del mundo de StarWars deseas que sea
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Personaje cargado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                   description: Name characters
 *                 sableColor:
 *                   type: string
 *                   description: Saber color character
 *                 raza:
 *                   type: string
 *                   description: Race character
 *       '500':
 *         description: Hubo un problema al cargar personaje
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  error:
 *                      type: string
 */
router.post("/characters", characterController.createCharacter);

/**
 * @swagger
 * /people/{id}:
 *   get:
 *     summary: Obtener personaje por ID desde SWAPI StarWars
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del personaje a buscar
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Personaje encontrado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                   description: Name of the person
 *                 altura:
 *                   type: string
 *                   description: Height of the person
 *                 peso:
 *                   type: string
 *                   description: Weight of the person
 *                 color_cabello:
 *                   type: string
 *                   description: Hair color of the person
 *                 color_piel:
 *                   type: string
 *                   description: Skin color of the person
 *                 color_ojos:
 *                   type: string
 *                   description: Eye color of the person
 *                 nacimiento:
 *                   type: string
 *                   description: Birth year of the person
 *                 genero:
 *                   type: string
 *                   description: Gender of the person
 *                 mundo_natal:
 *                   type: string
 *                   description: Homeworld URL
 *                 peliculas:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of film URLs
 *                 especies:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of species URLs
 *                 vehiculos:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of vehicle URLs
 *                 naves_estelares:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of starship URLs
 *                 creado:
 *                   type: string
 *                   description: Creation date
 *                 editado:
 *                   type: string
 *                   description: Last edited date
 *                 url:
 *                   type: string
 *                   description: API URL of the person
 *       '500':
 *         description: Hubo un problema al buscar personaje
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  error:
 *                      type: string
 */
router.get("/people/:id", characterController.getCharacterApi);

/**
 * @swagger
 * /people:
 *   get:
 *     summary: Obtener lista personajes desde SWAPI StarWars
 *     responses:
 *       '200':
 *         description: Lista de personajes recibida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                     description: Name of the person
 *                   altura:
 *                     type: string
 *                     description: Height of the person
 *                   peso:
 *                     type: string
 *                     description: Weight of the person
 *                   color_cabello:
 *                     type: string
 *                     description: Hair color of the person
 *                   color_piel:
 *                     type: string
 *                     description: Skin color of the person
 *                   color_ojos:
 *                     type: string
 *                     description: Eye color of the person
 *                   nacimiento:
 *                     type: string
 *                     description: Birth year of the person
 *                   genero:
 *                     type: string
 *                     description: Gender of the person
 *                   mundo_natal:
 *                     type: string
 *                     description: Homeworld URL
 *                   peliculas:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of film URLs
 *                   especies:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of species URLs
 *                   vehiculos:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of vehicle URLs
 *                   naves_estelares:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of starship URLs
 *                   creado:
 *                     type: string
 *                     description: Creation date
 *                   editado:
 *                     type: string
 *                     description: Last edited date
 *                   url:
 *                     type: string
 *                     description: API URL of the person
 *       '500':
 *         description: Hubo un problema al listar personajes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  error:
 *                      type: string
 *
 */
router.get("/people", characterController.getCharactersApi);

module.exports = router;
