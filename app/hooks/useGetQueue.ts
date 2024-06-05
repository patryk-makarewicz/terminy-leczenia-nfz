import { useQuery } from '@tanstack/react-query';

import { QueueAPI } from '@/api';
import { QueryKey } from '@/api/queryKeys';

export const useGetQueue = () => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [QueryKey.getQueue],
    queryFn: QueueAPI.getQueue
  });

  return {
    data: data ?? undefined,
    isLoading: isLoading || isFetching,
    isError
  };
};
