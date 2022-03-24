What's it for?
This is an application that connects food lovers with restaurants that want to expand their gastronomic offer beyond the doors of their premises; made with Node.js Framework using MongoDB (Atlas) as data store. In this app you can search for restaurants in your city and select them by type of cuisine to order food.

Deployment
This project is live at: 🌍 https://reg-login-using-nodejs-mongodb.herokuapp.com/

Running the tests
•Registration form:
Allows the user to register their account by filling in their email, username, password and address.

•Login form:
If the user has registered in the application, they can log in by passing the credentials.

•User profile:
After the user has logged in, a simple profile with the user's username, nickname, password, and city
displayed with a delete user button and profile picture

•Home:
Depending on the type of user that logs in, we have two different views, one for the user and one for the owner of the restaurant. From the user view we can access the restaurants by city, see their menus, access our profile as well as edit and update it. From the Owner view we have access to the database of our restaurants and menus, we can create, update and delete them.

•Comments:
In that view of the Owner we can access all our menus. We can also update and delete our menus and create new ones.

Database:
Here we use MongoDB Atlas (Cloud) as the database. Here we have two collections created, named as:

users
restaurant
menu
A collection (comments) is populated with the user's credentials and restaurant profile.

A collection (session) is created that stores the users registered session.




previous requirements
Tools we need to run this application:

[Node.js]
[bcrypt]
[connect-mongo]
[cookie parser]
[dotenv]
[Fast]
[express session]
[hbs]
[mongoose]
[morgan]
[serve-favicon]
[nodemon]
[MongoDB (Atlas)]
installing
install npm
To run the application
