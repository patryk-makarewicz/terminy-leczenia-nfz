import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { DictionaryAPI } from '@/api';
import { LocalitiesDictionary } from '@/api/DictionaryAPI/Dictionary.model';
import { QueryKey } from '@/api/queryKeys';
import { transformResponseToForm } from '@/lib/utils';

export const useGetLocalitiesDictionary = (localities: LocalitiesDictionary | null) => {
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: [QueryKey.getLocalitiesDictionary],
    queryFn: () => DictionaryAPI.getLocalitiesDictionary(localities!),
    refetchOnWindowFocus: false,
    enabled: !!localities && localities.length >= 3
  });

  return {
    data: useMemo(() => (data ? transformResponseToForm(data) : []), [data]),
    isLoading: isLoading || isFetching,
    isError,
    refetch
  };
};
