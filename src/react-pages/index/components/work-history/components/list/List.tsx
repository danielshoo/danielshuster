const React = require('react');

module.exports = (props) => {
    return <ul className={props.className}>
        {props.children.map((child, index) => {
            return <li className={'dsr-work-history__history-item'} key={index}>{child}</li>
        })}
    </ul>
}