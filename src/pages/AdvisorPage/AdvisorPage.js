/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import {
  Container,
  createMuiTheme,
  Icon,
  LinearProgress,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import * as colors from "@material-ui/core/colors";

export const AdvisorPage = () => {
  const [strength, setStrength] = useState(0);
  const handleTextChange = (event) => checkStrength(event.target.value);

  const hasLowerCase = (str) => {
    return /[a-z]/.test(str);
  };

  const hasUpperCase = (str) => {
    return /[A-Z]/.test(str);
  };

  const hasNumbers = (str) => {
    return /[0-9]/.test(str);
  };

  const hasSpecialChar = (str) => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(str);
  };

  const isLong = (str) => {
    return str.length > 15;
  };

  const validatorsList = [
    {
      validationFunction: hasNumbers,
      points: 2,
    },
    {
      validationFunction: hasLowerCase,
      points: 1,
    },
    {
      validationFunction: hasUpperCase,
      points: 1,
    },
    {
      validationFunction: hasSpecialChar,
      points: 3,
    },
    {
      validationFunction: isLong,
      points: 3,
    },
  ];

  const MAX_STRENGTH = validatorsList.reduce((acc, cur) => acc + cur.points, 0);

  const checkStrength = (password) => {
    let newStrength = 0;

    for (let i = 0; i < validatorsList.length; i++) {
      const { points, validationFunction } = validatorsList[i];
      if (validationFunction(password)) {
        newStrength += points;
      }
    }
    setStrength(newStrength);
  };

  const styles = {
    icon: css`
      font-size: 150px;
      display: block;
      background-color: lightblue;
      border-radius: 40px;
      margin: 30px auto 15px;
    `,
    field: css`
      width: min(800px, 90vw);
      margin: 20px auto 30px;
    `,
    progress: css`
      width: min(800px, 90vw);
      height: 15px;
    `,
  };

  const stripeValue = (strength / MAX_STRENGTH) * 100;

  const stripeColor = (() => {
    if (stripeValue < 20) {
      return colors.red;
    }
    if (stripeValue < 40) {
      return colors.orange;
    }
    if (stripeValue < 60) {
      return colors.amber;
    }
    if (stripeValue < 80) {
      return colors.yellow;
    }
    return colors.green;
  })();

  return (
    <Container align="center">
      <Icon css={styles.icon}>vpn_key</Icon>
      <TextField
        css={styles.field}
        label="Enter your password"
        variant="outlined"
        size="small"
        color="secondary"
        onChange={handleTextChange}
      />
      <ThemeProvider
        theme={createMuiTheme({
          palette: {
            primary: stripeColor,
          },
        })}
      >
        <LinearProgress
          css={styles.progress}
          variant="determinate"
          value={stripeValue}
        />
      </ThemeProvider>
    </Container>
  );
};
