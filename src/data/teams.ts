/**
 * Membres d’équipe — à alimenter via CMS (Strapi) ou ce fichier.
 * Photos : fichiers dans src/assets/images/teams/ (voir imageFile).
 */
export type TeamSocialLinks = {
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  whatsapp?: string;
};

export type TeamMember = {
  id: string;
  role: string;
  nom: string;
  detail: string;
  /** Nom de fichier dans src/assets/images/teams/ */
  imageFile?: string;
  socials?: TeamSocialLinks;
};

export const teams: TeamMember[] = [
  {
    id: 'coordination-generale',
    role: 'PRÉSIDENT',
    nom: 'M. ABOU DIALLO ',
    detail: 'Pilotage stratégique',
    imageFile: 'president.jpeg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/…',
      facebook: 'https://www.facebook.com/…',
      instagram: 'https://www.instagram.com/…',
      youtube: 'https://www.youtube.com/@…',
      whatsapp: 'https://wa.me/225XXXXXXXX',
    },
  },
  {
    id: 'pole-formation-insertion',
    role: "VICE PRÉSIDENT CHARGÉ DE L'IMPLANTATION DES COORDINATIONS ET DE L'EXTENSION",
    nom: 'M. PATERNE ZELEHILY GUEI',
    detail: 'Ateliers, programmes de montée.',
    imageFile: 'vice-president.jpeg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/…',
      facebook: 'https://www.facebook.com/…',
      instagram: 'https://www.instagram.com/…',
      youtube: 'https://www.youtube.com/@…',
      whatsapp: 'https://wa.me/225XXXXXXXX',
    },
  },
  {
    id: 'pole-plaidoyer-droits-humains',
    role: 'VICE PRÉSIDENTE CHARGÉE DE LA DIASPORA',
    nom: 'Mme MASSANDJE SYLLA',
    detail: 'Campagnes de sensibilisation',
    imageFile: 'vice-presidente-dispora.jpeg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/…',
      facebook: 'https://www.facebook.com/…',
      instagram: 'https://www.instagram.com/…',
      youtube: 'https://www.youtube.com/@…',
      whatsapp: 'https://wa.me/225XXXXXXXX',
    },
  },
  {
    id: 'pole-communication-mobilisation',
    role: 'SECRÉTAIRE GÉNÉRAL NATIONAL',
    nom: 'M. KOUADIO ACENAH MAXENCE OTHNIEL ',
    detail: '',
    imageFile: 'secretaire-general-national.jpeg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/…',
      facebook: 'https://www.facebook.com/…',
      instagram: 'https://www.instagram.com/…',
      youtube: 'https://www.youtube.com/@…',
      whatsapp: 'https://wa.me/225XXXXXXXX',
    },
  },
  {
    id: 'pole-communication-mobilisation',
    role: 'SECRÉTAIRE GÉNÉRAL ADJOINT',
    nom: 'DIABATÉ EMMANUEL WASSA',
    detail: '',
    imageFile: 'secretaire-general-adjoint.jpeg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/…',
      facebook: 'https://www.facebook.com/…',
      instagram: 'https://www.instagram.com/…',
      youtube: 'https://www.youtube.com/@…',
      whatsapp: 'https://wa.me/225XXXXXXXX',
    },
  },
  {
    id: 'pole-communication-mobilisation',
    role: "SECRÉTAIRE NATIONAL À L'ORGANISATION",
    nom: 'YAO NGUESSAN ROBERT LANDRY ',
    detail: '',
    imageFile: 'secretaire-national-organisation.jpeg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/…',
      facebook: 'https://www.facebook.com/…',
      instagram: 'https://www.instagram.com/…',
      youtube: 'https://www.youtube.com/@…',
      whatsapp: 'https://wa.me/225XXXXXXXX',
    },
  },
  {
    id: 'pole-communication-mobilisation',
    role: 'SECRÉTAIRE NATIONAL À LA MOBILISATION',
    nom: 'M. KAMANDJE ABOU',
    detail: '',
    imageFile: 'secretaire-national-a-la-mobilisation.jpeg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/…',
      facebook: 'https://www.facebook.com/…',
      instagram: 'https://www.instagram.com/…',
      youtube: 'https://www.youtube.com/@…',
      whatsapp: 'https://wa.me/225XXXXXXXX',
    },
  },
];

export function teamMemberLabel(member: TeamMember): string {
  return member.nom === 'À compléter'
    ? member.role
    : `${member.nom} — ${member.role}`;
}
