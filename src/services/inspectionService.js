import axios from 'axios';

const API_URL = '/api/inspections';

export const getInspections = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Er is een fout opgetreden bij het ophalen van de inspecties:", error);
    return [];
  }
};

export const submitInspection = async (inspectionData) => {
  try {
    const response = await axios.post(API_URL, inspectionData);
    return response.data;
  } catch (error) {
    console.error("Er is een fout opgetreden bij het verzenden van de inspectie:", error);
    throw error;
  }
};