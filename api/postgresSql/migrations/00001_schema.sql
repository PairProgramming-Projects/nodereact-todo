SET search_path TO node_react_schema;

-- DROP TABLE IF EXISTS todos;

CREATE TABLE IF NOT EXISTS todos (
  id serial PRIMARY KEY,
  user_email VARCHAR(255),
  title VARCHAR(255),
  progress INT,
  date VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
  user_email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);

-- INSERT INTO node_react_schema.todos (user_email, title, progress, date)
-- VALUES ('example@email.com', 'Example Todo', 0, '2023-01-01');