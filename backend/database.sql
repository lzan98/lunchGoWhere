CREATE DATABASE lunchGoWhere;

CREATE TABLE lunchChoices(
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(6),
    choice VARCHAR(255)
);