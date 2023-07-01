const React = require('react');
const navMenuCSS = require('./nav-menu.scss');

const GlobalContext = require('./../../../../contexts/GlobalContext.tsx');



module.exports = (props) => {

    const [currentPage, setCurrentPage] = React.useState(props.currentPage)

    const globalCTX = React.useContext(GlobalContext);
    const rootClassname = globalCTX.theme === 'dark' ? 'dsr-nav-menu--dark' : 'dsr-nav-menu'

    React.useEffect(() => {
        setCurrentPage(props.currentPage);
    }, [props.currentPage]);

    const showMenuPanel = () => {
        globalCTX.setDoShowSiteMenu(true);
    }

    return <span className={rootClassname} onClick={showMenuPanel}>
        <div className={'dsr-nav-menu__icon'}>
            <div className={'dsr-nav-menu__icon-bar'}/>
            <div className={'dsr-nav-menu__icon-bar'}/>
            <div className={'dsr-nav-menu__icon-bar'}/>
        </div>
        <span className={'dsr-nav-menu__current-page-text'}>
            {currentPage}
        </span>
    </span>
};

module.exports.Style = () => <style>{navMenuCSS}</style>;
