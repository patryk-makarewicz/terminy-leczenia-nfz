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

  const renderMessage = (message: string) => (
    <p className="mb-12 rounded-sm bg-primary px-10 py-5 text-center text-lg font-semibold text-white">{message}</p>
  );

  if (QueueList?.data === undefined) {
    return;
  }

  if (isQueueListError) {
    return renderMessage(t('form.error'));
  }

  if (QueueList.data.length === 0) {
    return renderMessage(t('form.noResults'));
  }

  return (
    <ul className="mb-12 flex flex-col gap-2">
      {QueueList.data.map((item: QueueData) => (
        <ResultsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
