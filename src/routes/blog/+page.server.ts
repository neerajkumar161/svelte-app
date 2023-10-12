import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((el) => ({
			slug: el.slug,
			title: el.title,
			content: el.content
		}))
	};
}
