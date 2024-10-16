import React, { ReactNode } from "react";
import css from "./Error.module.css";

interface ErrorProps {
  children: ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => {
  return (
    <p className={css.text}>
      <b>{children}</b>
    </p>
  );
};

export default Error;
