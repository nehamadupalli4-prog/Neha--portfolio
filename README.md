# Neha Madupalli Portfolio

Interactive resume and portfolio website for Neha Madupalli, a motivated 2nd-year B.Tech CSE student from Ramachandra College Of Engineering, Eluru.

## Features

- Resume sections for education, skills, certificates, languages, interests, and profile highlights
- Interactive skill selector with progress meter
- Interactive portfolio focus cards
- Portfolio focus cards for AI, Data Science, and Software Development interests
- Contact form with required fields and a prepared email notification to `nehamadupalli4@gmail.com`
- SEO-friendly title, description, keywords, Open Graph metadata, and Person structured data

## Tech Stack

- React
- Vite
- HTML, CSS, and JavaScript

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Backend Note

A new backend scaffold is available in the `backend/` folder.

To run it locally:

```bash
cd backend
npm install
npm run dev
```

The backend exposes:

- `GET /api/health` — health check
- `POST /api/contact` — save contact form messages to MySQL

Create the `contact_messages` table in MySQL before using the API:

```sql
CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  created_at DATETIME NOT NULL
);
```

Copy `.env.example` to `.env` and update your database credentials.


live link:
https://vermillion-naiad-5d0138.netlify.app
