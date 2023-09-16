import React from 'react'
import logo from "../img/logo.png"
import das from "../img/dasboard.png"
import serch from "../img/search (1).png"
import profile from "../img/profileimg.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                <Link to="/" >
                    <img src={logo} alt="" />
                    </Link>
                </div>

                <div className="dasboard">
                    <div className="dasImg">
                        <img src={das} alt="" />
                    </div>
                    <h3>DASH BOARD</h3>
                </div>

                <div className="navInput">
                    <div className="inputSerch">
                        <input type="search" name="" id="" placeholder='Search' />
                    </div>
                    <div className="imgSerch">
                        <img src={serch} alt="" />
                    </div>
                </div>

                <div className="UploadPart">
                    <div className="uploadButton">
                        <Link to="/Upload" >
                        <button>UPLOAD</button>
                        </Link>
                    </div>
                    <div className="ProFilePart">
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
