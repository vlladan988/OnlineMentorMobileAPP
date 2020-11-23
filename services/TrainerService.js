import ApiService from './ApiService';

const ENDPOINTS = {
  CLIENTS: '/trainers/'
};

class TrainerService extends ApiService {
  updateTrainer = params =>
    this.apiClient.put(ENDPOINTS.CLIENTS + params.trainerId, params);
  getTrainer = params => this.apiClient.get(ENDPOINTS.CLIENTS + params);
}

const trainerService = new TrainerService();

export default trainerService;
