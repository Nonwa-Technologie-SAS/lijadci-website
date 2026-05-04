/**
 * Données statiques — à remplacer ou alimenter par Strapi (règle projet).
 * Ne pas publier de chiffres ou faits officiels sans source.
 */
export type Actualite = {
	slug: string;
	title: string;
	dateIso: string;
	dateLabel: string;
	excerpt: string;
	category: string;
	paragraphs: string[];
};

export const actualites: Actualite[] = [
	{
		slug: "campagne-sensibilisation-locale",
		title: "Lancement de la campagne de sensibilisation locale",
		dateIso: "2026-04-28",
		dateLabel: "28 avril 2026",
		excerpt:
			"Retour sur les premiers ateliers et la mobilisation des bénévoles dans les quartiers partenaires.",
		category: "Terrain",
		paragraphs: [
			"La campagne de sensibilisation locale s’inscrit dans la volonté de LIJADCI de rapprocher les messages citoyens des réalités de terrain. Les premiers ateliers ont réuni des bénévoles, des représentant·es d’associations et des habitant·es autour d’échanges concrets sur la participation et la cohésion sociale.",
			"Les animateur·ices ont mis l’accent sur des formats participatifs : travail en petits groupes, témoignages et mise en commun de bonnes pratiques. L’objectif est de renforcer la confiance et de créer des relais dans chaque quartier partenaire.",
			"Les prochaines étapes prévoient l’élargissement du dispositif à d’autres communes, en lien avec les autorités locales et les partenaires associatifs. Les retours collectés serviront à ajuster le contenu des sessions et à documenter l’impact sur le long terme.",
		],
	},
	{
		slug: "partenariat-acteurs-educatifs",
		title: "Partenariat renforcé avec les acteurs éducatifs",
		dateIso: "2026-04-15",
		dateLabel: "15 avril 2026",
		excerpt:
			"Signature de conventions et nouvelles sessions de formation pour les encadrant·es.",
		category: "Formation",
		paragraphs: [
			"LIJADCI poursuit le renforcement de ses liens avec les acteurs éducatifs : établissements, associations et réseaux d’encadrant·es. Des conventions de collaboration sont en cours de finalisation pour structurer des actions communes sur la formation et l’accompagnement des jeunes.",
			"De nouvelles sessions sont prévues pour outiller les professionnel·les et bénévoles qui travaillent au quotidien auprès des publics jeunes : pédagogie active, inclusion et ouverture sur les enjeux citoyens.",
			"Ce partenariat vise à compléter les initiatives déjà menées sur le terrain et à offrir des ressources partagées, dans le respect des missions de chaque structure.",
		],
	},
	{
		slug: "bilan-projets-solidaires",
		title: "Bilan trimestriel des projets solidaires",
		dateIso: "2026-04-02",
		dateLabel: "2 avril 2026",
		excerpt:
			"Perspectives pour le prochain semestre au sein du mouvement, à partir des retours des équipes et des bénévoles.",
		category: "Projets",
		paragraphs: [
			"Le bilan trimestriel permet de faire le point sur les projets solidaires portés ou soutenus par LIJADCI : avancement des actions, difficultés rencontrées et opportunités identifiées par les équipes locales.",
			"Les échanges mettent en lumière la diversité des initiatives — de la mobilisation communautaire au soutien à de petites structures — et la nécessité de maintenir un accompagnement régulier entre les porteurs de projets.",
			"Pour le semestre à venir, les priorités seront affinées collectivement ; les contenus détaillés et indicateurs éventuels seront communiqués lorsqu’ils seront validés par l’équipe de coordination.",
		],
	},
];

export function getActualiteBySlug(slug: string): Actualite | undefined {
	return actualites.find((a) => a.slug === slug);
}
