const React = require('react');
const IndexCss = require('./Index.scss');
const IndexCssJsx = () => <style>{IndexCss}</style>;
const ThemeToggle = require('./components/theme-toggle/ThemeToggle');
const Search = require('./components/search/Search');
const NavigationBar = require('./components/navigation-bar/NavigationBar');
const NavMenu = require('./components/nav-menu/NavMenu');

module.exports = function Index() {
    return <html>
        <head>
            <title>Daniel Shuster - A Resume</title>
            <meta charSet="UTF-8"/>
            <script defer={true} src="/react-pages/main.js"></script>
            <IndexCssJsx/>
            <ThemeToggle.Style/>
            <NavigationBar.Style/>
            <Search.Style/>
            <NavMenu.Style/>
        </head>
        <body>
            <div id="root" className={'dsr-index'}>
                <NavigationBar>
                    <NavMenu currentPage={'Resumé'}/>
                    <Search/>
                    <ThemeToggle/>
                </NavigationBar>
            </div>
        </body>
    </html>;
}