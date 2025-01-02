# JTBBooks

A [Next.js](https://nextjs.org) application for browsing, filtering, and discovering books. Users can apply filters (genre, age group, tropes) or perform keyword searches, and view details for each book in a modal.

**Deployed via Vercel** at [jtbbooks.com](https://jtbbooks.com)

---

## Table of Contents

1. [Features](#features)  
2. [Getting Started](#getting-started)  
3. [Project Structure](#project-structure)  
4. [Scripts](#scripts)  
6. [Deployment](#deployment)  
7. [Contributing](#contributing)  

---

## Features

- **BookGrid**: Displays books in a responsive grid.
- **FilterButtons**: Opens a modal to toggle filtering options for genres, age groups, and tropes.
- **Search Query**: Users can also search by keywords (e.g., book title or author).
- **Responsive Design**: Uses Material-UI and custom frames to adapt to mobile, tablet, and desktop.
- **BookModal**: Clicking on a book opens a modal with more details.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) version 16+
- npm or yarn (whichever you prefer)

### Installation

1. **Clone the repository:**

\`\`\`bash
git clone https://github.com/YourUsername/jtbbooks.git
cd jtbbooks
\`\`\`

2. **Install dependencies:**

\`\`\`bash
npm install
# or
yarn
# or
pnpm install
\`\`\`

3. **Start the development server:**

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Project Structure

A brief overview of key files and directories:

\`\`\`plaintext
.
├─ app/
│  ├─ layout.tsx                # Next.js root layout
│  ├─ page.tsx                  # Root page
│  ├─ components/
│  │  ├─ bookGrid.tsx           # Main grid for displaying books
│  │  ├─ bookModal.tsx          # Modal window for book details
│  │  ├─ filterButtons.tsx      # Modal and toggles for filtering
│  │  └─ navbar.tsx             # Navigation bar
│  └─ [...other pages/folders...]
├─ public/
│  ├─ covers/                   # Sample book cover images
│  └─ genericBookshelves/       # Frame images for the bookshelf
├─ theme.ts                     # MUI theme configuration
├─ README.md                    # Project documentation
├─ package.json
└─ tsconfig.json
\`\`\`

- **\`app/components/bookGrid.tsx\`**: Renders the grid of books and handles clicks to open **BookModal**.  
- **\`app/components/filterButtons.tsx\`**: Provides a filter modal and sends selected filters (genres, age groups, tropes, search query) to the parent.  
- **\`theme.ts\`**: Defines your Material-UI color palette and typography.

---

## Scripts

In your \`package.json\`, you might have the following scripts:

- **\`dev\`**: Starts the development server.

\`\`\`bash
npm run dev
\`\`\`

- **\`build\`**: Creates an optimized production build.

\`\`\`bash
npm run build
\`\`\`

- **\`start\`**: Runs the production build.

\`\`\`bash
npm run start
\`\`\`

- **\`lint\`**: Lints the code using ESLint.

\`\`\`bash
npm run lint
\`\`\`

---

## Deployment

This application is **deployed via [Vercel](https://vercel.com/)** at **[jtbbooks.com](https://jtbbooks.com)**.

To deploy yourself:

1. Push your code to GitHub (or GitLab/Bitbucket).
2. Import your repository into Vercel and configure build settings (defaults usually work for Next.js).
3. Vercel will handle building and hosting automatically.

Alternatively, you can run:

\`\`\`bash
npm run build
npm run start
\`\`\`

on your own server or container environment to serve the production build.

---

## Contributing

1. **Fork** the repository.
2. **Create a branch** (\`git checkout -b feature/fooBar\`).
3. **Commit** your changes (\`git commit -m 'Add some fooBar'\`).
4. **Push** to the branch (\`git push origin feature/fooBar\`).
5. **Open a Pull Request** in GitHub.

---

### Questions?

If you have any questions or suggestions, feel free to open an [issue](https://github.com/najchris11/jtbbooks/issues). Feedback is always welcome!

**Enjoy building with Next.js and happy coding!**