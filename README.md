This serves the interactive football table client using mongoDb. There is another server for the same client that interacts with a [MySql database](https://github.com/al-mister-dog/football-database-mysql).

I have built various servers utilising different ORMs/ODMs for the interactive table; Mongodb, Mongoose, Mysql, and my own SQL ORM library Dogql-db.

The Mongodb version doesn't yet utilise the functionality for interacting with teams in the table. This is because when the schemas were created they had relations in mind for SQL. I will work on this in the future. Eveything else works. It is also not yet optimised for mobile devices.

The site is up and running on heroku, with the vue client served statically. 
(https://mysterious-falls-28304.herokuapp.com/)