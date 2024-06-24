'use client';

import { QueueDTO, QueueData } from '@/api/QueueAPI/Queue.model';
import { Lng } from '@/api/global.model';
import { Spinner } from '@/components/Spinner';
import { useTranslation } from '@/i18n/client';

import { ResultsItem } from './ResultsItem';

type ResultsProps = {
  lng: Lng;
  QueueList: QueueDTO | undefined;
  isQueueListLoading: boolean;
  isQueueListError: boolean;
};

export const Results = ({ lng, QueueList, isQueueListLoading, isQueueListError }: ResultsProps) => {
  const { t } = useTranslation(lng);

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

  if (isQueueListLoading) {
    return (
      <div className="mb-12 h-[50px]">
        <Spinner />
      </div>
    );
  }

  return (
    <ul className="mb-12 flex flex-col gap-2">
      {QueueList.data.map((item: QueueData) => (
        <ResultsItem lng={lng} key={item.id} item={item} />
      ))}
    </ul>
  );
};
