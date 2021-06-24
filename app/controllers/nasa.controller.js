const axios = require('axios').default;
const querystring = require('querystring');
const apiKey = process.env.API_KEY;
const apodMongoService = require('../services/database/apod.mongo.service');

async function getIndex(req, res){
    res.json({message: 'This is the Nasa root route'});
}

async function getPictureOfTheDay(req, res){
    const query = {
        start_date: req.query.start_date,
        end_date: req.query.end_date
    };
    const axiosParams = querystring.stringify({api_key: apiKey, ...query});
    console.log(axiosParams);
    axios.get(`https://api.nasa.gov/planetary/apod?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function getMarsPicture(req, res){
    const query = {
        earth_date: req.query.earth_date
    };
    const axiosParams = querystring.stringify({api_key: apiKey, ...query});
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function savePictureOfTheDate(req, res){
    const query = {
        date: req.query.date
    };
    const axiosParams = querystring.stringify({api_key: apiKey, ...query});
    console.log(axiosParams);
    axios.get(`https://api.nasa.gov/planetary/apod?${axiosParams}`)
        .then((response) => {
            savePictureOfTheDay(response.data, res);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function savePictureOfTheDay(req, res){
    const response = await apodMongoService.saveNasa(req);
    res.json(response);
}

module.exports = {getIndex, getPictureOfTheDay, getMarsPicture, savePictureOfTheDay, savePictureOfTheDate};