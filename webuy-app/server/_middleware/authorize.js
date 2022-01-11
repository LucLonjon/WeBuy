const jwt = require('express-jwt');
const { secret } = require('../models/config.json');
const db = require('../models/database');
const DataUser = require('../models/data_user').DataUser;
module.exports = authorize;

function authorize() {
    return [
        // authenticate JWT token and attach decoded token to request as req.user
        jwt({ secret, algorithms: ['HS256'] }),

        // attach full user record to request object
        async (req, res, next) => {
            console.log.req
            // get user with id from token 'sub' (subject) property
            const user = await DataUser.findByPk(req.user.sub);
            
            // check user still exists
            if (!user)
                return res.status(401).json({ message: 'Unauthorized' });

            // authorization successful
            req.user = user.get();
            next();
        }
    ];
}