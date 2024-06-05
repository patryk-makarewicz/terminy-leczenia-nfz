import { useQuery } from '@tanstack/react-query';

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
    data: data ?? undefined,
    isLoading: isLoading || isFetching,
    isError
  };
};
