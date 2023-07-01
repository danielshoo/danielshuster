const React = require('react');
const sectionBannerCss = require('./section-banner.scss');

const GlobalContext = require('./../../../../contexts/GlobalContext.tsx');

module.exports = (props) => {

    const globalCTX = React.useContext(GlobalContext);
    const rootClassname = globalCTX.theme === 'dark' ? 'dsr-section-banner--dark' : 'dsr-section-banner'

    return <div className={rootClassname}>
        {props.children}
    </div>
};

module.exports.Style = () => <style>{sectionBannerCss}</style>;