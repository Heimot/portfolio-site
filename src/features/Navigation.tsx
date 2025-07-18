import { useState } from 'react';
import reactImg from '../assets/react.svg';
import './Navigation.css';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { t, i18n } = useTranslation();
    const currLanguage = i18n.language;

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <nav>
                <div className='navLogoMenu'>
                    <img src={reactImg} alt="logo" className='navLogo' />
                    <span className='navLogoText'>Joonas Heimonen</span>
                </div>
                <div className="navLinks">
                    <a href='#about-me' className="navLinkItem">{t('navigation.previousWork')}</a>
                    <a href='#skills' className="navLinkItem">{t('navigation.skills')}</a>
                    <button className="navLinkItem langBtn" onClick={() => currLanguage.includes("fi") ? changeLanguage("en") : changeLanguage("fi")}>
                        <span className={currLanguage.includes("fi") ? "boldLang" : ""}>FI</span>
                        /
                        <span className={currLanguage.includes("en") ? "boldLang" : ""}>EN</span>
                    </button>
                    <a href='#contact' className="navContact navLinkItem">{`${t('navigation.contactMe')} ->`}</a>
                </div>
                <button className={`navBurgerMenu${isOpen ? ' navRotate' : ''}`} onClick={() => setIsOpen(prevState => !prevState)} />
            </nav>
            {isOpen
                &&
                <div className={`navMenuLinks${isOpen ? ' navMenuLinksOpen' : ''}`}>
                    <a href='#about-me' className="navMenuItem">{t('navigation.previousWork')}</a>
                    <a href='#skills' className="navMenuItem">{t('navigation.skills')}</a>
                    <button className="navMenuItem langBtn mobileLangBtn" onClick={() => currLanguage.includes("fi") ? changeLanguage("en") : changeLanguage("fi")}>
                        <span className={currLanguage.includes("fi") ? "boldLang" : ""}>FI</span>
                        /
                        <span className={currLanguage.includes("en") ? "boldLang" : ""}>EN</span>
                    </button>
                    <a href='#contact' className="navMenuItem">{`${t('navigation.contactMe')} ->`}</a>
                </div>
            }
        </div>
    )
}

export default Navigation;