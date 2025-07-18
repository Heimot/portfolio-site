import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    mainMenu: {
                        title: "Hi, I'm Joonas.",
                        footer: "I program application's that interest me.",
                        subFooter: "Hi! I like to make application's which help people in companies to make their life easier. Especially in logistics, operational management and sector's which use a lot of data.",
                        contactBtn: "Contact me",
                        aboutMeBtn: "About me"
                    },
                    navigation: {
                        previousWork: "Previous work",
                        skills: "My skills",
                        contactMe: "Contact me",

                    },
                    information: {
                        title: "Big project's which i have made",
                        subTitle: "Here's some programming projects which i have made and still maintain.",
                        first: {
                            infoTitle: "Logistic's and order management system",
                            infoText: `In 2019 gardening company "Heimosen Puutarha Oy" realized that they couldn't handle their logistic's and order's with their old system's anymore. They had already tried before 2019 to add those two to their current enterprise resource planning system "ODOO" with bad results due to what they needed. After that they went looking for someone else who could create them a application for their needs. At that point i had an idea, since i had a intership coming up in 2019, i would be able to create them that application during the intership and also maintain it after the fact.`,
                            secondInfoText: "The application was created using MERN stack so MongoDB, ExpressJS, ReactJS and NodeJS. It has role based authentication, which is needed due to multiple different employees having different needs during their daily operation. Most of the application uses websockets to handle real time data transfer between users. The application also has realtime stock data, deliveries using barcode's in stickers, calendar, loan's and much more. Currently the application is in use by 2 different gardening companies in Finland."
                        },
                        second: {
                            infoTitle: "Deliveries and logistic's",
                            infoText: `In 2025 i worked on a Java android application for "Heimosen Puutarha Oy" using Honeywell's CT45P mobile barcode scanner's. It had to be able to be used for tracking deliveries by scanning the barcode's on delivery sticker's and it also had to be able to be used for logistic's in warehouse environment's.`,
                            secondInfoText: `The application was made with Java in Android Studio. It uses the same backend as the logistic's and order management system so the data of deliveries and logistic's can also be accessed in the web.`
                        },
                        third: {
                            infoTitle: "Work management system",
                            infoText: `Siivoova OY a new growing company in Finland started to slowly grow and realized they couldn't manage all the employee's anymore with their old system's. So they started to search for ready-to-use application for their use case or a company that could create a one for them. Most of the ready-to-use applications were missing some of the functionality they wanted so i decided to offer to start making it during my last internship in Bachelor of Business Administration (BBA), Information Technology in OUAS (Oulu University of Applied Science).`,
                            secondInfoText: "The application was made using ReactJS, ExpressJS, NodeJS and MySQL as the database. It has role based authentication due to diverse roles in the company. It also has websocket's for realtime data showing their working hours and etc. The application is still in the development phase and a lot of functionalities are still being slowly added, like analytics and so."
                        }
                    },
                    skills: {
                        title: "Skills and technologies",
                        subTitle: "Here's a little information about which technologies are well-known by me and what kind of skills i have."
                    },
                    contact: {
                        title: "Social's",
                        subTitle: "Do you need to contact me? Here's some platform's where you can contact me.",
                        mail: "Email",
                    }
                }
            },
            fi: {
                translation: {
                    mainMenu: {
                        title: "Hei, Olen Joonas.",
                        footer: "Ja ohjelmoin kiinnostavia sovelluksia.",
                        subFooter: "Hei! Tykkään luoda sovelluksia joista on hyötyä yrityksen tilauspuolella ja toiminnanohjauspuolella. Sovelluksieni tarkoituksena on toimia niin tietokoneilla kuin puhelimilla.",
                        contactBtn: "Ota yhteyttä",
                        aboutMeBtn: "Mitä olen tehnyt"
                    },
                    navigation: {
                        previousWork: "Aikaisemmat työt",
                        skills: "Taidot",
                        contactMe: "Ota yhteyttä",

                    },
                    information: {
                        title: "Isoja projekteja joita olen tehnyt",
                        subTitle: "Tässä on muutamia ohjelmointiprojekteja joita olen tehnyt ja ylläpidän vieläkin.",
                        first: {
                            infoTitle: "Tilaustenohjausjärjestelmä",
                            infoText: `Heimosen puutarha Oy huomasi vuonna 2019 ettei he voi enää hallita heidän tilauksiansa papereilla. Tästä lähti tarve heille sopivan ohjelman hankintaan.
                    He yrittivät jo ennen 2019 vuotta saada heidän toiminnanohjausjärjestelmään tilauksienkeräysjärjestelmää, mutta heidän toiminnanohjausjärjestelmään oli
                    erittäin hankala luoda Heimosen puutarhalle tarvittavat toiminnot. He lähtivät sen jälkeen etsimään toista palvelun tarjoajaa joka voisi luoda heille toisen ohjelman tilaustenhallintaan.
                    Tästä lähtikin minulla idea, että voisin luoda sen heille ammattikoulun työopiskelun aikana.`,
                            secondInfoText: `Sovellus on luotu MERN stackillä eli MongoDB, ExpressJS, ReactJS ja NodeJS. Sovelluksessa on roolipohjainen autentikaatio, jonka avulla erilaisia käyttäjiä ja niiden oikeuksia voidaan muokata.
                    Sovelluksessä on myös mukana realiiaikainen tiedonsiirto käyttämällä websocketteja, että kaikilla laitteilla olisi aina uusin mahdollinen tieto tilauksista. Mukana on myös toiminnallisuuksia kuten
                    tilauksien tulostaminen, tuotteiden tarrojen tulostaminen, toimituskalenteri ja paljon muuta.`
                        },
                        second: {
                            infoTitle: "Toimitukset ja logistiikka",
                            infoText: `Heimosen puutarha Oy vuonna 2025 päätti siirtyä käyttämään Honeywellin CT45P mobiili viivakoodi skannereitä, joten aloin luomaan sovellusta kyseisille laitteille joilla pystyisi vahtimaan toimituksia ja yrityksen sisäistä logistiikkaa halleissa.`,
                            secondInfoText: `Sovellus luotiin Javalla Android studiossa. Se on yhdistettynä tilaustenohjausjärjestelmän tietoihin, että toimitusten tiedot ja logistiikan tilanne näkyisi heillä myös netti puolella.`
                        },
                        third: {
                            infoTitle: "Työnohjausjärjestelmä",
                            infoText: `Siivoova Oy uusi yritys Kuopiosta alkoi kasvamaan ja huomasi tarvitsevansa parempaa tapaa töiden ohjaamiseen ja alkoi etsimään tekijää tai valmista sovellusta. Useimmilla valmiilla sovelluksilla
                    puuttui iso osa heidän tarvitsemistansa ominaisuuksista, joten tarjosin heille aloittaa opinnäytetyönä kyseisen sovelluksen tekoa, joka valmistettaisiin loppuun asti ammattikorkeakoulun jälkeen.`,
                            secondInfoText: `Sovellus on luotu käyttäen ReactJS, ExpressJS, NodeJS Ja MySQL. Sovelluksessa on roolipohjainen autentikaatio, jolla voi erotella eri käyttäjät toisistaan. Sovelluksessa on myös käytössä websocketit,
                    joidenka avulla käyttäjän näkevät aina reaaliaikaisen tiedon. Sovellus on vielä kehitysvaiheessa ja siihen on tarkoituksena lisätä paljon erilaisia ominaisuuksia kuten analytiikka ja paljon muuta.`
                        }
                    },
                    skills: {
                        title: "Taidot ja teknologiat",
                        subTitle: "Tässä hieman tietoa että mitkä teknologiat minulle on tuttuja ja minkälaisia taitoja minulla on."
                    },
                    contact: {
                        title: "Mediat",
                        subTitle: "Tarvitsetko saada minuun yhteyttä? Tässä erilaisia medioita.",
                        mail: "Sähköposti",
                    }
                }
            }
        }
    })