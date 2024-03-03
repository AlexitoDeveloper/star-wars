import {beforeAll, describe, test, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import PlanetCardSkeleton from './PlanetCardSkeleton'

describe('PlanetCardSkeleton', () => {
	beforeAll(() => {
		render(<PlanetCardSkeleton />)
	})

	test('should render', () => {
		const card = screen.getByRole('article')
		expect(card).toBeDefined()
	})
})
