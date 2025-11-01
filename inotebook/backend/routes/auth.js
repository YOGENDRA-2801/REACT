import express from "express";
import User from "../models/User.js";
import { query, body, validationResult } from "express-validator";

const userRouter = express.Router();

/* 
    userRouter.get('/', (req, res) => {
        // '/' => yaha jo bhi path daloge wah app.use() me jo auth.js k liye path dala hai usme append hoga
        // for example => app.use() me auth k liye yah dala /api/auth hence final route will be /api/auth as humne kuch add nahi kiya
        console.log(req.body) ; // req.body ek object hai, function nahi. Parentheses () mat lagana.
        res.json(req.body) ;
    })
*/

// Creating User -- POST Request ; Authentication not required
userRouter.post(
  "/",
  [
    body("email", "Invalid Format").isEmail(),
    body("name", "Too short name").isLength({ min: 3 }),
    body("password", "Too Weak Password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const result = validationResult(req) ;
    if (result.isEmpty()) {
      /*
        *const user = User(req.body); 
        *user.save();
      */ 
      User.create({
        name: req.body.name ,
        email: req.body.email,
        password: req.body.password
      })
      .then(insaan => res.json(insaan))
      .catch(galti => {
        console.log(galti)
        res.json({error: 'Validation passed but kuch aur gadbad', message: galti.message})
      })
      return ;
    }
    res.status(400).json({ errors: result.array(), message: "Kuch to gadbad hai daya" });
  }
);

export default userRouter;
