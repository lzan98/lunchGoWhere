CREATE DATABASE lunchGoWhere;

CREATE TABLE sessions(
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(6),
    session_date timestamp
);
CREATE TABLE history(
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(6),
    choice VARCHAR(255)
);