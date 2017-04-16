var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application built on React. Developed in line with the
                React Developer COurse</p>
            <p>
                Here are some of the tools we used:
            </p>
            <ul>
                <li>React</li>
                <li>Open Weather</li>
                <li>Foundation</li>
            </ul>
        </div>
    )
};

module.exports = About;