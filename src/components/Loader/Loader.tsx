import React, { useState, useEffect, ReactNode } from "react";
import css from "./Loader.module.css";

interface LoaderProps {
  children: ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ children }) => {
  const [dots, setDots] = useState<string>("");

  useEffect(() => {
    const interval: number = setInterval(() => {
      setDots((dots) => (dots.length < 3 ? dots + "." : ""));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={css.text}>
      <b>
        {children}
        {dots}
      </b>
    </p>
  );
};

export default Loader;
