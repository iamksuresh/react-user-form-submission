import AXIOS from './axios';
export const FormService = {
  submitUserForm: async (data: any) =>(AXIOS.post('/', data))
   
};
