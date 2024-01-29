import React from 'react';
import './PopUp.css';

interface Props {
    image: string | null;
    setImage: () => void;
}

const PopUp: React.FC<Props> = ({ image, setImage }) => {
    return (
        <div className='popupBackgroundBlocker'>
            <div className="popup">
                <div className='popupHeader'>
                    <button className='popupButton' onClick={() => setImage()}>X</button>
                </div>
                <div>
                    <img alt="popupImage" className="popupImage" src={image as string} />
                </div>

            </div>
        </div>
    )
}

export default PopUp;