import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import SideBar from "../pages/admin/components/SideBar"

export default function AuthRedirect({ allowedRoles, children }) {
  const session = useSession();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true); // Kontrol sürecini izlemek için state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChecking(false);
    }, 500);

    return () => clearTimeout(timer); // Temizleme işlemi
  }, []);

  useEffect(() => {
    if (!isChecking) {
      if (!session.data) {
        // Oturum açılmamışsa giriş sayfasına yönlendir
        router.push("/auth/login");
      } else {
        const userRole = session.data.user.data.role;

        if (allowedRoles.includes(userRole)) {
            return
        } else {
          router.push("/");
        }
      }
    }
  }, [isChecking, session]);

  return (
    <div className="w-screen flex">
      <SideBar/>
      <div className="w-10/12">{children}</div>
    </div>
  )
}
