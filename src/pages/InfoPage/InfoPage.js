/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Typography } from "@material-ui/core";

export const InfoPage = () => {
  const styles = {
    infopage: css`
      text-align: center;
      margin: 30px;
      font-size: 20px;
    `,
  };

  return (
    <Typography css={styles.infopage}>
      Password Advisor created by Konrad
    </Typography>
  );
};
