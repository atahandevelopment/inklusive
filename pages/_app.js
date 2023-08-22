import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Navbar from '@/components/Navbar'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Navbar/>
      <Component className= "flex w-screen h-screen justify-center" {...pageProps} />
    </SessionProvider>
  )
}