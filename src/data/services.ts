/**
 * Services de serrurerie disponibles
 * Utilisé pour générer les pages de services et le contenu SEO
 */

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  price: string;
  urgency: 'urgente' | 'standard' | 'planifiable';
  keywords: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'ouverture-porte',
    title: 'Ouverture de porte claquée',
    slug: 'ouverture-porte-claquee',
    description: 'Ouverture rapide de porte claquée sans casse, intervention en 30 minutes.',
    longDescription: 'Vous êtes enfermé dehors avec votre porte claquée ? Nos serruriers professionnels interviennent rapidement pour ouvrir votre porte sans dégâts. Nous utilisons des techniques non destructives pour préserver votre serrure et éviter des frais supplémentaires de remplacement.',
    icon: 'door-open',
    price: 'À partir de 89€',
    urgency: 'urgente',
    keywords: ['ouverture porte', 'porte claquée', 'serrurier urgence', 'ouverture sans casse'],
    benefits: [
      'Intervention en moins de 30 minutes',
      'Ouverture sans dégradation',
      'Prix transparent et fixe',
      'Disponible 24h/24 et 7j/7'
    ]
  },
  {
    id: 'changement-serrure',
    title: 'Changement de serrure',
    slug: 'changement-serrure',
    description: 'Installation de serrures certifiées A2P pour renforcer la sécurité de votre domicile.',
    longDescription: 'Renforcez la sécurité de votre habitation avec l\'installation d\'une serrure certifiée A2P. Nos experts vous conseillent sur le choix de la serrure adaptée à vos besoins et votre budget. Nous installons uniquement des serrures de marques reconnues pour leur fiabilité.',
    icon: 'lock',
    price: 'À partir de 150€',
    urgency: 'standard',
    keywords: ['changement serrure', 'serrure A2P', 'sécurité porte', 'installation serrure'],
    benefits: [
      'Serrures certifiées A2P',
      'Conseils personnalisés',
      'Garantie fabricant',
      'Installation professionnelle'
    ]
  },
  {
    id: 'depannage-urgence',
    title: 'Dépannage en urgence',
    slug: 'depannage-urgence',
    description: 'Service d\'urgence 24h/24 pour tous vos problèmes de serrurerie.',
    longDescription: 'Un problème de serrure en pleine nuit ? Une clé cassée dans la serrure ? Notre service d\'urgence est disponible 24 heures sur 24, 7 jours sur 7, même les jours fériés. Nos serruriers qualifiés interviennent rapidement avec tout le matériel nécessaire.',
    icon: 'ambulance',
    price: 'Sur devis',
    urgency: 'urgente',
    keywords: ['serrurier urgence', 'dépannage nuit', 'urgence serrurerie', 'serrurier 24h'],
    benefits: [
      'Disponible 24h/24',
      'Intervention rapide',
      'Tous types de dépannage',
      'Devis gratuit par téléphone'
    ]
  },
  {
    id: 'blindage-porte',
    title: 'Blindage de porte',
    slug: 'blindage-porte',
    description: 'Renforcez votre porte existante avec un blindage certifié.',
    longDescription: 'Le blindage de porte est une solution économique pour renforcer la sécurité de votre domicile sans changer toute la porte. Nous installons un blindage métallique sur votre porte existante et remplaçons la serrure par un modèle multipoints certifié.',
    icon: 'shield',
    price: 'À partir de 800€',
    urgency: 'planifiable',
    keywords: ['blindage porte', 'sécurité maison', 'porte blindée', 'anti-effraction'],
    benefits: [
      'Protection anti-effraction',
      'Conservation de votre porte',
      'Isolation renforcée',
      'Eligible aux assurances'
    ]
  },
  {
    id: 'reproduction-cles',
    title: 'Reproduction de clés',
    slug: 'reproduction-cles',
    description: 'Duplication rapide de tous types de clés, y compris clés sécurisées.',
    longDescription: 'Besoin d\'un double de vos clés ? Nous reproduisons tous types de clés : clés classiques, clés sécurisées, clés de voiture, clés de coffre. Service rapide avec possibilité de duplication immédiate pour les clés standards.',
    icon: 'key',
    price: 'À partir de 15€',
    urgency: 'standard',
    keywords: ['reproduction clé', 'double clé', 'copie clé', 'clé sécurisée'],
    benefits: [
      'Tous types de clés',
      'Service rapide',
      'Prix compétitifs',
      'Clés certifiées'
    ]
  },
  {
    id: 'installation-multipoints',
    title: 'Installation serrure multipoints',
    slug: 'installation-serrure-multipoints',
    description: 'Pose de serrures multipoints pour une sécurité optimale.',
    longDescription: 'La serrure multipoints offre une protection maximale contre les effractions. Avec 3, 5 ou 7 points de fermeture, elle renforce considérablement la résistance de votre porte. Nos serruriers installent des serrures multipoints certifiées A2P conformes aux exigences des compagnies d\'assurance.',
    icon: 'lock-keyhole',
    price: 'À partir de 300€',
    urgency: 'planifiable',
    keywords: ['serrure multipoints', 'serrure 3 points', 'serrure 5 points', 'sécurité maximale'],
    benefits: [
      'Sécurité maximale',
      'Certifications A2P',
      'Réduction prime assurance',
      'Installation garantie'
    ]
  }
];

/**
 * Obtenir un service par son slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

/**
 * Obtenir les services par urgence
 */
export function getServicesByUrgency(urgency: Service['urgency']): Service[] {
  return services.filter(service => service.urgency === urgency);
}
