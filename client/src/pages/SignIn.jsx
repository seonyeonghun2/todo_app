import React from "react";
import SiteHeader from "../layouts/SiteHeader.jsx";
import SiteFooter from "../layouts/SiteFooter.jsx";
const SignInForm = () => {
  return (
    <form>
      <legend>SignIn Form</legend>
    </form>
  );
};
const SignIn = () => {
  return (
    <>
      <SiteHeader />
      <SignInForm />
      <SiteFooter />
    </>
  );
};

export default SignIn;
