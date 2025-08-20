import { getPokemon } from "../../../src/service/pokemon";
import nock from "nock";

describe("Pokemon Service", () => {
  it("should be able to get a pokemon", async () => {
    nock("https://pokeapi.co")
      .get("/api/v2/pokemon/4000000")
      .reply(200, { name: "charmander" });

    const pokemon = await getPokemon();
    expect(pokemon).toBe("charmander");
  });
});
