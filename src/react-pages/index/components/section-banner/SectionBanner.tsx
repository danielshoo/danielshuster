const React = require('react');
const sectionBannerCss = require('./section-banner.scss');

module.exports = (props) => {
    return <div className={'dsr-section-banner'}>
        {props.children}
    </div>
};

module.exports.Style = () => <style>{sectionBannerCss}</style>;