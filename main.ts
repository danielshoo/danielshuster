
const express = require('express');
const app = express();
const ReactDomServer = require('react-dom/server');
const MainPage = require('./src/react-pages/MainPage');

app.get('/', (req, res) => {

    const React = require('react');
    const renderStream = ReactDomServer.renderToPipeableStream(
        React.createElement(MainPage),
        {
            onShellReady: () => {
                res.statusCode = 200;
                renderStream.pipe(res);
            },
        }
    );
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
