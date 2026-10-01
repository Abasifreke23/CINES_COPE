import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
export default function protectedRoutes() {
    // useEffect(()=>{
    //     const fetchProfile = async()=>{
    //         try {
    //             const response = await fetch ()
    //             const data = await response.json()
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchProfile()
    // })
    
    
    // const isAuthentication =false
    // if (!isAuthentication){
    //     return <navigation to ="/Login_detail" return/>
    // }

    const isAuth = JSON.parse(localStorage.getItem("token"))
    if(!isAuth){
        return<Navigate to="/loginpage"/>
    }

    return <Outlet/>
}