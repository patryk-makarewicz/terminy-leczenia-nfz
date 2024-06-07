'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { provinces } from '@/api/DictionaryAPI/Dictionary.api';
import { QueueData } from '@/api/QueueAPI/Queue.model';
import { SearchParams } from '@/api/QueueAPI/Queue.model';
import { Combobox } from '@/components';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/';
import { Button, Label, RadioGroup, RadioGroupItem, Checkbox } from '@/components/ui/';
import { useGetQueue } from '@/hooks/useGetQueue';
import { cn } from '@/lib/utils';

export const SearchTerm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionsLocalities, setSuggestionsLocalities] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
  const { data: QueueList, isLoading, isError } = useGetQueue(searchParams);
  const onHandleSearch = (data: SearchParams) => {
    setSearchParams(data);
  };

  console.log(QueueList);

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
  const queryCity = watch('localities');
  const province = watch('province');

  console.log(province);

  useEffect(() => {
    const subscription = watch((value) => {
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
  }, [query]);

  useEffect(() => {
    const subscriptionCity = watch((value) => {
      if (value.queryCity && value.queryCity.length >= 3) {
        // Fetch suggestions from the backend

        fetch(
          `https://api.nfz.gov.pl/app-itl-api/localities?page=1&limit=10&format=json&name=${value.queryCity}&province=11&api-version=1.3`
        )
          .then((response) => response.json())
          .then((data) => setSuggestionsLocalities(data.data))
          .catch((error) => console.error('Error fetching suggestions:', error));
      } else {
        setSuggestionsLocalities([]);
      }
    });

    return () => subscriptionCity.unsubscribe();
  }, [queryCity]);

  const onSubmit: SubmitHandler<SearchParams> = (data) => {
    onHandleSearch(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Label htmlFor="urgent1">przypadek:</Label>
            <RadioGroup defaultValue="1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="urgent1" {...register('urgent')} />
                <Label htmlFor="urgent1">stabilny</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2" id="urgent1" {...register('urgent')} />
                <Label htmlFor="urgent2">pilny</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="benefitForChildren" {...register('benefitForChildren')} />
            <label
              htmlFor="benefitForChildren"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              świadczenia udzielane dzieciom
            </label>
          </div>
          <div>
            <Combobox register={register} options={provinces} placeholder="Wybirze województwo" />
            {errors.province && <span>This field is required</span>}
          </div>
          <div>
            <label>Query usługa:</label>
            <input type="text" {...register('query')} />
          </div>
          <div>
            <label>benefit usługa:</label>
            <select {...register('benefit', { required: true })}>
              <option value="" disabled selected>
                Select benefit
              </option>
              {suggestions.length > 0 &&
                suggestions.map((suggestion, idx) => (
                  <option key={`${idx}-${suggestion}`} value={suggestion}>
                    {suggestion}
                  </option>
                ))}
            </select>
            {errors.benefit && <span>This field is required</span>}
          </div>
          <div>
            <label>Query city:</label>
            <input type="text" {...register('queryCity')} />
          </div>
          <div>
            <label>miasto:</label>
            <select {...register('localities', { required: true })}>
              <option value="" disabled selected>
                Select city
              </option>
              {suggestionsLocalities.length > 0 &&
                suggestionsLocalities.map((localities, idx) => (
                  <option key={`${idx}-${localities}`} value={localities}>
                    {localities}
                  </option>
                ))}
            </select>
            {errors.localities && <span>This field is required</span>}
          </div>
          <Button type="submit">Szukaj</Button>
        </div>
      </form>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}

      {QueueList?.data && QueueList.data.length === 0 && <p>Nie znaleziono wyników</p>}
      {QueueList?.data && QueueList.data.length > 0 && (
        <ul>
          {QueueList.data.map((item: QueueData) => (
            <li key={item.id}>
              {item.attributes.provider} - {item.attributes.dates.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
