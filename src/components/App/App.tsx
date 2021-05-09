import { FC, memo } from "react";
import AppWrapper from "@root/components/AppWrapper/AppWrapper";
import AppProvider from "@root/components/AppProvider/AppProvider";
import { i18n as TranslationType } from "i18next";

export interface AppProperties {
  translation: TranslationType;
}

const App: FC<AppProperties> = ({
  translation,
}: AppProperties): JSX.Element => {
  return (
    <AppProvider translation={translation}>
      <AppWrapper />
    </AppProvider>
  );
};

export default memo(App);
