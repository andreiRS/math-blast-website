# MathBlast! Website

Landing page for MathBlast! - A fun math learning game for kids aged 8-10 years old.

## Tech Stack

- **Framework**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Deployment**: GitHub Pages via GitHub Actions

## Development

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/andreiRS/math-blast-website.git
   cd math-blast-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Run TypeScript type checking
- `npm run deploy` - Deploy to GitHub Pages manually

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process:

1. Runs TypeScript type checking
2. Builds the project
3. Deploys to GitHub Pages

You can also deploy manually using `npm run deploy`.

## Project Structure

```
math-blast-website/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/         # Page components
│   ├── types.ts       # TypeScript type definitions
│   ├── App.tsx        # Main App component
│   └── main.tsx       # Entry point
├── public/            # Static assets
└── index.html         # HTML template
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run type checking: `npm run typecheck`
4. Test your changes locally: `npm run dev`
5. Push your changes
6. Create a Pull Request

## License

MIT License - See [LICENSE](LICENSE) for details