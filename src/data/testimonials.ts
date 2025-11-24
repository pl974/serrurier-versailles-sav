/**
 * Témoignages clients
 * Utilisés pour renforcer la preuve sociale
 */

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
  verified: boolean;
  avatarUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie D.',
    city: 'Versailles',
    rating: 5,
    comment: 'Intervention très rapide à 2h du matin après avoir claqué ma porte. Le serrurier est arrivé en 20 minutes et a ouvert ma porte sans la casser. Prix annoncé au téléphone respecté. Je recommande vivement.',
    service: 'Ouverture de porte',
    date: 'Il y a 2 semaines',
    verified: true
  },
  {
    id: '2',
    name: 'Pierre L.',
    city: 'Le Chesnay',
    rating: 5,
    comment: 'Excellent service après un cambriolage. Intervention immédiate pour sécuriser mon domicile. Installation d\'une serrure A2P de qualité. Très professionnel et bon rapport qualité-prix.',
    service: 'Changement de serrure',
    date: 'Il y a 1 mois',
    verified: true
  },
  {
    id: '3',
    name: 'Sophie M.',
    city: 'Viroflay',
    rating: 5,
    comment: 'Ma clé s\'est cassée dans la serrure un dimanche. Appel en urgence et intervention en 25 minutes. Problème résolu rapidement et proprement. Le serrurier était très sympa et de bon conseil.',
    service: 'Dépannage urgence',
    date: 'Il y a 3 semaines',
    verified: true
  },
  {
    id: '4',
    name: 'Thomas B.',
    city: 'Versailles',
    rating: 5,
    comment: 'J\'ai fait installer une serrure multipoints A2P3. Travail impeccable, conseils avisés sur le choix de la serrure. Installation soignée en moins de 2h. Mon assurance a validé sans problème.',
    service: 'Serrure multipoints',
    date: 'Il y a 1 semaine',
    verified: true
  },
  {
    id: '5',
    name: 'Isabelle R.',
    city: 'Vélizy-Villacoublay',
    rating: 5,
    comment: 'Service au top pour le blindage de ma porte d\'entrée. Devis clair, délai respecté, finition parfaite. Je me sens beaucoup plus en sécurité maintenant. Prix très correct pour la qualité du travail.',
    service: 'Blindage de porte',
    date: 'Il y a 2 mois',
    verified: true
  },
  {
    id: '6',
    name: 'Laurent C.',
    city: 'Saint-Cyr-l\'École',
    rating: 5,
    comment: 'Porte claquée avec mes enfants à l\'intérieur. Panique totale. Le serrurier est arrivé en 15 minutes et a ouvert sans dégâts. Un grand merci pour la rapidité et le professionnalisme.',
    service: 'Ouverture de porte',
    date: 'Il y a 5 jours',
    verified: true
  },
  {
    id: '7',
    name: 'Nathalie P.',
    city: 'Jouy-en-Josas',
    rating: 5,
    comment: 'Changement de toutes les serrures de ma maison après perte de clés. Travail soigné, serrurier ponctuel et efficace. Toutes les serrures fonctionnent parfaitement. Très satisfaite du service.',
    service: 'Changement de serrure',
    date: 'Il y a 3 semaines',
    verified: true
  },
  {
    id: '8',
    name: 'François G.',
    city: 'Versailles',
    rating: 5,
    comment: 'Intervention en pleine nuit pour une serrure bloquée. Service ultra réactif, technicien compétent qui a rapidement identifié et résolu le problème. Tarif nocturne raisonnable.',
    service: 'Dépannage urgence',
    date: 'Il y a 1 semaine',
    verified: true
  },
  {
    id: '9',
    name: 'Céline H.',
    city: 'Buc',
    rating: 5,
    comment: 'Installation d\'une serrure connectée sur ma porte d\'entrée. Le serrurier a pris le temps de bien m\'expliquer le fonctionnement. Installation propre et conseils d\'utilisation très clairs.',
    service: 'Installation serrure',
    date: 'Il y a 2 semaines',
    verified: true
  }
];

/**
 * Obtenir les témoignages par ville
 */
export function getTestimonialsByCity(city: string): Testimonial[] {
  return testimonials.filter(t => t.city.toLowerCase().includes(city.toLowerCase()));
}

/**
 * Obtenir les témoignages par service
 */
export function getTestimonialsByService(service: string): Testimonial[] {
  return testimonials.filter(t =>
    t.service.toLowerCase().includes(service.toLowerCase())
  );
}

/**
 * Obtenir la note moyenne
 */
export function getAverageRating(): number {
  const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
  return sum / testimonials.length;
}

/**
 * Obtenir le nombre total d'avis
 */
export function getTotalReviews(): number {
  return testimonials.length;
}
