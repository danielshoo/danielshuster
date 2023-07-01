const React = require('react');
const navigationBarCSS = require('./navigation-bar.scss');
const NavigationStyle = () => <style>{navigationBarCSS}</style>;

module.exports = function NavigationBar(props) {
    return <>
        <section className={'dsr-navigation-bar'}>
            {props.children}
        </section>
    </>
};

module.exports.Style = NavigationStyle;

