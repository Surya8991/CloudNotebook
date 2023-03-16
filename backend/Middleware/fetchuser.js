const jwt=require('jsonwebtoken')
let jwt_Secret_Key="D3m0Nk1Ng"
const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token){
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data=jwt.verify(token,jwt_Secret_Key)
        res.user=data.user
        next()
        
    } catch (error) {
        console.error(error.message);
        res.status(401).send({ error: "Please authenticate using a valid token" })
      }
}
module.exports=fetchuser