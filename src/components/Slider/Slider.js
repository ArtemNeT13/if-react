import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import data from './dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    // console.log(slideIndex)
    console.log(setSlideIndex)

    const nextSlide = () => {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === data.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(data.length)
        }
    }

    return (
        <div className="container-slider">
            {data.map((obj, index) => {
                return (
                    <div className={"slide"}
                        // key={obj.id}
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
                }).slice(0,4)
            }
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
    )
}