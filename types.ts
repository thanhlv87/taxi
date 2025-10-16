export interface Taxi {
  name: string;
  phone: string;
}

export interface TaxiData {
  locationName: string;
  taxis: Taxi[];
}

export type AppStatus = 'INITIALIZING' | 'PROMPTING' | 'FETCHING_LOCATION' | 'PROMPTING_PROVINCE' | 'FETCHING_TAXIS' | 'SUCCESS' | 'ERROR';