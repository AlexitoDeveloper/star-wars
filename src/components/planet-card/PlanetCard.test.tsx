import {beforeAll, describe, test, expect, vi} from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react'
import PlanetCard from './PlanetCard'
import { Planet } from '../../interfaces/Planet'

const mockNavigate = vi.fn()
vi.mock('react-router-dom', () => ({
	...vi.importActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}))

const mockPlanet: Planet = {
	id: crypto.randomUUID(),
	name: 'Name',
	diameter: 1000,
	climate: 'climate',
	population: 10,
	residents: ['Resident', 'Resident 2'],
	terrain: 'mountains',
	url: 'url'
}

describe('PlanetCard', () => {
	beforeAll(() => {
		render(<PlanetCard planet={mockPlanet} />)
	})

	test('should render', () => {
		expect(mockPlanet.name).toBeDefined()
		expect(mockPlanet.diameter).toBeDefined()
		expect(mockPlanet.climate).toBeDefined()
		expect(mockPlanet.terrain).toBeDefined()
	})

	test('goToDetail is called correctly', () => {
		const card = screen.getByRole('article')
		fireEvent.click(card)

		expect(mockNavigate).toHaveBeenCalledWith(`/${mockPlanet.name}`)
	})

	test('edit button called correctly', () => {
		const editButton = screen.getByText('Edit')
		fireEvent.click(editButton)

		expect(mockNavigate).toHaveBeenCalledWith('/Name', {state: 'edit'})
	})
})