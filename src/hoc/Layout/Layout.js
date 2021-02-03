/** @jsxRuntime classic */
/** @jsx jsx */
import { Navigation } from "./Navigation/Navigation";
import { jsx } from "@emotion/core";
import { CssBaseline, Paper } from "@material-ui/core";
import { Footer } from "./Footer/Footer";

export const Layout = (props) => {
  return (
    <Paper square elevation={0}>
      <CssBaseline />
      <Navigation />
      <div>{props.children}</div>
      <Footer />
    </Paper>
  );
};
