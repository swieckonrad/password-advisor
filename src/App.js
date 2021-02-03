/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "./hoc/Layout/Layout";
import { Theme } from "./hoc/Theme/Theme";
import { AdvisorPage } from "./pages/AdvisorPage/AdvisorPage";
import { InfoPage } from "./pages/InfoPage/InfoPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Theme>
        <Layout>
          <Route exact path="/">
            <AdvisorPage />
          </Route>
          <Route exact path="/info">
            <InfoPage />
          </Route>
        </Layout>
      </Theme>
    </BrowserRouter>
  );
};
