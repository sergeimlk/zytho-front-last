import axios from 'axios';
import { Beer, Brewery } from '../types/api.types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

export const apiService = {
    // Bières
    getAllBeers: async (): Promise<Beer[]> => {
        const response = await axios.get(`${API_BASE_URL}/beers`);
        return response.data;
    },

    getBeerById: async (id: number): Promise<Beer> => {
        const response = await axios.get(`${API_BASE_URL}/beers/${id}`);
        return response.data;
    },

    // Brasseries
    getAllBreweries: async (): Promise<Brewery[]> => {
        const response = await axios.get(`${API_BASE_URL}/breweries`);
        return response.data;
    },

    getBreweryById: async (id: number): Promise<Brewery> => {
        const response = await axios.get(`${API_BASE_URL}/breweries/${id}`);
        return response.data;
    }
};
