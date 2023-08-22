import AuthRedirect from "@/components/Layout"

export default function Banners() {
    return (
      <AuthRedirect allowedRoles={["admin"]} >
        <div className="flex  w-full h-screen justify-center bg-black-DEFAULT-400">
          <h1>Banners</h1>
        </div>
        </AuthRedirect>
  )
}