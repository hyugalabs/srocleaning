# Design System Inspired by Home

> Auto-extracted from `https://www.srocleaning.com/` on 2026-09-29

## 1. Visual Theme & Atmosphere

Clean, minimal, and product-focused with deliberate use of whitespace.

The hero section leads with "WELCOME".

**Key Characteristics:**
- brandon-grot-w01-light as the heading font (custom web font loaded via @font-face)
- Arial as the body font for all running text
- Heading weight 400
- Light/white background (#ffffff) as the primary canvas
- Primary accent `#323dff` used for CTAs and brand highlights
- Sharp corners (0-2px) for a precise, technical aesthetic
- Tags: light, sharp, accented, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#323dff`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Background** (`#ffffff`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#323dff`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#000000`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#666666`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#fffefc`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#ffffff` | `--palette-1` | section | large | text-dark |
| 2 | `#323dff` | `--palette-2` | text-accent | large | text-light |

## 3. Typography Rules

- **Heading Font:** `brandon-grot-w01-light` (web font)
- **Body Font:** `Arial`, sans-serif

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | brandon-grot-w01-light | 56px | 400 | normal | normal |
| H2 | brandon-grot-w01-light | 56px | 400 | 67.2px | normal |
| H3 | brandon-grot-w01-light | 22px | 400 | 31.02px | normal |
| Body | brandon-grot-w01-light | 40px | 400 | 54px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `56px` | headings |
| H1 | `40px` | headings |
| H2 | `22px` | headings |
| H3 | `18px` | headings |
| H4 | `16px` | headings |
| Body L | `15px` | body / supporting text |
| Body | `14px` | body / supporting text |
| Small | `13.3333px` | body / supporting text |
| XS | `10px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: #ffffff;
  color: #000000;
  border-radius: 0px;
  padding: 0px 0px;
  font-size: 13.3333px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

## 5. Layout Principles

- **Base spacing unit:** `16px` — use multiples (32px, 48px, 64px, etc.)

### Border Radius Scale

| Token | Value | Element |
|---|---|---|

## 6. Depth & Elevation

No prominent box-shadows detected. This design likely uses flat surfaces with borders or background color changes for depth.

## 7. Do's and Don'ts

### Do
- Use `#ffffff` as the primary background color
- Use `brandon-grot-w01-light` for all headings and `Arial` for body text
- Use `#323dff` as the single dominant accent/CTA color
- Maintain `16px` as the base spacing unit — all gaps should be multiples
- Keep corners sharp (0-2px radius) for a precise, technical feel
- Use weight 400 for headings to match the brand's typographic voice

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute brandon-grot-w01-light/Arial with generic alternatives
- Don't use irregular spacing — stick to 16px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use large border-radius — keep everything crisp and geometric
- Don't use pure black (#000000) for text — use `#000000` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 16px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #ffffff
Text:        #000000
Accent:      #323dff
Border:      #fffefc
```

### Example Prompts

1. "Build a hero section with a `#ffffff` background, `brandon-grot-w01-light` heading in `#000000`, and a `#323dff` CTA button with 0px radius."
2. "Create a pricing card using background `#323dff`, border `#fffefc`, `Arial` for text, and 48px padding."
3. "Design a navigation bar — `#ffffff` background, `#000000` links, `#323dff` for active state."
4. "Build a feature grid with 3 columns, 48px gap, each card using the card component style."
5. "Create a footer with `#000000` background, `#ffffff` text, and 32px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Check responsive behavior — test mobile and tablet layouts
7. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 70 custom properties extracted from `:root` / `html` stylesheets.

### Color Variables

| Variable | Value |
|---|---|
| `--wst-button-color-fill-primary` | `rgb(var(--color_48))` |
| `--wst-button-color-border-primary` | `rgb(var(--color_49))` |
| `--wst-button-color-text-primary` | `rgb(var(--color_50))` |
| `--wst-button-color-fill-primary-hover` | `rgb(var(--color_51))` |
| `--wst-button-color-border-primary-hover` | `rgb(var(--color_52))` |
| `--wst-button-color-text-primary-hover` | `rgb(var(--color_53))` |
| `--wst-button-color-fill-primary-disabled` | `rgb(var(--color_54))` |
| `--wst-button-color-border-primary-disabled` | `rgb(var(--color_55))` |
| `--wst-button-color-text-primary-disabled` | `rgb(var(--color_56))` |
| `--wst-button-color-fill-secondary` | `rgb(var(--color_57))` |
| `--wst-button-color-border-secondary` | `rgb(var(--color_58))` |
| `--wst-button-color-text-secondary` | `rgb(var(--color_59))` |
| `--wst-button-color-fill-secondary-hover` | `rgb(var(--color_60))` |
| `--wst-button-color-border-secondary-hover` | `rgb(var(--color_61))` |
| `--wst-button-color-text-secondary-hover` | `rgb(var(--color_62))` |
| `--wst-button-color-fill-secondary-disabled` | `rgb(var(--color_63))` |
| `--wst-button-color-border-secondary-disabled` | `rgb(var(--color_64))` |
| `--wst-button-color-text-secondary-disabled` | `rgb(var(--color_65))` |
| `--wst-color-fill-base-1` | `rgb(var(--color_36))` |
| `--wst-color-fill-base-2` | `rgb(var(--color_37))` |
| `--wst-color-fill-base-shade-1` | `rgb(var(--color_38))` |
| `--wst-color-fill-base-shade-2` | `rgb(var(--color_39))` |
| `--wst-color-fill-base-shade-3` | `rgb(var(--color_40))` |
| `--wst-color-fill-accent-1` | `rgb(var(--color_41))` |
| `--wst-color-fill-accent-2` | `rgb(var(--color_42))` |
| `--wst-color-fill-accent-3` | `rgb(var(--color_43))` |
| `--wst-color-fill-accent-4` | `rgb(var(--color_44))` |
| `--wst-color-fill-background-primary` | `rgb(var(--color_11))` |
| `--wst-color-fill-background-secondary` | `rgb(var(--color_12))` |
| `--wst-color-text-primary` | `rgb(var(--color_15))` |
| ... | *(26 more)* |

### Spacing Variables

| Variable | Value |
|---|---|
| `--one-unit` | `1vw` |
| `--section-max-width` | `9999px` |
| `--spx-stopper-max` | `9999px` |
| `--spx-stopper-min` | `0px` |
| `--browser-zoom` | `1` |

### Typography Variables

| Variable | Value |
|---|---|
| `--wst-font-style-h2` | `var(--font_2)` |
| `--wst-font-style-h3` | `var(--font_3)` |
| `--wst-font-style-h4` | `var(--font_4)` |
| `--wst-font-style-h5` | `var(--font_5)` |
| `--wst-font-style-h6` | `var(--font_6)` |
| `--wst-font-style-body-large` | `var(--font_7)` |
| `--wst-font-style-body-medium` | `var(--font_8)` |
| `--wst-font-style-body-small` | `var(--font_9)` |
| `--wst-font-style-body-x-small` | `var(--font_10)` |
