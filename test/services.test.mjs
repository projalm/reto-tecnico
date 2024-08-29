import AWS from "aws-sdk";
import sinon from "sinon";
import { expect } from "chai";
import dynamoService from "../services/services.js";
import Character from "../models/characterModel.js";

describe("service", () => {
  let dynamoDbStub;

  beforeEach(() => {
    dynamoDbStub = sinon
      .stub(AWS.DynamoDB.DocumentClient.prototype, "put")
      .returns({
        promise: () => Promise.resolve(),
      });
    sinon.stub(AWS.DynamoDB.DocumentClient.prototype, "scan").returns({
      promise: () => Promise.resolve({ Items: [] }),
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("createCharacter", () => {
    it("Debe crear un personaje en DynamoDB", async () => {
      const characterData = {
        nombre: "Luke Skywalker",
        sableColor: "azul",
        raza: "humano",
      };

      const character = await dynamoService.createCharacter(
        characterData.nombre,
        characterData.sableColor,
        characterData.raza
      );

      expect(character).to.be.an.instanceof(Character);
      expect(character.nombre).to.equal("Luke Skywalker");
      expect(dynamoDbStub.calledOnce).to.be.true;
    });
  });

  describe("getCharacters", () => {
    it("Debe retornar los personajes guardados en DynamoDB", async () => {
      const characters = await dynamoService.getCharacters();

      expect(characters).to.be.an("array");
      expect(AWS.DynamoDB.DocumentClient.prototype.scan.calledOnce).to.be.true;
    });
  });
});
