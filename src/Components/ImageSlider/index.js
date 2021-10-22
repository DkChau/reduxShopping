import React, {useState, useEffect , useRef} from 'react'
import { SlideImages } from './SlideData';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import {BsArrowRight} from 'react-icons/bs';
import uniqid from 'uniqid'
import { 
    SliderContainer,
    SliderWrapper,
    Slider,
    SlideImg,
    LinkWrapper,
    ShopLink,
    IconWrapper,
    ArrowWrapper,
    Arrow,
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
                    <IconWrapper>
                        <FaArrowLeft onClick={prevSlide}></FaArrowLeft>
                    </IconWrapper>
                    {SlideImages.map((slide,index)=>{
                        return (
                            <SlideImg
                            key={uniqid()} 
                            className={index===slideNum ? 'active' : 'hidden'} 
                            src={slide.Img}></SlideImg>
                        )
                    })}
                    <IconWrapper>
                        <FaArrowRight onClick={nextSlide}></FaArrowRight>
                    </IconWrapper>
                </Slider>
                <LinkWrapper  to='/shop'>
                    <ArrowWrapper>
                        <ShopLink>View Catalog</ShopLink>
                        <Arrow>
                            <BsArrowRight/>
                        </Arrow>
                    </ArrowWrapper>
                </LinkWrapper>
            </SliderWrapper>
        </SliderContainer>
    )
}

export default ImageSlider