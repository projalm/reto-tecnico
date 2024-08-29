const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const Character = require("../models/characterModel.js");

const CHARACTER_TABLE = process.env.TABLE_NAME;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

//TRADUCCION DE CAMPOS
const translateFields = (data) => {
  return {
    nombre: data.name,
    altura: data.height,
    peso: data.mass,
    color_cabello: data.hair_color,
    color_piel: data.skin_color,
    color_ojos: data.eye_color,
    nacimiento: data.birth_year,
    genero: data.gender,
    mundo_natal: data.homeworld,
    peliculas: data.films,
    especies: data.species,
    vehiculos: data.vehicles,
    naves_estelares: data.starships,
    creado: data.created,
    editado: data.edited,
    url: data.url,
  };
};

exports.createCharacter = async (nombre, sableColor, raza) => {
  const id = uuidv4();
  const newCharacter = new Character(id, nombre, sableColor, raza);

  const params = {
    TableName: CHARACTER_TABLE,
    Item: newCharacter,
  };

  await dynamoDb.put(params).promise();
  return newCharacter;
};

exports.getCharacters = async () => {
  const params = {
    TableName: CHARACTER_TABLE,
  };

  const data = await dynamoDb.scan(params).promise();
  return data.Items.map(
    (item) => new Character(item.id, item.nombre, item.sableColor, item.raza)
  );
};

exports.getCharacterApi = async (id) => {
  const response = await axios.get(`https://swapi.py4e.com/api/people/${id}/`);
  const translatedData = translateFields(response.data);
  return translatedData;
};

exports.getCharactersApi = async () => {
  const response = await axios.get("https://swapi.py4e.com/api/people/");
  const translatedData = response.data.results.map(translateFields);
  return translatedData;
};
