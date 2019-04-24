# Planet Earth Escapes
This is a full web app with username and password authentication and all the files you need (models, routes, views, stylesheets) to start a great app using Node, Express, MongoDB, Passport and related technologies. All you need to do is some settings.

Un-registered users can only view all the places and comments but logged in users can do the same plus add comments and add new places or escapes.

A Midleware function called **isLogggedIn** verify if the user is logged in before he/she can add new comment or scapes.

# Use
1. Clone this repo
2. Install **all dependencies** on package.json
3. Install **MongoDB**
4. Create a **data** directory inside **planet-earth-scapes** directory
5. Open terminal or cmd
6. **cd** to C:\Program Files\MongoDB\Server\4.0\bin
7. Enter **mongod.exe --dbpath="c:\projects\nemp-login\data"**
8. Open another terminal
9. **cd** to C:\Program Files\MongoDB\Server\4.0\bin
10. Enter **mongo.exe**
11. Open terminal and **cd** to nemp-login directory
12. Enter **app.js** to start the server
13. Open your browser and **go to localhost:3000**
14. Click Sign Up and create an account
15. Enter the username and password you just created to login


# Feed the database
Now that you logged in, click the plus icon to add some scapes or places to the database so you can play with that data later using the MongoDB shell.

Now click **Logout** and try to access the **Add New Place Page** (localhost:3000/add_new_place) and you are **redirected to login page** because you don't logged in yet or you click logout.

A **Midleware** function called **isLoggedIn()** handle the access to the pages or routes **places.js** and **comments.js**.

# MongoDB shell

1. Go to the terminal where you have mongo.exe running.
2. Enter **show dbs** to see if the database has been created.
3. Enter **use nempDB** to swith to that database.
4. Enter **show collections**
5. Enter **db.users.find()** to see the username and password you just created.

That's all, You are set!

#### Resources
[Install MongoDB Community Edition on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/ "Install MongoDB Community Edition on Windows")

[Working with the mongo Shell](https://docs.mongodb.com/manual/mongo/#working-with-the-mongo-shell "Working with the mongo Shell")
