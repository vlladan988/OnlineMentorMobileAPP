import ApiService from './ApiService';

const ENDPOINTS = {
  GROCERIES: '/goals/'
};

class GroceriesService extends ApiService {
  getGroceries = () => this.apiClient.get(ENDPOINTS.GROCERIES);
  updateGroceries = params =>
    this.apiClient.put(ENDPOINTS.GROCERIES + params.clientId, params);
}

const groceriesService = new GroceriesService();

export default groceriesService;
