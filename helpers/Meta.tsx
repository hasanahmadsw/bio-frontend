import Head from "next/head";

export interface MetaProps {
  title: string;
  keywords: string;
  description: string;
  ogType: string;
  ogUrl: string;
  ogImage: string;
}

const Meta = ({
  title,
  keywords,
  description,
  ogType,
  ogUrl,
  ogImage,
}: MetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta charSet="utf-8"></meta>
      <link rel="icon" href="/favicon.png"></link>
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "Hasan Ahmad",
  keywords: "Hasan Ahmad, hasan ahmad, hasan ali ahmad, software engineering",
  description:
    "Helping people make the world a better place through quality software.",
  ogTitle: "Hasan Ahmad | حسن احمد",
  ogType: "website",
  ogUrl: "https://hasanahmad.net",
  ogImage: "https://hasanahmad.net/favicon.png",
};
export default Meta;
