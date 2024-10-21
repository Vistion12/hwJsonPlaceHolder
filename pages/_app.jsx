import { Header } from "../components/Header";
import '../styles/global.css';

export default function MyApp({ Component, pageProps }){
    return <> 
    <Header/>
    <Component {...pageProps} />
    <hr />
    <p>подвал</p> 
    </>   
  }