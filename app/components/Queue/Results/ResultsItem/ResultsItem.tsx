'use client';

import { Hospital, Phone, MapPin, CircleDot, CalendarDays, Navigation, NavigationOff } from 'lucide-react';

import { QueueData } from '@/api/QueueAPI/Queue.model';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from '@/components/ui';
import { useTranslation } from '@/i18n/client';

type ResultsItemProps = {
  item: QueueData;
};

export const ResultsItem = ({ item }: ResultsItemProps) => {
  const { t } = useTranslation();

  return (
    <li className="flex w-full flex-col gap-3 rounded-md border p-4 md:flex-row">
      <div className="flex w-[100%] flex-col gap-2 md:w-2/3">
        <p className="flex items-center">
          <CircleDot size={16} color={'hsl(var(--primary))'} className="mr-2" /> {item.attributes.benefit}
        </p>
        <p className="flex items-center">
          <Hospital size={16} color={'hsl(var(--primary))'} className="mr-2" /> {item.attributes.provider}
        </p>
        <p className="flex items-center">
          <MapPin size={16} color={'hsl(var(--primary))'} className="mr-2" />
          {item.attributes.locality}, {item.attributes.address}
        </p>
        <p className="flex items-center font-semibold">
          <Phone size={16} color={'hsl(var(--primary))'} className="mr-2" /> {item.attributes.phone}
        </p>
      </div>

      <div className="flex w-[100%] flex-col gap-3 md:w-1/3">
        <div className="flex items-center">
          <CalendarDays size={48} color={'hsl(var(--primary))'} className="mr-2" />
          <div>
            <p className="font-semibold">{t('components.resultsItem.term')}: </p>
            <p className="text-xl font-bold text-primary">{item.attributes.dates.date}</p>
            <p className="text-sm">
              {t('components.resultsItem.situationAt', { date: item.attributes.dates['date-situation-as-at'] })}
            </p>
          </div>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t('components.resultsItem.additional')}</AccordionTrigger>
            <AccordionContent>
              <>
                <div>
                  <div>
                    {t('components.resultsItem.awaiting')}: {item.attributes.statistics['provider-data'].awaiting}
                  </div>
                  <div>
                    {t('components.resultsItem.averagePeriod', {
                      days: item.attributes.statistics['provider-data']['average-period']
                    })}
                  </div>
                  <div>
                    {t('components.resultsItem.update')}: {item.attributes.statistics['provider-data'].update}
                  </div>
                </div>
                <div>
                  <div>
                    {t('components.resultsItem.parking')}: {item.attributes['car-park']}
                  </div>
                  <div>
                    {t('components.resultsItem.elevator')}: {item.attributes.elevator}
                  </div>
                  <div>
                    {t('components.resultsItem.ramp')}: {item.attributes.ramp}
                  </div>
                  <div>
                    {t('components.resultsItem.toilet')}: {item.attributes.toilet}
                  </div>
                </div>
              </>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div>
          <Button
            variant="outline"
            disabled={item.attributes.latitude === null && item.attributes.longitude === null}
            className="flex items-center">
            {item.attributes.latitude !== null && item.attributes.longitude !== null ? (
              <Navigation size={16} className="mr-2" />
            ) : (
              <NavigationOff size={16} className="mr-2" />
            )}
            {t('components.resultsItem.map')}
          </Button>
        </div>
      </div>
    </li>
  );
};
