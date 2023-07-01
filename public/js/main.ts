const react = require('react');
const reactDom = require('react-dom');
const RcAltIndexHeader = require('../../src/react-pages/index/components/AltHeader');
const root = document.getElementById('root');

reactDom.createRoot(root).render(react.createElement(RcAltIndexHeader, null));