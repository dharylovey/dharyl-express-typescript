import  express  from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/auth.route";


const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router