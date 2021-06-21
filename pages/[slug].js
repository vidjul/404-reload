import { useRouter } from "next/router";

export function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: "hello" },
        locale: "fr",
      },
      {
        params: { slug: "hello" },
      },
    ],
    fallback: false,
  };
}

export function getStaticProps({ locale, defaultLocale }) {
  return {
    props: {
      content: locale === defaultLocale ? "Hello" : "Bonjour",
    },
  };
}

export default function Slug({ content }) {
  return <div>{content}</div>;
}
