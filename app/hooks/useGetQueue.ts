import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { QueueAPI } from '@/api';
import { QueryKey } from '@/api/queryKeys';
import { SearchParams } from '@/components/SearchTerm';

export const useGetQueue = (query: SearchParams | null) => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [QueryKey.getQueue],
    queryFn: () => QueueAPI.getQueue(query!),
    refetchOnWindowFocus: false,
    enabled: !!query
  });

  return {
    data: useMemo(() => (data ? data : []), [data]),
    isLoading: isLoading || isFetching,
    isError
  };
};
