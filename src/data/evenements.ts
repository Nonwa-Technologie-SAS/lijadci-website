/**
 * Événements — à alimenter via CMS (Strapi) ou ce fichier.
 * Types : conférences, ateliers, séminaires, campagnes, forums.
 */
export type EvenementType =
	| "conférence"
	| "atelier"
	| "séminaire"
	| "campagne"
	| "forum";

export type Evenement = {
	slug: string;
	title: string;
	dateIso: string;
	dateLabel: string;
	day: string;
	month: string;
	year: string;
	time?: string;
	location: string;
	type: EvenementType;
	excerpt: string;
	/** true = à venir, false = passé (affichage archive) */
	upcoming: boolean;
	/** Lien d’inscription ou page contact */
	inscriptionHref?: string;
};

export const evenements: Evenement[] = [
	{
		slug: "forum-citoyen-priorites-2026",
		title: "Forum citoyen — co-construction des priorités 2026",
		dateIso: "2026-05-17",
		dateLabel: "17 mai 2026",
		day: "17",
		month: "mai",
		year: "2026",
		time: "9h00 – 13h00",
		location: "Abidjan",
		type: "forum",
		excerpt:
			"Atelier participatif pour définir les axes de travail du mouvement avec les membres et invité·es.",
		upcoming: true,
		inscriptionHref: "/contact",
	},
	{
		slug: "atelier-mobilisation-communautaire",
		title: "Atelier — mobilisation communautaire",
		dateIso: "2026-05-24",
		dateLabel: "24 mai 2026",
		day: "24",
		month: "mai",
		year: "2026",
		time: "14h00 – 17h30",
		location: "Hybride (présentiel + visio)",
		type: "atelier",
		excerpt:
			"Outils et méthodes pour animer des dynamiques collectives sur le terrain.",
		upcoming: true,
		inscriptionHref: "/contact",
	},
	{
		slug: "journee-solidarite-stands",
		title: "Journée solidarité & stands associatifs",
		dateIso: "2026-06-07",
		dateLabel: "7 juin 2026",
		day: "7",
		month: "juin",
		year: "2026",
		time: "10h00 – 18h00",
		location: "Parc des expositions — entrée libre",
		type: "campagne",
		excerpt:
			"Rencontres, stands et animations autour des initiatives solidaires des jeunes.",
		upcoming: true,
	},
	{
		slug: "seminaire-droits-citoyennete",
		title: "Séminaire — droits et citoyenneté",
		dateIso: "2026-03-15",
		dateLabel: "15 mars 2026",
		day: "15",
		month: "mars",
		year: "2026",
		time: "9h00 – 12h30",
		location: "Abidjan",
		type: "séminaire",
		excerpt:
			"Retour sur les modules de sensibilisation et perspectives pour les prochains cycles.",
		upcoming: false,
	},
];

const typeLabels: Record<EvenementType, string> = {
	conférence: "Conférence",
	atelier: "Atelier",
	séminaire: "Séminaire",
	campagne: "Campagne",
	forum: "Forum",
};

export function labelEvenementType(t: EvenementType): string {
	return typeLabels[t];
}

export function evenementsAVenir(): Evenement[] {
	return evenements
		.filter((e) => e.upcoming)
		.sort((a, b) => a.dateIso.localeCompare(b.dateIso));
}

export function evenementsPasses(): Evenement[] {
	return evenements
		.filter((e) => !e.upcoming)
		.sort((a, b) => b.dateIso.localeCompare(a.dateIso));
}
