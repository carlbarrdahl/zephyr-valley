import Head from "next/head";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Head>
      <title>zephyr valley: hand-crafted code and designs</title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="mx-auto flex min-h-screen flex-col">{children}</main>
  </>
);