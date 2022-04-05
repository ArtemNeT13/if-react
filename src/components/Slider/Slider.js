import React, {useState} from 'react';
import './Slider.css';
import data from './dataSlider';
import BtnSlider from './BtnSlider';
import SliderCard from './SliderCard/SliderCard';

export default function Slider () {

    const picturesOnView = 4;
    const [slideIndex, setSlideIndex] = useState(0)
    const nextSlide = () => {
        if (slideIndex < data.length - picturesOnView) {
            setSlideIndex(slideIndex + 1)
        };
    };

    const prevSlide = () => {
        if(slideIndex > 0){
            setSlideIndex(slideIndex - 1)
        }
    };

    return (
        <div className="container-slider">
            {
                data.slice(slideIndex, picturesOnView + slideIndex).map((obj, index) => {
                return (
                    <div className={"slide"} key = {index}>
                        <SliderCard {...obj}/>
                    </div>
                )
                })
            }
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
    )
};