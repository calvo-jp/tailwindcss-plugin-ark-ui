# tailwindcss-plugin-ark-ui

A [TailwindCSS](https://tailwindcss.com/) plugin to style [Ark UI](https://ark-ui.com/) components using their [data attributes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes).

## Installation

```bash
npm install -D tailwindcss-plugin-ark-ui
```

## Usage

Add the plugin to your tailwind config

```ts
// tailwind.config.ts
import type {Config} from 'tailwindcss';
import ark from 'tailwindcss-plugin-ark-ui';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    // using the default prefix: "ui"
    ark,

    // or using a custom prefix
    ark({
      prefix: 'custom-prefix',
    }),
  ],
} satisfies Config
```

Style your components

```tsx
import {Field} from '@ark-ui/react';

export function Component() {
  return (
    <Field.Root required>
      <Field.Input class="ui-invalid:border-red-300 ui-readonly:border-gray-200" />
    </Field.Root>
  );
}
```

## Credits

- [@headlessui/tailwindcss](https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss)
- [@kobalte/tailwindcss](https://github.com/kobaltedev/kobalte/tree/main/packages/tailwindcss)