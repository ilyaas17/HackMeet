import jwt from 'jsonwebtoken';

export const authAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(403).json({ message: 'No token provided, access denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.adminId = decoded.id;  // Store the admin ID from the token
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};
