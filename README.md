# BloodConnect API

BloodConnect is a REST API for coordinating blood donations between hospitals, staff members, and donors. It manages hospitals, donors, blood requests, donations, and authentication data using Express, Prisma, and PostgreSQL.

## Tech Stack

- Node.js and TypeScript
- Express 5
- Prisma 7
- PostgreSQL 17
- PostgreSQL adapter (`@prisma/adapter-pg`)
- JSON Web Tokens and bcrypt
- Docker Compose
- pnpm

## Features

- Donor registration and login
- Donor listing, lookup, registration, login, and editing
- Hospital listing and lookup
- Blood request listing and lookup
- Prisma models for hospitals, staff, donors, blood requests, and donations
- PostgreSQL migration support

Some route and controller modules are placeholders in the current implementation. The `/auth` and `/donations` route groups do not expose any endpoints yet.

## Requirements

- Node.js 20 or newer
- pnpm 11
- Docker and Docker Compose, or a PostgreSQL database

## Environment Variables

Create a `.env` file in the project root:

```dotenv
POSTGRES_USER=bloodconnect
POSTGRES_PASSWORD=replace-with-a-secure-password
POSTGRES_DB=bloodconnect
DATABASE_URL=postgresql://bloodconnect:replace-with-a-secure-password@localhost:5433/bloodconnect
JWT_SECRET=replace-with-a-long-random-secret
```

The `POSTGRES_*` variables configure the Docker database. `DATABASE_URL` is used by Prisma and the application. `JWT_SECRET` is required for donor login.

## Start the Database

```powershell
docker compose up -d postgres
```

The database is available on host port `5433`. Docker Compose also creates a persistent `postgres_data` volume.

To stop the database:

```powershell
docker compose down
```

To remove the database volume as well:

```powershell
docker compose down -v
```

## Install and Run

```powershell
pnpm install
pnpm prisma:generate
pnpm prisma:migrate
pnpm dev
```

The development server listens on `http://localhost:3000`.

For a production-style local build:

```powershell
pnpm build
pnpm start
```

## Database Commands

| Command | Purpose |
| --- | --- |
| `pnpm prisma:generate` | Generate the Prisma client |
| `pnpm prisma:migrate` | Create and apply a development migration |
| `pnpm prisma:studio` | Open Prisma Studio |
| `pnpm prisma:reset` | Reset the database and apply migrations |

## API Routes

All JSON request bodies use `Content-Type: application/json`.

### Donors

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/donors` | List donors |
| `GET` | `/donors/:id` | Get a donor by ID |
| `POST` | `/donors/new` | Register a donor |
| `POST` | `/donors/login` | Authenticate a donor |
| `POST` | `/donors/edit/:id` | Update a donor |
| `DELETE` | `/donors/:id` | Currently handled by the donor edit controller |

Example donor registration body:

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane.doe@example.com",
  "password": "replace-with-a-secure-password",
  "contactPhone": "+1234567890",
  "bloodGroup": "O_POSITIVE"
}
```

Example login body:

```json
{
  "email": "jane.doe@example.com",
  "password": "replace-with-a-secure-password"
}
```

Successful donor login returns a JWT. Send it in requests that require authentication using:

```text
Authorization: Bearer <token>
```

### Hospitals

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/hospitals` | List hospitals |
| `GET` | `/hospitals/:id` | Get a hospital by ID |

### Blood Requests

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/requests` | List blood requests |
| `GET` | `/requests/:id` | Get a blood request by ID |

Example request fields supported by the Prisma model:

```json
{
  "patientName": "Example Patient",
  "bloodGroup": "A_POSITIVE",
  "units": 2,
  "hospitalId": "00000000-0000-0000-0000-000000000000",
  "requiredBy": "2026-12-01T12:00:00.000Z"
}
```

## Data Model

- `Hospital`: name, city, contact phone, and related staff and blood requests
- `StaffMember`: hospital staff account with a staff role
- `Donor`: donor identity, credentials, contact details, blood group, and verification state
- `BloodRequest`: patient need, blood group, unit count, hospital, deadline, and status
- `Donation`: relationship between a donor and a blood request

Supported blood groups:

```text
A_POSITIVE, A_NEGATIVE
B_POSITIVE, B_NEGATIVE
AB_POSITIVE, AB_NEGATIVE
O_POSITIVE, O_NEGATIVE
```

Blood request states:

```text
PENDING, COORDINATING, SCHEDULED, FULFILLED, CANCELLED
```

## Project Structure

```text
src/
  app.ts                 Express application and route mounting
  server.ts              HTTP server entry point
  config/                Configuration
  controllers/           Request handlers
  lib/                   Shared Prisma client
  middlewares/           Authentication and error middleware
  routes/                Express route definitions
  services/              Domain services
  utils/                 Shared utilities
prisma/
  schema.prisma          Database schema
  migrations/            Database migrations
compose.yaml             PostgreSQL development service
prisma7.config.ts        Prisma datasource configuration
```

## Notes

- The API server currently listens on port `3000`.
- Password hashes and JWT data must not be committed to source control.
- `/auth`, `/donations`, and several controller/service capabilities are under development.
