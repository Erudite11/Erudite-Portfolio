This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Windows quick start
1) Open PowerShell in the project folder that contains package.json:
   cd .\portfolio
2) Install dependencies:
   npm install
3) Start development server:
   npm run dev
4) Open http://localhost:3000

If you run from a parent directory that also has a package-lock.json, Next.js may warn about the workspace root. Either always run commands from .\portfolio or keep the current config which sets turbopack.root to this folder.

Production build
- npm run build
- npm start

Project structure
- src/app: Next.js App Router layout, pages, global styles
- src/components: Reusable UI and section components
- src/lib: Data and small utilities

Content updates
- Edit src/lib/data.ts to update profile, links, and projects.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
