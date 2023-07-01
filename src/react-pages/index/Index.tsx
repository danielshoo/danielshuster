const React = require('react');
const IndexCss = require('./Index.scss');
const IndexCssJsx = () => <style>{IndexCss}</style>;
const ThemeToggle = require('./components/theme-toggle/ThemeToggle');
const Search = require('./components/search/Search');
const NavigationBar = require('./components/navigation-bar/NavigationBar');
const NavMenu = require('./components/nav-menu/NavMenu');
const ProfessionalSummary = require('./components/professional-summary/ProfessionalSummary');
const KeySkills = require('./components/key-skills/KeySkills');

module.exports = function Index() {
    return <html>
        <head>
            <title>Daniel Shuster - A Resume</title>
            <meta charSet="UTF-8"/>
            <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
            <script defer={true} src="/react-pages/main.js"></script>
            <IndexCssJsx/>
            <ThemeToggle.Style/>
            <NavigationBar.Style/>
            <Search.Style/>
            <NavMenu.Style/>
            <ProfessionalSummary.Style/>
            <KeySkills.Style/>
        </head>
        <body>
            <div id="root" className={'dsr-index'}>
                <NavigationBar>
                    <NavMenu currentPage={'Resumé'}/>
                    <Search/>
                    <ThemeToggle/>
                </NavigationBar>
                <ProfessionalSummary selfie={'/selfie.jpeg'}>
                </ProfessionalSummary>
                <KeySkills></KeySkills>
            </div>
        </body>
    </html>;
}