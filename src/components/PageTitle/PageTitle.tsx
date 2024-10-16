import React, { ReactNode } from "react";
import css from "./PageTitle.module.css";

interface PageTitleProps {
  children: ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return <h1 className={css.heading}>{children}</h1>;
};

export default PageTitle;
