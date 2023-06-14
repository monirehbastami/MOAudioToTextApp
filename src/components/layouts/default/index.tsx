import Footer from "./footer";
import Head from "next/head";
import { Nav } from "./navbar";

interface DefaultLayoutProps extends React.PropsWithChildren {
  title: string;
}

export const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({
  children,
  title,
}): JSX.Element => {
  return (
    <>
      <Nav title={title} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
