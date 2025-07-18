import { useTranslation } from 'react-i18next';
import './Skills.css';

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills">
            <div className="skillsMenu">
                <span className='skillsLogo'>{'</>'}</span>
                <h1 className='skillsLogoMenuTitle'>{t('skills.title')}</h1>
                <span className='skillsLogoMenuText'>{t('skills.subTitle')}</span>
            </div>
            <div className='skillList'>
                <div className='skillListRow'>
                    <div className='skillListItem'>JavaScript</div>
                    <div className='skillListItem'>TypeScript</div>
                </div>
                <div className='skillListRow'>
                    <div className='skillListItem'>React</div>
                    <div className='skillListItem'>ExpressJS</div>
                </div>
                <div className='skillListRow'>
                    <div className='skillListItem'>NodeJS</div>
                    <div className='skillListItem'>MongoDB</div>
                </div>
                <div className='skillListRow'>
                    <div className='skillListItem'>MySQL</div>
                    <div className='skillListItem'>C#</div>
                </div>
                <div className='skillListRow'>
                    <div className='skillListItem'>Python</div>
                    <div className='skillListItem'>Material UI</div>
                </div>
                <div className='skillListRow'>
                    <div className='skillListItem'>Java</div>
                    <div className='skillListItem'>Android Studio</div>
                </div>
            </div>
        </section>
    )
}

export default Skills;