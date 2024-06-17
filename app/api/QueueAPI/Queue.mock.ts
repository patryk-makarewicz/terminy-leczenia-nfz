import { request } from '../request';
import { QueueDTO } from './Queue.model';

export const getQueueMock = () => {
  return request<QueueDTO>({
    meta: {
      context: 'https://api.nfz.gov.pl/app-itl-api/schemas/#queue',
      count: 18,
      title: 'queue',
      page: 1,
      url: 'https://api.nfz.gov.pl/app-itl-api/schema/queue',
      limit: 10,
      provider: 'Narodowy Fundusz Zdrowia',
      'date-published': '2019-02-26T10:49:23+01:00',
      'date-modified': '2024-06-06T12:17:52+02:00',
      description:
        'Zasób zwraca pierwszy dostępny termin leczenia dla każdego świadczenia medycznego zgodnie z wybranymi parametrami wyszukiwania. Odpowiedź zawiera szczegółowe informacje  oraz listę świadczeń medycznych we właściwej kolejności wyświetlania (według pierwszej dostępnego terminu leczenia)',
      keywords:
        'kolejki,terminy leczenia,Narodowy Fundusz Zdrowia,termin,lekarz,poradnia,przychodnia,leczenie,terminy,wolne terminy',
      language: 'PL',
      'content-type': 'application/json; charset=utf-8',
      'is-part-of': 'Terminy leczenia',
      message: null
    },
    links: {
      first:
        '/app-itl-api/queues?page=1&limit=10&format=json&case=1&province=11&benefit=PORADNIA%20ALERGOLOGICZNA&locality=GDA%C5%83SK',
      prev: null,
      self: '/app-itl-api/queues?page=1&limit=10&format=json&case=1&province=11&benefit=PORADNIA%20ALERGOLOGICZNA&locality=GDA%C5%83SK',
      next: '/app-itl-api/queues?page=2&limit=10&format=json&case=1&province=11&benefit=PORADNIA%20ALERGOLOGICZNA&locality=GDA%C5%83SK',
      last: '/app-itl-api/queues?page=2&limit=10&format=json&case=1&province=11&benefit=PORADNIA%20ALERGOLOGICZNA&locality=GDA%C5%83SK'
    },
    data: [
      {
        type: 'queue',
        id: '1a31df3e-0dac-7c92-e063-b4200a0ac58e',
        attributes: {
          case: 1,
          benefit: 'PORADNIA ALERGOLOGICZNA',
          'many-places': 'N',
          provider: 'PRZYCHODNIA BALTIMED',
          'provider-code': '000109',
          'regon-provider': '190049875',
          'nip-provider': '5840300511',
          'teryt-provider': '2261011',
          place: 'PORADNIA ALERGOLOGICZNA',
          address: 'UL. ROZRAŻEWSKIEGO 1/1',
          locality: 'GDAŃSK',
          phone: '+48 58 306 91 53',
          'teryt-place': '2261011',
          'registry-number': '000000011304-W-22',
          'id-resort-part-VII': '011',
          'id-resort-part-VIII': '1010',
          'benefits-for-children': 'Y',
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'N',
          latitude: null,
          longitude: null,
          statistics: {
            'provider-data': {
              awaiting: 231,
              removed: 62,
              'average-period': 68,
              update: '2024-04'
            },
            'computed-data': null
          },
          dates: {
            applicable: true,
            date: '2024-10-16',
            'date-situation-as-at': '2024-06-05'
          },
          'benefits-provided': null
        }
      },
      {
        type: 'queue',
        id: '1a31df3e-6a36-7c92-e063-b4200a0ac58e',
        attributes: {
          case: 1,
          benefit: 'PORADNIA ALERGOLOGICZNA',
          'many-places': 'Y',
          provider: 'COPERNICUS PODMIOT LECZNICZY SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          'provider-code': '000085',
          'regon-provider': '221964385',
          'nip-provider': '5833162278',
          'teryt-provider': '2261011',
          place: 'PORADNIA ALERGOLOGICZNA',
          address: 'UL. POWSTAŃCÓW WARSZAWSKICH 1-2',
          locality: 'GDAŃSK',
          phone: '+48 58 772 39 50',
          'teryt-place': '2261011',
          'registry-number': '000000011393-W-22',
          'id-resort-part-VII': '116',
          'id-resort-part-VIII': '1010',
          'benefits-for-children': 'Y',
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: null,
          longitude: null,
          statistics: {
            'provider-data': {
              awaiting: 204,
              removed: 22,
              'average-period': 97,
              update: '2024-05'
            },
            'computed-data': null
          },
          dates: {
            applicable: true,
            date: '2024-10-25',
            'date-situation-as-at': '2024-06-05'
          },
          'benefits-provided': null
        }
      },
      {
        type: 'queue',
        id: '1a31df3e-5270-7c92-e063-b4200a0ac58e',
        attributes: {
          case: 1,
          benefit: 'PORADNIA ALERGOLOGICZNA',
          'many-places': 'N',
          provider: 'NIEPUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ "PRZYCHODNIA MORENA"',
          'provider-code': '000299',
          'regon-provider': '191863543',
          'nip-provider': '9570751860',
          'teryt-provider': '2261011',
          place: 'PORADNIA ALERGOLOGICZNA',
          address: 'UL. JAŚKOWA DOLINA 105',
          locality: 'GDAŃSK',
          phone: '+48 58 340 72 55',
          'teryt-place': '2261011',
          'registry-number': '000000011661-W-22',
          'id-resort-part-VII': '005',
          'id-resort-part-VIII': '1010',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: 54.3581567,
          longitude: 18.5860511,
          statistics: {
            'provider-data': {
              awaiting: 280,
              removed: 133,
              'average-period': 41,
              update: '2024-04'
            },
            'computed-data': null
          },
          dates: {
            applicable: true,
            date: '2024-11-04',
            'date-situation-as-at': '2024-06-05'
          },
          'benefits-provided': null
        }
      },
      {
        type: 'queue',
        id: '1a31df3e-4e96-7c92-e063-b4200a0ac58e',
        attributes: {
          case: 1,
          benefit: 'PORADNIA ALERGOLOGICZNA',
          'many-places': 'N',
          provider: 'MEDCARE- SPECJALISTYCZNA OPIEKA MEDYCZNA NIEPUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ',
          'provider-code': '001218',
          'regon-provider': '192502729',
          'nip-provider': '9570796035',
          'teryt-provider': '2261011',
          place: 'PORADNIA ALERGOLOGICZNA',
          address: 'UL. LUDWIKA WARYŃSKIEGO 45B/2',
          locality: 'GDAŃSK',
          phone: '+48 58 340 43 50',
          'teryt-place': '2261011',
          'registry-number': '000000011912-W-22',
          'id-resort-part-VII': '002',
          'id-resort-part-VIII': '1010',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'N',
          elevator: 'N',
          latitude: null,
          longitude: null,
          statistics: {
            'provider-data': {
              awaiting: 60,
              removed: 17,
              'average-period': 60,
              update: '2024-05'
            },
            'computed-data': null
          },
          dates: {
            applicable: true,
            date: '2024-11-11',
            'date-situation-as-at': '2024-06-05'
          },
          'benefits-provided': null
        }
      },
      {
        type: 'queue',
        id: '1a31df3b-91a0-7c92-e063-b4200a0ac58e',
        attributes: {
          case: 1,
          benefit: 'PORADNIA ALERGOLOGICZNA',
          'many-places': 'N',
          provider:
            'NIEPUBLICZNY ZAKŁAD OPIEKI  ZDROWOTNEJ ZDROWIE MARTA  GRONKIEWICZ I MICHAŁ GRONKIEWICZ SPÓŁKA JAWNA',
          'provider-code': '001334',
          'regon-provider': '192999457',
          'nip-provider': '6040000156',
          'teryt-provider': '2204011',
          place: 'PORADNIA ALERGOLOGICZNA',
          address: 'UL. CYPRYSOWA 2/2',
          locality: 'PRUSZCZ GDAŃSKI',
          phone: '+48 58 682 22 85; +48 58 351 46 20',
          'teryt-place': '2204011',
          'registry-number': '000000011804-W-22',
          'id-resort-part-VII': '016',
          'id-resort-part-VIII': '1010',
          'benefits-for-children': 'Y',
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'N',
          latitude: null,
          longitude: null,
          statistics: {
            'provider-data': {
              awaiting: 544,
              removed: 31,
              'average-period': 86,
              update: '2024-05'
            },
            'computed-data': null
          },
          dates: {
            applicable: true,
            date: '2024-11-19',
            'date-situation-as-at': '2024-06-04'
          },
          'benefits-provided': null
        }
      },
      {
        type: 'queue',
        id: '1a31df3f-088e-7c92-e063-b4200a0ac58e',
        attributes: {
          case: 1,
          benefit: 'PORADNIA ALERGOLOGICZNA DLA DZIECI',
          'many-places': 'N',
          provider: 'PRZYCHODNIA "CLINICA VITAE"',
          'provider-code': '001589',
          'regon-provider': '22087963100028',
          'nip-provider': '9571027557',
          'teryt-provider': '2261011',
          place: 'PORADNIA ALERGOLOGICZNA DLA DZIECI',
          address: 'UL. JASKÓŁCZA 7/15',
          locality: 'GDAŃSK',
          phone: '+48 510 064 934',
          'teryt-place': '2261011',
          'registry-number': '000000024221-W-22',
          'id-resort-part-VII': '028',
          'id-resort-part-VIII': '1011',
          'benefits-for-children': 'Y',
          'covid-19': 'N',
          toilet: 'N',
          ramp: 'N',
          'car-park': 'N',
          elevator: 'N',
          latitude: null,
          longitude: null,
          statistics: {
            'provider-data': {
              awaiting: 144,
              removed: 29,
              'average-period': 95,
              update: '2024-05'
            },
            'computed-data': null
          },
          dates: {
            applicable: true,
            date: '2024-11-19',
            'date-situation-as-at': '2024-06-05'
          },
          'benefits-provided': null
        }
      },
      {
        type: 'queue',
        id: '1a31df3e-3810-7c92-e063-b4200a0ac58e',
        attributes: {
          case: 1,
          benefit: 'PORADNIA ALERGOLOGICZNA',
          'many-places': 'Y',
          provider: 'CENTRUM MEDYCZNE POLMED',
          'provider-code': '000865',
          'regon-provider': '19211078000025',
          'nip-provider': '5921963724',
          'teryt-provider': '2213031',
          place: 'PORADNIA ALERGOLOGICZNA',
          address: 'UL. STARTOWA 1',
          locality: 'GDAŃSK',
          phone: '+48 58 769 37 60',
          'teryt-place': '2261011',
          'registry-number': '000000011440-W-22',
          'id-resort-part-VII': '074',
          'id-resort-part-VIII': '1010',
          'benefits-for-children': 'Y',
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: 54.3932615,
          longitude: 18.5982181,
          statistics: {
            'provider-data': {
              awaiting: 161,
              removed: 32,
              'average-period': 72,
              update: '2024-04'
            },
            'computed-data': null
          },
          dates: {
            applicable: true,
            date: '2024-11-22',
            'date-situation-as-at': '2024-06-05'
          },
          'benefits-provided': null
        }
      },
      {
        type: 'queue',
        id: '1a31df3e-d6e2-7c92-e063-b4200a0ac58e',
        attributes: {
          case: 1,
          benefit: 'PORADNIA ALERGOLOGICZNA',
          'many-places': 'Y',
          provider: 'COPERNICUS PODMIOT LECZNICZY SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          'provider-code': '000085',
          'regon-provider': '221964385',
          'nip-provider': '5833162278',
          'teryt-provider': '2261011',
          place: 'PORADNIA ALERGOLOGICZNA',
          address: 'AL. JANA PAWŁA II 50',
          locality: 'GDAŃSK',
          phone: '+48 58 772 39 50',
          'teryt-place': '2261011',
          'registry-number': '000000011393-W-22',
          'id-resort-part-VII': '184',
          'id-resort-part-VIII': '1010',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: 54.403103,
          longitude: 18.612337,
          statistics: {
            'provider-data': {
              awaiting: 141,
              removed: 19,
              'average-period': 157,
              update: '2024-04'
            },
            'computed-data': null
          },
          dates: {
            applicable: true,
            date: '2024-11-27',
            'date-situation-as-at': '2024-06-05'
          },
          'benefits-provided': null
        }
      },
      {
        type: 'queue',
        id: '1a31df3f-088c-7c92-e063-b4200a0ac58e',
        attributes: {
          case: 1,
          benefit: 'PORADNIA ALERGOLOGICZNA',
          'many-places': 'Y',
          provider: 'PRZYCHODNIA "CLINICA VITAE"',
          'provider-code': '001589',
          'regon-provider': '22087963100028',
          'nip-provider': '9571027557',
          'teryt-provider': '2261011',
          place: 'PORADNIA ALERGOLOGICZNA',
          address: 'UL. KONRADA GUDERSKIEGO 72/3',
          locality: 'GDAŃSK',
          phone: '+48 510 064 934',
          'teryt-place': '2261011',
          'registry-number': '000000024221-W-22',
          'id-resort-part-VII': '010',
          'id-resort-part-VIII': '1010',
          'benefits-for-children': 'Y',
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'N',
          latitude: null,
          longitude: null,
          statistics: {
            'provider-data': {
              awaiting: 407,
              removed: 17,
              'average-period': 135,
              update: '2024-05'
            },
            'computed-data': null
          },
          dates: {
            applicable: true,
            date: '2024-12-04',
            'date-situation-as-at': '2024-06-05'
          },
          'benefits-provided': null
        }
      },
      {
        type: 'queue',
        id: '1a31df3b-8cf0-7c92-e063-b4200a0ac58e',
        attributes: {
          case: 1,
          benefit: 'PORADNIA ALERGOLOGICZNA',
          'many-places': 'Y',
          provider: 'NADMORSKIE CENTRUM MEDYCZNE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          'provider-code': '000949',
          'regon-provider': '192616396',
          'nip-provider': '5842444154',
          'teryt-provider': '2261011',
          place: 'PORADNIA ALERGOLOGICZNA',
          address: 'UL. KOŁOBRZESKA 46',
          locality: 'GDAŃSK',
          phone: '+48 58 763 96 00',
          'teryt-place': '2261011',
          'registry-number': '000000011917-W-22',
          'id-resort-part-VII': '363',
          'id-resort-part-VIII': '1010',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: 54.405096,
          longitude: 18.599711,
          statistics: {
            'provider-data': {
              awaiting: 231,
              removed: 23,
              'average-period': 137,
              update: '2024-05'
            },
            'computed-data': null
          },
          dates: {
            applicable: true,
            date: '2024-12-13',
            'date-situation-as-at': '2024-06-05'
          },
          'benefits-provided': null
        }
      }
    ]
  });
};
