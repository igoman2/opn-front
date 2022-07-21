import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global-style";
import Head from "next/head";
import Layout from "../layouts/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>개원여기</title>
                <meta
                    name="description"
                    content="서울부터 제주도까지, 각 의과별로 개원을 위한 정보를 찾아보세요."
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default App;
