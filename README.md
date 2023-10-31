# URW Classic Sans

This package provides URW Classic Sans fonts in TTF and WOFF2 formats. URW Classic Sans is a Univers-like typeface that comes with GhostPDL made by URW++.

The original fonts were made available for non-commercial distribution by [GhostPDL](https://www.ghostscript.com/index.html). Unfortunately this set isn't available under a free software license, and may only be used and distributed under the AFPL license, which forbids commercial use, or under a commercial agreement with [Artifex](https://artifex.com/).

## Getting started

The fonts and CSS are provided in similar fashion to [Fontsource](https://fontsource.org/)'s packages and can be used similarly.

### Installation

```bash
npm install @ksilvennoinen/urw-classicsans
```

### Usage

```css
import "@ksilvennoinen/urw-classicsans"; // Defaults to weight 400.
```

```css
import "@ksilvennoinen/urw-classicsans/700.css"; // Weight 700
import "@ksilvennoinen/urw-classicsans/700-italic.css"; // Italic variant
```

```css
body {
    font-family: "URW Classic Sans", sans-serif
}
```

## License

Distributed under the AFPL license. See `LICENSE` for more information.
