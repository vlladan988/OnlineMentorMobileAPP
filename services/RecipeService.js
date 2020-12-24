import ApiService from './ApiService';

const ENDPOINTS = {
  RECIPE_TYPES: '/recipeTypes/',
  RECIPE: '/recipes/'
};

class RecipeService extends ApiService {
  fetchRecipe = () => this.apiClient.get(ENDPOINTS.RECIPE);
  getRecipeTypes = () => this.apiClient.get(ENDPOINTS.RECIPE_TYPES);
  addRecipe = params => this.apiClient.post(ENDPOINTS.RECIPE, params);
  updateRecipe = params =>
    this.apiClient.put(ENDPOINTS.RECIPE + params.recipeId, params);
  deleteRecipe = params => this.apiClient.delete(ENDPOINTS.RECIPE + params);
}

const recipeService = new RecipeService();

export default recipeService;
