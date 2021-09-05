import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

import "../../styles/globals.css";

import Layout from "../components/Layouts/Layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return (
        <Layout>
          <main>{page}</main>
        </Layout>
      );
    });

  return getLayout(<Component {...pageProps} />);
}
export default MyApp;
