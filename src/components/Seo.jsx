import { Helmet } from "react-helmet-async";

const SITE_NAME = "Save Our Solar Club";
const DEFAULT_OG_IMAGE = "/og-default.png"; // PLACEHOLDER: replace with real branded share image

export default function Seo({ title, description, path = "/", image = DEFAULT_OG_IMAGE }) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://www.saveoursolarclub.com${path}`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`https://www.saveoursolarclub.com${path}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
