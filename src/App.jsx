import React from "react"
import './App.css'
import Slider from "./Slider"
import { SliderContext } from "./SliderContext"

class App extends React.Component{
  state={
    photos:[
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
     "https://iso.500px.com/wp-content/uploads/2019/07/stock-photo-maderas-312058103.jpg"
    ],
    currentIndex:0
  }
   goNext=()=>{
    this.setState(state=>{
      const prevState={...state}
      if(prevState.currentIndex<prevState.photos.length-1){
        prevState.currentIndex++
      }else{
        prevState.currentIndex=0
      }
      return prevState
    })
   }
   goPrev=()=>{
    this.setState(state=>{
      const prevState={...state}
      if(prevState.currentIndex<=0){
        prevState.currentIndex=prevState.photos.length-1
      }
      else{
        prevState.currentIndex--
      }
      return prevState
    })
   }
   setActivePicte=(index)=>{
    this.setState({currentIndex:index})
   }
  render(){
    const props={
      ...this.state,
      onNext:this.goNext,
      onPrev:this.goPrev,
      onUpdate:this.setActivePicte
    }
    return<>
    <SliderContext.Provider value={props}>
    <Slider />
    </SliderContext.Provider>
   
    </>
  }
  

}


export default App
