import {beforeAll, describe, test, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import PlanetCircle from './PlanetCircle'

describe('PlanetCircle', () => {
	beforeAll(() => {
		render(<PlanetCircle />)
	})

	test('should render', () => {
		const circle = screen.getByTestId('planet-circle')
		expect(circle.getAttribute('class')).toContain('planet--unknown')
	})
})