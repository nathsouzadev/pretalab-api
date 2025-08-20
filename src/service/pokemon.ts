export const getPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/4000000`);
  const data = await response.json();

  console.log(data);
  return data.name;
};
