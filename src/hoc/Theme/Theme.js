/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import * as colors from "@material-ui/core/colors";

export const Theme = ({ children }) => {
  const newTheme = createMuiTheme({
    palette: {
      primary: colors.lightBlue,
      secondary: colors.pink,
    },
  });

  return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
};
