Server for the React client (Express + Sequelize + Postgres)

Setup

1. Copy `.env.example` to `.env` and set `DATABASE_URL`.

2. Install dependencies:

```bash
cd server
npm install
```

3. Run in development:

```bash
npm run dev
```

Notes

- The server uses `sequelize.sync()` to create tables. For production migrate instead.
- API endpoints:
  - `GET /habits`
  - `POST /habits`
  - `PATCH /habits/:id`
  - `DELETE /habits/:id`
