# Diamond Menu

A menu of tilted, extruded diamond panels that settle flat on hover, ported from my CodePen ["Diamond Menu V2"](https://codepen.io/chrissimari/pen/pBaadq) (Pug + SCSS) to React 19 and TypeScript, built with Vite.

```sh
npm install
npm run dev      # develop
npm run build    # type-check and build to dist/
```

## How it is put together

- `src/DiamondMenu.tsx`: the component. Give it `items` (`label`, `title`, optional `href` and `icon`) and an accessible `label`.
- `src/DiamondMenu.module.scss`: the original SCSS, ported value for value as a CSS module. Sass's deprecated `darken()` became `shade()` in `src/_variables.scss`.
- `original/`: the CodePen's source, for reference.

## Differences from the CodePen

- The numbers are `span`s instead of six `h1`s, with the same size, so the page has a sane outline. The links sit in a `nav` with an accessible name.
- Keyboard focus settles a panel flat just as hover does (the original removed the focus outline and had no focus style).
- Transitions are switched off for `prefers-reduced-motion`.
- The font is self-hosted through `@fontsource/arvo` instead of Google Fonts.
