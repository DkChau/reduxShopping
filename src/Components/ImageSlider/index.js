import React, {useState, useEffect , useRef} from 'react'
import { SlideImages } from './SlideData';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import uniqid from 'uniqid'
import { 
    SliderContainer,
    SliderWrapper,
    Slider,
    SlideImg,
    LinkWrapper,
    ShopLink,
} from './SliderElements';

const ImageSlider = () => {

    const [slideNum,setSlideNum] = useState(0);
    const length = 5;

    const nextSlide = () => {
        setSlideNum(slideNum===4 ? 0 : slideNum+1)
    }

    const prevSlide = () =>{
        setSlideNum(slideNum===0 ? length-1 : slideNum-1)
    }

    const timeoutRef = React.useRef(null);

    function resetTimeout() {    
        if (timeoutRef.current) {     
             clearTimeout(timeoutRef.current);    
        }  
    }
    useEffect(()=>{
        resetTimeout();

        timeoutRef.current=setTimeout(()=>{
            nextSlide()
        },2500)
        
        return()=>{
            resetTimeout();
        }
    },[slideNum])

    return (
        <SliderContainer>
            <SliderWrapper>
                <Slider>
                    <FaArrowLeft onClick={prevSlide}></FaArrowLeft>
                    {SlideImages.map((slide,index)=>{
                        return (
                            <SlideImg
                            key={uniqid()} 
                            className={index===slideNum ? 'active' : 'hidden'} 
                            src={slide.Img}></SlideImg>
                        )
                    })}
                    <FaArrowRight onClick={nextSlide}></FaArrowRight>
                </Slider>
                <LinkWrapper to='/shop'>
                    <ShopLink>View Catalog</ShopLink>
                </LinkWrapper>
            </SliderWrapper>
        </SliderContainer>
    )
}

export default ImageSlider
