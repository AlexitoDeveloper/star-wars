import {beforeAll, describe, test, expect, vi} from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react'
import Button from './Button'

const mockProps = {
	onClick: vi.fn()
}

describe('Button', () => {
	beforeAll(() => {
		render(<Button {...mockProps}>Test button</Button>)
	})

	test('should render', () => {
		expect(screen.getByText('Test button'))
	})

	test('onClick called correctly', () => {
		const button = screen.getByText('Test button')
		fireEvent.click(button)

		expect(mockProps.onClick).toBeCalledTimes(1)
	})
})