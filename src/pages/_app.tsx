import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../layouts/Layout";
import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import PrivateRoute from "./PrivateRoute";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/global-style";

function App({ Component, pageProps }: AppProps) {
  const protectedRoutes = ["/search", "/report"];

  return (
    <>
      <NextSeo
        title="개원여기"
        description="서울부터 제주도까지, 각 의과별로 개원을 위한 정보를 찾아보세요."
        canonical="https://hospital-here.vercel.app/"
        openGraph={{
          type: "website",
          url: "https://hospital-here.vercel.app/",
          title: "개원여기",
          description:
            "서울부터 제주도까지, 각 의과별로 개원을 위한 정보를 찾아보세요.",
          images: [
            {
              url: "https://opndoctor.com/images/logo-all-white-large-low-quality.png",
            },
          ],
          site_name: "hospital-here",
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <PrivateRoute protectedRoutes={protectedRoutes}>
            <Component {...pageProps} />
          </PrivateRoute>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
