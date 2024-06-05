import axios from 'axios';

import { SearchParams } from '@/components/SearchTerm';

import { BASE_URL, useAPImocks } from '../config';

export const getQueue = ({ urgent, province, benefitForChildren, provider }: SearchParams) =>
  useAPImocks
    ? null
    : axios
        .get(
          `${BASE_URL}/queues?page=1&limit=10&format=json&case=${urgent}&province=${province}&benefitForChildren=${benefitForChildren}&provider=${provider}&locality=WARSZAWA&api-version=1.3`
        )
        .then(({ data }) => data);
