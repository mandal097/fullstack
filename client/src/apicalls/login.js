import { Axios } from "../axios";
import { loginFailure, loginStart, loginSuccesst } from "../redux/userRedux"

export const login = async (dispatch , user) => {
    dispatch(loginStart());
    try {
        const res = await Axios.post('/user/login', user);
        dispatch(loginSuccesst(res.data.data))
        localStorage.setItem('token' , res.data.token)
    } catch (error) {
        dispatch(loginFailure())
    }
}