const React = require('react');
const ThemeToggle = require('./components/theme-toggle/ThemeToggle');
const Search = require('./components/search/Search');
const NavigationBar = require('./components/navigation-bar/NavigationBar');
const NavMenu = require('./components/nav-menu/NavMenu');
const ProfessionalSummary = require('./components/professional-summary/ProfessionalSummary');
const KeySkills = require('./components/key-skills/KeySkills');
const WorkHistory = require('./components/work-history/WorkHistory');
const SiteMenu = require('./components/site-menu/SiteMenu');

const GlobalContext = require('./../../contexts/GlobalContext.tsx');

module.exports = function Index() {

    const [theme, setTheme] = React.useState('light');
    const [doShowSiteMenu, setDoShowSiteMenu] = React.useState(false);

    const globalCtx = {
        theme,
        setTheme,
        doShowSiteMenu,
        setDoShowSiteMenu,
    };

    React.useEffect(() => {

        if (theme === 'light') {
            document.querySelector('.html').classList.remove('html--dark');
        } else {
            document.querySelector('.html').classList.add('html--dark');
        }

    }, [theme]);

    return <GlobalContext.Provider value={globalCtx}>
            <span className={'dsr-index__printed-text'}>danielshuster.com</span>
            <SiteMenu/>
            <NavigationBar>
                <NavMenu currentPage={'Resumé'}/>
                {/*<Search/>*/}
                <ThemeToggle/>
            </NavigationBar>
            <ProfessionalSummary>
            </ProfessionalSummary>
            <KeySkills/>
            <WorkHistory/>
    </GlobalContext.Provider>;
}
