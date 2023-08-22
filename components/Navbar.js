import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Navbar() {
const [show, setShow] = useState(false)
const { status, data } = useSession()
const router = useRouter()

const logOut = async () => {
    await router.push('/')
    await signOut()
}

    const showUser = () => {
       setShow(!show)
    }
    return (
        <div className="w-screen flex h-24 justify-between items-center bg-primary-DEFAULT-100">
            <div className="md:w-1/4 w-full flex justify-center">
            <img className=" mx-2" src="/assets/images/navbar-logo.png"/>
            </div>
            <div className=" w-full flex justify-center ">{data?.user?.data?.role === "admin" ? 
           null : 
            <p>Kategoriler</p>}</div>
           {status === "unauthenticated" ? <div className="md:w-1/4 w-full flex justify-center">
                <Link className="mx-2"  href="/auth/login">Login</Link> <span> | </span>
                <Link className="mx-2" href="/auth/register">Register</Link>
            </div> : 
            <div className="md:w-1/4 w-full flex justify-center" >
                <button className="mx-2" onClick={showUser}><AccountCircleIcon /></button>
                {!show && (
        <div className="absolute top-14 right-28 w-56 h-44 flex flex-col gap-2 bg-white-DEFAULT-300">
         <span className="flex row">{data?.user?.data?.fullname}</span>
         <span className="flex row">{data?.user?.data?.email}</span>
        </div>
      )}
                <button className="mx-2" onClick={logOut}><LogoutIcon/></button>
            </div>}
            
        </div>
    )
}