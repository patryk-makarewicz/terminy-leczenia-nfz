'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { useGetQueue } from '@/hooks/useGetQueue';

export type SearchParams = {
  urgent: string;
  province: string;
  benefitForChildren: boolean;
  provider: string;
};
export const SearchTerm = () => {
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
  const { data, isLoading, isError } = useGetQueue(searchParams);
  const onHandleSearch = (data: SearchParams) => {
    setSearchParams(data);
  };

  console.log(data);

  useEffect(() => {
    setSearchParams(null);
  }, [isLoading]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SearchParams>();

  const onSubmit: SubmitHandler<SearchParams> = (data) => {
    console.log(data);
    onHandleSearch(data);
  };

  const provinces = [
    { value: '01', label: 'dolnośląskie' },
    { value: '02', label: 'kujawsko-pomorskie' },
    { value: '03', label: 'lubelskie' },
    { value: '04', label: 'lubuskie' },
    { value: '05', label: 'łódzkie' },
    { value: '06', label: 'małopolskie' },
    { value: '07', label: 'mazowieckie' },
    { value: '08', label: 'opolskie' },
    { value: '09', label: 'podkarpackie' },
    { value: '10', label: 'podlaskie' },
    { value: '11', label: 'pomorskie' },
    { value: '12', label: 'śląskie' },
    { value: '13', label: 'świętokrzyskie' },
    { value: '14', label: 'warmińsko-mazurskie' },
    { value: '15', label: 'wielkopolskie' },
    { value: '16', label: 'zachodniopomorskie' }
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>przypadek:</label>
          <div>
            <input type="radio" value={1} defaultChecked {...register('urgent')} id="urgent1" />
            <label htmlFor="urgent1">stabilny</label>
          </div>
          <div>
            <input type="radio" value={2} {...register('urgent')} id="urgent2" />
            <label htmlFor="urgent2">pilny</label>
          </div>
        </div>
        <div>
          <label>benefitForChildren:</label>
          <input type="checkbox" {...register('benefitForChildren')} id="benefitForChildren" />
        </div>
        <div>
          <label>województwo:</label>
          <select {...register('province', { required: true })}>
            {provinces.map((province) => (
              <option key={province.value} value={province.value}>
                {province.label}
              </option>
            ))}
          </select>
          {errors.province && <span>This field is required</span>}
        </div>
        <div>
          <label>provider:</label>
          <select {...register('provider', { required: true })}>
            <option value="PORADNIA STOMATOLOGICZNA">PORADNIA STOMATOLOGICZNA</option>
          </select>
          {errors.provider && <span>This field is required</span>}
        </div>
        <Button type="submit">Szukaj</Button>
      </form>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
    </div>
  );
};
