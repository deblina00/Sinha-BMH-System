//src/middleware/auth.js

import jwt from "jsonwebtoken";

// 1. Rename the function to protect
const protect = (req, res, next) => { 
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.admin = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token",
        });
    }
};

// 2. Export it as a named export instead of a default export
export { protect };