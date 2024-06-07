import axios, { AxiosResponse } from 'axios';

import { SearchParams } from '@/api/QueueAPI/Queue.model';

import { BASE_URL, useAPImocks } from '../config';
import { getQueueMock } from './Queue.mock';
import { QueueDTO } from './Queue.model';

export const getQueue = ({ urgent, province, benefitForChildren, benefit, localities }: SearchParams) =>
  useAPImocks
    ? getQueueMock()
    : axios
        .get<
          SearchParams,
          AxiosResponse<QueueDTO>
        >(`${BASE_URL}/queues?page=1&limit=10&format=json&case=${urgent}&province=${province}&benefitForChildren=${benefitForChildren}&benefit=${benefit}&locality=${localities}&api-version=1.3`)
        .then(({ data }) => data);
