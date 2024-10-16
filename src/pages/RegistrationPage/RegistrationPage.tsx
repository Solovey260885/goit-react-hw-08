import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegisterPage: React.FC = () => {
  return (
    <div>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
    </div>
  );
};
export default RegisterPage;
