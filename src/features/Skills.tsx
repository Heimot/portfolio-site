import './Skills.css';

const Skills = () => {

    return (
        <section id="skills">
            <div className="skillsMenu">
                <span className='skillsLogo'>{'</>'}</span>
                <h1 className='skillsLogoMenuTitle'>Taidot ja teknologiat</h1>
                <span className='skillsLogoMenuText'>Tässä hieman tietoa että mitkä teknologiat minulle on tuttuja ja minkälaisia taitoja minulla on.</span>
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
            </div>
        </section>
    )
}

export default Skills;