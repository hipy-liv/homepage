import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

export interface FirebaseConfig {
	apiKey?: string;
	authDomain?: string;
	projectId?: string;
	storageBucket?: string;
	messagingSenderId?: string;
	appId?: string;
	measurementId?: string;
	eventsCollection?: string;
}

let db: ReturnType<typeof getFirestore> | null = null;
let eventsCollection = 'events';

export function configureFirebase(config: FirebaseConfig): boolean {
	if (!config.apiKey || !config.projectId || !config.appId) return false;
	eventsCollection = config.eventsCollection || 'events';
	const app = getApps().length ? getApp() : initializeApp(config);
	db = getFirestore(app);
	return true;
}

export function getFirebaseDb() {
	return db;
}

export function getFirebaseEventsCollection() {
	return eventsCollection;
}
