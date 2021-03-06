import ApiService from './ApiService';

const ENDPOINTS = {
  DAILY_MEALS: '/dailyMeals/',
  DAILY_MEAL_RECIPES: '/dailyMealRecipes/'
};

class DailyService extends ApiService {
  fetchDailyMeals = params => this.apiClient.get(ENDPOINTS.DAILY_MEALS, params);
  addDailyMeal = params => this.apiClient.post(ENDPOINTS.DAILY_MEALS, params);
  deleteDailyMeal = params =>
    this.apiClient.delete(ENDPOINTS.DAILY_MEALS + params.mealId, {
      params
    });

  addDailyMealRecipe = params => this.apiClient.post(ENDPOINTS.DAILY_MEAL_RECIPES, params);
  updateDailyMealRecipe = params =>
    this.apiClient.put(ENDPOINTS.DAILY_MEAL_RECIPES + params.recipeId, params);
  deleteDailyMealRecipe = params =>
    this.apiClient.delete(ENDPOINTS.DAILY_MEAL_RECIPES + params.recipeId, {
      params
    });
}

const dailyService = new DailyService();

export default dailyService;
