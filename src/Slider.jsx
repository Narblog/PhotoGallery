import React from "react"
import "./App.css"
import TemiLine from "./TemiLine"
import { SliderContext } from "./SliderContext"
class Slider extends React.Component{
    static contextType=SliderContext
    render(){
        const {photos,currentIndex,onNext,onPrev,onUpdate}=this.context
        const mainPhoto=photos[currentIndex]
        return(
            <div className="slider">
                <img className="image" src={mainPhoto}/>
                <div>
                <button onClick={onPrev}>Prev</button>
                <button onClick={onNext}>Next</button>
                </div>
               <TemiLine />
            </div>
        )
    }
}
export default Slider