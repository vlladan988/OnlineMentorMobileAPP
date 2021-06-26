import ApiService from './ApiService';

const ENDPOINTS = {
  TEMPLATE_MEALS: '/templateMeals',
  TEMPLATE_MEAL_RECIPIES: '/templateMealRecipes',
  TEMPLATE_MEAL_CHANGE_ORDER: '/templateMealsOrder'
};

class TemplateMealService extends ApiService {
  getTemplateMeals = params =>
    this.apiClient.get(ENDPOINTS.TEMPLATE_MEALS + '/' + params.templateId);
  addTemplateMeal = params => this.apiClient.post(ENDPOINTS.TEMPLATE_MEALS, params);
  editTemplateMeal = params =>
    this.apiClient.put(ENDPOINTS.TEMPLATE_MEALS + '/' + params.templateMealId, params);
  deleteTemplateMeal = params =>
    this.apiClient.delete(ENDPOINTS.TEMPLATE_MEALS + '/' + params.templateMealId, params);
  changeTemplateMealOrder = params =>
    this.apiClient.post(ENDPOINTS.TEMPLATE_MEAL_CHANGE_ORDER, params);

  getTemplateMealRecipies = params =>
    this.apiClient.get(ENDPOINTS.TEMPLATE_MEAL_RECIPIES + '/' + params.templateMealId);

  addTemplateMealRecipe = params => this.apiClient.post(ENDPOINTS.TEMPLATE_MEAL_RECIPIES, params);

  deleteTemplateMealRecipe = params =>
    this.apiClient.delete(
      ENDPOINTS.TEMPLATE_MEAL_RECIPIES + '/' + params.recipeId + '/' + params.templateMealId,
      params
    );
}

const templateMealService = new TemplateMealService();

export default templateMealService;
