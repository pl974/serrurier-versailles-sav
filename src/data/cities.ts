/**
 * Villes desservies autour de Versailles
 * Utilisé pour le maillage interne et le SEO local
 */

export interface City {
  id: string;
  name: string;
  slug: string;
  postalCode: string;
  population: number;
  description: string;
  nearbyDistricts: string[];
  interventionTime: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const cities: City[] = [
  {
    id: 'versailles',
    name: 'Versailles',
    slug: 'versailles',
    postalCode: '78000',
    population: 85771,
    description: 'Serrurier à Versailles disponible 24h/24. Intervention rapide dans tous les quartiers : Notre-Dame, Saint-Louis, Montreuil, Chantiers.',
    nearbyDistricts: ['Notre-Dame', 'Saint-Louis', 'Montreuil', 'Chantiers', 'Porchefontaine', 'Clagny-Glatigny', 'Bernard de Jussieu'],
    interventionTime: '20-30 minutes',
    coordinates: { lat: 48.8049, lng: 2.1204 }
  },
  {
    id: 'le-chesnay',
    name: 'Le Chesnay-Rocquencourt',
    slug: 'le-chesnay-rocquencourt',
    postalCode: '78150',
    population: 30353,
    description: 'Serrurier au Chesnay-Rocquencourt. Dépannage urgent pour ouverture de porte, changement de serrure et blindage.',
    nearbyDistricts: ['Centre-ville', 'Parly 2', 'Rocquencourt', 'La Chapelle'],
    interventionTime: '15-25 minutes',
    coordinates: { lat: 48.8256, lng: 2.1281 }
  },
  {
    id: 'viroflay',
    name: 'Viroflay',
    slug: 'viroflay',
    postalCode: '78220',
    population: 15821,
    description: 'Serrurier à Viroflay. Service rapide pour tous vos besoins en serrurerie : urgence, dépannage, installation.',
    nearbyDistricts: ['Centre', 'Rive Droite', 'Rive Gauche', 'Chaville'],
    interventionTime: '15-20 minutes',
    coordinates: { lat: 48.8014, lng: 2.1717 }
  },
  {
    id: 'velizy-villacoublay',
    name: 'Vélizy-Villacoublay',
    slug: 'velizy-villacoublay',
    postalCode: '78140',
    population: 21478,
    description: 'Serrurier à Vélizy-Villacoublay. Expert en serrurerie pour particuliers et professionnels, intervention 7j/7.',
    nearbyDistricts: ['Vélizy 2', 'Louvois', 'Centre-ville', 'Village'],
    interventionTime: '20-25 minutes',
    coordinates: { lat: 48.7844, lng: 2.1914 }
  },
  {
    id: 'jouy-en-josas',
    name: 'Jouy-en-Josas',
    slug: 'jouy-en-josas',
    postalCode: '78350',
    population: 8122,
    description: 'Serrurier à Jouy-en-Josas. Professionnel certifié pour dépannage, installation et sécurisation de votre habitation.',
    nearbyDistricts: ['Centre', 'Bois des Gonards', 'Montcel'],
    interventionTime: '25-30 minutes',
    coordinates: { lat: 48.7656, lng: 2.1683 }
  },
  {
    id: 'buc',
    name: 'Buc',
    slug: 'buc',
    postalCode: '78530',
    population: 5877,
    description: 'Serrurier à Buc. Intervention rapide pour ouverture de porte, changement de serrure et dépannage urgent.',
    nearbyDistricts: ['Centre-ville', 'Les Garennes', 'Le Val'],
    interventionTime: '20-25 minutes',
    coordinates: { lat: 48.7739, lng: 2.1244 }
  },
  {
    id: 'saint-cyr-lecole',
    name: 'Saint-Cyr-l\'École',
    slug: 'saint-cyr-lecole',
    postalCode: '78210',
    population: 18150,
    description: 'Serrurier à Saint-Cyr-l\'École. Service professionnel disponible 24h/24 pour tous vos besoins en serrurerie.',
    nearbyDistricts: ['Centre', 'Beauregard', 'La Villedieu'],
    interventionTime: '20-30 minutes',
    coordinates: { lat: 48.8014, lng: 2.0681 }
  },
  {
    id: 'bailly',
    name: 'Bailly',
    slug: 'bailly',
    postalCode: '78870',
    population: 4267,
    description: 'Serrurier à Bailly. Expert en serrurerie, dépannage d\'urgence et installation de systèmes de sécurité.',
    nearbyDistricts: ['Centre', 'Bois de Bailly'],
    interventionTime: '25-30 minutes',
    coordinates: { lat: 48.8408, lng: 2.0792 }
  },
  {
    id: 'les-loges-en-josas',
    name: 'Les Loges-en-Josas',
    slug: 'les-loges-en-josas',
    postalCode: '78350',
    population: 1516,
    description: 'Serrurier aux Loges-en-Josas. Professionnel qualifié pour tous travaux de serrurerie et sécurisation.',
    nearbyDistricts: ['Centre', 'Village'],
    interventionTime: '25-35 minutes',
    coordinates: { lat: 48.7653, lng: 2.1375 }
  }
];

/**
 * Obtenir une ville par son slug
 */
export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

/**
 * Obtenir les villes principales (population > 10000)
 */
export function getMainCities(): City[] {
  return cities.filter(city => city.population > 10000);
}

/**
 * Obtenir les villes par temps d'intervention
 */
export function getCitiesByInterventionTime(): City[] {
  return cities.sort((a, b) => {
    const timeA = parseInt(a.interventionTime.split('-')[0]);
    const timeB = parseInt(b.interventionTime.split('-')[0]);
    return timeA - timeB;
  });
}
