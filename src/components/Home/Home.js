import React, { useRef } from 'react'
import About from '../About/About';
import Banner from '../Banner/Banner';
import {Link} from "react-router-dom"
import './Home.css';
const Home = () => {
    const footer = useRef(null);
    const about = useRef(null);
    const home = useRef(null)
    const scrollDown = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
      };
  return (
    <div>
        <header ref={home}>
            <nav>
                <div className="left"><h2>Players Info</h2></div>
                <div className="right">
                    <span onClick={()=>scrollDown(home)}>Home</span>
                    <Link to="/playerlist"><span>Players List</span></Link>
                    <span  onClick={()=>{scrollDown(about)}}>About</span>
                </div>
            </nav>
        </header>
        <div className="content">
            <Banner />
        </div>
        <hr/>
        <div ref={about}><About /></div>
        <hr/>
        <div ref={footer}><footer>2022 Copyright Inc</footer></div>
    </div>
  )
}

export default Home
