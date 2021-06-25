**FINAL REPORT**

The Final Task was finished

You can see the Postman Document for API access in
## **[API DOCUMENT](https://documenter.getpostman.com/view/10683014/TzecD5dB#91cd7156-7c27-5154-c562-ed94ff92ad2a)**

I use the the next APIs:  

- [NASA API](https://api.nasa.gov/)
- [API del Servicio de Normalización de Datos Geográficos de Argentina](https://datosgobar.github.io/georef-ar-api/) 
       
Mi personal Github for this work is [here](https://github.com/ucusita/jwt-refresh-token-node-js-mongodb/).

**I make seven (7) endpoints that must consume external service APIs .**

**I respect the structure used for the endpoint.** I used:

* Routes.
* Controllers.
* Services.
* Environment variables for sensitive data (like API keys or DB access).

**In one of the three endpoints, i saved the response to a Mongodb collection called apinasas.** For this I used MongoDB Atlas.

**The endpoints are protected with a JWT Token.** 
Only the endpoints append to the initial code allow users with the role "user" to use the endpoint.
The rest of the endpoints allow the use.

