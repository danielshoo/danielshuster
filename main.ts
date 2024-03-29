const React = require('react');
const express = require('express');
const app = express();
const ReactDomServer = require('react-dom/server');
const RcIndexPage = require('./src/react-pages/index/IndexHtmlWrapped');

app.get('/', (req, res) => {

    const renderStream = ReactDomServer.renderToPipeableStream(
        React.createElement(RcIndexPage),
        {
            onShellReady: () => {
                res.statusCode = 200;
                renderStream.pipe(res);
            },
        }
    );
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('listening on port 3000');
});
