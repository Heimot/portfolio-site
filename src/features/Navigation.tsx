import { useState } from 'react';
import reactImg from '../assets/react.svg';
import './Navigation.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <nav>
                <div className='navLogoMenu'>
                    <img src={reactImg} alt="logo" className='navLogo' />
                    <span className='navLogoText'>Joonas Heimonen</span>
                </div>
                <div className="navLinks">
                    <a href='#about-me' className="navLinkItem">Aikaisemmat työt</a>
                    <a href='#skills' className="navLinkItem">Taidot</a>
                    <a href='#contact' className="navContact navLinkItem">{'Ota yhteyttä ->'}</a>
                </div>
                <button className={`navBurgerMenu${isOpen ? ' navRotate' : ''}`} onClick={() => setIsOpen(prevState => !prevState)} />
            </nav>
            <div className={`navMenuLinks${isOpen ? ' navMenuLinksOpen' : ''}`}>
                <a href='#about-me' className="navMenuItem">Aikaisemmat työt</a>
                <a href='#skills' className="navMenuItem">Taidot</a>
                <a href='#contact' className="navMenuItem">{'Ota yhteyttä ->'}</a>
            </div>
        </div>
    )
}

export default Navigation;