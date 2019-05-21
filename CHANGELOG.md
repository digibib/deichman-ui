# Change Log

All notable changes to this project will be documented in this file.

## 6.4.0

### Changed

- New `disabled` prop added to Tag, for cases where the tag is not clickable.
- New `withSpacing` prop added to Accordion, for uniform spacing of contents.

### Breaking changes (visual only):

- `.link` and `<a>` changes:

  - Hover-effect added, this might cause unwanted effects if you've used a link as a basis for another component.

- `Button` component changes:
  - Hover-effect added, this might cause unwanted effects if you've used the button as a basis for another component. (only visually)

## 6.3.0

### Notable changes:

- `Container` component changes:
  - Increased max-width for huge screens.
  - Not really a breaking change, but worth checking large screens (> 1680px).

## 5.2.0

### Breaking changes (visual only):

- `Button` component changes:
  - Updated disabled styling, use this for non-interactive buttons only
  - For loading-states, use the `loading` prop

## 5.1.0

### Changed

- New `showClose` prop added to modal. Non-breaking.
- New icons for "game" and "event" added.

## 5.0.0

### Changed

- Overhaul of font-sizes in input elements (Input, Select, Button) to ensure safari/iPhone users won't zoom in when using input fields. [Read more](https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone)

### Breaking changes:

- There should be none, but if you've created your own input elements these may need to be updated to match the new font-size and line-heights.

## 4.4.0

### Changed

- Icons now take a `rotation` prop which can be used to rotate an icon (like an arrow) by a set amount of degrees.

### Breaking changes:

- Table component: Minor change to `<th>` cells in vertical mode to prevent text wrapping. Only affects you if you have any `<Table>` components with the `vertical` prop set to true.

## 4.3.0

### Breaking changes:

- A11y: `:focus` system modified. Look at the "About" section in the storybook for details on implementation. If you just want to keep the same focus-styles as before, add `body--a11y` class to your `<body />` tag.

## 4.1.0

### Changed

- New `arrow-large-right` icon added

### Breaking changes:

- The icon previously named `arrow` is now named `arrow-large-up-right` to fit into the system

## 4.0.0

### Changed

- New version of storybook (Only affects docs)
- Updated to [backpack.css](https://github.com/chris-pearce/backpack.css) v 2.0.0 [changelog](https://github.com/chris-pearce/backpack.css/blob/master/CHANGELOG.md#200-january-31-2019)
- New banner component with pattern example

## 3.3.0

### Changed

- `Block` now accepts `responsive` prop, see docs for info

## 3.2.0

### Changed

- `Container` with background colors now takes up 100% site width instead of max site width

### Breaking changes:

- Markup for `Container` has changed for non-react users! Check the docs.
