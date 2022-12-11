# Teslo API

A simple nest API.

## Technologies

- Typescript
- NestJS
- PostgreSQL

## Requirements

- Have installed [Nestjs](https://docs.nestjs.com/cli/overview#installation) globally
- Have installed [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)

## Setup

1. Clone the repository
2. Install dependencies with:

   ```sh
   yarn install
   ```

3. Up the database with:

   ```sh
   docker-compose up -d
   ```

4. Execute the seed to populate the database with:

   ```sh
   http://localhost:3000/api/seed
   ```

5. Create a `.env` file with the same variables as `.env.example` file

6. Run the application with:

   ```sh
   yarn start:dev
   ```
