import React from 'react'
import Home from '../img/home (1).png'
import TREND from '../img/trend.png'
import FAV from '../img/fav (1).png'
import setting from '../img/setting.png'
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <>
            <div className="Side" >
                <div className="sidebar">
                    <div className="Home">
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                            <div className="ImgSidebar">
                                <img src={Home} alt="" />
                            </div>
                            <p>Home</p>
                        </Link>
                    </div>

                    <div className="Home">
                        <Link to="/Treanding" style={{ textDecoration: "none", color: "black" }}>
                            <div className="ImgSidebar">
                                <img src={TREND} alt="" />
                            </div>
                            <p>TREND</p>
                        </Link>
                    </div>

                    <div className="Home">
                        <Link to="/fav" style={{ textDecoration: "none", color: "black" }}>
                            <div className="ImgSidebar">
                                <img src={FAV} alt="" />
                            </div>
                            <p>FAV.</p>
                        </Link>
                    </div>
                </div>

                <div className="Setting">
                    <div className="Home">
                        <div className="ImgSidebar">
                            <img src={setting} alt="" />
                        </div>
                        <p>Setting</p>
                    </div>
                </div>
            </div>

        </>
    )
}
