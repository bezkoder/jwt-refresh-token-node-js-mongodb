const nasaController = require('../controllers/nasa.controller');

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  console.log("Puedo acceder al contenido del usuario");
  res.status(200).send("User Content.");
};

exports.apiaBoard = (req, res) => {
  nasaController.getPictureOfTheDay(req, res);
  res.status(200).send("User Authorized.");
};

exports.apibBoard = (req, res) => {
  nasaController.getMarsPicture(req, res);
  res.status(200).send("User Authorized.");
};

exports.apicBoard = (req, res) => {
  nasaController.savePictureOfTheDay(req, res);
  res.status(200).send("User Authorized.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content. You can´t access to another contents.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content. You can´t access to another contents.");
};
