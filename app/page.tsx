import SignUp from "@/components/SinUp";
import { ThemeProvider } from "@/theme/themeContext";
import "@/styles/globals.css"; // Assuming you have a global CSS file
import { Paper } from "@mui/material";
import { appWithI18Next } from "ni18n";

interface HomeProps {
  Component: any;
  pageProps: any;
}

function Home({ Component, pageProps }: HomeProps) {
  return (
    <ThemeProvider>
      <Paper>
        <SignUp {...pageProps} />
      </Paper>
    </ThemeProvider>
  );
}

export default Home;
