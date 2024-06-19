'use client';

import { useEffect, useState } from 'react';

import { SearchParams } from '@/api/QueueAPI/Queue.model';
import { Results, Search } from '@/components';
import { useGetQueue } from '@/hooks';

import { Button } from '../ui';

export const Queue = () => {
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);

  const { data: QueueList, isLoading: isQueueListLoading, isError: isQueueListError } = useGetQueue(searchParams);

  const onHandleSearch = (data: SearchParams) => {
    setSearchParams(data);
  };

  useEffect(() => {
    setSearchParams(null);
  }, [isQueueListLoading]);

  return (
    <>
      <Search onHandleSearch={onHandleSearch} />
      <Results QueueList={QueueList} isQueueListLoading={isQueueListLoading} isQueueListError={isQueueListError} />
      <div className="mt-5">
        {QueueList?.links.prev && QueueList?.links.next && (
          <>
            TODO: pagination
            <Button disabled={QueueList?.links.prev === null}>Poprzednia</Button>
            <Button disabled={QueueList?.links.next === null}>Następna</Button>
          </>
        )}
      </div>
    </>
  );
};
