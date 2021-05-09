import { FC, memo } from "react";
import AppWrapper from "@root/components/AppWrapper/AppWrapper";
import AppProvider from "@root/components/AppProvider/AppProvider";
import { i18n } from "i18next";

export interface AppProperties {
  translation: i18n;
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
