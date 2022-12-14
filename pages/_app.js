import '../styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { SessionProvider} from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return ( 
  <SessionProvider session={session}>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </SessionProvider>
  ) 
}

export default MyApp
