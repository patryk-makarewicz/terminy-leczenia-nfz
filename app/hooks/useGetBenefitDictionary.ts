import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { DictionaryAPI } from '@/api';
import { BenefitDictionary } from '@/api/DictionaryAPI/Dictionary.model';
import { QueryKey } from '@/api/queryKeys';
import { transformResponseToForm } from '@/lib/utils';

export const useGetBenefitDictionary = (benefit: BenefitDictionary | null) => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [QueryKey.getBenefitDictionary],
    queryFn: () => DictionaryAPI.getBenefitDictionary(benefit!),
    refetchOnWindowFocus: false,
    enabled: !!benefit && benefit.length >= 3
  });

  return {
    data: useMemo(() => (data ? transformResponseToForm(data) : []), [data]),
    isLoading: isLoading || isFetching,
    isError
  };
};
