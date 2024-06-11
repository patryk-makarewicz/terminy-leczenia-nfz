'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { provinces } from '@/api/DictionaryAPI/Dictionary.api';
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
import { useGetQueue } from '@/hooks/useGetQueue';

type Suggestions = {
  value: string;
  label: string;
}[];
export const SearchTerm = () => {
  const [suggestions, setSuggestions] = useState<Suggestions>([]);
  const [suggestionsLocalities, setSuggestionsLocalities] = useState<Suggestions>([]);
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
  const { data: QueueList, isLoading, isError } = useGetQueue(searchParams);
  const form = useForm<SearchParams>({
    defaultValues: {
      urgent: '1',
      benefitForChildren: false
    }
  });
  const onHandleSearch = (data: SearchParams) => {
    setSearchParams(data);
  };

  useEffect(() => {
    setSearchParams(null);
  }, [isLoading]);

  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value.benefit && value.benefit.length >= 3) {
        // Fetch suggestions from the backend
        fetch(
          `https://api.nfz.gov.pl/app-itl-api/benefits?page=1&limit=10&format=json&name=${value.benefit}&api-version=1.3`
        )
          .then((response) => response.json())
          .then((data) => {
            const mappedSuggestions = data.data.map((item: string) => ({
              value: item,
              label: item
            }));
            setSuggestions(mappedSuggestions);
          })
          .catch((error) => console.error('Error fetching suggestions:', error));
      } else {
        setSuggestions([]);
      }
    });

    return () => subscription.unsubscribe();
  }, [form.watch('benefit')]);

  useEffect(() => {
    const subscriptionCity = form.watch((value) => {
      if (value.localities && value.localities.length >= 3) {
        fetch(
          `https://api.nfz.gov.pl/app-itl-api/localities?page=1&limit=10&format=json&name=${value.localities}&province=11&api-version=1.3`
        )
          .then((response) => response.json())
          .then((data) => {
            const mappedSuggestions = data.data.map((item: string) => ({
              value: item,
              label: item
            }));
            setSuggestionsLocalities(mappedSuggestions);
          })
          .catch((error) => console.error('Error fetching suggestions:', error));
      } else {
        setSuggestionsLocalities([]);
      }
    });

    return () => subscriptionCity.unsubscribe();
  }, [form.watch('localities')]);

  const onSubmit: SubmitHandler<SearchParams> = (data) => {
    console.log(data);

    onHandleSearch(data);
  };

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
                {suggestions.length > 0 &&
                  suggestions.map((suggestion) => (
                    <li key={suggestion.value} onClick={() => form.setValue('benefit', suggestion.value)}>
                      {suggestion.value}
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
                {suggestionsLocalities.length > 0 &&
                  suggestionsLocalities.map((suggestion) => (
                    <li key={suggestion.value} onClick={() => form.setValue('localities', suggestion.value)}>
                      {suggestion.value}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>

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
