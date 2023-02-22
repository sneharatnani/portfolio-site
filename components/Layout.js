import Navbar from "./navbar/Navbar.js";
import Footer from "./footer/Footer.js";
import { ThemeProvider } from "next-themes";
import Head from "next/head.js";
import { useRouter } from "next/router.js";

export default function Layout({ children, metaTitle }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="robots" content="follow, index" />
        <title>{metaTitle}</title>
        <meta
          content="I'm a front-end web developer and designer"
          name="description"
        />
        <meta
          property="og:url"
          content={`https://sneharatnani.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://sneharatnani.com${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sneha Ratnani" />
        <meta
          property="og:description"
          content="I'm a front-end web developer and designer"
        />
        <meta property="og:title" content={metaTitle} />
      </Head>
      <ThemeProvider attribute="class">
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}
