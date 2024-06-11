import axios, { AxiosResponse } from 'axios';

import { BASE_URL, useAPImocks } from '../config';
import { getBenefitDictionaryMock, getLocalitiesDictionaryMock } from './Dictionary.mock';
import { BenefitDictionary, DictionaryResponse, LocalitiesDictionary } from './Dictionary.model';

export const getBenefitDictionary = ({ benefit }: BenefitDictionary) =>
  useAPImocks
    ? getBenefitDictionaryMock()
    : axios
        .get<
          BenefitDictionary,
          AxiosResponse<DictionaryResponse>
        >(`${BASE_URL}/benefits?page=1&limit=10&format=json&name=${benefit}&api-version=1.3`)
        .then(({ data }) => data);

export const getLocalitiesDictionary = ({ localities }: LocalitiesDictionary) =>
  useAPImocks
    ? getLocalitiesDictionaryMock()
    : axios
        .get<
          LocalitiesDictionary,
          AxiosResponse<DictionaryResponse>
        >(`${BASE_URL}/localities?page=1&limit=10&format=json&name=${localities}&api-version=1.3`)
        .then(({ data }) => data);

export const provinces = [
  { value: '01', label: 'dolnośląskie' },
  { value: '02', label: 'kujawsko-pomorskie' },
  { value: '03', label: 'lubelskie' },
  { value: '04', label: 'lubuskie' },
  { value: '05', label: 'łódzkie' },
  { value: '06', label: 'małopolskie' },
  { value: '07', label: 'mazowieckie' },
  { value: '08', label: 'opolskie' },
  { value: '09', label: 'podkarpackie' },
  { value: '10', label: 'podlaskie' },
  { value: '11', label: 'pomorskie' },
  { value: '12', label: 'śląskie' },
  { value: '13', label: 'świętokrzyskie' },
  { value: '14', label: 'warmińsko-mazurskie' },
  { value: '15', label: 'wielkopolskie' },
  { value: '16', label: 'zachodniopomorskie' }
];
