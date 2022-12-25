import { CssBaseline, ThemeProvider, Zoom } from "@mui/material";
import theme from "styles/theme/theme";
import "../styles/globals.css";
import {
  QueryClientProvider,
  Hydrate,
  QueryClient,
} from "@tanstack/react-query";
import reactQueryConfig from "config/reactQueryConfig";
import { useState } from "react";
import { SnackbarProvider } from "notistack";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: reactQueryConfig,
        },
      })
  );

  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      {/* <UserProvider> */}
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              TransitionComponent={Zoom}
            >
              <ToastContainer position="bottom-left" />
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
            </SnackbarProvider>
          </ThemeProvider>
        </CacheProvider>
      </Hydrate>
      {/* </UserProvider> */}
    </QueryClientProvider>
  );
}

export default MyApp;
