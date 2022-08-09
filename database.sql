--users table
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid.generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255)  NOT NULL,
    user_password VARCHAR(255) NOT NULL,

);

CREATE TABLE waste(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255)  NOT NULL,
    user_password VARCHAR(255) NOT NULL,
);

CREATE TABLE waste(
  contact_id uuid PRIMARY KEY DEFAULT 
  uuid.generate_v3(),
  contact_name  VARCHAR(255) NOT NULL,
  contact_email  VARCHAR(255) NOT NULL,
  contact_phone  VARCHAR(255) NOT NULL
);
--   Fk_user_id INT ,
--   FOREIGN KEY (Fk_user_id) REFERENCES users(user_id)