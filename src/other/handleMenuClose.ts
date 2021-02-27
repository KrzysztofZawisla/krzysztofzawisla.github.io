import { KeyboardEvent as ReactKeyboardEvent, SetStateAction } from "react";

const handleMenuDisable = (
  { code, shiftKey }: ReactKeyboardEvent<HTMLDivElement>,
  dispatcher: (value: SetStateAction<boolean>) => void,
): void => {
  if (shiftKey) {
    if (code === "KeyO") {
      dispatcher(true);
    } else if (code === "KeyC") {
      dispatcher(false);
    }
  }
};

export default handleMenuDisable;
