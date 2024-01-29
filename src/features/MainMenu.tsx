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
                <h1 className='mainTextTitle'>Hei, Olen Joonas.</h1>
                <h1 className='mainTextTitle'>Ja ohjelmoin kiinnostavia sovelluksia.</h1>
                <p className='mainTextInformation'>Hei! Tykkään luoda sovelluksia joista on hyötyä yrityksen tilauspuolella ja toiminnanohjauspuolella. Sovelluksieni tarkoituksena on toimia niin tietokoneilla kuin puhelimilla.</p>
                <div>
                    <button className='mainTextButton' onClick={() => {location.href = `${location.origin}/#contact` }}>Ota yhteyttä</button>
                    <button className='mainTextButton' onClick={() => {location.href = `${location.origin}/#about-me` }}>Mitä olen tehnyt</button>
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