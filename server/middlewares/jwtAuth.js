const jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {

        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {

            if (err) res.status(403).json('token is not valid!');
            req.user = user;

            next();
        })
    } else {
        return res.status(401).json('you are not authenticated!')
    }
}

module.exports = auth




















// const jwt = require('jsonwebtoken');

// const authJwt = (req, res, next) => {
//     let header = req.headers['authorization']
//     if (header) {
//         var payload;
//         jwt.sign(header, process.env.JWT_SECRET_KEY, (err, authData) => {
//             if (!err) {
//                 payload = authData;
//                 req['payload'] = payload;
//                 next();
//             } else {
//                 return res.json({
//                     'status': 'err',
//                     'reason': 'Header Mismatched'
//                 })
//             }
//         })
//     } else {
//         return res.json({
//             'status': 'err',
//             'reson': 'Header Token Missing'
//         })
//     }
// }

// module.exports = authJwt