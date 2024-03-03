import {beforeAll, describe, test, expect, vi} from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react'
import PlanetDetailCard from './PlanetDetailCard'
import { Planet } from '../../interfaces/Planet'

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

const mockNavigate = vi.fn()
vi.mock('react-router-dom', () => ({
	...vi.importActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}))

describe('PlanetDetailCard', () => {
	beforeAll(() => {
		render(<PlanetDetailCard planet={mockPlanet} />)
	})

	test('should render', () => {
		expect(mockPlanet.name).toBeDefined()
		expect(mockPlanet.diameter).toBeDefined()
		expect(mockPlanet.climate).toBeDefined()
		expect(mockPlanet.terrain).toBeDefined()
		expect(mockPlanet.residents.length).toBeDefined()
	})

	test('back button called correctly', () => {
		const backButton = screen.getByText('Back')
		fireEvent.click(backButton)

		expect(mockNavigate).toHaveBeenCalledWith(-1)
	})

	test('edit button called correctly', () => {
		const editButton = screen.getByText('Edit')
		fireEvent.click(editButton)

		expect(mockNavigate).toHaveBeenCalledWith('/Name', {state: 'edit'})
	})
})