import ApiService from './ApiService';

const ENDPOINTS = {
  CLIENTS: '/clients'
};

class ClientService extends ApiService {
  getClients = params => this.apiClient.get(ENDPOINTS.CLIENTS, params);
  addClient = params => this.apiClient.post(ENDPOINTS.CLIENTS, params);
  showClient = params => this.apiClient.get(ENDPOINTS.CLIENTS + '/' + params);
  updateClient = params => this.apiClient.put(ENDPOINTS.CLIENTS + '/' + params.clientId, params);
  deleteClient = params => this.apiClient.delete(ENDPOINTS.CLIENTS + '/' + params);
}

const clientService = new ClientService();

export default clientService;
