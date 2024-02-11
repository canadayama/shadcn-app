import { Recipe } from '@/schemas/schema'; 

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4000/recipes')

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return result.json()
};

export { getRecipes };