/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Paper from "@material-ui/core/Paper";
import {Typography, useTheme} from "@material-ui/core";


export const Footer = () => {
    const theme = useTheme();
    const styles = {
        root: css`
          text-align: center;
          padding: ${theme.spacing(1)}px 0;
        `
    }

    return (
        <Paper css={styles.root}>
            <Typography variant="subtitle1">
                &copy; Copyright {new Date().getFullYear()}
            </Typography>
        </Paper>
    )
}