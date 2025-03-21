/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const suppliesAvalable = new Set(supplies);
  const recipeMap = new Map();
  const visited = new Map();
  for (let i = 0; i < ingredients.length; i++)
    recipeMap.set(recipes[i], ingredients[i]);
  const canMake = (ingredient) => {
    if (visited.has(ingredient)) {
      return visited.get(ingredient) === 1;
    }
    if (suppliesAvalable.has(ingredient)) return true;
    if (!recipeMap.has(ingredient)) return false;
    visited.set(ingredient, 0);
    for (let ing of recipeMap.get(ingredient)) {
      if (!canMake(ing)) return false;
    }
    visited.set(ingredient, 1);
    ans.push(ingredient);
    return true;
  };
  const ans = [];
  for (let recipe of recipes) {
    canMake(recipe);
  }
  return ans;
};
