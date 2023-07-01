const React = require('react');
const ThemeToggle = require('./components/theme-toggle/ThemeToggle');
const Search = require('./components/search/Search');
const NavigationBar = require('./components/navigation-bar/NavigationBar');
const NavMenu = require('./components/nav-menu/NavMenu');
const ProfessionalSummary = require('./components/professional-summary/ProfessionalSummary');
const KeySkills = require('./components/key-skills/KeySkills');
const WorkHistory = require('./components/work-history/WorkHistory');

const GlobalContext = require('./../../contexts/GlobalContext.tsx');

module.exports = function Index() {

    const [theme, setTheme] = React.useState('light');

    const globalCtx = {
        theme,
        setTheme,
    };

    return <GlobalContext.Provider value={globalCtx}>
            <NavigationBar>
                <NavMenu currentPage={'Resumé'}/>
                <Search/>
                <ThemeToggle/>
            </NavigationBar>
            <ProfessionalSummary>
            </ProfessionalSummary>
            <KeySkills/>
            <WorkHistory/>
    </GlobalContext.Provider>;
}