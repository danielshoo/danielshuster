const React = require('react');
const siteMenuCSS = require('./site-menu.scss');
const GlobalContext = require('./../../../../contexts/GlobalContext.tsx');

module.exports = () => {

    const globalCTX = React.useContext(GlobalContext);
    const doShowSiteMenu = globalCTX.doShowSiteMenu;

    let className = doShowSiteMenu ? 'dsr-site-menu' : 'dsr-site-menu--hidden';
    className = globalCTX.theme === 'dark' ? className + ' dsr-site-menu--dark' : className;

    function doHideSiteMenu(e) {
        if (e.target !== e.currentTarget) return; // only care if the fade screen was clicked directly
        globalCTX.setDoShowSiteMenu(false);
    }

    return <section className={className} aria-label={'Site Navigation Menu'} onClick={doHideSiteMenu}>
        <div className={'dsr-site-menu__items'}>
            <div className={'dsr-site-menu__item'} aria-label={'Home'}>Home</div>
            <div className={'dsr-site-menu__item'} aria-label={'Resumé'}>Resumé</div>
            <div className={'dsr-site-menu__item'} aria-label={'Portfolio'}>Portfolio</div>
        </div>
    </section>
}

module.exports.Style = () => <style>{siteMenuCSS}</style>;
