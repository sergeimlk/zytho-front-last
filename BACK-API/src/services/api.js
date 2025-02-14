const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/votre-endpoint`)
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
} 