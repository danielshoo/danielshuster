const React = require('react');
const workHistoryCss = require('./header.scss');

module.exports = (props) => {

    const children = [];
    for (let i = 0; i < props.children.length; i++) {
        children.push(props.children[i]);

        if (i !== props.children.length - 1) {
            children.push(<span className={'dsr-work-header__divider'}> | </span>);
        }
    }

    children.push(<span className={'dsr-work-header__toggle-icon'}></span>)

    return children;
}

module.exports.Style = () => <style>{workHistoryCss}</style>;
