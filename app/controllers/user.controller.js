const nasaController = require('../controllers/nasa.controller');
const gisController = require('../controllers/gis.controller');

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

/* Personal Develop Area */
exports.apiaBoard = (req, res) => {
  nasaController.getPictureOfTheDay(req, res);
};

exports.apibBoard = (req, res) => {
  nasaController.getMarsPicture(req, res);  
};

exports.apicBoard = (req, res) => {
  nasaController.savePictureOfTheDate(req, res);
};

exports.apidBoard = (req, res) => {
  gisController.getCities(req, res);
};

exports.apieBoard = (req, res) => {
  gisController.getCitiesFilter(req, res);
};

exports.apifBoard = (req, res) => {
  gisController.getDepartmentFilter(req, res);
};

exports.apigBoard = (req, res) => {
  gisController.getLocalitiesFilter(req, res);
};
/* End of Personal Develop Area */

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content. You can´t access to another contents.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content. You can´t access to another contents.");
};
