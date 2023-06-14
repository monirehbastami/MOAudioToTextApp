import { DefaultLayout } from "@/components/layouts/default";
import { MainIndex } from "@/components/mainIndex";
import React from "react";

interface HomePageProps extends React.PropsWithChildren {}

const HomePage: React.FunctionComponent<HomePageProps> = (): JSX.Element => {
  return (
    <DefaultLayout title="MOAudioToText">
      <MainIndex />
    </DefaultLayout>
  );
};

export default HomePage;
