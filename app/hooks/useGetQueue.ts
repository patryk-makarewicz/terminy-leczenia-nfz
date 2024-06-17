import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { QueueAPI } from '@/api';
import { SearchParams } from '@/api/QueueAPI/Queue.model';
import { QueryKey } from '@/api/queryKeys';

export const useGetQueue = (query: SearchParams | null) => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [QueryKey.getQueue],
    queryFn: () => QueueAPI.getQueue(query!),
    refetchOnWindowFocus: false,
    enabled: !!query
  });

  return {
    data: data ?? undefined,
    isLoading: isLoading || isFetching,
    isError
  };
};
