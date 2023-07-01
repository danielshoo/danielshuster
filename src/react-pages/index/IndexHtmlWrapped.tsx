const React = require('react');

const Index = require('./Index.tsx');

const GlobalContext = require('./../../contexts/GlobalContext.tsx');

module.exports = function IndexHtmlWrapped() {

    return <html className={'html'}>
    <head>
        <title>Daniel Shuster - A Resume</title>
        <meta charSet="UTF-8"/>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
        <script defer={true} src="/react-pages/main.js"></script>
        <link rel="stylesheet" href="/react-pages/main.css"/>
    </head>
    <body>
    <div id="root" className={'dsr-index'}>
        <Index></Index>
    </div>
    </body>
    </html>;
}