import React from 'react'
import SideBar from './SideBar'
import VideoList from './VideoList ';


export default function WrapComp() {
  return (
    <>

    <div className="WrapComp">
        <SideBar/>
        <VideoList/>
    </div>
      
    </>
  )
}
