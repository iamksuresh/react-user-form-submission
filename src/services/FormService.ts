import AXIOS from './axios';
export const FormService = {
  submitUserForm: async (data: any) => {
      console.log(data)
      return AXIOS.post('/', data)},
};
