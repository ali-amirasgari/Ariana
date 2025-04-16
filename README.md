```
# Ariana

A modern React application built with TypeScript, Vite, and TailwindCSS.

## Features

- React 19 with TypeScript
- Vite for fast development and building
- TailwindCSS for styling
- React Query for data fetching
- React Router v7 for routing
- React Hook Form for form handling
- Zod for validation
- Axios for API requests
- Service-based architecture with singleton pattern

## Project Structure

```

src/
├── assets/ # Static assets like images, fonts<br/>
├── components/ # Reusable UI components<br/>
│ ├── layouts/ # Layout components<br/>
│ ├── skeleton/ # Skeleton loading components<br/>
│ └── ui/ # UI components (buttons, inputs, etc.)<br/>
├── lib/ # Utility functions and shared logic<br/>
├── pages/ # Page components<br/>
├── queries/ # React Query hooks and configurations<br/>
├── routes/ # Routing configuration<br/>
├── services/ # API services<br/>
├── types/ # TypeScript type definitions<br/>
└── validations/ # Zod validation schemas<br/>

````

## Design Patterns

### Services

The application uses a service-based architecture with the following patterns:

- **Singleton Pattern**: Base service instance is shared across the application
- **Repository Pattern**: Services handle data fetching and manipulation
- **Interceptor Pattern**: Request/response interception for authentication and error handling

Key services:
- `baseService`: Core service with HTTP client setup and token management
- `authService`: Handles authentication operations
- `userService`: Manages user-related operations

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ali-amirasgari/Ariana.git
   cd ariana
````

2. Install dependencies

   ```bash
   npm install
   # or
   yarn
   ```

3. Copy the example environment file and modify as needed

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License.
