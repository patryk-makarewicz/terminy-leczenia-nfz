'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { provinces } from '@/api/DictionaryAPI/Dictionary.api';
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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useDebounce, useGetBenefitDictionary, useGetLocalitiesDictionary, useOutsideClick } from '@/hooks';
import { useTranslation } from '@/i18n/client';

type SearchProps = {
  onHandleSearch: (data: SearchParams) => void;
};

export const Search = ({ onHandleSearch }: SearchProps) => {
  const { t } = useTranslation();

  const form = useForm<SearchParams>({
    defaultValues: {
      urgent: '1',
      benefitForChildren: false,
      localities: '',
      province: '',
      benefit: ''
    }
  });
  const watchBenefit = useDebounce(form.watch('benefit'), 300);
  const watchLocalities = useDebounce(form.watch('localities'), 300);

  const benefitDictionaryRef = useRef<HTMLDivElement>(null);
  const localitiesDictionaryRef = useRef<HTMLDivElement>(null);

  const [isBenefitDictionarySuggestionsVisible, setIsBenefitDictionarySuggestionsVisible] = useState(false);
  const [isLocalitiesDictionarySuggestionsVisible, setIsLocalitiesDictionarySuggestionsVisible] = useState(false);
  const [isSuggestionClicked, setIsSuggestionClicked] = useState(false);

  const {
    data: benefitDictionary,
    isLoading: isBenefitDictionaryLoading,
    isError: isBenefitDictionaryError,
    refetch: refetchBenefitDictionary
  } = useGetBenefitDictionary(watchBenefit);
  const {
    data: localitesDictionary,
    isLoading: isLocalitesDictionaryLoading,
    isError: isLocalitesDictionaryError,
    refetch: refetchLocalitiesDictionary
  } = useGetLocalitiesDictionary(watchLocalities);

  useOutsideClick(benefitDictionaryRef, setIsBenefitDictionarySuggestionsVisible);
  useOutsideClick(localitiesDictionaryRef, setIsLocalitiesDictionarySuggestionsVisible);

  const onSubmit: SubmitHandler<SearchParams> = (data) => {
    onHandleSearch(data);
  };

  useEffect(() => {
    if (isSuggestionClicked) {
      setIsSuggestionClicked(false);
      return;
    }

    if (watchBenefit?.length >= 3) {
      refetchBenefitDictionary();
      setIsBenefitDictionarySuggestionsVisible(true);
    } else if (watchBenefit?.length <= 2) {
      setIsBenefitDictionarySuggestionsVisible(false);
    }
  }, [watchBenefit]);

  useEffect(() => {
    if (isSuggestionClicked) {
      setIsSuggestionClicked(false);
      return;
    }

    if (watchLocalities?.length >= 3) {
      refetchLocalitiesDictionary();
      setIsLocalitiesDictionarySuggestionsVisible(true);
    } else if (watchLocalities?.length <= 2) {
      setIsLocalitiesDictionarySuggestionsVisible(false);
    }
  }, [watchLocalities]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 flex w-full items-start gap-2">
          <FormField
            control={form.control}
            name="urgent"
            render={({ field }) => (
              <FormItem className="space-y-3 rounded-md border p-4 shadow">
                <FormLabel>{t('form.urgent.label')}</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue="1" className="flex flex-col space-y-1">
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="1" />
                      </FormControl>
                      <FormLabel className="font-normal">{t('form.urgent.stable')}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="2" />
                      </FormControl>
                      <FormLabel className="font-normal">{t('form.urgent.urgent')}</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormDescription>{t('form.urgent.info')}</FormDescription>
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
                  <FormLabel>{t('form.benefitForChildren.label')}</FormLabel>
                  <FormDescription>{t('form.benefitForChildren.info')}</FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="benefit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form.benefit.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form.benefit.select')} {...field} />
                </FormControl>
                <FormDescription>{t('form.benefit.info')}</FormDescription>
              </FormItem>
            )}
          />
          <div ref={benefitDictionaryRef}>
            <ul>
              {isBenefitDictionarySuggestionsVisible &&
                benefitDictionary.map((benefitSuggestion) => (
                  <li
                    key={benefitSuggestion.value}
                    onClick={() => {
                      form.setValue('benefit', benefitSuggestion.value);
                      setIsBenefitDictionarySuggestionsVisible(false);
                      setIsSuggestionClicked(true);
                    }}>
                    {benefitSuggestion.value}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mb-4 flex w-full gap-2">
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{t('form.province.label')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('form.province.select')} />
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
                <FormDescription>{t('form.province.info')}</FormDescription>
              </FormItem>
            )}
          />
          <div className="w-full">
            <FormField
              control={form.control}
              name="localities"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{t('form.city.label')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form.city.select')} {...field} />
                  </FormControl>
                  <FormDescription>{t('form.city.info')}</FormDescription>
                </FormItem>
              )}
            />
            <div ref={localitiesDictionaryRef}>
              <ul>
                {isLocalitiesDictionarySuggestionsVisible &&
                  localitesDictionary.map((localitiesSuggestion) => (
                    <li
                      key={localitiesSuggestion.value}
                      onClick={() => {
                        form.setValue('localities', localitiesSuggestion.value);
                        setIsLocalitiesDictionarySuggestionsVisible(false);
                        setIsSuggestionClicked(true);
                      }}>
                      {localitiesSuggestion.value}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <Button type="submit">{t('form.submit')}</Button>
      </form>
    </Form>
  );
};
