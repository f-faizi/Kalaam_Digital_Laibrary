import { GlobalStyles as GlobalThemeStyles } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <GlobalThemeStyles
      styles={{
        body: {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
      }}
    />
  );
};

export default GlobalStyles;
