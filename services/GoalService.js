import ApiService from './ApiService';

const ENDPOINTS = {
  GOAL: '/goal'
};

class GoalService extends ApiService {
  getGoal = params => this.apiClient.get(ENDPOINTS.GOAL, params);
  updateGoal = params => this.apiClient.put(ENDPOINTS.GOAL, params);
}

const goalService = new GoalService();

export default goalService;
