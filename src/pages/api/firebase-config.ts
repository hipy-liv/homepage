import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = ({ locals }) => {
	const runtimeEnv = (locals as { runtime?: { env?: Record<string, string | undefined> } }).runtime?.env;
	const value = (name: string) => runtimeEnv?.[name] || import.meta.env[name];

	return Response.json(
		{
			apiKey: value('PUBLIC_FIREBASE_API_KEY'),
			authDomain: value('PUBLIC_FIREBASE_AUTH_DOMAIN'),
			projectId: value('PUBLIC_FIREBASE_PROJECT_ID'),
			storageBucket: value('PUBLIC_FIREBASE_STORAGE_BUCKET'),
			messagingSenderId: value('PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
			appId: value('PUBLIC_FIREBASE_APP_ID'),
			measurementId: value('PUBLIC_FIREBASE_MEASUREMENT_ID'),
			eventsCollection: value('PUBLIC_FIREBASE_EVENTS_COLLECTION') || 'events',
		},
		{ headers: { 'cache-control': 'public, max-age=300' } },
	);
};
