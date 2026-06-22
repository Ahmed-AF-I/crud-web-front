# basic-crud (crud-web-front)

React frontend for a simple CRUD application. This repository contains a lightweight UI that communicates with a REST API to create, read, update and delete items (e.g., users, tasks or products).

## Features

- List view with pagination and search
- Item create / edit forms with validation
- Item detail and delete flow with confirmation
- Environment-configurable API base URL

## Prerequisites

- Node.js 16+ (or compatible LTS)
- npm or yarn

## Installation

1. Clone the repo:

   git clone https://github.com/Ahmed-AF-I/crud-web-front.git
   cd crud-web-front

2. Install dependencies:

   npm install
   # or
   yarn

## Environment

Create a .env file in the project root or set env vars in your host. The app expects:

- REACT_APP_API_BASE_URL - base URL for the backend API (e.g. http://localhost:4000/api)

Example .env:

REACT_APP_API_BASE_URL=http://localhost:4000/api

## Available scripts

- npm start: Runs the app in development mode (hot reload)
- npm run build: Builds the app for production into the `build/` directory
- npm test: Runs test suite (if present)
- npm run lint: Lints the codebase (if configured)

Run development server:

npm start

Build for production:

npm run build

## API contract (expected)

The frontend expects a JSON REST API with typical CRUD endpoints for the resource `items` (replace with actual resource name):

- GET /items         -> list items (optional query params: page, q)
- GET /items/:id     -> get single item
- POST /items        -> create item (JSON body)
- PUT /items/:id     -> update item (JSON body)
- DELETE /items/:id  -> delete item

Adjust endpoints or adapter code if your backend uses different routes/naming.

## Folder structure (typical)

- src/
  - components/    # shared UI components
  - pages/         # route pages (List, Create, Edit, Detail)
  - services/      # API calls and adapters
  - hooks/         # reusable hooks
  - App.js, index.js

## Contributing

- Create an issue for feature requests or bugs
- Open a PR with a clear description and tests if applicable

## Deployment

Build with `npm run build` and serve the `build/` folder with any static host (Netlify, Vercel, Surge, or a static file server). Ensure REACT_APP_API_BASE_URL points to the production API.

## Troubleshooting

- If the app can't reach the API, verify REACT_APP_API_BASE_URL and CORS settings on the backend.
- For build issues, check Node/npm versions and `npm install` output.

## License

MIT

---

Author: Ahmed-AF-I
Repository: https://github.com/Ahmed-AF-I/crud-web-front
