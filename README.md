# govtech-LunchGoWhere

## Prerequisite

To run this application locally, the following steps are neccessary

### Clone this repository
- Run the following command from a directory of your choice:
```
git clone https://github.com/lzan98/lunchGoWhere.git
```
### Install PostgreSQL and Node.js
- Refer to [PostgreSQL Installation Docs](https://www.postgresql.org/docs/current/tutorial-install.html) and [Node.js Dev Guide](https://nodejs.dev/en/learn/how-to-install-nodejs/)

### Configure PostgreSQL database
Edit the `backend/database.js` file according to your configurations. Specifically, the following field should be updated:

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
Run the following command in the `backend` and `frontend` directories

```
npm install
```
### Starting the server
Run the following command in the `backend` directory

```
node index
```
You should see a message `Up and running on 4000*`

### Starting the server
Run the following command in the `frontend` directory
```
npm start
```
## API Documentation

Refer to [API Documentation](./APIDocumentation.md) 
