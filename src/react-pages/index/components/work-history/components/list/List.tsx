const React = require('react');

module.exports = (props) => {
    return <div className={'dsr-list'}>
        <div className={'dsr-list__ul'}>
            {props.children.map((child, index) => {
                return <div className={'dsr-list__li'} key={index}>{child}</div>
            })}
        </div>
    </div>
}