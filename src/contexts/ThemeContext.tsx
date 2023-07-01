const React = require('react');
const ThemeContext = React.createContext({
    myState: 'light',
    setMyState: () => {}
});

module.exports = ThemeContext;