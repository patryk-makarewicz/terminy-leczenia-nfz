'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { provinces } from '@/api/DictionaryAPI/Dictionary.api';
import { Suggestions } from '@/api/DictionaryAPI/Dictionary.model';
import { QueueData } from '@/api/QueueAPI/Queue.model';
import { SearchParams } from '@/api/QueueAPI/Queue.model';
import {
  Button,
  RadioGroup,
  RadioGroupItem,
  Checkbox,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input
} from '@/components/ui/';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useDebounce } from '@/hooks/useDebounce';
import { useGetBenefitDictionary } from '@/hooks/useGetBenefitDictionary';
import { useGetLocalitiesDictionary } from '@/hooks/useGetLocalitiesDictionary';
import { useGetQueue } from '@/hooks/useGetQueue';

export const SearchTerm = () => {
  const form = useForm<SearchParams>({
    defaultValues: {
      urgent: '1',
      benefitForChildren: false
    }
  });
  const watchBenefit = useDebounce(form.watch('benefit'), 300);
  const watchLocalities = useDebounce(form.watch('localities'), 300);

  const [benefitDictionarySuggestions, setBenefitDictionarySuggestions] = useState<Suggestions>([]);
  const [localitiesDictionarySuggestions, setLocalitiesDictionarySuggestions] = useState<Suggestions>([]);
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
  const { data: QueueList, isLoading: isQueueListLoading, isError: isQueueListError } = useGetQueue(searchParams);
  const {
    data: BenefitDictionary,
    isLoading: isBenefitDictionaryLoading,
    isError: isBenefitDictionaryError,
    refetch: refetchBenefitDictionary
  } = useGetBenefitDictionary(watchBenefit);
  const {
    data: LocalitesDictionary,
    isLoading: isLocalitesDictionaryLoading,
    isError: isLocalitesDictionaryError,
    refetch: refetchLocalitiesDictionary
  } = useGetLocalitiesDictionary(watchLocalities);

  const onHandleSearch = (data: SearchParams) => {
    setSearchParams(data);
  };

  const onSubmit: SubmitHandler<SearchParams> = (data) => {
    onHandleSearch(data);
  };

  useEffect(() => {
    setSearchParams(null);
  }, [isQueueListLoading]);

  useEffect(() => {
    if (watchBenefit?.length >= 3) {
      refetchBenefitDictionary();
    } else if (watchBenefit?.length <= 2) {
      setBenefitDictionarySuggestions([]);
    }
  }, [watchBenefit]);

  useEffect(() => {
    if (watchLocalities?.length >= 3) {
      refetchLocalitiesDictionary();
    } else if (watchLocalities?.length <= 2) {
      setLocalitiesDictionarySuggestions([]);
    }
  }, [watchLocalities]);

  useEffect(() => {
    setBenefitDictionarySuggestions(BenefitDictionary);
  }, [isBenefitDictionaryLoading]);

  useEffect(() => {
    setLocalitiesDictionarySuggestions(LocalitesDictionary);
  }, [isLocalitesDictionaryLoading]);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="urgent"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Przypadek</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue="1" className="flex flex-col space-y-1">
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="1" />
                      </FormControl>
                      <FormLabel className="font-normal">stabilny</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="2" />
                      </FormControl>
                      <FormLabel className="font-normal">pilny</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="benefitForChildren"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox checked={field.value} defaultValue={0} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>świadczenia udzielane dzieciom</FormLabel>
                  <FormDescription>Zaznacz jeśli szukasz świadczenia dla dziecka</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Województwo</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz województwo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {provinces.map((province) => (
                      <SelectItem value={province.value} key={province.value}>
                        {province.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Wybierz województwo.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormField
              control={form.control}
              name="benefit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usługa</FormLabel>
                  <FormControl>
                    <Input placeholder="Wybierz usługę" {...field} />
                  </FormControl>
                  <FormDescription>Wybierz usługę.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <ul>
                {benefitDictionarySuggestions.length > 0 &&
                  benefitDictionarySuggestions.map((benefitSuggestion) => (
                    <li
                      key={benefitSuggestion.value}
                      onClick={() => {
                        form.setValue('benefit', benefitSuggestion.value);
                        setBenefitDictionarySuggestions([]);
                      }}>
                      {benefitSuggestion.value}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div>
            <FormField
              control={form.control}
              name="localities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Miasto</FormLabel>
                  <FormControl>
                    <Input placeholder="Wybierz miasto" {...field} />
                  </FormControl>
                  <FormDescription>Wybierz miasto.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <ul>
                {localitiesDictionarySuggestions.length > 0 &&
                  localitiesDictionarySuggestions.map((localitiesSuggestion) => (
                    <li
                      key={localitiesSuggestion.value}
                      onClick={() => {
                        form.setValue('localities', localitiesSuggestion.value);
                        setLocalitiesDictionarySuggestions([]);
                      }}>
                      {localitiesSuggestion.value}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {isQueueListLoading && <p>Loading...</p>}
      {isQueueListError && <p>Error</p>}

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
