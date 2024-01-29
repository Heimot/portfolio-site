import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <span className='footerText'>
                {'Copyright © '}
                <a href="mailto:&#x68;&#x65;&#x69;&#x6d;&#x6f;&#x6e;&#x65;&#x6e;&#x6a;&#x6f;&#x6f;&#x6e;&#x61;&#x73;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;&#xa;">Joonas Heimonen </a>
                {new Date().getFullYear()}
                {'.'}
            </span>
        </div>
    )
}

export default Footer;