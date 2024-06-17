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

  return (
    <div>
      {isQueueListLoading && <p>Loading...</p>}
      {isQueueListError && <p>Error</p>}

      {QueueList?.data && QueueList.data.length === 0 && <p>{t('form.noResults')}</p>}
      {QueueList?.data && QueueList.data.length > 0 && (
        <ul>
          {QueueList.data.map((item: QueueData) => (
            <li key={item.id}>
              {item.attributes.provider} - {item.attributes.dates.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
