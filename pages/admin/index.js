import AuthRedirect from "@/components/Layout"

export default function Dashboard() {
  return (
    <AuthRedirect allowedRoles={["admin"]}>
     <div className="flex col w-full h-screen ">
      <h1>Dashboard</h1>
      <ul>
        <li>Son Kayıt Olan Kullanıcılar</li>
        <li>En Son eklenen Bloglar</li>
        <li>En Çok like alan Bloglar</li>
      </ul>
      </div>
    </AuthRedirect>
  )
}
