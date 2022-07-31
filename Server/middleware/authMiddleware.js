const jwt=require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    console.log("AUTH MIDDLEWARE",req.headers.authorization)
    if(req.headers.authorization){
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.userID = decoded.id;
            next();

        } catch (err) {
            return res.status(401).json({ error: "Unauthorized Access !" });
        }


    }else{
        return res.status(401).json({ error: "Unauthorized Access, No Token Found" });
    }
    
   
}


module.exports = authMiddleware;