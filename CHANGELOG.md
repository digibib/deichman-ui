# Change Log

All notable changes to this project will be documented in this file.

## 4.3.2

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
