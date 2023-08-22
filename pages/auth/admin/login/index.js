import React, { useState} from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { useForm } from "react-hook-form"
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function AdminLogin() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
const session = useSession()
const router = useRouter()
      const onSubmit = async (data) => {
        try {
          const res = await signIn("credentials", {
            ...data,
            redirect: false,
          })
          if (res.ok) {
            router.push('/admin')
          } else {
            console.log("error occured login");
          }
        } catch (err) {
          console.log(err);
        }
      };
      return (
    <div  className="w-screen h-screen flex justify-center items-center flex-col">
      <img  src="/assets/images/navbar-logo.png"/>
        <form className="items-start justify-start flex flex-col w-1/3 h-1/3 bg-white-DEFAULT-100 rounded-md" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-left fw-bold">E-mail</label>
          <input className="my-2 rounded-md px-4 py-2 w-full border border-gray-300"  {...register("email", {required: true})} />
            {errors.email && <span>E-mail zorunlu alandır.</span>}
        <label className="text-left fw-bold">Password</label>
          <input className="my-2 rounded-md px-4 py-2 w-full border border-gray-300" {...register("password", { required: true })} />
            {errors.password && <span>Şifre zorunlu alandır.</span>}
          <button type="submit" className="my-2 rounded-md px-4 py-2 w-full bg-blue-500 text-white">Giriş Yap</button>
        </form>
    </div>
        
      )
}