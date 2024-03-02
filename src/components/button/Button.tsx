import { Button as AntButton, ButtonProps } from 'antd'
import './Button.scss'

const Button = ({ children, onClick, ...rest }: ButtonProps) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		if (onClick) {
			onClick(e)
		}
	}

	return (
		<AntButton {...rest} onClick={handleClick}>
			{children}
		</AntButton>
	)
}

export default Button
