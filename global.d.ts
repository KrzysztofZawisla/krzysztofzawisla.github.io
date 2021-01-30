import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  HTMLImageElement,
  FC,
} from "react";

declare module "react-circle-flags" {
  interface CircleFlagProperties
    extends DetailedHTMLProps<
      ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    > {
    countryCode: string;
  }
  export declare const CircleFlag: FC<CircleFlagProperties> = () => JSX.Element;
}
