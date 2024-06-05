'use client';

import { useGetQueue } from '@/hooks/useGetQueue';

export const Data = () => {
  const { data, isLoading, isError } = useGetQueue();

  console.log(data);

  return <div>Data</div>;
};
