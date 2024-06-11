type Meta = {
  context: string;
  count: number;
  title: string;
  page: number;
  url: string;
  limit: number;
  provider: string;
  'date-published': string;
  'date-modified': string;
  description: string;
  keywords: string;
  language: string;
  'content-type': string;
  'is-part-of': string;
  message: string | null;
};

type Links = {
  first: string;
  prev: string | null;
  self: string;
  next: string | null;
  last: string;
};

type Statistics = {
  'provider-data': {
    awaiting: number;
    removed: number;
    'average-period': number;
    update: string;
  };
  'computed-data': any;
};

type Dates = {
  applicable: boolean;
  date: string;
  'date-situation-as-at': string;
};

type Attributes = {
  case: number;
  benefit: string;
  'many-places': string;
  provider: string;
  'provider-code': string;
  'regon-provider': string;
  'nip-provider': string;
  'teryt-provider': string;
  place: string;
  address: string;
  locality: string;
  phone: string;
  'teryt-place': string;
  'registry-number': string;
  'id-resort-part-VII': string;
  'id-resort-part-VIII': string;
  'benefits-for-children': string | null;
  'covid-19': string;
  toilet: string;
  ramp: string;
  'car-park': string;
  elevator: string;
  latitude: number | null;
  longitude: number | null;
  statistics: Statistics;
  dates: Dates;
  'benefits-provided': any;
};

export type QueueData = {
  type: string;
  id: string;
  attributes: Attributes;
};

export type QueueDTO = {
  meta: Meta;
  links: Links;
  data: QueueData[];
};

export type SearchParams = {
  urgent: string;
  province: string;
  benefitForChildren: boolean;
  benefit: string;
  localities: string;
};
