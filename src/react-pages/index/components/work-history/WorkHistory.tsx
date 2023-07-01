import SectionBanner from "../section-banner/SectionBanner";

const React = require('react');
const workHistoryCss = require('./work-history.scss');
const Header = require('./components/header/Header');
const headerCss = require('./components/header/header.scss');
const List = require('./components/list/List');
const SectionBanner = require('../section-banner/SectionBanner');
const sectionBannerCss = require('../section-banner/section-banner.scss');

module.exports = () => {
    return <div className={'dsr-work-history'}>
        <SectionBanner>
            <span className={'dsr-section-banner__text'}>Work History</span>
            <svg className={'dsr-section-banner__icon'} xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="none" viewBox="0 0 24 23">
                <path stroke="#292D32" strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d="M12.389 8.224H17.9m-11.801 0 .788.787L9.249 6.65m3.14 8.924H17.9m-11.801 0 .788.787L9.249 14"/>
                <path stroke="#292D32" strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"}    d="M8.85 22h6.3c5.25 0 7.35-2.1 7.35-7.35v-6.3C22.5 3.1 20.4 1 15.15 1h-6.3C3.6 1 1.5 3.1 1.5 8.35v6.3C1.5 19.9 3.6 22 8.85 22Z"/>
            </svg>
        </SectionBanner>
        <label htmlFor={'work-history--1'} className={'dsr-work-history__toggle-label'}>
            <Header>
                <span className={'dsr-work-history__title'}>Senior FE Lead</span>
                <span className={'dsr-work-history__timeframe'}>Nov 2015 - Present</span>
                <span className={'dsr-work-history__company'}>Care2</span>
                <span className={'dsr-work-history__location'}>Remote</span>
            </Header>
        </label>
        <input id={'work-history--1'} type={'checkbox'} className={'dsr-work-history__display-checkbox'}/>
        <div className={'dsr-work-history__history'}>
            <List>
                <span>Full stack LAMP development with Apache, PHP, MySQL, HTML5, CSS3, Javascript (ES6).</span>
                <span>Maintain and enhance a modern frontend tech stack grounded in NodeJS, WebPack, & Babel</span>
                <span>Refactor and modernize legacy architecture to increase code reuse and reduce complexity</span>
                <span>Work closely with the UX team to bring modern designs to the web from mockup</span>
                <span>Interview and onboard new and established developers</span>
                <span>Mentor new and established developers on coding best practices with a focus on frontend development</span>
                <span>Migrated a unix-based dev environment over to Windows for fun with an added benefit of enabling developers to work on more resourceful PCs</span>
            </List>
        </div>
        <label htmlFor={'work-history--2'} className={'dsr-work-history__toggle-label'}>
            <Header>
                <span className={'dsr-work-history__title'}>Senior PHP Analyst</span>
                <span className={'dsr-work-history__timeframe'}>Aug 2014 - Nov 2015</span>
                <span className={'dsr-work-history__company'}>Dell Services</span>
                <span className={'dsr-work-history__location'}>Remote</span>
            </Header>
        </label>
        <input id={'work-history--2'} type={'checkbox'} className={'dsr-work-history__display-checkbox'}/>
        <div className={'dsr-work-history__history'}>
            <List>
                <span>Maintain and support code for 7 consumer facing web apps deployed across 3 countries for a fortune 500 company</span>
                <span>Greatly reduced fraudulent accounts by writing a top performing algorithm</span>
                <span>Improved application stability by writing browser based automation test suites with Selenium</span>
                <span>Support multiple projects at the same time by taking into account release date and priority</span>
                <span>Instilled client confidence by meeting all deliverable deadlines</span>
                <span>Facilitated the development life cycle by translating business requirements into critical code changes</span>
                <span>Maintain codebase on a server that routes thousands of financial transactions</span>
            </List>
        </div>
        <label htmlFor={'work-history--3'} className={'dsr-work-history__toggle-label'}>
            <Header>
                <span className={'dsr-work-history__title'}>Software Developer</span>
                <span className={'dsr-work-history__timeframe'}>Jan 2014 - Aug 2014</span>
                <span className={'dsr-work-history__company'}>AOD</span>
                <span className={'dsr-work-history__location'}>Coral Springs, Fl</span>
            </Header>
        </label>
        <input id={'work-history--3'} type={'checkbox'} className={'dsr-work-history__display-checkbox'}/>
        <div className={'dsr-work-history__history'}>
            <List>
                <span>Train new developers to program in Magic (programming language) with a focus on writing clean code</span>
                <span>Work in an on-call environment, resolving pages to ensure systems remain available for users</span>
                <span>Work in a remote setup, communicating with consultants and developers in a project management environment</span>
                <span>Refactor large, highly coupled programs In order to improve overall performance</span>
                <span>Validate user input and ensure data integrity for highly sensitive medical records</span>
                <span>Communicate with clients, documenting and resolving their issues as the highest tier support</span>
                <span>Develop Long Term Care software using the Magic programming language and the Microsoft Visual Source Safe versioning system</span>
            </List>
        </div>
    </div>
};

module.exports.Style = () => <style>{workHistoryCss + sectionBannerCss + headerCss}</style>;