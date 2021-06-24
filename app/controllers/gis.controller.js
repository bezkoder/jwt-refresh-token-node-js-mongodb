const axios = require('axios').default;
const querystring = require('querystring');
const apiKey = process.env.API_KEY;
const apodMongoService = require('../services/database/apod.mongo.service');

async function getCities(req, res){
    axios.get(`https://apis.datos.gob.ar/georef/api/provincias`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function getCitiesFilter(req, res){
    const query = {
        nombre: req.query.nombre
    };
    const axiosParams = querystring.stringify({...query});
    axios.get(`https://apis.datos.gob.ar/georef/api/provincias?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function getDepartmentFilter(req, res){
    const query = {
        provincia: req.query.provincia,
        max : 100,
        campos: "completo"
    };
    const axiosParams = querystring.stringify({...query});
    axios.get(`https://apis.datos.gob.ar/georef/api/departamentos?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function getLocalitiesFilter(req, res){
    const query = {
        provincia: req.query.provincia,
        max : 100
    };
    const axiosParams = querystring.stringify({...query});
    axios.get(`https://apis.datos.gob.ar/georef/api/localidades?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = {getCities, getCitiesFilter, getDepartmentFilter, getLocalitiesFilter};