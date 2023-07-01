const React = require('react');
const navMenuCSS = require('./nav-menu.scss');

module.exports = (props) => {

    const [currentPage, setCurrentPage] = React.useState(props.currentPage)

    React.useEffect(() => {
        setCurrentPage(props.currentPage);
    }, [props.currentPage]);

    return <span className={'dsr-nav-menu'}>
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