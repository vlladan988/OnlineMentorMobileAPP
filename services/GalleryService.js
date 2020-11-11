import ApiService from './ApiService';

const ENDPOINTS = {
  GALLERY: '/gallery'
};

class GalleryService extends ApiService {
  getGallery = params => this.apiClient.get(ENDPOINTS.GALLERY, params);
  saveGallery = params => this.apiClient.post(ENDPOINTS.GALLERY, params);
}

const galleryService = new GalleryService();

export default galleryService;
