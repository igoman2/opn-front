import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global-style";
import Layout from "../layouts/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
