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
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" fill="none" viewBox="0 0 22 25">
                <path fill="#292D32" d="M1.116 20.349a.878.878 0 0 1-.872-.872V6.686C.244 1.558 1.802 0 6.93 0h8.14c5.128 0 6.686 1.558 6.686 6.686v11.628c0 .186 0 .36-.012.546a.887.887 0 0 1-.93.814.88.88 0 0 1-.814-.93c.012-.14.012-.29.012-.43V6.686c0-4.151-.78-4.942-4.942-4.942H6.93c-4.163 0-4.942.79-4.942 4.942v12.79a.878.878 0 0 1-.872.873Z"/>
                <path fill="#292D32" d="M16.814 25H5.186a4.953 4.953 0 0 1-4.942-4.942v-.756a4.19 4.19 0 0 1 4.186-4.186h16.454a.88.88 0 0 1 .872.872v4.07A4.953 4.953 0 0 1 16.814 25ZM4.43 16.86a2.442 2.442 0 0 0-2.442 2.442v.756a3.196 3.196 0 0 0 3.198 3.198h11.628a3.196 3.196 0 0 0 3.198-3.198V16.86H4.43Zm11.221-9.302H6.35a.878.878 0 0 1-.872-.872c0-.477.395-.872.872-.872h9.302c.477 0 .872.395.872.872a.878.878 0 0 1-.872.872Zm-3.488 4.07H6.349a.878.878 0 0 1-.872-.872c0-.477.395-.872.872-.872h5.814c.476 0 .872.395.872.872a.878.878 0 0 1-.872.872Z"/>
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
        <List className={'dsr-work-history__history'}>
            <>Full stack LAMP development with Apache, PHP, MySQL, HTML5, CSS3, Javascript (ES6).</>
            <>Maintain and enhance a modern frontend tech stack grounded in NodeJS, WebPack, & Babel</>
            <>Refactor and modernize legacy architecture to increase code reuse and reduce complexity</>
            <>Work closely with the UX team to bring modern designs to the web from mockup</>
            <>Interview and onboard new and established developers</>
            <>Mentor new and established developers on coding best practices with a focus on frontend development</>
            <>Migrated a unix-based dev environment over to Windows for fun with an added benefit of enabling developers to work on more resourceful PCs</>
        </List>
        <label htmlFor={'work-history--2'} className={'dsr-work-history__toggle-label'}>
            <Header>
                <span className={'dsr-work-history__title'}>Senior PHP Analyst</span>
                <span className={'dsr-work-history__timeframe'}>Aug 2014 - Nov 2015</span>
                <span className={'dsr-work-history__company'}>Dell Services</span>
                <span className={'dsr-work-history__location'}>Remote</span>
            </Header>
        </label>
        <input id={'work-history--2'} type={'checkbox'} className={'dsr-work-history__display-checkbox'}/>
        <List className={'dsr-work-history__history'}>
            <>Maintain and support code for 7 consumer facing web apps deployed across 3 countries for a fortune 500 company</>
            <>Greatly reduced fraudulent accounts by writing a top performing algorithm</>
            <>Improved application stability by writing browser based automation test suites with Selenium</>
            <>Support multiple projects at the same time by taking into account release date and priority</>
            <>Instilled client confidence by meeting all deliverable deadlines</>
            <>Facilitated the development life cycle by translating business requirements into critical code changes</>
            <>Maintain codebase on a server that routes thousands of financial transactions</>
        </List>
        <label htmlFor={'work-history--3'} className={'dsr-work-history__toggle-label'}>
            <Header>
                <span className={'dsr-work-history__title'}>Software Developer</span>
                <span className={'dsr-work-history__timeframe'}>Jan 2014 - Aug 2014</span>
                <span className={'dsr-work-history__company'}>AOD</span>
                <span className={'dsr-work-history__location'}>Coral Springs, Fl</span>
            </Header>
        </label>
        <input id={'work-history--3'} type={'checkbox'} className={'dsr-work-history__display-checkbox'}/>
        <List className={'dsr-work-history__history'}>
            <>Train new developers to program in Magic (programming language) with a focus on writing clean code</>
            <>Work in an on-call environment, resolving pages to ensure systems remain available for users</>
            <>Work in a remote setup, communicating with consultants and developers in a project management environment</>
            <>Refactor large, highly coupled programs In order to improve overall performance</>
            <>Validate user input and ensure data integrity for highly sensitive medical records</>
            <>Communicate with clients, documenting and resolving their issues as the highest tier support</>
            <>Develop Long Term Care software using the Magic programming language and the Microsoft Visual Source Safe versioning system</>
        </List>
    </div>
};

module.exports.Style = () => <style>{workHistoryCss + sectionBannerCss + headerCss}</style>;