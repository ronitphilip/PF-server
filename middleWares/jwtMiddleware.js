const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    console.log("Inside jwtMiddleware");

    // Logic to authorize user
    const token = req.headers["authorization"].split(" ")[1]; // Fixed the way to access the 'authorization' header
    console.log(token);
    if (token) {
        //verify
        try{
            const jwtResponse = jwt.verify(token,process.env.JWTPASSWORD)
            console.log(jwtResponse);
            req.userId = jwtResponse.userId
            next() 
        }catch{
            res.status(401).json("Authorisation failed...please login")
        }
    } else {
        res.status(404).json("Authorization failed....Token is missing!!!!");
    } 
}

module.exports = jwtMiddleware;