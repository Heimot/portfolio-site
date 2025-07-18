import { useTranslation } from 'react-i18next';
import './MainMenu.css';

interface StyleDiv {
    _id: number;
    type: string;
    amount: DotDiv[];
}

interface DotDiv {
    _id: string;
    type: string;
}

const MainMenu = () => {
    const { t } = useTranslation();
    const dotsImage = (width: number, height: number) => {
        const divGenerated: StyleDiv[] = [];
        for (let i = 0; i < width; i++) {
            divGenerated.push({ _id: i, type: 'mainImageListItem', amount: [] })
            for (let j = 0; j < height; j++) {
                divGenerated[i]?.amount?.push({ _id: `${i}${j}`, type: 'mainImageDot' })
            }
        }
        return (
            <div className='mainImageList'>
                {
                    divGenerated?.map((item) => (
                        <div key={item?._id} className={item?.type}>
                            {
                                item?.amount?.map((type: any) => (
                                    <div key={type?._id} className={type?.type} />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div className='mainmenu'>
            <div className='mainText'>
                <h1 className='mainTextTitle'>{t('mainMenu.title')}</h1>
                <h1 className='mainTextTitle'>{t('mainMenu.footer')}</h1>
                <p className='mainTextInformation'>{t('mainMenu.subFooter')}</p>
                <div>
                    <button className='mainTextButton' onClick={() => { location.href = `${location.origin, location.pathname}#contact` }}>{t('mainMenu.contactBtn')}</button>
                    <button className='mainTextButton' onClick={() => { location.href = `${location.origin, location.pathname}#about-me` }}>{t('mainMenu.aboutMeBtn')}</button>
                </div>
            </div>
            <div className='mainImage'>
                <div className='mainImageBackground'>
                    {dotsImage(4, 4)}
                </div>
            </div>
        </div>
    )
}

export default MainMenu;