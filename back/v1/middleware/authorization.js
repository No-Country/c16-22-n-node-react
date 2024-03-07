const jwt = require('jsonwebtoken')
const User = require('../../database/models/user')
const Professional = require("../../database/models/professional");

const protect = async (req, res, next) => {
    let token;

    
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (req.headers['x-type'] === 'professional') {
                const user = await Professional.findById(decoded.id).select(
                  "-password"
                );
                req.user = user;
                next();
            } else {
                const user = await User.findById(decoded.id).select("-password");
                req.user = user;
                next();            
            }
                      
        } catch(error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token")
    }
};

module.exports = { protect }