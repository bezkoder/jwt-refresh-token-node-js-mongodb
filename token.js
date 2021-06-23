const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bodyparser = require('body-parser');
const user = {username : "user",password : "pass"}

app.use(bodyparser.json());

const checkToken = function (req,res,next)
{
    const header = req.headers['authorization'];
    if(typeof header !== 'undefined')
    {
       const bearer = header.split(' ');
       const token = bearer[1];
       req.token=token;
       next();
     }
     else
     {
        res.sendStatus(403);
     }
    }


app.post('/login',function (req,res)
{
    const { body } = req;
    const { username } = body;
    const { password } = body;

    if(username === user.username && password === user.password)
    {
        jwt.sign({user},'privatekey',{expiresIn : '1h'},function (err,token){
            if(err)
            {
                console.log(err)
            }
            console.log(token);
            res.end();
        });
    }
    else
    {
        console.log('Error : Could not log in');
    }
});

app.get('/data',checkToken,function(req,res)
{
    jwt.verify(req.token,'privatekey',function (err,authorizedata)
    {
        if(err)
        {
            console.log('Error : Could not connect to the protected route');
            res.sendStatus(403);
        }
        else
        {
            res.json({
                message : 'Successful log in',
                authorizedata
            });
            console.log('Success : Connected to protected route');
        }

    });

});

app.listen(3000,console.log("Server is running at 3000"));