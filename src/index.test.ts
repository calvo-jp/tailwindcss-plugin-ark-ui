import postcss from 'postcss';
import tailwind from 'tailwindcss';
import ark from './index.js';

const WHITESPACE_REGEX = /[\t\n\r\s]+/g;

async function generateCss(content: string) {
	const {css} = await postcss(
		tailwind({
			content: [{raw: content}],
			plugins: [ark],
		}),
	).process('@tailwind utilities', {
		from: '',
	});

	return css;
}

describe('plugin is working', () => {
	it('generates css', async () => {
		const css = await generateCss('<div class="ui-open:block"></div>');

		expect(css.replace(WHITESPACE_REGEX, ' ')).toBe(
			'.ui-open\\:block[data-state="open"] { display: block }',
		);
	});

	it('generates "not" css', async () => {
		const css = await generateCss('<div class="ui-not-open:block"></div>');

		expect(css.replace(WHITESPACE_REGEX, ' ')).toBe(
			'.ui-not-open\\:block:not([data-state="open"]) { display: block }',
		);
	});

	it('generates "group" css', async () => {
		const css = await generateCss('<div class="ui-group-open:block"></div>');

		expect(css.replace(WHITESPACE_REGEX, ' ')).toBe(
			'.group[data-state="open"] .ui-group-open\\:block { display: block }',
		);
	});

	it('generates "peer" css', async () => {
		const css = await generateCss('<div class="ui-peer-open:block"></div>');

		expect(css.replace(WHITESPACE_REGEX, ' ')).toBe(
			'.peer[data-state="open"] ~ .ui-peer-open\\:block { display: block }',
		);
	});
});
