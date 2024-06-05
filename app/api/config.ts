export const useAPImocks = false;

export const BASE_URL = `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_DB_ID}`;
export const headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
};
