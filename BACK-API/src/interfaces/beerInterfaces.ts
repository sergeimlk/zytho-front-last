export interface BeerRequestBody {
  name: string;
  type: string;
  abv: number;
  description: string;
  brewery_id: number;
}

export interface BeerResponseBody extends BeerRequestBody {
  id_beer: number;
  created_at: Date;
  updated_at: Date;
}