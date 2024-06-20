import express from "express"
import User from "../models/Users.js"

const router = new express.Router();

router.post('/login', async (req, res) => {
    try {
        const dbUser = await User.findOne({email: req.body.email});
        
        // existing user with email
        if (!dbUser) {
            return res.send('Check email!');
        }

        
        // password match
        if (dbUser.password !== req.body.password) {
            return res.send('Check password!');
        }

        // send all the user data
        res.send(dbUser);

    } catch (error) {
     console.log(error);   
    }
});


router.get('/', async (req, res) => {
    const result = await User.find({});
    res.send(result);

});


export default router