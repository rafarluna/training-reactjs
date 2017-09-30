var React = require('react');
var ReactDOM = require("react-dom");
import UserStore from '../stores/UserStore';
import PetStore from '../stores/PetStore';

//Create Component
export default class RegisterUserComponent extends React.Component {

    componentDidMount() {
        var userStore = new UserStore();
        var petStore = new PetStore();

        console.log(userStore);
        petStore.getPetsByUserId(3).then(data => {
            console.log(data);
        })
        
    }

    render() {

        return (

            <form className="form-horizontal">
                <fieldset>
                    <legend>My Profile</legend>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="textinput">Name</label>
                        <div className="col-md-4">
                            <input id="textinput" name="name" type="text" placeholder="Name" className="form-control input-md" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="textinput">Last Name</label>
                        <div className="col-md-4">
                            <input id="textinput" name="lastName" type="text" placeholder="Last name" className="form-control input-md" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="textinput">user name</label>
                        <div className="col-md-4">
                            <input id="textinput" name="userName" type="text" placeholder="user name" className="form-control input-md" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="textinput">Password</label>
                        <div className="col-md-4">
                            <input id="textinput" name="password" type="text" placeholder="Password" className="form-control input-md" />
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="textinput">Confirm Password</label>
                        <div className="col-md-4">
                            <input id="textinput" name="confirmPassword" type="text" placeholder="Confirm Password" className="form-control input-md" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="textinput">Birth Date</label>
                        <div className="col-md-4">
                            <input id="textinput" name="birthDate" type="text" placeholder="Birth Date mm/dd/yyyy" className="form-control input-md" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="selectbasic">Genre</label>
                        <div className="col-md-4">
                            <select id="selectbasic" name="genre" className="form-control">
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="textinput">email</label>
                        <div className="col-md-4">
                            <input id="textinput" name="email" type="text" placeholder="email" className="form-control input-md" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="save"></label>
                        <div className="col-md-4">
                            <button id="save" name="save" className="btn btn-primary">Save</button>
                        </div>
                    </div>

                </fieldset>
            </form>

        );

    };//render
}