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

const Information = () => {

    return (
        <section id='about-me' className="infMenu">
            <div className="infLogoMenu">
                <span className='infLogo'>{'#'}</span>
                <h1 className='infLogoMenuTitle'>Isoja projekteja joita olen tehnyt</h1>
                <span className='infLogoMenuText'>Tässä on muutamia ohjelmointiprojekteja joita olen tehnyt ja ylläpidän vieläkin.</span>
            </div>
            <div className='infMenuItem'>
                <Slider images={[loginimg, dashboardimg, dashboardmenuimg, dashboardnavigationimg]} />
                <span className='infMenuText' style={{ paddingLeft: '50px' }}>
                    <span className='infMenutitle'>Tilaustenohjausjärjestelmä</span><br />
                    Heimosen puutarha Oy huomasi vuonna 2019 ettei he voi enää hallita heidän tilauksiansa papereilla. Tästä lähti tarve heille sopivan ohjelman hankintaan.
                    He yrittivät jo ennen 2019 vuotta saada heidän toiminnanohjausjärjestelmään tilauksienkeräysjärjestelmää, mutta heidän toiminnanohjausjärjestelmään oli
                    erittäin hankala luoda Heimosen puutarhalle tarvittavat toiminnot. He lähtivät sen jälkeen etsimään toista palvelun tarjoajaa joka voisi luoda heille toisen ohjelman tilaustenhallintaan.
                    Tästä lähtikin minulla idea, että voisin luoda sen heille ammattikoulun työopiskelun aikana.
                    <br />
                    <br />
                    Sovellus on luotu MERN stackillä eli MongoDB, ExpressJS, ReactJS ja NodeJS. Sovelluksessa on roolipohjainen autentikaatio, jonka avulla erilaisia käyttäjiä ja niiden oikeuksia voidaan muokata.
                    Sovelluksessä on myös mukana realiiaikainen tiedonsiirto käyttämällä websocketteja, että kaikilla laitteilla olisi aina uusin mahdollinen tieto tilauksista. Mukana on myös toiminnallisuuksia kuten
                    tilauksien tulostaminen, tuotteiden tarrojen tulostaminen, toimituskalenteri ja paljon muuta.
                </span>
            </div>
            <div className='infMenuItem'>
                <span className='infMenuText' style={{ paddingRight: '50px' }}>
                    <span className='infMenutitle'>Työnohjausjärjestelmä</span><br />
                    Siivoova Oy uusi yritys Kuopiosta alkoi kasvamaan ja huomasi tarvitsevansa parempaa tapaa töiden ohjaamiseen ja alkoi etsimään tekijää tai valmista sovellusta. Useimmilla valmiilla sovelluksilla
                    puuttui iso osa heidän tarvitsemistansa ominaisuuksista, joten tarjosin heille aloittaa opinnäytetyönä kyseisen sovelluksen tekoa, joka valmistettaisiin loppuun asti ammattikorkeakoulun jälkeen.
                    <br />
                    <br />
                    Sovellus on luotu käyttäen ReactJS, ExpressJS, NodeJS Ja MySQL. Sovelluksessa on roolipohjainen autentikaatio, jolla voi erotella eri käyttäjät toisistaan. Sovelluksessa on myös käytössä websocketit,
                    joidenka avulla käyttäjän näkevät aina reaaliaikaisen tiedon. Sovellus on vielä kehitysvaiheessa ja siihen on tarkoituksena lisätä paljon erilaisia ominaisuuksia kuten analytiikka ja paljon muuta.
                </span>
                <Slider images={[kuva1, kuva2, kuva3, kuva4, kuva5]} />
            </div>
        </section>
    )
}

export default Information;