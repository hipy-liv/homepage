import { collection, getDocs, type DocumentData, type Timestamp } from 'firebase/firestore/lite';
import { getFirebaseDb, getFirebaseEventsCollection } from './firebase';

export interface HiPyEvent {
	id: string;
	title: string;
	description: string;
	location: string;
	date: Date;
	eventbriteUrl: string;
}

function parseDate(value: unknown): Date | null {
	if (value && typeof value === 'object' && 'toDate' in value) {
		const date = (value as Timestamp).toDate();
		return Number.isNaN(date.getTime()) ? null : date;
	}

	if (typeof value !== 'string') return null;
	const date = new Date(value);
	return Number.isNaN(date.getTime()) ? null : date;
}

function parseEvent(id: string, data: DocumentData): HiPyEvent | null {
	const date = parseDate(data.date);
	if (
		typeof data.title !== 'string' ||
		typeof data.description !== 'string' ||
		typeof data.location !== 'string' ||
		typeof data.eventbriteUrl !== 'string' ||
		(data.eventbriteUrl.trim() !== '' && !data.eventbriteUrl.startsWith('https://')) ||
		!date
	) return null;

	return {
		id,
		title: data.title,
		description: data.description,
		location: data.location,
		date,
		eventbriteUrl: data.eventbriteUrl.trim(),
	};
}

export async function getUpcomingEvents(): Promise<HiPyEvent[]> {
	const db = getFirebaseDb();
	if (!db) throw new Error('Firebase is not configured.');

	const snapshot = await getDocs(collection(db, getFirebaseEventsCollection()));
	const now = new Date();

	return snapshot.docs
		.map((document) => parseEvent(document.id, document.data()))
		.filter((event): event is HiPyEvent => event !== null && event.date >= now)
		.sort((a, b) => a.date.getTime() - b.date.getTime());
}
