import React, { useState } from "react";
import './Slider.css';
import PopUp from "./PopUp";

interface Props {
    images: string[];
}

const Slider: React.FC<Props> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [openImage, setOpenImage] = useState<string | null>(null);

    return (
        <div className="slideShow">
            <div className="slideImages">
                {images?.map((image, index) => {
                    return (
                        <img key={index} alt="slider image" className={currentImage === index ? 'slideImg fade' : 'slideImg slideImgHidden'} src={image} onClick={() => setOpenImage(image)} />
                    )
                })}
                <a className="prevImg" onClick={() => setCurrentImage(prevState => prevState === 0 ? images?.length - 1 : prevState - 1)}>{'<'}</a>
                <a className="nextImg" onClick={() => setCurrentImage(prevState => prevState === (images.length - 1) ? 0 : prevState + 1)}>{'>'}</a>
            </div>
            <div className="slideDots">
                {
                    images?.map((image, index) => (
                        <div key={index} className={`slideDot${currentImage === index ? ' slideSelected' : ''}`} onClick={() => setCurrentImage(index)} />
                    ))
                }
            </div>
            {
                openImage
                &&
                <PopUp image={openImage} setImage={() => setOpenImage(null)} />
            }
        </div>
    )
}

export default Slider;