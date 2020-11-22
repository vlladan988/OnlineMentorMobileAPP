import ApiService from './ApiService';

const ENDPOINTS = {
  CLIENT_UPDATE: '/trainers/'
};

class TrainerService extends ApiService {
  updateTrainer = params =>
    this.apiClient.put(ENDPOINTS.CLIENT_UPDATE + params.trainerId, params);
}

const trainerService = new TrainerService();

export default trainerService;
