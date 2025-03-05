import axios from 'axios';

// Gebruik de proxy en laat het niet naar de volledige URL verwijzen
const API_URL = '/api/inspections';  // Dit maakt gebruik van de proxy instellen

export const getInspections = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // De inspectiesdata wordt geretourneerd
  } catch (error) {
    console.error("Er is een fout opgetreden bij het ophalen van de inspecties:", error);
    return [];  // Retourneer een lege array als er een fout is
  }
};
