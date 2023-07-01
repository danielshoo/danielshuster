const React = require('react');
const navigationBarCSS = require('./navigation-bar.scss');
const NavigationStyle = () => <style>{navigationBarCSS}</style>;

const GlobalContext = require('./../../../../contexts/GlobalContext.tsx');

module.exports = function NavigationBar(props) {

    const globalCTX = React.useContext(GlobalContext);
    const rootClassname = globalCTX.theme === 'dark' ? 'dsr-navigation-bar--dark' : 'dsr-navigation-bar'

    return <>
        <section className={rootClassname}>
            {props.children}
        </section>
    </>
};

module.exports.Style = NavigationStyle;

