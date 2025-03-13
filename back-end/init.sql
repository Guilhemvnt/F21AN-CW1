CREATE DATABASE IF NOT EXISTS celia;

CREATE TYPE user_role AS ENUM ('user', 'premium', 'admin');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role user_role NOT NULL DEFAULT 'user'
);
