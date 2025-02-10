export interface BreweryRequestBody {
  name: string;
  country: string;
  region: string;
}

export interface BreweryResponseBody extends BreweryRequestBody {
  id_brewery: number;
  created_at: Date;
  updated_at: Date;
}