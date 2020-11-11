import ApiService from './ApiService';

const ENDPOINTS = {
  CLIENT: '/client',
  GOALS_CREATE: '/client/goalCreate',
  GOALS: '/client/goals',
  SAVE_GALLERY: '/client/gallery'
};

class ClientService extends ApiService {
  getClients = params => this.apiClient.get(ENDPOINTS.CLIENT, params);
  updateUser = params => this.apiClient.put(ENDPOINTS.CLIENT, params);
}

const clientService = new ClientService();

export default clientService;
