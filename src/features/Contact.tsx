import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className='contactMenu'>
                <span className='contactLogo'>@</span>
                <h1 className='contactLogoMenuTitle'>Mediat</h1>
                <span className='contactLogoMenuText'>Tarvitsetko saada minuun yhteyttä? Tässä erilaisia medioita.</span>
            </div>
            <div className='contactList'>
                <button className='contactButton' onClick={() => { location.href = `mailto:&#x68;&#x65;&#x69;&#x6d;&#x6f;&#x6e;&#x65;&#x6e;&#x6a;&#x6f;&#x6f;&#x6e;&#x61;&#x73;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;&#xa;` }}>Sähköposti</button>
                <button className='contactButton' onClick={() => window.open("https://github.com/Heimot", '_blank')}>Github</button>
                <button className='contactButton' onClick={() => window.open("https://www.linkedin.com/in/joonas-heimonen/", '_blank')}>LinkedIn</button>
            </div>
        </section>
    )
}

export default Contact;