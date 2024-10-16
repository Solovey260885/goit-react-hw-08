import React, { ReactNode } from "react";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
};
export default Layout;
