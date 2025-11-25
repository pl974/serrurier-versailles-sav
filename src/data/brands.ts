/**
 * Marques partenaires de serrurerie
 * Marques de confiance pour les serrures et systèmes de sécurité
 */

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  specialty: string;
  certifications: string[];
  products: string[];
  warranty: string;
  featured: boolean;
}

export const brands: Brand[] = [
  {
    id: '1',
    name: 'Fichet',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    description: 'Leader français de la sécurité résidentielle et tertiaire depuis 1825. Fichet propose des solutions de haute sécurité reconnues mondialement pour leur robustesse et leur fiabilité.',
    specialty: 'Portes blindées et serrures haute sécurité',
    certifications: ['A2P***', 'BP3', 'Certifié CNPP'],
    products: [
      'Serrures multipoints A2P',
      'Portes blindées certifiées',
      'Cylindres haute sécurité',
      'Verrous et targettes'
    ],
    warranty: '10 ans sur portes blindées',
    featured: true
  },
  {
    id: '2',
    name: 'Picard',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    description: 'Entreprise familiale française créée en 1721, Picard Serrures est reconnue pour son expertise dans la conception de serrures de sécurité innovantes et durables.',
    specialty: 'Serrures certifiées A2P et cylindres de haute sécurité',
    certifications: ['A2P**', 'A2P***', 'NF'],
    products: [
      'Serrures en applique',
      'Serrures à encastrer',
      'Cylindres européens',
      'Serrures connectées'
    ],
    warranty: '5 ans garantie constructeur',
    featured: true
  },
  {
    id: '3',
    name: 'Vachette',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    description: 'Marque historique française fondée en 1840, Vachette est synonyme de qualité et de sécurité. Leader du marché résidentiel avec des solutions accessibles et performantes.',
    specialty: 'Serrures résidentielles et solutions grand public',
    certifications: ['A2P*', 'A2P**'],
    products: [
      'Serrures monopoint et multipoints',
      'Cylindres radial NT+',
      'Poignées de porte',
      'Verrous de sécurité'
    ],
    warranty: '2 ans garantie fabricant',
    featured: true
  },
  {
    id: '4',
    name: 'Bricard',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    description: 'Créée en 1782, Bricard est l\'une des plus anciennes marques de serrurerie française. Reconnue pour ses innovations technologiques et son expertise en sécurité.',
    specialty: 'Serrures de sécurité et contrôle d\'accès',
    certifications: ['A2P*', 'A2P**', 'A2P***'],
    products: [
      'Serrures carénées',
      'Serrures connectées',
      'Systèmes de contrôle d\'accès',
      'Cylindres électroniques'
    ],
    warranty: '3 ans garantie constructeur',
    featured: true
  },
  {
    id: '5',
    name: 'Abus',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    description: 'Marque allemande fondée en 1924, Abus est leader mondial de la sécurité préventive. Réputée pour la qualité de ses cadenas, serrures et systèmes de surveillance.',
    specialty: 'Sécurité mobile et systèmes antivol',
    certifications: ['A2P', 'VdS', 'SKG***'],
    products: [
      'Cadenas haute sécurité',
      'Serrures mécaniques',
      'Alarmes et vidéosurveillance',
      'Antivols moto et vélo'
    ],
    warranty: '5 ans sur produits premium',
    featured: false
  },
  {
    id: '6',
    name: 'Mottura',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    description: 'Fabricant italien de renommée mondiale depuis 1902. Mottura allie design italien et haute technologie pour créer des solutions de sécurité élégantes et performantes.',
    specialty: 'Serrures design et haute technologie',
    certifications: ['A2P**', 'CE', 'EN 12209'],
    products: [
      'Serrures multipoints',
      'Cylindres européens',
      'Serrures électroniques',
      'Accessoires design'
    ],
    warranty: '3 ans garantie fabricant',
    featured: false
  },
  {
    id: '7',
    name: 'Mul-T-Lock',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    description: 'Leader israélien de la sécurité depuis 1973. Mul-T-Lock est pionnier dans les cylindres à goupilles télescopiques offrant une protection maximale contre le crochetage.',
    specialty: 'Cylindres haute sécurité inviolables',
    certifications: ['A2P***', 'UL Listed', 'EN 1303'],
    products: [
      'Cylindres MT5+',
      'Cadenas haute sécurité',
      'Systèmes de passe-partout',
      'Contrôle d\'accès électronique'
    ],
    warranty: '10 ans sur cylindres',
    featured: false
  },
  {
    id: '8',
    name: 'Dom',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    description: 'Marque allemande du groupe Assa Abloy, spécialisée dans les cylindres de haute sécurité et les systèmes de fermeture modulaires pour professionnels et particuliers.',
    specialty: 'Cylindres professionnels et organigrammes',
    certifications: ['A2P**', 'VdS', 'SKG***'],
    products: [
      'Cylindres européens',
      'Systèmes de fermeture',
      'Organigrammes de clés',
      'Cylindres débrayables'
    ],
    warranty: '5 ans garantie constructeur',
    featured: false
  }
];

/**
 * Obtenir les marques mises en avant
 */
export function getFeaturedBrands(): Brand[] {
  return brands.filter(brand => brand.featured);
}

/**
 * Obtenir une marque par son ID
 */
export function getBrandById(id: string): Brand | undefined {
  return brands.find(brand => brand.id === id);
}

/**
 * Obtenir les marques par certification
 */
export function getBrandsByCertification(cert: string): Brand[] {
  return brands.filter(brand =>
    brand.certifications.some(c => c.includes(cert))
  );
}
