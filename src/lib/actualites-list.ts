import { actualites, type Actualite } from "../data/actualites";

/** Nombre d’articles par page — ajustez (souvent 5 à 10) selon le volume de contenu. */
export const ACTUALITES_PAGE_SIZE = 2;

export function getSortedActualites(): Actualite[] {
	return [...actualites].sort(
		(a, b) => new Date(b.dateIso).getTime() - new Date(a.dateIso).getTime(),
	);
}

export function getActualitesTotalPages(sorted: Actualite[]): number {
	return Math.max(1, Math.ceil(sorted.length / ACTUALITES_PAGE_SIZE));
}

export function getActualitesPageSlice(
	sorted: Actualite[],
	page: number,
): Actualite[] {
	const p = Math.max(1, Math.floor(page));
	const start = (p - 1) * ACTUALITES_PAGE_SIZE;
	return sorted.slice(start, start + ACTUALITES_PAGE_SIZE);
}
