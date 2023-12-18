import React from "react";
import FormikSignUpForm from "../components/SignUpForm";
import UserAPI from "./UserApi";
import { Navigate } from "react-router-dom";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navigate: false,
            signUpMessage: ""
        }
    }

    handleSubmit(formData) {
        UserAPI.updateUser(formData.username,formData.password)
        .then(apiData => {
            this.setState({ navigate: true })
            alert("Sign Up Successful...")
        })
            .catch(error => { alert("Sign Up failed...")})
    }

    render() {
        return (<>
            {this.state.navigate ?
                <Navigate to={"/signin"} replace={true}></Navigate> :
                <FormikSignUpForm onSubmit={formData => this.handleSubmit(formData)} signUpMessage={this.state.signInMessage}></FormikSignUpForm>}

        </>)
    }
}