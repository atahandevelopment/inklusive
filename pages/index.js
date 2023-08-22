import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Cookies from 'js-cookie'


export default function Home() {
const session = useSession()
  useEffect(() => {
  Cookies.set('access', session?.data?.user?.accessToken)
  Cookies.set('refresh', session?.data?.user?.refreshToken)
  },[])

  return (
   
      <div className= "flex w-screen h-screen justify-center">
      <div className="flex w-2/3 justify-center items-center">
            <h1>Anasayfa</h1>
      </div>
    </div>
  )
}
