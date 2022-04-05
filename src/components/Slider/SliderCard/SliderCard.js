import React from 'react'

export default function SliderCard (obj) {

    return (
        <>
            <img
                src={obj.imageUrl}
                alt={'picture'}
            />
            <p>{obj.name}</p>
            <p><span>{obj.city}, {obj.country}</span></p>
        </>
    )
};
