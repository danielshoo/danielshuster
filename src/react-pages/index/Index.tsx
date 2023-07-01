const React = require('react');
const Header = require('./components/Header');
const IndexCss = require('./Index.scss');
const IndexCssJsx = () => <style>{IndexCss}</style>;

module.exports = function Index() {
    return <html>
        <head>
            <title>Daniel Shuster - A Resume</title>
            <script defer={true} src="/js/main.js"></script>
            <IndexCssJsx/>
        </head>
        <body>
            <div id="root" className={'dsr-index'}>

            </div>
        </body>
    </html>;
}