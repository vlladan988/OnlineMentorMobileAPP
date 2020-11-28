import ApiService from './ApiService';

const ENDPOINTS = {
  RECIPES: '/recipeTypes/'
};

class RecipeService extends ApiService {
  getRecipeTypes = () => this.apiClient.get(ENDPOINTS.RECIPES);
}

const recipeService = new RecipeService();

export default recipeService;
