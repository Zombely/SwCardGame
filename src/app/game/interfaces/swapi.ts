// Api utils interfaces

import { ApiFormating } from '../enums/swapi';

export interface IApiListParams {
  [key: string]: string | number | undefined;
  page?: number;
  search?: string;
  limit?: number;
  format?: ApiFormating;
}

interface IApiBaseResponse {
  message: string;
}

export interface IApiListResults {
  uid: string;
  name: string;
  url: string;
}

export interface IApiListResponse extends IApiBaseResponse {
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: Array<IApiListResults>;
}

export interface IApiRetrieveResponse<T> extends IApiBaseResponse {
  result: {
    properties: T;
    description: string;
    _id: string;
    uid: string;
    __v: number;
  };
}

// Api object interfaces

export type SwapiObject = IPeople | IVehicle | IStarship;

export interface IPeople {
  [key: string]: string;

  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  name: string;
  homeworld: string;
  url: string;
}

export interface IVehicle {
  [key: string]: string | string[];

  model: string;
  vehicle_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  created: string;
  edited: string;
  name: string;
  url: string;
}

export interface IStarship {
  [key: string]: string | string[];

  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  pilots: string[];
  created: string;
  edited: string;
  name: string;
  url: string;
}
