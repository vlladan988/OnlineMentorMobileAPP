import ApiService from './ApiService';

const ENDPOINTS = {
  GROCERY: '/grocery'
};

class GroceryService extends ApiService {
  fetchGroceries = () => this.apiClient.get(ENDPOINTS.GROCERY);
  addGrocery = params => this.apiClient.post(ENDPOINTS.GROCERY, params);
  updateGrocery = params => this.apiClient.put(ENDPOINTS.GROCERY + '/' + params.id, params);
  deleteGrocery = params => this.apiClient.delete(ENDPOINTS.GROCERY + '/' + params);
}

const groceryService = new GroceryService();

export default groceryService;
