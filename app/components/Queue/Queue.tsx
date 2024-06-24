'use client';

import { useEffect, useState } from 'react';

import { SearchParams } from '@/api/QueueAPI/Queue.model';
import { Lng } from '@/api/global.model';
import { Results, Search } from '@/components';
import { useGetQueue } from '@/hooks';
import { useTranslation } from '@/i18n/client';

import { Button } from '../ui';

export const Queue = ({ lng }: { lng: Lng }) => {
  const { t } = useTranslation(lng);

  const [searchParams, setSearchParams] = useState<SearchParams>({
    page: 1,
    urgent: '1',
    benefitForChildren: false,
    localities: '',
    province: '',
    benefit: ''
  });

  const {
    data: QueueList,
    isLoading: isQueueListLoading,
    isError: isQueueListError,
    refetch: refetchQueueList
  } = useGetQueue(searchParams);

  const onHandleSearch = (data: SearchParams) => {
    setSearchParams(data);
  };

  const onHandleNextPage = () => {
    if (QueueList?.links.next !== null) {
      setSearchParams({ ...searchParams, page: searchParams.page + 1 });
    }
  };

  const onHandlePrevPage = () => {
    if (QueueList?.links.prev !== null) {
      setSearchParams({ ...searchParams, page: searchParams.page - 1 });
    }
  };

  useEffect(() => {
    if (searchParams.benefit.length >= 3) {
      refetchQueueList();
    }
  }, [searchParams]);

  return (
    <>
      <Search lng={lng} onHandleSearch={onHandleSearch} isQueueListLoading={isQueueListLoading} />
      <Results
        lng={lng}
        QueueList={QueueList}
        isQueueListLoading={isQueueListLoading}
        isQueueListError={isQueueListError}
      />
      <div className="mb-12">
        {(QueueList?.links.prev || QueueList?.links.next) && (
          <div className="flex justify-center gap-2">
            <Button disabled={QueueList?.links.prev === null} onClick={onHandlePrevPage}>
              {t('actions.prev')}
            </Button>
            <Button disabled={QueueList?.links.next === null} onClick={onHandleNextPage}>
              {t('actions.next')}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
