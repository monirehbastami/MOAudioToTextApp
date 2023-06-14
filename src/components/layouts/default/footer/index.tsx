import Link from "next/link";
import React from "react";

interface FooterProps extends React.PropsWithChildren {}

const Footer: React.FunctionComponent<FooterProps> = (): JSX.Element => {
  return (
    <footer className="z-40 flex h-12 w-full items-center justify-center bg-light-secondary p-5 text-sm text-light-content dark:bg-dark-secondary dark:text-dark-content">
      <div className="flex w-full justify-center lg:text-xl">
        <div className="uppercase">
          designed with
          <span className="text-[#c60049]"> ❤ </span>
          by
          <span className="font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-light-rate1 via-light-rate2 to-light-rate3">
            <a target="_blank" href="#">
              &nbsp;Monireh Bastami
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
