export type Person = {
  name: string;
  url: string;
  gender: string;
  birth_year: string;
  height: string;
  mass: string;
};

export enum Gender {
  All = 'all',
  Male = 'male',
  Female = 'female',
  Other = 'other',
}
