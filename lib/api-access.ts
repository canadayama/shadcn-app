import { Recipe } from '@/schemas/schema'; 

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4000/recipes')

  return result.json()
};

export { getRecipes };