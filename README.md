# Next Wave Dev — Marketing Site

The official marketing website for **Next Wave Dev**, a 501(c)(3) non-profit organization dedicated to connecting recent technology graduates with real-world software projects for mission-driven companies.

## 🌐 Live Site
**[nwd-marketing-site.pages.dev](https://nwd-marketing-site.pages.dev)**

## 🚀 Tech Stack
- **Framework:** [Astro](https://astro.build/)
- **Styling:** Tailwind CSS (v4)
- **Deployment:** Cloudflare Pages

## 🧞 Local Development

All commands are run from the root of the project in your terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs project dependencies                    |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds the production site to `./dist/`          |
| `npm run preview`         | Previews the build locally before deploying      |

## 🤝 Architecture & Design
When adding new components:
1. **Design Tokens:** Utilize the established semantic design tokens in our `global.css` file rather than hardcoding arbitrary HEX values.
2. **Container Model:** Maintain the responsive, single-tree DOM approach without duplicating mobile/desktop markup. Our layout standardizes on a max-width container of `1440px`.
