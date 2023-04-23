import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const goToExample = () => {
    router.push({
      // Different approach for inner pages and top level pages!!!!
      pathname: `${router.query.locale}/example`,
      // query: { locale: router.query.locale },
    });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <span onClick={goToExample}>Go To Example</span>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ["en", "fr", "de"];
  const paths = locales.map((locale) => ({
    params: {
      locale,
    },
  }));

  return {
    fallback: false,
    paths: paths,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params?: ParsedUrlQuery;
}): Promise<{ props: { [key: string]: any } }> => {
  const locale = params?.locale || "en";
  return {
    props: { ...(await serverSideTranslations(locale as string)) },
  };
};