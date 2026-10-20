# Diamond Menu

A menu of tilted, extruded diamond panels that settle flat on hover, ported from my CodePen ["Diamond Menu V2"](https://codepen.io/chrissimari/pen/pBaadq) (Pug + SCSS) to React 19 and TypeScript, built with Vite.

```sh
npm install
npm run dev      # develop
npm run build    # type-check and build to dist/
npm test         # component tests (Vitest)
npm run lint     # Stylelint
npm run format   # Prettier
```

## How it is put together

- `src/DiamondMenu.tsx`: the component. Give it `items` (`id`, `label`, `title`, `href`, optional `icon`) and an accessible `label`.
- `src/DiamondMenu.module.scss`: SCSS as a CSS module, written in modern CSS: custom properties, native nesting, relative colour syntax for the shades, logical properties and individual transform properties. Sass is used for the build only.
- `original/`: the CodePen's source, for reference.

## Differences from the CodePen

- The numbers are `span`s instead of six `h1`s, with the same size, so the page has a sane outline. The links sit in a `nav` with an accessible name.
- Keyboard focus settles a panel flat just as hover does (the original removed the focus outline and had no focus style).
- Transitions are switched off for `prefers-reduced-motion`.
- The font is self-hosted through `@fontsource/arvo` instead of Google Fonts.
- Layout is flexbox and wraps on narrow screens; the whole panel geometry derives from `--size` and `--depth` on `.list`.
- Only `http(s)` links open in a new tab.
- The number keeps its white colour on hover (the original dimmed it to `#ccc`, which has poor contrast) and gains a soft text shadow.
- Hover effects apply only on devices that can hover; keyboard focus shows a visible outline.
