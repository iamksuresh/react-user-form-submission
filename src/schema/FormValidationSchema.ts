import { number, object, string } from 'zod';

const InformationFormValidationSchema = object({
  name: string().min(1, 'Name is required').max(32, 'Name must be less than 100 characters'),
  email: string().min(1, 'Email is required').email('Email is invalid'),
  password: string()
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

const AdressFormValidationSchema = object({
  address1: string().min(1, 'Address Line 1 is required'),
  address2: string().min(1, 'Address Line 2 is required'),
  city: string().min(1, 'City is required'),
  state: string().min(1, 'state is required'),
  country: string().min(1, 'Country is required'),
  postalcode: number().int(),
});

export { InformationFormValidationSchema, AdressFormValidationSchema };
