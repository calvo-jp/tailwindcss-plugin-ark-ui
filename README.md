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

## Variants and their equivalent data attributes

|  Variant                  | Data attributes                            |
|---------------------------|--------------------------------------------|
| `hover`                   | `data-hover`                               |
| `focus`                   | `data-focus`                               |
| `focus-visible`           | `data-focus-visible`                       |
| `focusable`               | `data-focusable`                           |
| `active`                  | `data-active`                              |
| `invalid`                 | `data-invalid`                             |
| `disabled`                | `data-disabled`                            |
| `readonly`                | `data-readonly`                            |
| `current`                 | `data-current`                             |
| `inview`                  | `data-inview`                              |
| `copied`                  | `data-copied`                              |
| `collapsible`             | `data-collapsible`                         |
| `highlighted`             | `data-highlighted`                         |
| `selected`                | `data-selected`                            |
| `placeholder-shown`       | `data-placeholder-shown`                   |
| `autoresize`              | `data-autoresize`                          |
| `required`                | `data-required`                            |
| `dragging`                | `data-dragging`                            |
| `complete`                | `data-complete`                            |
| `incomplete`              | `data-incomplete`                          |
| `expanded`                | `data-expanded`                            |
| `half`                    | `data-half`                                |
| `first`                   | `data-first`                               |
| `mounted`                 | `data-mounted`                             |
| `overlap`                 | `data-overlap`                             |
| `sibling`                 | `data-sibling`                             |
| `paused`                  | `data-paused`                              |
| `pressed`                 | `data-pressed`                             |
| `on`                      | `data-state="on"`                          |
| `off`                     | `data-state="off"`                         |
| `open`                    | `data-state="open"`                        |
| `closed`                  | `data-state="closed"`                      |
| `hidden`                  | `data-state="hidden"`                      |
| `visible`                 | `data-state="visible"`                     |
| `checked`                 | `data-checked`, `data-state="checked"`     |
| `unchecked`               | `data-unchecked`, `data-state="unchecked"` |
| `indeterminate`           | `data-state="indeterminate"`               |
| `vertical`                | `data-orientation="vertical"`              |
| `horizontal`              | `data-orientation="horizontal"`            |
| `placement-top`           | `data-placement="top"`                     |
| `placement-top-end`       | `data-placement="top-end"`                 |
| `placement-top-start`     | `data-placement="top-start"`               |
| `placement-left`          | `data-placement="left"`                    |
| `placement-left-end`      | `data-placement="left-end"`                |
| `placement-left-start`    | `data-placement="left-start"`              |
| `placement-right`         | `data-placement="right"`                   |
| `placement-right-end`     | `data-placement="right-end"`               |
| `placement-right-start`   | `data-placement="right-start"`             |
| `placement-bottom`        | `data-placement="bottom"`                  |
| `placement-bottom-end`    | `data-placement="bottom-end"`              |
| `placement-bottom-start`  | `data-placement="bottom-start"`            |
| `side-top`                | `data-side="top"`                          |
| `side-left`               | `data-side="left"`                         |
| `side-right`              | `data-side="right"`                        |
| `side-bottom`             | `data-side="bottom"`                       |
| `align-center`            | `data-align="center"`                      |
| `align-start`             | `data-align="start"`                       |
| `align-end`               | `data-align="end"`                         |
| `today`                   | `data-today`                               |
| `weekend`                 | `data-weekend`                             |
| `in-range`                | `data-in-range`                            |
| `range-start`             | `data-range-start`                         |
| `range-end`               | `data-range-end`                           |
| `view-day`                | `data-view="day"`                          |
| `view-month`              | `data-view="month"`                        |
| `view-year`               | `data-view="year"`                         |
| `under-value`             | `data-state="under-value"`                 |
| `over-value`              | `data-state="over-value"`                  |
| `delete-intent`           | `data-delete-intent`                       |
| `unit-hour`               | `data-unit="hour"`                         |
| `unit-minute`             | `data-unit="minute"`                       |
| `unit-second`             | `data-unit="second"`                       |
| `unit-period`             | `data-unit="period"`                       |
| `channel-hue`             | `data-channel="hue"`                       |
| `channel-saturation`      | `data-channel="saturation"`                |
| `channel-brightness`      | `data-channel="brightness"`                |
| `channel-lightness`       | `data-channel="lightness"`                 |
| `channel-red`             | `data-channel="red"`                       |
| `channel-green`           | `data-channel="green"`                     |
| `channel-blue`            | `data-channel="blue"`                      |
| `channel-alpha`           | `data-channel="alpha"`                     |
| `channel-hex`             | `data-channel="hex"`                       |
| `channel-css`             | `data-channel="css"`                       |
| `tour-highlighted`        | `data-tour-highlighted`                    |
| `scroll-lock`             | `data-scroll-lock`                         |
| `inert`                   | `data-inert`                               |
| `scope-<value>`           | `data-scope="<value>"`                     |
| `part-<value>`            | `data-part="<value>"`                      |
| `value-<value>`           | `data-value="<value>"`                     |
| `valuetext-<value>`       | `data-valuetext="<value>"`                 |
| `index-<value>`           | `data-index="<value>"`                     |
| `columns-<value>`         | `data-columns="<value>"`                   |
| `branch-<value>`          | `data-branch="<value>"`                    |
| `depth-<value>`           | `data-depth="<value>"`                     |
| `path-<value>`            | `data-path="<value>"`                      |
| `type-<value>`            | `data-type="<value>"`                      |

## Credits

- [@headlessui/tailwindcss](https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss)
- [@kobalte/tailwindcss](https://github.com/kobaltedev/kobalte/tree/main/packages/tailwindcss)