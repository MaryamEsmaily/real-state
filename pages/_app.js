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

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: reactQueryConfig,
        },
      })
  );

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      {/* <UserProvider> */}
      <Hydrate state={pageProps.dehydratedState}>
        {/* <CacheProvider value={cacheRtl}> */}
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            TransitionComponent={Zoom}
          >
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </SnackbarProvider>
        </ThemeProvider>
        {/* </CacheProvider> */}
      </Hydrate>
      {/* </UserProvider> */}
    </QueryClientProvider>
  );
}

export default MyApp;
