import sinon from "sinon";
import { expect } from "chai";

import characterController from "../controllers/characterController.js";
import CharacterService from "../services/services.js";

describe("Character Controller", () => {
  describe("createCharacter", () => {
    it("Debe crear un nuevo personaje", async () => {
      const req = {
        body: {
          nombre: "Luke Skywalker",
          sableColor: "azul",
          raza: "humano",
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      sinon.stub(CharacterService, "createCharacter").resolves(req.body);

      await characterController.createCharacter(req, res);

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(req.body)).to.be.true;

      CharacterService.createCharacter.restore();
    });
  });

  describe("getCharacters", () => {
    it("Debe retonar todos los personajes", async () => {
      const req = {};
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      const characters = [
        { nombre: "Luke Skywalker", sableColor: "azul", raza: "humano" },
        { nombre: "Darth Vader", sableColor: "rojo", raza: "humano" },
      ];

      sinon.stub(CharacterService, "getCharacters").resolves(characters);

      await characterController.getCharacters(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(characters)).to.be.true;

      CharacterService.getCharacters.restore();
    });
  });
});
