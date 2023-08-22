import SideBar from "../components/SideBar"
import AuthRedirect from "@/components/Layout"
export default function Categories() {

    return (
        <AuthRedirect allowedRoles={["admin"]} >
            <div className="flex col w-full h-screen">
                <div>
                <button className="bg-primary-DEFAULT-600 text-white-DEFAULT-100 px-4 py-1 rounded-md">Kategori Ekle</button>
                </div>
                <div className="flex flex-row w-full h-full justify-end items-center">
                        Kategori Alanı
            </div>
        </div>
        </AuthRedirect>
    
    )
}