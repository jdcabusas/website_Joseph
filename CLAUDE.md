# CLAUDE.md - Project Guidelines

## Build and Run Commands
- Install dependencies: `npm install`
- Start development server: `npm start` (in frontend/video-player)
- Build for production: `npm run build`
- Run tests: `npm test`
- Run single test: `npm test -- -t "test name"`
- Run backend: `python app.py` (in backend directory)

## Code Style Guidelines
- Use consistent indentation (2 spaces)
- Follow camelCase for variables and functions
- Use PascalCase for React components
- Structure imports: React first, third-party libraries, local components
- Use meaningful descriptive variable/component names
- Implement proper error handling with try/catch blocks
- Keep components small and focused (single responsibility)
- Use React hooks appropriately (useState, useEffect)
- Document complex functions with comments
- Follow RESTful API patterns in backend routes
- Organize CSS with component-specific classes
- Write unit tests for critical components
- Use environment variables for configuration