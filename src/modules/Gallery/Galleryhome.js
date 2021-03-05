import React, { Component } from "react";
import '../Gallery/gallery.style.scss'
import ContainerLayout from "globals/components/ContainerLayout";
import PIC1 from "../../assets/images/IMG-20191120-WA0138.jpg";
import PIC2 from "../../assets/images/IMG-20191120-WA0190.jpg";
import PIC3 from "../../assets/images/IMG-20191120-WA0184.jpg";
import PIC4 from "../../assets/images/IMG-20191120-WA0157.jpg";
import { ReactComponent as LeftSide } from "../../assets/images/arrow1.jpg";
import { ReactComponent as RightSide } from "../../assets/images/arrow2.jpg";

export default class Galleryhome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        PIC1,
        PIC2,
        PIC3,
        PIC4
      ],
      status: [
        "1111111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222",
        "22222222222222222222222",
        "33333333333333333333333",
        "44444444444444444444444"
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div style={{flex:1,padding:20}}>
        
        <div className="slider">
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
              {
                this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
                ))
              }
          </div>

          <LeftArrow
            goToPrevSlide={this.goToPrevSlide}
          />

          <RightArrow
            goToNextSlide={this.goToNextSlide}
          />
        </div>

        <div className="slider">
            <h1>{this.state.status[this.state.currentIndex]}</h1>
        </div>
                  
      </div>
    );
  }
}


const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}


const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      {/* <p style={{color:'black',paddingTop:10}}>Pervious</p> */}
      <LeftSide style={{width:20,height:20}}/>
    </div>
  );
}


const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
     {/* <p style={{color:'black',alignItems:'center',paddingTop:10}}>Next</p> */}
     <RightSide style={{width:20,height:20}}/>
    </div>
  );
}