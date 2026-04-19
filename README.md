# URJA Trading Academy Project

## Overview
A full-stack web application built with modern frontend and backend technologies, designed for trading academy purposes.

## Project Structure
```
URJA-Trading-Academy/
├── lib/
│   ├── api-client-react/    # React API client with generated hooks
│   ├── api-spec/            # OpenAPI specification (single source of truth)
│   ├── api-zod/             # Zod schemas generated from OpenAPI
│   └── db/                  # Database management (PostgreSQL/MongoDB)
├── scripts/                 # Utility scripts
├── .local/
│   ├── skills/              # Skill modules for agent
│   │   ├── web-search       # Web search capabilities
│   │   ├── database         # Database operations
│   │   ├── deployment       # Deployment management
│   │   ├── artifacts        # Artifact creation/management
│   │   ├── validation       # Validation commands
│   │   └── agent-inbox      # Agent feedback management
│   └── state/               # Runtime state and logs
├── package.json             # Workspace configuration
└── artifact.toml           # Deployment configuration
```

## Key Components
- **API Layer**: OpenAPI-first approach with code generation
- **Database**: PostgreSQL with Drizzle ORM or MongoDB integration
- **Frontend**: React with Vite
- **Deployment**: Automated deployment pipeline with artifact management
- **Skills**: Modular agent capabilities for various operations

## Getting Started
1. Install dependencies: `pnpm install`
2. Configure database: 
   - For PostgreSQL: `pnpm run --filter @workspace/api-server db:setup`
   - For MongoDB: Ensure MongoDB is running locally or set MONGODB_URI environment variable
3. Initialize database collections: `pnpm run init-db`
4. Start development: `pnpm run dev`

## MongoDB Integration
This project now supports MongoDB as an alternative to PostgreSQL. To use MongoDB:

1. Make sure MongoDB is installed and running on your system
2. Set the MONGODB_URI environment variable (default: mongodb://localhost:27017)
3. Set the MONGODB_DB environment variable for database name (default: urjaTradingAcademy)
4. Run `pnpm run init-db` to create collections
5. The application will automatically use MongoDB for data storage

### Data Models
- **Users**: Student and instructor accounts
- **Courses**: Trading courses with curriculum
- **Lessons**: Individual lessons within courses
- **Strategies**: Trading strategies shared by instructors

### API Endpoints
- `/api/users` - User management
- `/api/courses` - Course management
- Database utilities are available in the `db/` directory