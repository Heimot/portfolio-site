import './Information.css'
import Slider from './components/Slider';
import loginimg from '../assets/login.png';
import dashboardimg from '../assets/dashboard.png';
import dashboardmenuimg from '../assets/dashboardMenu.png';
import dashboardnavigationimg from '../assets/dashboardNavigation.png';
import kuva1 from '../assets/Kuva1.png';
import kuva2 from '../assets/Kuva2.png';
import kuva3 from '../assets/Kuva3.png';
import kuva4 from '../assets/Kuva4.png';
import kuva5 from '../assets/Kuva5.png';
import kuva6 from '../assets/honeywell1.png';
import kuva7 from '../assets/honeywell2.png';
import { useTranslation } from 'react-i18next';

const Information = () => {
    const { t } = useTranslation();

    return (
        <section id='about-me' className="infMenu">
            <div className="infLogoMenu">
                <span className='infLogo'>{'#'}</span>
                <h1 className='infLogoMenuTitle'>{t('information.title')}</h1>
                <span className='infLogoMenuText'>{t('information.subTitle')}</span>
            </div>
            <div className='infMenuItem'>
                <Slider images={[loginimg, dashboardimg, dashboardmenuimg, dashboardnavigationimg]} />
                <span className='infMenuText' style={{ paddingLeft: '50px' }}>
                    <span className='infMenutitle'>{t('information.first.infoTitle')}</span><br />
                    {t('information.first.infoText')}
                    <br />
                    <br />
                    {t('information.first.secondInfoText')}
                </span>
            </div>
            <div className='infMenuItem'>
                <span className='infMenuText' style={{ paddingRight: '50px' }}>
                    <span className='infMenutitle'>{t('information.second.infoTitle')}</span><br />
                    {t('information.second.infoText')}
                    <br />
                    <br />
                    {t('information.second.secondInfoText')}
                </span>
                <Slider images={[kuva6, kuva7]} />
            </div>
            <div className='infMenuItem'>
                <Slider images={[kuva1, kuva2, kuva3, kuva4, kuva5]} />
                <span className='infMenuText' style={{ paddingLeft: '50px' }}>
                    <span className='infMenutitle'>{t('information.third.infoTitle')}</span><br />
                    {t('information.third.infoText')}
                    <br />
                    <br />
                    {t('information.third.secondInfoText')}
                </span>
            </div>
        </section>
    )
}

export default Information;