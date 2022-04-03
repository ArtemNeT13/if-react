import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import data from './dataSlider'

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)

    console.log(slideIndex)
    console.log(setSlideIndex)

    const nextSlide = () => {
        if(slideIndex < data.length - 4){
            setSlideIndex(slideIndex + 1)
        }
    }

    const prevSlide = () => {
        if(slideIndex > 0){
            setSlideIndex(slideIndex - 1)
        }
    }

    return (
        <div className="container-slider">
            {
                data.slice(slideIndex, 4 + slideIndex).map((obj, index) => {
                return (
                    <div className={"slide"}
                        key={obj.id}
                        // className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={obj.imageUrl}
                            alt={'picture'}
                        />
                        <p>{obj.name}</p>
                        <p><span>{obj.city}, {obj.country}</span></p>
                    </div>
                )
                })
            }
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
    )
}