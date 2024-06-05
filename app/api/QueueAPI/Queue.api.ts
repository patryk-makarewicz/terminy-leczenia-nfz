import axios from 'axios';

import { BASE_URL, useAPImocks } from '../config';

export const getQueue = () =>
  useAPImocks
    ? null
    : axios
        .get(
          `${BASE_URL}/queues?page=1&limit=10&format=json&case=1&province=10&benefitForChildren=false&api-version=1.3`
        )
        .then(({ data }) => data);
