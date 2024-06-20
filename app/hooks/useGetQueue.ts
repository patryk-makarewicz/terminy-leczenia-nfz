import { useQuery } from '@tanstack/react-query';

import { QueueAPI } from '@/api';
import { SearchParams } from '@/api/QueueAPI/Queue.model';
import { QueryKey } from '@/api/queryKeys';

export const useGetQueue = (query: SearchParams) => {
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: [QueryKey.getQueue],
    queryFn: () => QueueAPI.getQueue(query!),
    refetchOnWindowFocus: false,
    enabled: query.benefit.length > 2
  });

  return {
    data: data ?? undefined,
    isLoading: isLoading || isFetching,
    isError,
    refetch
  };
};
