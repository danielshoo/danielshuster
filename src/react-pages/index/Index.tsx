const React = require('react');
const IndexCss = require('./Index.scss');
const ThemeToggle = require('./components/theme-toggle/ThemeToggle');
const Search = require('./components/search/Search');
const NavigationBar = require('./components/navigation-bar/NavigationBar');
const NavMenu = require('./components/nav-menu/NavMenu');
const ProfessionalSummary = require('./components/professional-summary/ProfessionalSummary');
const KeySkills = require('./components/key-skills/KeySkills');
const WorkHistory = require('./components/work-history/WorkHistory');

module.exports = function Index() {
    return <html>
        <head>
            <title>Daniel Shuster - A Resume</title>
            <meta charSet="UTF-8"/>
            <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
            <script defer={true} src="/react-pages/main.js"></script>
            <link rel="stylesheet" href="/react-pages/main.css"/>
        </head>
        <body>
            <div id="root" className={'dsr-index'}>
                <NavigationBar>
                    <NavMenu currentPage={'Resumé'}/>
                    <Search/>
                    <ThemeToggle/>
                </NavigationBar>
                <ProfessionalSummary>
                </ProfessionalSummary>
                <KeySkills/>
                <WorkHistory/>

            </div>
        </body>
    </html>;
}