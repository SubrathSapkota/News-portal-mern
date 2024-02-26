import jwt from "jsonwebtoken";

export const jwtAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorize" });

  try {
    const decodedjwt = jwt.verify(token, process.env.JWT_SECRET);

    req.userPayload = decodedjwt;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "invalid token" });
  }
};


export const generateToken=(userData)=>{
    return jwt.sign(userData,process.env.JET_SECRET )
}