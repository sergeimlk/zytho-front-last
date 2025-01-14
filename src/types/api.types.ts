export interface Beer {
    id_beer: number;
    name: string;
    description: string;
    alcohol_percentage: number;
    ibu: number;
    brewery_id: number;
    created_at: string;
    updated_at: string;
}

export interface Brewery {
    id_brewery: number;
    name: string;
    country: string;
    region: string;
    address: string;
    facebook_link: string;
    created_at: string;
    updated_at: string;
}
