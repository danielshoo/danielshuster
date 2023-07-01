const React = require('react');

const Index = require('./Index.tsx');

const GlobalContext = require('./../../contexts/GlobalContext.tsx');

module.exports = function IndexHtmlWrapped() {

    return <html className={'html'} lang="en">
    <head>
        <title>Daniel Shuster - A Resume</title>
        <meta charSet="UTF-8"/>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
        <meta name="description" content="Another resume of another web developer, but with a dash of pizazz"/>
        <link rel="preload" href="/fonts/Inter/Inter-ExtraLight.ttf" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Inter/Inter-Light.ttf" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Inter/Inter-Regular.ttf" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Inter/Inter-Medium.ttf" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Inter/Inter-SemiBold.ttf" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Inter/Inter-Bold.ttf" as="font" type="font/woff2" crossOrigin="anonymous"/>
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
