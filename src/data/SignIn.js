import React from "react";
import FormikSignInForm from "../components/SignInForm";
import UserAPI from "./UserApi";
import { Navigate } from "react-router-dom";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navigate: false,
            signInMessage: ""
        }
    }

    handleSubmit(formData) {
        UserAPI.getUser(formData.username)
            .then(apiData => {
                if (formData.password === apiData.password) {
                    console.log("Login Succcess...")
                    this.setState({ navigate: true })
                } else {
                    this.setState({ signInMessage: "Please enter correct password..." })
                }
            }).catch(error => { this.setState({ signInMessage: "User does not exists..." }) })
    }

    render() {

        return (<>
            {this.state.navigate ?
                <Navigate to={"/home"} replace={true}></Navigate> :
                <FormikSignInForm onSubmit={formData => this.handleSubmit(formData)} signInMessage={this.state.signInMessage}></FormikSignInForm>}

        </>)
    }
}