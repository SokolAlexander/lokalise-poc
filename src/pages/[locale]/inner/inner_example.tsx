import { useRouter } from "next/router";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export default function InnerExample() {
  const { back } = useRouter();

  const goBack = () => {
    back();
  };

  return (
    <main style={{ height: "100vh" }}>
      <h3>This is an inner example</h3>
      <div onClick={goBack}>
        <span>Go Back</span>
      </div>
    </main>
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
