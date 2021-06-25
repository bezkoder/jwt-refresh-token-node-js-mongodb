const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  /* Personal develop area for Final Work */
  app.get(
    "/api/test/apia",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apiaBoard
  );

  app.get(
    "/api/test/apib",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apibBoard
  );

  app.post(
    "/api/test/apic",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apicBoard
  );

  //-------------------------------------

  app.get(
    "/api/test/apid",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apidBoard
  );

  app.get(
    "/api/test/apie",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apieBoard
  );

  app.get(
    "/api/test/apif",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apifBoard
  );

  app.get(
    "/api/test/apig",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apigBoard
  );
  /* End of Personal develop area for Final Work */

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
