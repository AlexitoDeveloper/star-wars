import {beforeAll, describe, test, expect, vi} from 'vitest'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import PlanetDetailCardEdit from './PlanetDetailCardEdit'
import { Planet } from '../../../interfaces/Planet'

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

describe('PlanetDetailCardEdit', () => {
	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: vi.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: vi.fn(),
				removeListener: vi.fn(),
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
				dispatchEvent: vi.fn(),
			})),
		})
		render(<PlanetDetailCardEdit planet={mockPlanet} />)
	})

	test('should render', () => {
		const card = screen.getByRole('article')
		expect(card).toBeDefined()
	})

	test('form submit called correctly', async () => {
		fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test name' } })
		fireEvent.change(screen.getByLabelText('Diameter'), { target: { value: '2000' } })
		fireEvent.change(screen.getByLabelText('Climate'), { target: { value: 'test climate' } })
		fireEvent.change(screen.getByLabelText('Terrain'), { target: { value: 'test terrain' } })
		fireEvent.click(screen.getByText('Submit'))

		await waitFor(() => {
			expect(mockNavigate).toHaveBeenCalledWith(`/${mockPlanet.name}`, { replace: true })
		})
	})
})