const CharacterService = require("../services/services");

exports.createCharacter = async (req, res) => {
  const { nombre, sableColor, raza } = req.body;

  try {
    const character = await CharacterService.createCharacter(
      nombre,
      sableColor,
      raza
    );
    res.status(201).json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `No se pudo crear el personaje ${error}` });
  }
};

exports.getCharacters = async (req, res) => {
  try {
    const characters = await CharacterService.getCharacters();
    res.status(200).json(characters);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: `No se encontro lista de personajes ${error}` });
  }
};

exports.getCharacterApi = async (req, res) => {
  try {
    const id = req.params.id;
    const characterApi = await CharacterService.getCharacterApi(id);
    res.status(200).json(characterApi);
  } catch (error) {
    res.status(500).json({ error: `Error buscar personaje ${error}` });
  }
};

exports.getCharactersApi = async (req, res) => {
  try {
    const charactersApi = await CharacterService.getCharactersApi();
    res.status(200).json(charactersApi);
  } catch (error) {
    res.status(500).json({ error: `Error listar personajes ${error}` });
  }
};
