import ApiService from './ApiService';

const ENDPOINTS = {
  GOAL: '/goals/'
};

class GoalService extends ApiService {
  getGoal = params => this.apiClient.get(ENDPOINTS.GOAL + params);
  updateGoal = params =>
    this.apiClient.put(ENDPOINTS.GOAL + params.clientId, params);
}

const goalService = new GoalService();

export default goalService;
