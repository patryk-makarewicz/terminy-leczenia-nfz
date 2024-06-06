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
  query: string;
  city: string;
};
export const SearchTerm = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
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
    watch,
    formState: { errors }
  } = useForm<SearchParams>({
    defaultValues: {
      urgent: '1'
    }
  });

  const query = watch('query');
  const city = watch('city');

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
      if (value.query && value.query.length >= 3) {
        // Fetch suggestions from the backend
        fetch(
          `https://api.nfz.gov.pl/app-itl-api/benefits?page=1&limit=10&format=json&name=${value.query}&api-version=1.3`
        )
          .then((response) => response.json())
          .then((data) => setSuggestions(data.data))
          .catch((error) => console.error('Error fetching suggestions:', error));
      } else {
        setSuggestions([]);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, query]);

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
            <input type="radio" value={1} {...register('urgent')} id="urgent1" />
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
          <label>Query:</label>
          <input type="text" {...register('query')} />
        </div>
        <div>
          <label>provider:</label>
          <select {...register('provider', { required: true })}>
            <option value="" disabled selected>
              Select provider
            </option>
            {suggestions.length > 0 &&
              suggestions.map((suggestion, idx) => (
                <option key={`${idx}-${suggestion}`} value={suggestion}>
                  {suggestion}
                </option>
              ))}
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
