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