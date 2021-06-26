import ApiService from './ApiService';

const ENDPOINTS = {
  GALLERY: '/galleries'
};

class GalleryService extends ApiService {
  showGallery = params => this.apiClient.get(ENDPOINTS.GALLERY + '/' + params);
  saveGallery = params => this.apiClient.post(ENDPOINTS.GALLERY, params);
  deleteGallery = params => this.apiClient.delete(ENDPOINTS.GALLERY + '/' + params);
}

const galleryService = new GalleryService();

export default galleryService;
