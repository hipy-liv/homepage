import { getUpcomingEvents, type HiPyEvent } from '../lib/events';
import { configureFirebase } from '../lib/firebase';

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' });
const timeFormat = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' });

function element(tag: 'a', className?: string, text?: string): HTMLAnchorElement;
function element(tag: 'article' | 'div' | 'h3' | 'p' | 'span', className?: string, text?: string): HTMLElement;
function element(tag: string, className?: string, text?: string): HTMLElement {
	const node = document.createElement(tag);
	if (className) node.className = className;
	if (text) node.textContent = text;
	return node;
}

function appendChildren(parent: HTMLElement, ...children: Node[]): void {
	for (const child of children) parent.appendChild(child);
}

function eventCard(event: HiPyEvent, index: number): HTMLElement {
	const article = element('article', 'event-card');
	const [day, month] = dateFormat.format(event.date).split(' ');
	const date = element('div', 'event-date');
	appendChildren(date, element('span', undefined, day), document.createTextNode(month));

	const info = element('div', 'event-info');
	appendChildren(info,
		element('p', 'event-number', `EVENT ${String(index + 1).padStart(2, '0')}`),
		element('h3', undefined, event.title),
		element('p', undefined, event.description),
	);

	const meta = element('div', 'event-meta');
	appendChildren(meta,
		element('p', undefined, `⌖ ${event.location}`),
		element('p', undefined, `◷ ${timeFormat.format(event.date)}`),
	);

	if (event.eventbriteUrl) {
		const booking = element('a', 'event-button', 'Book your spot ↗');
		booking.href = event.eventbriteUrl;
		booking.target = '_blank';
		booking.rel = 'noreferrer';
		appendChildren(article, date, info, meta, booking);
	} else {
		appendChildren(article, date, info, meta, element('span', 'event-button event-button-disabled', 'Booking opens soon'));
	}
	return article;
}

async function loadEvents(): Promise<void> {
	const list = document.querySelector<HTMLElement>('[data-event-list]');
	if (!list) return;

	try {
		const response = await fetch('/api/firebase-config');
		if (!response.ok || !configureFirebase(await response.json())) throw new Error('Firebase is not configured.');
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
