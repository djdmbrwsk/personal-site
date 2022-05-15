import { CssBaseline, ThemeProvider, createTheme, css } from '@mui/material';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme();

  console.log(
    'Hey there 👋 😉 the source is at https://https://github.com/djdmbrwsk/personal-site',
  );

  return (
    <div
      css={css`
        -webkit-tap-highlight-color: transparent;
      `}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
