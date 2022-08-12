--users table
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid.generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255)  NOT NULL,
    user_password VARCHAR(255) NOT NULL,

);

--DROP TABLE IF EXISTS author;

--User Table
CREATE TABLE users(
    user_id INT GENERATED ALWAYS AS IDENTITY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255)  NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
);

--Contact Table
CREATE TABLE contact(  
    contact_id INT GENERATED ALWAYS AS IDENTITY,  
    contact_name VARCHAR(255) NOT NULL,  
    contact_email VARCHAR(255) NOT NULL,  
    contact_phone VARCHAR(255) NOT NULL,
    user_id INT,  
    PRIMARY KEY(contact_id),  
    CONSTRAINT fk_users  
    FOREIGN KEY(user_id)   
    REFERENCES users(user_id)  
); 

insert into users(user_name,user_email,user_password) values ('John' , 'john@example.in' , '123456789')

INSERT INTO contact(contact_name, contact_email, contact_phone,user_id) VALUES (123, '1@example.in','123' ,(SELECT user_id FROM users WHERE user_id = 1));