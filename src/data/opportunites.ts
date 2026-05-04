/**
 * Opportunités — formations, stages, emplois, appels, concours (règle projet).
 * Contenu indicatif à remplacer par les offres réelles.
 */
export type OpportuniteCategorie =
	| "formation"
	| "stage"
	| "emploi"
	| "appel"
	| "concours";

export type Opportunite = {
	id: string;
	title: string;
	categorie: OpportuniteCategorie;
	organisme?: string;
	deadline?: string;
	deadlineIso?: string;
	excerpt: string;
	href?: string;
};

export const opportunites: Opportunite[] = [
	{
		id: "opp-1",
		title: "Formation — facilitation d’ateliers participatifs",
		categorie: "formation",
		organisme: "LIJADCI",
		deadline: "30 mai 2026",
		deadlineIso: "2026-05-30",
		excerpt:
			"Session courte pour membres et bénévoles : méthodes, posture et outils pratiques.",
		href: "/contact",
	},
	{
		id: "opp-2",
		title: "Stage — communication & mobilisation numérique",
		categorie: "stage",
		organisme: "À compléter",
		deadline: "15 juin 2026",
		deadlineIso: "2026-06-15",
		excerpt:
			"Accompagnement des campagnes en ligne et production de contenus (durée à préciser).",
		href: "/contact",
	},
	{
		id: "opp-3",
		title: "Appel à candidatures — chargé·e de projets terrain",
		categorie: "emploi",
		organisme: "LIJADCI",
		deadline: "1er juillet 2026",
		deadlineIso: "2026-07-01",
		excerpt:
			"Profil motivé par la coordination d’actions locales et le lien avec les partenaires.",
		href: "/contact",
	},
	{
		id: "opp-4",
		title: "Appel à projets — initiatives jeunesse durable",
		categorie: "appel",
		deadline: "20 juin 2026",
		deadlineIso: "2026-06-20",
		excerpt:
			"Soutien à de petites initiatives à fort impact social ou environnemental (critères à publier).",
		href: "/contact",
	},
	{
		id: "opp-5",
		title: "Concours d’éloquence citoyenne",
		categorie: "concours",
		deadline: "10 septembre 2026",
		deadlineIso: "2026-09-10",
		excerpt:
			"Mettre en avant les voix des jeunes sur les enjeux publics — calendrier et jury à annoncer.",
		href: "/contact",
	},
];

const categorieLabels: Record<OpportuniteCategorie, string> = {
	formation: "Formation",
	stage: "Stage",
	emploi: "Emploi",
	appel: "Appel à candidatures / projets",
	concours: "Concours",
};

export function labelOpportuniteCategorie(c: OpportuniteCategorie): string {
	return categorieLabels[c];
}

export function opportunitesParCategorie(
	cat: OpportuniteCategorie,
): Opportunite[] {
	return opportunites.filter((o) => o.categorie === cat);
}
