import ApiService from './ApiService';

const ENDPOINTS = {
  TRAINERS: '/trainers'
};

class TrainerService extends ApiService {
  updateTrainer = params => this.apiClient.put(ENDPOINTS.TRAINERS + '/' + params.trainerId, params);
  getTrainer = params => this.apiClient.get(ENDPOINTS.TRAINERS + '/' + params);
}

const trainerService = new TrainerService();

export default trainerService;
