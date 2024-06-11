import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { DictionaryResponse } from '@/api/DictionaryAPI/Dictionary.model';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformResponseToForm = ({ data }: DictionaryResponse) => data.map((label) => ({ value: label, label }));
