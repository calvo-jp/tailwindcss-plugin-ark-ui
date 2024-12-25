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

### Example using Ark UI react components

```ts
// tailwind.config.ts
import ark from 'tailwindcss-plugin-ark-ui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          from: {opacity: '0'},
          to: {opacity: '1'},
        },
        'fade-out': {
          from: {opacity: '1'},
          to: {opacity: '0'},
        },
      },
      animation: {
        'fade-in': 'fade-in 250ms ease-in-out',
        'fade-out': 'fade-out 150ms ease-in-out',
      },
    },
  },
  plugins: [ark],
};
```

```tsx
// App.tsx
import {Dialog, Portal} from '@ark-ui/react';

export function App() {
  return (
     <div className="p-4">
      <Dialog.Root>
        <Dialog.Trigger className="bg-neutral-900 rounded text-white font-semibold h-11 px-4">
          Open
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop className="fixed inset-0 bg-black/50 ui-open:animate-fade-in ui-closed:animate-fade-out" />
          <Dialog.Positioner>
            <Dialog.Content className="fixed max-w-[24rem] rounded w-full left-1/2 -translate-x-1/2 my-16 p-4 bg-white ui-open:animate-fade-in ui-closed:animate-fade-out">
              <Dialog.Title className="text-neutral-800 text-xl font-bold">Title</Dialog.Title>
              <Dialog.Description className="text-neutral-600">Description</Dialog.Description>
              <Dialog.CloseTrigger className="border border-neutral-300 h-11 w-full rounded mt-4">
                Close
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  );
}
```

## Credits

- [@headlessui/tailwindcss](https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss)
- [@kobalte/tailwindcss](https://github.com/kobaltedev/kobalte/tree/main/packages/tailwindcss)