'use client';

import { QueueDTO, QueueData } from '@/api/QueueAPI/Queue.model';
import { useTranslation } from '@/i18n/client';

type ResultsProps = {
  QueueList: QueueDTO | undefined;
  isQueueListLoading: boolean;
  isQueueListError: boolean;
};

export const Results = ({ QueueList, isQueueListLoading, isQueueListError }: ResultsProps) => {
  const { t } = useTranslation();

  console.log(QueueList);

  return (
    <div className="mt-12">
      {isQueueListLoading && <p>Loading...</p>}
      {isQueueListError && <p>Error</p>}

      {QueueList?.data && QueueList.data.length === 0 && <p>{t('form.noResults')}</p>}
      {QueueList?.data && QueueList.data.length > 0 && (
        <ul className="flex flex-col gap-2">
          {QueueList.data.map((item: QueueData) => (
            <li key={item.id} className="flex w-full flex-col rounded-md border p-4">
              <div>{item.attributes.benefit}</div>
              <div>{item.attributes.provider}</div>
              <div>
                {item.attributes.locality}, {item.attributes.address}
              </div>
              <div>{item.attributes.phone}</div>
              <div>
                pierwszy wolny termin: {item.attributes.dates.date}, stan na:{' '}
                {item.attributes.dates['date-situation-as-at']}
              </div>
              <div>parking: {item.attributes['car-park']}</div>
              <div>winda: {item.attributes.elevator}</div>
              <div>rampa: {item.attributes.ramp}</div>
              <div>toaleta: {item.attributes.toilet}</div>
              <div>
                statystkiki:
                <div>liczba oczekujcych: {item.attributes.statistics['provider-data'].awaiting}</div>
                <div>średni czas oczekiwania: {item.attributes.statistics['provider-data']['average-period']} dni</div>
                <div>aktualizacja dancyh: {item.attributes.statistics['provider-data'].update}</div>
              </div>
              <div>
                mapa:
                <div>latitude: {item.attributes.latitude}</div>
                <div>longitude: {item.attributes.longitude}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
