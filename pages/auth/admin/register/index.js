import React, { useState} from 'react'
import { useForm } from "react-hook-form"
import { registerApi } from '@/services/auth/register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

export default function AdminRegister() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const router = useRouter()

      const onSubmit = async (data) => {
        let refferenceCode = "inklusive-admin2315"
        try {
            if(data.refferenceCode !== refferenceCode) {
                toast.error("Admin Kaydı için Yetkili Verilmedi!")
                return
            } else {
                registerApi({...data, role: "admin"}).then((res) => {
                    if( res.status === 201) {
                       toast.success("Kaydınız başarı ile alınmıştır. Giriş sayfasına yönlendiriliyorsunuz!")
                       setTimeout(() => {
                        router.push("/auth/admin/login")
                       }, 2000)
                    } else {
                        toast.danger("Kayıt işlemi başarısız oldu. Lütfen farklı bir e-mail ile kayıt olmayı deneyiniz.")
                    }
                })
            }
           
        } catch (err) {
            toast.danger("Bilinmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.")
            console.log(err);
        }
      };

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col" >
            <ToastContainer/>
            <div className="flex flex-col items-start justify-center w-1/3">
            <h1 className="text-4xl mb-4">Admin Sing Up</h1>
            <p className="mb-6">Enter your email, full name and password to create an account.</p>
            </div>
            
            <form className="items-start justify-start flex flex-col w-1/3 h-1/3 bg-white-DEFAULT-100 rounded-md"  onSubmit={handleSubmit(onSubmit)}>
            <label className="text-left fw-bold">Refference Code</label>
                <input className="my-2 rounded-md px-4 py-2 w-full border border-gray-300" {...register("refferenceCode", {required: true})} placeholder="Refference Code"  />
                    {errors.email && <span>E-mail zorunlu alandır.</span>}
                <label className="text-left fw-bold">Full Name</label>
                <input className="my-2 rounded-md px-4 py-2 w-full border border-gray-300" {...register("fullname", {required: true})} placeholder="Fullname"  />
                    {errors.email && <span>E-mail zorunlu alandır.</span>}
                <label className="text-left fw-bold">E-mail</label>
                <input className="my-2 rounded-md px-4 py-2 w-full border border-gray-300"  {...register("email", {required: true})} placeholder="E-mail" />
                    {errors.email && <span>E-mail zorunlu alandır.</span>}
                <label className="text-left fw-bold">Password</label>
                <input className="my-2 rounded-md px-4 py-2 w-full border border-gray-300" {...register("password", { required: true })} placeholder="Password" type="password"  />
                    {errors.password && <span>Şifre zorunlu alandır.</span>}
                <button className="my-4 px-4 py-2 w-full bg-blue-500 text-white-DEFAULT-200 rounded-md" type="submit">Kayıt Ol</button>
        </form>
        </div>
    )
}