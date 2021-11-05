import React from "react";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./loginsection.styles.scss"

export class LoginSection extends React.Component {


    constructor(props){

        super(props);

        this.state = {
            email:"",
            password:""
        }

    }

    handleSubmit = e => {

        e.preventDefault(); 

        this.setState({email: "", password:""})

    }

    handleChange = e => {

        const {value, name} = e.target

        this.setState({[name]:value});

    }

    render(){


        return(

            <div className="login">

            <h2> I already have an account. </h2>
            <span> Sign in with your email and password.</span>

            <form onSubmit={this.handleSubmit}>
            <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="Email" required/>
            <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="Password" required/>
            <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
            </div>
            </form>

            </div>

        )

    }

}