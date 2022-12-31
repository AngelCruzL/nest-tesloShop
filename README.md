# Teslo API

This project is a simple API to manage a list of products and their prices and general data. It is a simple project to learn NestJS and Typescript emulating a ecommerce.

## General Info

Built with NestJS, Typescript and PostgreSQL. Dockerized with different environments for development, testing and production.

## Technologies

- Typescript
- NestJS
- PostgreSQL
- PgAdmin
- Docker

## Requirements

- Have installed [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)

## Setup

1. Clone the repository

2. Create an `.env` file with the same variables as `.env.example`

3. Up the database and backend with:

   ```sh
   yarn docker-compose:dev
   ```

4. Execute the seed to populate the database with:

   ```sh
   http://localhost:3000/api/seed
   ```

__Note:__ If you want to use the database with PgAdmin, go to `http://localhost:5050` and introduce the credentials assigned in the `.env` file in the `ADMIN_EMAIL` and `ADMIN_PASS` variables.
