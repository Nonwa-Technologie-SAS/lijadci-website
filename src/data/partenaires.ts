/**
 * Partenaires — contenu à valider (CMS / Strapi à terme).
 *
 * Nationaux : les logos sont ceux présents dans src/assets/images/partners/
 * (un fichier = un partenaire). Enrichissez les textes via nationauxDetails.
 */
export type PartenaireCategorie = "national" | "international" | "sponsor";

export type Partenaire = {
	id: string;
	name: string;
	description: string;
	href?: string;
	categorie: PartenaireCategorie;
	/** Réservé aux sections hors nationaux (international / sponsor) */
	imageFile?: string;
};

/** Détails par nom de fichier exact (ex. "partner-05.jpeg") — clé = fichier dans /images/partners/ */
export type NationalPartnerDetail = {
	name: string;
	description: string;
	href?: string;
};

export const nationauxDetails: Record<string, NationalPartnerDetail> = {
	"partner-05.jpeg": {
		name: "Réseau associatif local",
		description:
			"Co-organisation d’événements et relais sur le terrain (texte à personnaliser).",
	},
};

/** Libellés par défaut si un fichier n’a pas encore d’entrée dans nationauxDetails */
export function legendeNationaleParDefaut(filename: string): NationalPartnerDetail {
	const stem = filename.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ").trim();
	return {
		name: stem ? stem.charAt(0).toUpperCase() + stem.slice(1) : "Partenaire national",
		description:
			"Structure partenaire en Côte d’Ivoire — présentation à compléter par l’équipe.",
	};
}

export function detailNational(filename: string): NationalPartnerDetail {
	return nationauxDetails[filename] ?? legendeNationaleParDefaut(filename);
}

/** International & sponsors uniquement (les nationaux viennent du dossier d’images) */
export const partenaires: Partenaire[] = [
	{
		id: "int-1",
		name: "Organisation internationale",
		description:
			"Échanges de bonnes pratiques et appui méthodologique (à compléter).",
		categorie: "international",
	},
	{
		id: "int-2",
		name: "ONG partenaire",
		description:
			"Co-financement ou expertise sur des volets formation / plaidoyer (à compléter).",
		categorie: "international",
	},
	{
		id: "spo-1",
		name: "Sponsor principal (exemple)",
		description:
			"Soutien financier ou en nature pour des temps forts du mouvement.",
		categorie: "sponsor",
	},
	{
		id: "spo-2",
		name: "Soutien institutionnel",
		description:
			"Visibilité et mise à disposition de ressources ponctuelles.",
		categorie: "sponsor",
	},
];

export function partenairesParCategorie(cat: PartenaireCategorie): Partenaire[] {
	return partenaires.filter((p) => p.categorie === cat);
}
