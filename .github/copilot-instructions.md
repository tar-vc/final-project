# Copilot Instructions – Paradise Nursery

## Architecture

- **React 18 + Vite** SPA with three pages: Landing (`/`), Product Listing (`/products`), Shopping Cart (`/cart`).
- **Redux Toolkit** manages all cart state via a single slice at `src/store/cartSlice.js`. The store is configured in `src/store/store.js`.
- **React Router (HashRouter)** handles client-side routing — HashRouter is required for GitHub Pages compatibility.
- CSS is per-component (co-located `.css` files), no CSS modules or preprocessors.

## Key Files

| Purpose | Path |
|---------|------|
| Plant catalog data | `src/data/plantsData.js` |
| Redux cart slice | `src/store/cartSlice.js` |
| Redux store config | `src/store/store.js` |
| Routing setup | `src/App.jsx` |
| Shared header | `src/components/Header.jsx` |
| Landing page | `src/pages/LandingPage.jsx` |
| Product listing | `src/pages/ProductListingPage.jsx` |
| Shopping cart | `src/pages/ShoppingCartPage.jsx` |

## Patterns & Conventions

- **Plant identification**: Plants are keyed by `name` (string), not by numeric ID. All Redux actions (`removeFromCart`, `incrementQuantity`, `decrementQuantity`) use `product.name` as the payload.
- **Add-to-cart disabling**: The product listing checks the Redux cart state to disable the "Add to Cart" button for already-added plants. Each plant can only be added once; quantity is adjusted in the cart page.
- **Cart state shape**: `state.cart.items` is an array of `{ product, quantity }` objects. `state.cart.totalQuantity` is maintained as a running counter by the reducers.
- **Header visibility**: The Header component renders on product listing and cart pages only. The landing page has no header.
- **Navigation links**: Header navigation is context-aware — it shows links to pages the user is NOT currently on (uses `useLocation()`).

## Build & Deploy

```bash
npm install          # install deps
npm run dev          # local dev server (Vite)
npm run build        # production build to dist/
npm run deploy       # deploy to GitHub Pages via gh-pages
```

- `vite.config.js` sets `base: '/final-project/'` for GitHub Pages path.
- Deployment target: `gh-pages` branch via the `gh-pages` npm package.

## Adding New Plants

Add entries to the appropriate category array in `src/data/plantsData.js`. Each plant object requires: `name` (string, unique), `price` (number), `image` (URL string), `description` (string).

## Styling Conventions

- Green palette: primary `#4caf50`, dark `#1b5e20`, accent `#2e7d32`.
- Cards use `border-radius: 12px`, `box-shadow`, and hover lift effect.
- Responsive: cart page uses column layout below 600px.
- No utility-class framework — all custom CSS with semantic class names like `.plant-card`, `.cart-item`, `.quantity-btn`.
