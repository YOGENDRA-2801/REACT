import express from 'express';

const userRouter = express.Router() ;

userRouter.get('/', (req, res) => {
    // '/' => yaha jo bhi path daloge wah app.use() me jo auth.js k liye path dala hai usme append hoga
    // for example => app.use() me auth k liye yah dala /api/auth hence final route will be /api/auth as humne kuch add nahi kiya
    const demo = {
        shabd: "Demo Auth Text" , 
        ankh: 12345
    } ;
    res.json(demo) ;
})

export default userRouter;