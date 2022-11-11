import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyToken.js';
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user, you are logged in")
});

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user, you are logged in and you can delete your account")
});


//UPDATE
router.put("/:id",updateUser)

//DELETE
router.delete("/:id",deleteUser)

//GET
router.get("/:id",getUser)

//GET ALL
router.get("/",getAllUsers)

export default router;