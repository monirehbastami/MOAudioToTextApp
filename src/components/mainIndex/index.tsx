import { Transcribe } from "./transcribe";

interface MainIndexProps extends React.PropsWithChildren {}

export const MainIndex: React.FunctionComponent<
  MainIndexProps
> = ({}): JSX.Element => {
  return (
    <>
      <div className="overflow-y-auto py-5 flex justify-center text-center h-[calc(100vh-128px)]  bg-dark-heading dark:bg-dark-primary text-light-heading dark:text-dark-content">
        <div className="w-full md:basis-2/4 lg:text-5xl">
          <Transcribe />
        </div>
      </div>
    </>
  );
};
