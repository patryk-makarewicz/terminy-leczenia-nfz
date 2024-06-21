'use client';

import { useEffect, useState } from 'react';

import { SearchParams } from '@/api/QueueAPI/Queue.model';
import { Results, Search } from '@/components';
import { useGetQueue } from '@/hooks';
import { useTranslation } from '@/i18n/client';

import { Button } from '../ui';

export const Queue = () => {
  const { t } = useTranslation();

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
      <Search onHandleSearch={onHandleSearch} isQueueListLoading={isQueueListLoading} />
      <Results QueueList={QueueList} isQueueListLoading={isQueueListLoading} isQueueListError={isQueueListError} />
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
