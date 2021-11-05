import React from "react";

import "./custombutton.styles.scss";

const CustomButton = ({children, isGoogleSignIn, ...additionalProps}) => (

    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...additionalProps}>{children}</button>

)

export default CustomButton;