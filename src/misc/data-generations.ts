// https://pokemondb.net/type/old
// https://pokemondb.net/type
// TODO: Rename "Generation" to "Game"

export const generations = ["default", "gen2", "gen1", "odyssey"] as const;
export type Generation = (typeof generations)[number];

const generationSet = new Set<string>(generations);

export function isGeneration(generation: string): generation is Generation {
  return generationSet.has(generation);
}
