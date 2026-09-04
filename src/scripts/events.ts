import { getUpcomingEvents, type HiPyEvent } from '../lib/events';
import { isFirebaseConfigured } from '../lib/firebase';

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' });
const timeFormat = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' });

function element<K extends keyof HTMLElementTagNameMap>(
	tag: K,
	className?: string,
	text?: string,
): HTMLElementTagNameMap[K] {
	const node = document.createElement(tag);
	if (className) node.className = className;
	if (text) node.textContent = text;
	return node;
}

function eventCard(event: HiPyEvent, index: number): HTMLElement {
	const article = element('article', 'event-card');
	const [day, month] = dateFormat.format(event.date).split(' ');
	const date = element('div', 'event-date');
	date.append(element('span', undefined, day), document.createTextNode(month));

	const info = element('div', 'event-info');
	info.append(
		element('p', 'event-number', `EVENT ${String(index + 1).padStart(2, '0')}`),
		element('h3', undefined, event.title),
		element('p', undefined, event.description),
	);

	const meta = element('div', 'event-meta');
	meta.append(
		element('p', undefined, `⌖ ${event.location}`),
		element('p', undefined, `◷ ${timeFormat.format(event.date)}`),
	);

	if (event.eventbriteUrl) {
		const booking = element('a', 'event-button', 'Book your spot ↗');
		booking.href = event.eventbriteUrl;
		booking.target = '_blank';
		booking.rel = 'noreferrer';
		article.append(date, info, meta, booking);
	} else {
		article.append(date, info, meta, element('span', 'event-button event-button-disabled', 'Booking opens soon'));
	}
	return article;
}

async function loadEvents(): Promise<void> {
	const list = document.querySelector<HTMLElement>('[data-event-list]');
	if (!list) return;

	try {
		if (!isFirebaseConfigured) throw new Error('Firebase is not configured.');
		const events = await getUpcomingEvents();
		list.replaceChildren(
			...(events.length
				? events.map(eventCard)
				: [element('p', 'empty-state', "We're planning the next HiPy get-together. Check back soon!")]),
		);
	} catch (error) {
		console.error('Could not load HiPy events from Firestore.', error);
		list.replaceChildren(
			element('p', 'empty-state', 'Upcoming events are unavailable right now. Please check back soon.'),
		);
	} finally {
		list.removeAttribute('aria-busy');
	}
}

void loadEvents();
