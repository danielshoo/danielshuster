const React = require('react');
const keySkillsCSS = require('./key-skills.scss');
const SectionBanner = require('../section-banner/SectionBanner');
const sectionBannerCss = require('../section-banner/section-banner.scss');

const GlobalContext = require('./../../../../contexts/GlobalContext.tsx');

module.exports = () => {

    const globalCTX = React.useContext(GlobalContext);
    const rootClassname = globalCTX.theme === 'dark' ? 'dsr-key-skills--dark' : 'dsr-key-skills'

    return <section className={rootClassname} aria-label={'section listing out key skills by category'}>
        <SectionBanner>
            <span className={'dsr-section-banner__text'}>Key Skills</span>
            <svg className={'dsr-section-banner__icon'} xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="none" viewBox="0 0 24 23">
                <path stroke="#292D32" strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d="M12.389 8.224H17.9m-11.801 0 .788.787L9.249 6.65m3.14 8.924H17.9m-11.801 0 .788.787L9.249 14"/>
                <path stroke="#292D32" strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"}    d="M8.85 22h6.3c5.25 0 7.35-2.1 7.35-7.35v-6.3C22.5 3.1 20.4 1 15.15 1h-6.3C3.6 1 1.5 3.1 1.5 8.35v6.3C1.5 19.9 3.6 22 8.85 22Z"/>
            </svg>
        </SectionBanner>
        <input id={'key-skills--1'} type={'checkbox'} className={'dsr-key-skills__display-checkbox'}/>
        <label htmlFor={'key-skills--1'} className={'dsr-key-skills__toggle-label'}>Languages<span className={'dsr-key-skills__toggle-icon'}></span></label>
        <div className={'dsr-key-skills__skills'}>
            <div className={'dsr-key-skills__skills-row'}>
                <span className={'dsr-key-skills__skill'}>HTML5</span>
                <span className={'dsr-key-skills__skill'}>CSS / SCSS</span>
                <span className={'dsr-key-skills__skill'}>JavaScript</span>
                <span className={'dsr-key-skills__skill'}>Typscript</span>
                <span className={'dsr-key-skills__skill'}>PHP</span>
                <span className={'dsr-key-skills__skill'}>SQL</span>
            </div>
        </div>
        <input id={'key-skills--2'} type={'checkbox'} className={'dsr-key-skills__display-checkbox'}/>
        <label htmlFor={'key-skills--2'} className={'dsr-key-skills__toggle-label'}>Frameworks<span className={'dsr-key-skills__toggle-icon'}></span></label>
        <div className={'dsr-key-skills__skills'}>
            <div className={'dsr-key-skills__skills-row'}>
                <span className={'dsr-key-skills__skill'}>ReactJS</span>
                <span className={'dsr-key-skills__skill'}>React Native</span>
                <span className={'dsr-key-skills__skill'}>Electron JS</span>
                <span className={'dsr-key-skills__skill'}>esbuild</span>
                <span className={'dsr-key-skills__skill'}>Webpack</span>
                <span className={'dsr-key-skills__skill'}>Wordpress</span>
                <span className={'dsr-key-skills__skill'}>PHPSelenium</span>
            </div>
        </div>
        <input id={'key-skills--3'} type={'checkbox'} className={'dsr-key-skills__display-checkbox'}/>
        <label htmlFor={'key-skills--3'} className={'dsr-key-skills__toggle-label'}>Paradigms<span className={'dsr-key-skills__toggle-icon'}></span></label>
        <div className={'dsr-key-skills__skills'}>
            <div className={'dsr-key-skills__skills-row'}>
                <span className={'dsr-key-skills__skill'}><span className={'print-media__removed-item'}>Object Oriented Programming</span><span className={'print-media__added-item'}>OOP</span></span>
                <span className={'dsr-key-skills__skill'}><span className={'print-media__removed-item'}>Functional Programming</span><span className={'print-media__added-item'}>Functional</span></span>
                <span className={'dsr-key-skills__skill'}>BEM Notation</span>
                <span className={'dsr-key-skills__skill'}>Mobile First</span>
                <span className={'dsr-key-skills__skill'}>Componentization</span>
                <span className={'dsr-key-skills__skill'}>Wordpress</span>
                <span className={'dsr-key-skills__skill'}>App Development</span>
                <span className={'dsr-key-skills__skill'}><span className={'print-media__removed-item'}>Test Driven Development</span><span className={'print-media__added-item'}>TDD</span></span>
                <span className={'dsr-key-skills__skill'}><span className={'print-media__removed-item'}>Database Normalization</span><span className={'print-media__added-item'}>DB Normalization</span></span>
                <span className={'dsr-key-skills__skill'}>RESTful</span>
            </div>
        </div>
        <input id={'key-skills--4'} type={'checkbox'} className={'dsr-key-skills__display-checkbox'}/>
        <label htmlFor={'key-skills--4'} className={'dsr-key-skills__toggle-label'}>Testing<span className={'dsr-key-skills__toggle-icon'}></span></label>
        <div className={'dsr-key-skills__skills'}>
            <div className={'dsr-key-skills__skills-row'}>
                <span className={'dsr-key-skills__skill'}>Unit Testing</span>
                <span className={'dsr-key-skills__skill'}>Integration Testing</span>
                <span className={'dsr-key-skills__skill'}>Automation Testing</span>
            </div>
        </div>
        <input id={'key-skills--5'} type={'checkbox'} className={'dsr-key-skills__display-checkbox'}/>
        <label htmlFor={'key-skills--5'} className={'dsr-key-skills__toggle-label'}>Database<span className={'dsr-key-skills__toggle-icon'}></span></label>
        <div className={'dsr-key-skills__skills'}>
            <div className={'dsr-key-skills__skills-row'}>
                <span className={'dsr-key-skills__skill'}>MySQL</span>
            </div>
        </div>
        <input id={'key-skills--6'} type={'checkbox'} className={'dsr-key-skills__display-checkbox'}/>
        <label htmlFor={'key-skills--6'} className={'dsr-key-skills__toggle-label'}>Version Control<span className={'dsr-key-skills__toggle-icon'}></span></label>
        <div className={'dsr-key-skills__skills'}>
            <div className={'dsr-key-skills__skills-row'}>
                <span className={'dsr-key-skills__skill'}>GIT</span>
            </div>
        </div>
    </section>;
};

module.exports.Style = () => <style>{keySkillsCSS + sectionBannerCss}</style>;
