import { Gender } from '@/types/types';

export const genderOptions: { value: Gender; label: string }[] = [
  { value: Gender.All, label: 'All' },
  { value: Gender.Male, label: 'Male' },
  { value: Gender.Female, label: 'Female' },
  { value: Gender.Other, label: 'Other / Unknown' },
];
