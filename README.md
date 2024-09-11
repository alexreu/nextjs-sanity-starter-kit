# Next.js / Sanity / Shadcn Starter Kit

This repository is a **starter kit** designed for quickly building modern, high-performance, and SEO-friendly business websites. It leverages **Next.js** for frontend development, **Sanity.io** for headless content management, and **Shadcn** for customizable UI components.

## Key Features

- **Next.js**: Optimized for static site generation (SSG) and server-side rendering (SSR).
- **Sanity.io**: Integrated as a headless CMS for flexible content management.
- **Shadcn UI**: Prebuilt components for sleek and modern design.
- **SEO**: Easily manage SEO metadata with predefined structures.
- **Reusable Components**: Use dynamic sections like hero sections, testimonials, and call-to-action blocks.
- **Vercel Ready**: Pre-configured for seamless deployment on Vercel.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
- [Sanity CLI](https://www.sanity.io/docs/cli)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/nextjs-sanity-starter-kit.git
   cd nextjs-sanity-starter-kit
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Start the development server**:

   ```bash
   pnpm dev
   ```

4. **Environment variables**:

   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

5. **Access the application**:

   Open your browser and navigate to `http://localhost:3000`.

6. **Access the Sanity Studio**:

   Open a new browser tab and navigate to `http://localhost:3000/studio`.

## Project Structure

- **`app/(site)`**: Contains the site pages.
- **`app/studio`**: Contains the Sanity studio.
- **`studio`**: The Sanity project.
- **`components`**: Shared components.
- **`lib`**: Utility functions and helpers.
- **`public`**: Static assets.
- **`hooks`**: Custom hooks.

## Customization

- **Sanity Schemas**: Add or modify content types by editing the files in the `/lib/sanity/schemas/` directory.
- **Shadcn UI Components**: Customize UI elements by modifying or adding new components in `/components`.
- **SEO Metadata**: Modify the default SEO settings in the global site config or on a per-page basis.

## Deployment

This project is pre-configured to be deployed on Vercel, the recommended platform for Next.js. After pushing the repository to GitHub, you can follow these steps:

1. Go to Vercel and create a new project.
2. Link your GitHub repository.
3. Set the environment variables in Vercel (NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET).
4. Deploy your site.

## License

This project is licensed under the MIT License. Feel free to use it as a base for your own projects!

## Contributing

Contributions are welcome! Please feel free to submit a PR.

## Support

If you have any questions or run into issues, feel free to create an issue on this repository or reach out to me via contact@alexdevlab.com.

Happy coding! 🚀
