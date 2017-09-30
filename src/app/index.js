var React = require('react');
var ReactDOM = require("react-dom");
import RegisterUser from './components/RegisterUser';

//Create Component
class MainComponent extends React.Component {

    render() {
        return (
            <RegisterUser />
        );
    };//render
};

//put component into html page
ReactDOM.render(<MainComponent />, document.getElementById("todo-wrapper"));