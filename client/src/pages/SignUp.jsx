import React from "react";
import SiteHeader from "../layouts/SiteHeader.jsx";
import SiteFooter from "../layouts/SiteFooter.jsx";
const SignUpForm = () => {
  return (
    <form>
      <legend>SignUp Form</legend>
    </form>
  );
};
const SignUp = () => {
  return (
    <>
      <SiteHeader />
      <SignUpForm />
      <SiteFooter />
    </>
  );
};

export default SignUp;
