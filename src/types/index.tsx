import { literal, object, string, TypeOf } from 'zod';
import {
  InformationFormValidationSchema,
  AdressFormValidationSchema,
} from '../schema/FormValidationSchema';

export interface IInstrumentData {
  ask: number;
  bid: number;
  from: string;
  to: string;
  instrumentId: string;
  timestamp: number;
}

export interface IOrderBookData {
  [key: string]: IInstrumentData;
}

export interface IThrottle {
  [key: string]: number;
}

export type RegisterInput = TypeOf<typeof InformationFormValidationSchema>;

export type RegisterAddressInput = TypeOf<typeof AdressFormValidationSchema>;

export interface IAddress {
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
