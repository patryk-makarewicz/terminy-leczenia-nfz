import { request } from '../request';
import { DictionaryResponse } from './Dictionary.model';

export const getBenefitDictionaryMock = () => {
  return request<DictionaryResponse>({ data: ['Poradnia', 'Przychodnia'] });
};

export const getLocalitiesDictionaryMock = () => {
  return request<DictionaryResponse>({ data: ['Gdańsk'] });
};
