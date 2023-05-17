BEGIN;

CREATE EXTENSION pg_trgm;

CREATE TABLE platforms (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  domain text NOT NULL
);

CREATE TABLE users (
  id uuid PRIMARY KEY,
  username text NOT NULL,
  password text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid NOT NULL,
  platform_id uuid NOT NULL REFERENCES platforms (id)
);

CREATE TYPE votes_values AS ENUM
  ( 'up'
  , 'down'
  );

CREATE TABLE votes (
  id uuid PRIMARY KEY,
  value votes_values NOT NULL,
  user_id uuid NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  created_by uuid NOT NULL
);

COMMIT;
