import axios from "axios";
import Footer from "../components/Footer";
import HomePost from "../components/HomePost";
import Navbar from "../components/Navbar";
import { URL } from "../url";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContext";


const Home = () => {

    const {search}=useLocation()
    // console.log(search)

    const[posts,setPosts]=useState([])
    const [noResult,setNoResult] =useState(false)
    const [loader,setLoader] = useState(false)
    const {user}=useContext(UserContext)
    // console.log(user)

    const fetchPosts=async()=>{
        setLoader(true)
        try {
            const res = await axios.get(URL+"/api/posts"+search)
            // console.log(res.data)
            setPosts(res.data)
            if(res.data.length===0){
                setNoResult(true)
            }
            else{
                setNoResult(false)
            }
            setLoader(false)
        } catch (err) {
            console.log(err)
            setLoader(true)
        }
    }

    useEffect(()=>{
        fetchPosts()
    },[search])


    return(
        <>
        <Navbar/>
    <div className="px-8 md:px-[200px] min-h-[80vh]">
    {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResult?posts.map((post)=>(
        <>
        <Link to={user?`/posts/post/${post._id}`:"/login"}>
        <HomePost key={post._id} post={post} />
        </Link>
        </>
        
    )):<h3 className="text-center font-bold mt-16">No Posts Available</h3>}
    </div>
    <Footer/>
    </>
    )
}
export default Home;