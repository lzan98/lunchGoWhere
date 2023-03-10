# govtech-LunchGoWhere

## Prerequisite

To run this application locally, the following steps are neccessary:

### Clone this repository
- Run the following command from a directory of your choice:
```
git clone https://github.com/lzan98/lunchGoWhere.git
```
### Install PostgreSQL and Node.js
- Refer to [PostgreSQL Installation Docs](https://www.postgresql.org/docs/current/tutorial-install.html) and [Node.js Dev Guide](https://nodejs.dev/en/learn/how-to-install-nodejs/)

### Configure PostgreSQL database
Create a database `lunchgowhere` and run the commands in `backend/database.sql`.

Next, edit the `backend/database.js` file according to your configurations. Specifically, the following field should be updated:

```
const pool = new Pool({
    user:"postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "lunchgowhere"
});
```
### Install dependencies 
Run the following command in the `backend` and `frontend` directories:

```
npm install
```
### Starting the server
Run the following command in the `backend` directory:

```
node index
```
You should see a message `*Up and running on 4000`.

### Starting the server
Run the following command in the `frontend` directory
```
npm start
```
You should be redirected to a webpage with the address `http://localhost:3000/`.
## API Documentation

Refer to [API Documentation](./APIDocumentation.md) .

## Screenshots
### Home Page
![homePage](https://github.com/lzan98/lunchGoWhere/blob/main/screenshots/Screenshot%202023-03-10%20at%2010.08.32.png)

### Create a new session
![newSession](https://github.com/lzan98/lunchGoWhere/blob/main/screenshots/Screenshot%202023-03-10%20at%2010.09.27.png)

### Input and submit a choice
![input](https://github.com/lzan98/lunchGoWhere/blob/main/screenshots/Screenshot%202023-03-10%20at%2010.33.12.png)

![submit](https://github.com/lzan98/lunchGoWhere/blob/main/screenshots/Screenshot%202023-03-10%20at%2010.11.35.png)

### Generate a random choice
![random](https://github.com/lzan98/lunchGoWhere/blob/main/screenshots/Screenshot%202023-03-10%20at%2010.12.37.png)

### Regenerate a random choice
![regenerate](https://github.com/lzan98/lunchGoWhere/blob/main/screenshots/Screenshot%202023-03-10%20at%2010.13.01.png)
