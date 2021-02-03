/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import {Button, Icon, useTheme} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

export const NavigationItem = props => {
	const history = useHistory()
	
	const handleClick = () => {
		history.push(props.link)
	}
	
	const theme = useTheme()
	
	const styles = {
		root: css`
			margin: 0 ${theme.spacing(2)}px;
		`,
	}
	
	return (
		<Button
			onClick={handleClick}
			css={styles.root}
			color='inherit'
			size='large'
			startIcon={<Icon>{props.icon}</Icon>}
		>
			{props.name}
		</Button>
	)
}