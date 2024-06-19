'use client';

import { QueueDTO, QueueData } from '@/api/QueueAPI/Queue.model';
import { useTranslation } from '@/i18n/client';

import { ResultsItem } from './ResultsItem';

type ResultsProps = {
  QueueList: QueueDTO | undefined;
  isQueueListError: boolean;
};

export const Results = ({ QueueList, isQueueListError }: ResultsProps) => {
  const { t } = useTranslation();

  if (QueueList?.data === undefined) {
    return;
  }

  if (isQueueListError) {
    return <p>Error</p>;
  }

  if (QueueList.data.length === 0) {
    return <p>{t('form.noResults')}</p>;
  }

  return (
    <div className="mt-12">
      <ul className="flex flex-col gap-2">
        {QueueList.data.map((item: QueueData) => (
          <ResultsItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
