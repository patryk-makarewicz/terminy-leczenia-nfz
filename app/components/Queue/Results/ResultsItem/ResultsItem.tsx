'use client';

import { QueueData } from '@/api/QueueAPI/Queue.model';

type ResultsItemProps = {
  item: QueueData;
};

export const ResultsItem = ({ item }: ResultsItemProps) => {
  return (
    <li className="flex w-full flex-col rounded-md border p-4">
      <div>{item.attributes.benefit}</div>
      <div>{item.attributes.provider}</div>
      <div>
        {item.attributes.locality}, {item.attributes.address}
      </div>
      <div>{item.attributes.phone}</div>
      <div>
        pierwszy wolny termin: {item.attributes.dates.date}, stan na: {item.attributes.dates['date-situation-as-at']}
      </div>
      <div>parking: {item.attributes['car-park']}</div>
      <div>winda: {item.attributes.elevator}</div>
      <div>rampa: {item.attributes.ramp}</div>
      <div>toaleta: {item.attributes.toilet}</div>
      <div>
        statystkiki:
        <div>liczba oczekujcych: {item.attributes.statistics['provider-data'].awaiting}</div>
        <div>średni czas oczekiwania: {item.attributes.statistics['provider-data']['average-period']} dni</div>
        <div>aktualizacja dancyh: {item.attributes.statistics['provider-data'].update}</div>
      </div>
      <div>
        mapa:
        <div>latitude: {item.attributes.latitude}</div>
        <div>longitude: {item.attributes.longitude}</div>
      </div>
    </li>
  );
};
