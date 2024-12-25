import postcss from 'postcss';
import tailwind, {type Config} from 'tailwindcss';
import ark from './index.js';

const WHITESPACE_REGEX = /[\t\n\r\s]+/g;

async function getGeneratedCss(input: string, config: Config) {
	const plugin = tailwind(config);
	const processor = postcss(plugin);
	const result = await processor.process(input, {from: ''});
	return result.css;
}

describe('ark plugin works properly', () => {
	it('generates css', async () => {
		const config = {
			content: [{raw: '<div class="ui-open:block"></div>'}],
			plugins: [ark],
		};

		const css = await getGeneratedCss('@tailwind utilities', config);

		expect(css.replace(WHITESPACE_REGEX, ' ')).toBe(
			'.ui-open\\:block[data-state="open"] { display: block }',
		);
	});

	it('generates "not" css', async () => {
		const config = {
			content: [{raw: '<div class="ui-not-open:block"></div>'}],
			plugins: [ark],
		};

		const css = await getGeneratedCss('@tailwind utilities', config);

		expect(css.replace(WHITESPACE_REGEX, ' ')).toBe(
			'.ui-not-open\\:block:not([data-state="open"]) { display: block }',
		);
	});

	it('generates "group" css', async () => {
		const config = {
			content: [{raw: '<div class="ui-group-open:block"></div>'}],
			plugins: [ark],
		};

		const css = await getGeneratedCss('@tailwind utilities', config);

		expect(css.replace(WHITESPACE_REGEX, ' ')).toBe(
			'.group[data-state="open"] .ui-group-open\\:block { display: block }',
		);
	});

	it('generates "peer" css', async () => {
		const config = {
			content: [{raw: '<div class="ui-peer-open:block"></div>'}],
			plugins: [ark],
		};

		const css = await getGeneratedCss('@tailwind utilities', config);

		expect(css.replace(WHITESPACE_REGEX, ' ')).toBe(
			'.peer[data-state="open"] ~ .ui-peer-open\\:block { display: block }',
		);
	});
});
