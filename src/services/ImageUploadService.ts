import AXIOS from './axios';
export const ImageUploadService = {
  uploadImage: async (data: FormData) => AXIOS.post('/', data, {
    headers: { "Content-Type": "multipart/form-data" },
  }),
};