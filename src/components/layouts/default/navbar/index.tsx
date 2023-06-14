import React from "react";
import Toggle from "./toggle/Toggle";

interface NavProps extends React.PropsWithChildren {
  title: string;
}

export const Nav: React.FunctionComponent<NavProps> = (props): JSX.Element => {
  return (
    <nav className="sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-dark-heading px-2 dark:bg-dark-secondary shadow-md shadow-light-primary dark:shadow-dark-primary">
      <div className="flex items-center gap-2">
        <img
          className="w-20 lg:w-52"
          src="/assets/logo.png"
          alt="mad frogs logo"
        />
        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-light-rate1 via-light-rate2 to-light-rate3  lg:text-4xl">
          {props.title}
        </h1>
      </div>
      <div className="bg-dark-p flex gap-2 ">
        <Toggle />
      </div>
    </nav>
  );
};
