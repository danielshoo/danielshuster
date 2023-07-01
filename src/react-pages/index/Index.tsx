const React = require('react');
const Header = require('./components/Header');

module.exports = function MainPage() {
    return <html>
        <head>
            <title>React SSR</title>
            <script defer={true} src="/js/main.js"></script>
        </head>
        <body>
            <div id="root">
                <Header />
            </div>
        </body>
    </html>;
}