import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

export const api = {
  // Bières
  getAllBeers: async () => {
    const response = await axios.get(`${API_BASE_URL}/beers`);
    return response.data;
  },

  getBeerById: async (id: string) => {
    const response = await axios.get(`${API_BASE_URL}/beers/${id}`);
    return response.data;
  },

  // Brasseries
  getAllBreweries: async () => {
    const response = await axios.get(`${API_BASE_URL}/breweries`);
    return response.data;
  },

  getBreweryById: async (id: string) => {
    const response = await axios.get(`${API_BASE_URL}/breweries/${id}`);
    return response.data;
  }
};
