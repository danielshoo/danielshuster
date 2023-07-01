const React = require('react');
const IndexCss = require('./Index.scss');
const IndexCssJsx = () => <style>{IndexCss}</style>;
const ThemeToggle = require('./components/theme-toggle/ThemeToggle');

module.exports = function Index() {
    return <html>
        <head>
            <title>Daniel Shuster - A Resume</title>
            <script defer={true} src="/react-pages/main.js"></script>
            <IndexCssJsx/>
        </head>
        <body>
            <div id="root" className={'dsr-index'}>
                <section className={'dsr-navigation-bar'}>
                    <ThemeToggle/>
                </section>
            </div>
        </body>
    </html>;
}