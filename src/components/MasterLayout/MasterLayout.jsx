import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../footer/Footer"

export default function MasterLayout(){
       return (
       <>
       <Navbar/>
       
       <Outlet/>
       <Footer/>
       </>
       )
}