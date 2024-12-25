import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		watch: false,
		globals: true,
		include: ['src/**/*.{test,spec}.{ts,tsx}'],
		environment: 'node',
		passWithNoTests: true,
	},
});
