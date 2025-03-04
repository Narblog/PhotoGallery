import React from "react";
import "./App.css";
import { SliderContext } from "./SliderContext";

class TemiLine extends React.Component{
    static contextType=SliderContext
    render(){
        const {photos,currentIndex,onUpdate}=this.context
        return <div className="photo-list">
            {
                photos.map((elm,index)=>{
                    let activeimg=index===currentIndex?"active":null
                    return <img key={index} src={elm} className={activeimg} onClick={()=>onUpdate(index)}/>
                })
            }
        </div>
    }
}
export default TemiLine