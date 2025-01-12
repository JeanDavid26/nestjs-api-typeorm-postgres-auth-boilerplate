# NestJS PostgreSQL TypeORM JWT Auth Boilerplate

A minimalist boilerplate for building secure backend applications with NestJS, featuring PostgreSQL integration, TypeORM for database management, and JWT authentication. All containerized with Docker for easy deployment.

## Features

- 🚀 **NestJS Framework** - Progressive Node.js framework for building efficient and scalable server-side applications
- 🐘 **PostgreSQL** - Robust and reliable relational database
- 🔄 **TypeORM** - Elegant ORM with full TypeScript support
- 🔐 **JWT Authentication** - Secure authentication system
- 🐳 **Docker** - Containerized setup for consistent development and deployment
- 📚 **Swagger/OpenAPI** - API documentation out of the box
- 🔄 **Migration System** - Database version control with TypeORM migrations

## Prerequisites

- Docker and Docker Compose
- Node.js (v20+)
- pnpm

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nestjs-postgres-auth-boilerplate.git
cd nestjs-postgres-auth-boilerplate
```

2. Create your `.env` file based on `.env.example`:
```env
DB_HOST=postgres
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database
JWT_SECRET_KEY=your_secret_key
```

3. Start the application with Docker:
```bash
docker-compose up -d
```

The application will be available at `http://localhost:3000`.
API documentation can be accessed at `http://localhost:3000/api`.

## Project Structure

```
src/
├── authentication/     # Authentication module with JWT implementation
├── database/          # Database configurations and entities
├── shared/           # Shared modules and utilities
└── business/         # Business logic modules
```

## Available Commands

```bash
# Development
pnpm run start         # Start the application
pnpm run start:dev     # Start in watch mode

# Database Migrations
pnpm run migration:generate --name=MigrationName  # Generate a new migration
pnpm run migration:run                           # Run pending migrations

# Testing
pnpm run test          # Run unit tests
pnpm run test:e2e      # Run end-to-end tests
pnpm run test:cov      # Generate test coverage
```

## Authentication Endpoints

### Sign Up
```http
POST /authentication/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Sign In
```http
POST /authentication/signin
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

## Support

If you find this boilerplate helpful, please consider giving it a star ⭐️

---

For more detailed information about the components used in this boilerplate:
- [NestJS Documentation](https://docs.nestjs.com)
- [TypeORM Documentation](https://typeorm.io)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
