import localFont from "next/font/local";
import { FontSource } from "@/app/types/LocalFonts";

const proximaNova = localFont({
  src: [
    {
      path: "./ProximaNova-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./ProximaNova-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./ProximaNova-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./ProximaNova-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ] as FontSource[],
  display: "swap",
});

export default proximaNova;
