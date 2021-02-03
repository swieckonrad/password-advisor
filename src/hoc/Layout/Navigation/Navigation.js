/** @jsxRuntime classic */
/** @jsx jsx */
import {AppBar, Toolbar, Typography,} from '@material-ui/core'
import {css, jsx} from '@emotion/core'
import {NavigationItems} from './NavigationItems/NavigationItems'

export const Navigation = () => {
	const styles = {
		title: css`
			flex: 1;
		`,
	}
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<Typography variant='h6' css={styles.title}>
					Password Advisor
				</Typography>
				<NavigationItems/>
			</Toolbar>
		</AppBar>
	)
}
