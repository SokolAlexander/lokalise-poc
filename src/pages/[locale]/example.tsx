import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

export default function Example() {
  const { push, back, query } = useRouter();
  const { i18n, t } = useTranslation();

  console.log(i18n.language);

  const goToInner = () => {
    push({
      pathname: `inner/inner_example`,
      query: {
        locale: query.locale,
      },
    });
  };

  const goBack = () => {
    back();
  };

  return (
    <main style={{ height: "100vh" }}>
      <h3>This is an example: {t("common")}</h3>
      <div onClick={goToInner}>
        <span>Go to Inner page</span>
      </div>
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
