import ApiService from './ApiService';

const ENDPOINTS = {
  TEMPLATE: '/templates/',
  TEMPLATE_ASSIGN_TO: '/templates/assignTo/'
};

class TemplateService extends ApiService {
  fetchTemplates = () => this.apiClient.get(ENDPOINTS.TEMPLATE);
  addTemplate = params => this.apiClient.post(ENDPOINTS.TEMPLATE, params);
  updateTemplate = params => this.apiClient.put(ENDPOINTS.TEMPLATE + params.id, params);
  deleteTemplate = params => this.apiClient.delete(ENDPOINTS.TEMPLATE + params.id);
  assignTemplateToClient = params => this.apiClient.post(ENDPOINTS.TEMPLATE_ASSIGN_TO, params);
}

const templateService = new TemplateService();

export default templateService;
