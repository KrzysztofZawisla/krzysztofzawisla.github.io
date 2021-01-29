import {
  createContext,
  Context,
  Provider,
  Dispatch,
  SetStateAction,
} from "react";

export type GlobalContext = Context<GlobalContextCompleteValues>;
type GlobalContextProvider = Provider<GlobalContextCompleteValues>;

export type IsMobileDispatcher = [boolean, Dispatch<SetStateAction<boolean>>];
export type IsMenuOpenOnMobileDispatcher = [
  boolean,
  Dispatch<SetStateAction<boolean>>,
];

export interface GlobalContextCompleteValues {
  isMobileDispatcher: IsMobileDispatcher;
  isMenuOpenOnMobileDispatcher: IsMenuOpenOnMobileDispatcher;
}

export interface GlobalContextValues {
  isMobile: boolean;
  isMenuOpenOnMobile: boolean;
}

export const initialGlobalStoreValue: GlobalContextValues = {
  isMobile: window.innerWidth < 768 ? true : false,
  isMenuOpenOnMobile: false,
};

const GlobalContext: GlobalContext = createContext<GlobalContextCompleteValues>(
  (initialGlobalStoreValue as unknown) as GlobalContextCompleteValues,
);
export const GlobalContextProvider: GlobalContextProvider =
  GlobalContext.Provider;

export default GlobalContext;
