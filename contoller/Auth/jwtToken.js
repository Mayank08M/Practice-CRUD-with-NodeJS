// const jwt = require('jsonwebtoken');

// const secretKey = 'abcd';

// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     console.log(authHeader)
//     const token = authHeader && authHeader.split(' ')[1];
//     if (token == null) return res.sendStatus(401); // Unauthorized

//     jwt.verify(token, secretKey, (err, user) => {
//         if (err) return res.sendStatus(403); // Forbidden
//         req.user = user;
//         next();
//     });
// };

// module.exports = authenticateToken;