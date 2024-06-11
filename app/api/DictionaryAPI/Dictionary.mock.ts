import { request } from '../request';
import { DictionaryResponse } from './Dictionary.model';

export const getBenefitDictionaryMock = () => {
  return request<DictionaryResponse>(['Poradnia', 'Przychodnia']);
};

export const getLocalitiesDictionaryMock = () => {
  return request<DictionaryResponse>(['Gdańsk']);
};
