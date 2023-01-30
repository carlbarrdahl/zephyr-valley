import { type AppType } from "next/app";

import { api } from "../utils/api";

import { Karla } from "@next/font/google";

import "../styles/globals.css";

const karla = Karla({
  subsets: ["latin"],
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --karla-font: ${karla.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
