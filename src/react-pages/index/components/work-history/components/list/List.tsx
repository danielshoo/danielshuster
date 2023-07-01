const React = require('react');

module.exports = (props) => {
    return <ul>
        {props.children.map((child, index) => {
            return <li key={index}>{child}</li>
        })}
    </ul>
}