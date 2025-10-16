import { VIETNAM_PROVINCES } from './provinces';

// This is a mapping from the taxi company name (as returned by the Gemini API)
// to the local path of its logo image in the `public/logos` directory.
//
// HOW TO USE:
// 1. Find a high-quality logo for a taxi company (e.g., Mai Linh).
// 2. Save it as a simple name (e.g., `mailinh.png`) inside the `public/logos/` folder.
//    (You might need to create the `public` and `logos` folders).
// 3. Add an entry here mapping the official name to the path.
//
// Example: 'Mai Linh': './logos/mailinh.png',

export const LOGO_MAPPING: { [key: string]: string } = {
  // --- MIỀN BẮC ---
  'Taxi Mai Linh': './logos/mailinh.png',
  'Taxi Group': './logos/taxigroup.png',
  'G7 Taxi': './logos/g7taxi.png',
  'Taxi Ba Sao': './logos/basao.png',
  'Thanh Nga Taxi': './logos/thanhnga.png',

  // --- MIỀN TRUNG ---
  'Sun Taxi': './logos/suntaxi.png',
  'Tiên Sa Taxi': './logos/tiensa.png',
  
  // --- MIỀN NAM ---
  'Vinasun Taxi': './logos/vinasun.png',
  'Saigon Tourist': './logos/saigontourist.png',
  'Vina Taxi': './logos/vinataxi.png',

  // You can add more mappings here as you collect logos.
  // The key should be the name as you expect it from the API.
};