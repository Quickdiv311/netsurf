import React,{useState, useEffect} from 'react';
import './slider.scss';
import {SlideData} from './slide.data';
// import {BiRightArrow,BiLeftArrow} from 'react-icons/bi';

const Slider = ({slides}) => {

    const [current, setCurrent ] = useState(0);
    const length = slides.length;

    // const nextSlide = () => {
    //     setCurrent(current === length-1 ? 0 : current + 1)
    // }

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length-1 : current-1)
    // }

    useEffect(() => {
       setTimeout(() => {
        setCurrent(current === 2 ? 0 : current + 1)
       },3000)
    },[current])

    if(!Array.isArray(slides) || length<=0)
    {
        return null;
    }

    return (
        <section className="slider">
            {/* <BiLeftArrow className="left-arrow" onClick={nextSlide}/>
            <BiRightArrow className="right-arrow" onClick={prevSlide}/>       */}
                {
                SlideData.map((slide,idx) => (
                    <div className={idx === current ? 'slide active' : 'slide'}>
                        {
                            idx === current && (<img src={slide.image} alt='' className="image"/>)
                        }
                    
                    </div>
                ))
            }
        </section>

    )
}

export default Slider
