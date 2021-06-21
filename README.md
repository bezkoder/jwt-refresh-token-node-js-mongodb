This is a fork of the original project. It's intended to set as a codebase for the final task for the students of the course 4 of Pilar Tecno.

## **[You're now facing the Final Task](https://www.youtube.com/watch?v=Jxk9DqdYsJ4)**

  

You have the freedom to use any free or open API for your project. You may use as many as you need/want.

Some suggestions are:

 - [NASA API](https://api.nasa.gov/)
 - [The Audio DB](https://www.theaudiodb.com/api_guide.php) 
- [The cat facts](https://alexwohlbruck.github.io/cat-facts/docs/) 
- [API del Servicio de Normalización de Datos Geográficos de
       Argentina](https://datosgobar.github.io/georef-ar-api/) 
       
You can browse more API's [here](https://public-apis.io/).

Keep in mind some API's will need some registration and/or are free for trial purposes only.

**The final task consists in you making three or more endpoints that must consume one external service API (like the ones listed before).**

**It is required that you pay special attention to the structure used for the endpoint.** Make sure to use:

* Routes.

* Controllers.

* Services.

* Environment variables for sensitive data (like API keys or DB access).

**In one of the three endpoints you code, it is required that you save the response to a Mongodb collection.** You can use MongoDB Atlas for easy setup, or a local instance if you want.

**It is required that the endpoints are protected with a JWT Token.** The endpoints should only allow users with the role "user" to use the endpoint.

# Node.js JWT Refresh Token with MongoDB example
JWT Refresh Token Implementation with Node.js Express and MongoDB. You can know how to expire the JWT, then renew the Access Token with Refresh Token.

For instruction, please visit:
> [Node.js JWT Refresh Token with MongoDB example](https://bezkoder.com/jwt-refresh-token-node-js-mongodb/)

The code in this post bases on previous article that you need to read first:
> [Node.js + MongoDB: User Authentication & Authorization with JWT](https://bezkoder.com/node-js-mongodb-auth-jwt/)

## User Registration, User Login and Authorization process.

The diagram shows flow of how we implement User Registration, User Login and Authorization process.

![jwt-token-authentication-node-js-example-flow](jwt-token-authentication-node-js-example-flow.png)

And this is for Refresh Token:

![jwt-refresh-token-node-js-example-flow](jwt-refresh-token-node-js-example-flow.png)

## More Practice:
> [Node.js, Express & MongoDb: Build a CRUD Rest Api example](https://bezkoder.com/node-express-mongodb-crud-rest-api/)

> [Server side Pagination in Node.js with MongoDB and Mongoose](https://bezkoder.com/node-js-mongodb-pagination/)

Associations:
> [MongoDB One-to-One relationship tutorial with Mongoose examples](https://bezkoder.com/mongoose-one-to-one-relationship-example/)

> [MongoDB One-to-Many Relationship tutorial with Mongoose examples](https://bezkoder.com/mongoose-one-to-many-relationship/)

> [MongoDB Many-to-Many Relationship with Mongoose examples](https://bezkoder.com/mongodb-many-to-many-mongoose/)

Fullstack:
> [Vue.js + Node.js + Express + MySQL example](https://bezkoder.com/vue-js-node-js-express-mysql-crud-example/)

> [Vue.js + Node.js + Express + PostgreSQL example](https://bezkoder.com/vue-node-express-postgresql/)

> [Vue.js + Node.js + Express + MongoDB example](https://bezkoder.com/vue-node-express-mongodb-mevn-crud/)

> [Angular 8 + Node.js + Express + MySQL example](https://bezkoder.com/angular-node-express-mysql/)

> [Angular 8 + Node.js + Express + PostgreSQL example](https://bezkoder.com/angular-node-express-postgresql/)

> [Angular 8 + Node.js + Express + MongoDB example](https://bezkoder.com/angular-mongodb-node-express/)

> [Angular 10 + Node.js + Express + MySQL example](https://bezkoder.com/angular-10-node-js-express-mysql/)

> [Angular 10 + Node.js + Express + PostgreSQL example](https://bezkoder.com/angular-10-node-express-postgresql/)

> [Angular 10 + Node.js + Express + MongoDB example](https://bezkoder.com/angular-10-mongodb-node-express/)

> [Angular 11 + Node.js Express + MySQL example](https://bezkoder.com/angular-11-node-js-express-mysql/)

> [Angular 11 + Node.js + Express + PostgreSQL example](https://bezkoder.com/angular-11-node-js-express-postgresql/)

> [Angular 11 + Node.js + Express + MongoDB example](https://bezkoder.com/angular-11-mongodb-node-js-express/)

> [React + Node.js + Express + MySQL example](https://bezkoder.com/react-node-express-mysql/)

> [React + Node.js + Express + PostgreSQL example](https://bezkoder.com/react-node-express-postgresql/)

> [React + Node.js + Express + MongoDB example](https://bezkoder.com/react-node-express-mongodb-mern-stack/)

Integration (run back-end & front-end on same server/port)
> [Integrate React with Node.js Restful Services](https://bezkoder.com/integrate-react-express-same-server-port/)

> [Integrate Angular with Node.js Restful Services](https://bezkoder.com/integrate-angular-10-node-js/)

> [Integrate Vue with Node.js Restful Services](https://bezkoder.com/serve-vue-app-express/)

## Project setup
```
npm install
```

### Run
```
node server.js
```
