'use client';

import {
  Hospital,
  Phone,
  MapPin,
  CircleDot,
  CalendarDays,
  Navigation,
  NavigationOff,
  UsersRound,
  Hourglass,
  RefreshCcw,
  SquareParking,
  Accessibility,
  ArrowUpDown,
  Slash
} from 'lucide-react';
import { Trans } from 'react-i18next';

import { QueueData } from '@/api/QueueAPI/Queue.model';
import { Lng } from '@/api/global.model';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from '@/components/ui';
import { useTranslation } from '@/i18n/client';

type ResultsItemProps = {
  lng: Lng;
  item: QueueData;
};

export const ResultsItem = ({ lng, item }: ResultsItemProps) => {
  const { t } = useTranslation(lng);

  const onOpenMap = (latitude: number | null, longitude: number | null) => {
    if (!latitude || !longitude) {
      return;
    }

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <li className="flex w-full flex-col gap-3 rounded-md border p-4">
      <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-2">
          <p className="flex items-center text-lg font-semibold">
            <CircleDot size={18} color={'hsl(var(--primary))'} className="mr-2" /> {item.attributes.benefit}
          </p>
          <p className="flex items-center">
            <Hospital size={18} color={'hsl(var(--primary))'} className="mr-2" /> {item.attributes.provider}
          </p>
          <p className="flex items-center">
            <MapPin size={18} color={'hsl(var(--primary))'} className="mr-2" />
            {item.attributes.locality}, {item.attributes.address}
          </p>
          <p className="flex items-center text-xl font-bold text-primary">
            <Phone size={18} color={'hsl(var(--primary))'} className="mr-2" /> {item.attributes.phone}
          </p>
        </div>
        <div className="flex min-w-[265px] flex-col items-end gap-3 md:items-start">
          <div className="flex items-center">
            <CalendarDays size={48} color={'hsl(var(--primary))'} className="mr-2" />
            <div>
              <p className="text-lg font-bold">{t('components.resultsItem.term')}: </p>
              <p className="text-3xl font-bold text-primary">{item.attributes.dates.date}</p>
              <p className="text-sm font-semibold">
                {t('components.resultsItem.situationAt', { date: item.attributes.dates['date-situation-as-at'] })}
              </p>
            </div>
          </div>
          <div>
            <Button
              variant="outline"
              disabled={item.attributes.latitude === null && item.attributes.longitude === null}
              className="flex items-center"
              onClick={() => onOpenMap(item.attributes.latitude, item.attributes.longitude)}>
              {item.attributes.latitude !== null && item.attributes.longitude !== null ? (
                <Navigation size={16} className="mr-2" />
              ) : (
                <NavigationOff size={16} className="mr-2" />
              )}
              {t('components.resultsItem.map')}
            </Button>
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{t('components.resultsItem.additional')}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col justify-between gap-5 md:flex-row">
              <div className="flex flex-col gap-3">
                <p className="flex items-center text-base">
                  <UsersRound className="mr-2" />
                  {t('components.resultsItem.awaiting')}:&nbsp;
                  <span className="font-bold text-primary">{item.attributes.statistics['provider-data'].awaiting}</span>
                </p>
                <p className="flex items-center text-base">
                  <Hourglass className="mr-2" />

                  <Trans
                    i18nKey="components.resultsItem.averagePeriod"
                    defaults="sredni czas oczekiwania: {{days}} dni"
                    values={{ days: item.attributes.statistics['provider-data']['average-period'] }}
                    components={{ bold: <span className="ml-1 font-bold text-primary" /> }}
                  />
                </p>
                <p className="flex items-center text-base">
                  <RefreshCcw className="mr-2" />
                  {t('components.resultsItem.update')}:&nbsp;
                  <span className="font-bold text-primary">{item.attributes.statistics['provider-data'].update}</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {item.attributes['car-park'] && (
                  <p className="flex items-center text-base">
                    <SquareParking color="hsl(var(--primary))" className="mr-2" />
                    {t('components.resultsItem.parking')}
                  </p>
                )}
                {item.attributes.elevator && (
                  <p className="flex items-center text-base">
                    <ArrowUpDown color="hsl(var(--primary))" className="mr-2" />
                    {t('components.resultsItem.elevator')}
                  </p>
                )}
                {item.attributes.ramp && (
                  <p className="flex items-center text-base">
                    <Slash color="hsl(var(--primary))" className="mr-2" />
                    {t('components.resultsItem.ramp')}
                  </p>
                )}
                {item.attributes.toilet && (
                  <p className="flex items-center text-base">
                    <Accessibility color="hsl(var(--primary))" className="mr-2" />
                    {t('components.resultsItem.toilet')}
                  </p>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </li>
  );
};
