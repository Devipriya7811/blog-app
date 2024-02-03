import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";



const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()



    const handleLogin = async() =>{
        try {
            const res = await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
            // console.log(res.data)
            setUser(res.data)
            navigate("/")

        } catch (err) {
            setError(true)
            console.log(err)
        }
    }
    return(
        <>
        <div className="flex item-center justify-between px-6 md:px-[200px]py-4">
        <h1 className="text-lg md:text-xl font-extrabold pt-8"><Link to="/">Blog Market</Link></h1>
        <h3 className="pr-9 pt-8 font-bold"><Link to="/register">Register</Link></h3>
        </div>
        <div className="w-full flex justify-center items-center h-[70vh]">
            <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                <h1 className="text-xl font-bold text-left">Login to your account</h1>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter your email" className="w-full px-4 py-2 border-2 border-black outline-0"/>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password" className="w-full px-4 py-2 border-2 border-black outline-0"/>
                <button onClick={handleLogin} className="w-full px-3 py-3 text-l font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">LOGIN</button>
                {error && <h3 className="text-red-500 tex-sm">Something wrong</h3>}
                <div className="flex justify-center items-center space-x-3">
                    <p>New Here?</p>
                    <p className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Login; 