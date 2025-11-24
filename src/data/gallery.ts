/**
 * Images de galerie pour le site
 * Données structurées pour les réalisations et images
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'installation' | 'reparation' | 'blindage' | 'urgence';
  city?: string;
}

export interface BeforeAfterImage {
  id: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  service: string;
  city: string;
}

/**
 * Images de galerie (utilise des placeholders)
 * En production, remplacer par de vraies images WebP
 */
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    alt: 'Installation de serrure multipoints A2P à Versailles',
    title: 'Serrure multipoints A2P',
    category: 'installation'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&h=600&fit=crop',
    alt: 'Réparation de serrure endommagée',
    title: 'Réparation de serrure',
    category: 'reparation'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1565933485814-e0eb700a8bff?w=800&h=600&fit=crop',
    alt: 'Blindage de porte pour appartement',
    title: 'Blindage de porte blindée',
    category: 'blindage'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop',
    alt: 'Ouverture de porte en urgence',
    title: 'Ouverture porte claquée',
    category: 'urgence'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    alt: 'Installation serrure électronique',
    title: 'Serrure électronique',
    category: 'installation'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1565933485814-e0eb700a8bff?w=800&h=600&fit=crop',
    alt: 'Blindage porte maison Versailles',
    title: 'Blindage porte maison',
    category: 'blindage'
  }
];

/**
 * Images avant/après pour démontrer la qualité du travail
 */
export const beforeAfterImages: BeforeAfterImage[] = [
  {
    id: '1',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&sat=-100',
    afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    title: 'Remplacement serrure après effraction',
    description: 'Serrure endommagée suite à une tentative d\'effraction remplacée par une serrure A2P certifiée.',
    service: 'Changement de serrure',
    city: 'Versailles'
  },
  {
    id: '2',
    beforeImage: 'https://images.unsplash.com/photo-1565933485814-e0eb700a8bff?w=600&h=400&fit=crop&sat=-100',
    afterImage: 'https://images.unsplash.com/photo-1565933485814-e0eb700a8bff?w=600&h=400&fit=crop',
    title: 'Blindage de porte d\'entrée',
    description: 'Porte d\'entrée standard transformée en porte blindée avec certification A2P.',
    service: 'Blindage de porte',
    city: 'Le Chesnay'
  },
  {
    id: '3',
    beforeImage: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=400&fit=crop&sat=-100',
    afterImage: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=400&fit=crop',
    title: 'Rénovation complète de serrure',
    description: 'Serrure ancienne et usée remplacée par un modèle moderne multipoints.',
    service: 'Changement de serrure',
    city: 'Viroflay'
  }
];

/**
 * Obtenir les images par catégorie
 */
export function getImagesByCategory(category: GalleryImage['category']): GalleryImage[] {
  return galleryImages.filter(img => img.category === category);
}

/**
 * Obtenir les images avant/après par service
 */
export function getBeforeAfterByService(service: string): BeforeAfterImage[] {
  return beforeAfterImages.filter(img =>
    img.service.toLowerCase().includes(service.toLowerCase())
  );
}
