var React = require('react');
var ReactDOM = require("react-dom");

//Create Component
export default class UserPetListComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <p>
                            <a className="btn btn-sq btn-primary">
                                <i className="fa fa-user fa-5x"></i><br />
                                Demo Primary <br />Button
                            </a>
                        </p>
                    </div>
                </div>
            </div>  
        );
    }

}


{/* <div className="row">
        <div className="col-lg-12">
          <p>
            <a href="#" className="btn btn-sq btn-primary">
                <i className="fa fa-user fa-5x"></i><br/>
                Demo Primary <br>Button
            </a>
          </p>
        </div>
	</div> */}