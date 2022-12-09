import React from "react"
import { Link } from "react-router-dom"
import Business from "./Business"


function Home(){
    return(
    <div className='header'>
    <div className='title'>
      <h1>Javier Rodriguez </h1>
      <h2>Software Engineer</h2>
      <Link className="link"  to="business">Business</Link>
      <Link className="link" to="personal">Personal</Link>
    </div>
   </div>
   )
}
export default Home