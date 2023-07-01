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

    function handleKeyDown(e) {
        if (e.key === 'Escape') {
            globalCTX.setDoShowSiteMenu(false);
        }
    }

    function handleFocusSection(e) {
        e.currentTarget.focus();
    }

    return <section tabIndex={0} className={className} onClick={doHideSiteMenu} onKeyDown={handleKeyDown} onMouseOver={handleFocusSection} aria-label={'Section containing navigation links to pages related to this resume site'}>
        <div className={'dsr-site-menu__items'}>
            <p className={'dsr-site-menu__item-set-description'} aria-label={"short description of this resume page's building blocks"}>
                This resume page was designed on figma and coded with SSR React + Typescript. Check the links below for details on each.
            </p>
            <a className={'dsr-site-menu__item'} target={'_blank'} href={'https://github.com/danielshoo/danielshuster'} aria-label={"Navigation link to github repo showcasing this resume page"}>
                Github
            </a>
            <a className={'dsr-site-menu__item'} target={'_blank'} href={'https://www.figma.com/file/nK59bsOtPpbwy97qVhAQsQ/Resume?type=design&node-id=12-265&mode=design'} aria-label={"Navigation link to figma design at figma.com"}>
                Figma
            </a>
        </div>
    </section>
}

module.exports.Style = () => <style>{siteMenuCSS}</style>;
