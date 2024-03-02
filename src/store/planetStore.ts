import {create} from 'zustand' 
import { Planet } from '../interfaces/Planet'
import { getPlanets } from '../api/api'
import axios from 'axios'
import { People } from '../interfaces/People'

interface State {
  planets: Planet[]
  next: string | null
  previous: string | null
  selectedPlanet: Planet | null
}

interface Action {
  loadPlanets: () => Promise<void>
  loadNextPage: () => Promise<void>
  setPlanets: (planets: Planet[]) => void
  setSelectedPlanet: (selectedPlanet: Planet | null) => void
  loadPeople: (planet: Planet) => Promise<People[]>
  resetSelectedPlanet: () => void
	updatePlanet: (planet: Planet) => void
}

const initialState: State = {
	planets: [],
	next: null,
	previous: null,
	selectedPlanet: null
}

export const usePlanetStore = create<State & Action>((set, get) => ({
	...initialState,

	loadPlanets: async () => {
		const data = await getPlanets()
		if(data) {
			const planets = data.results.map(planet => ({...planet, id: crypto.randomUUID()}))
			set({planets, next: data.next, previous: data.previous})
		}
	},

	loadNextPage: async () => {
		const {next, planets} = get()
		if(next) {
			const data = await getPlanets(next)
			if(data) {
				const morePlanets = data.results.map(planet => ({...planet, id: crypto.randomUUID()}))
				const updatedPlanets = [...planets].concat(morePlanets)
				set({planets: updatedPlanets, next: data.next, previous: data.previous})
			}
		}
	},

	setPlanets: (planets: Planet[]) => set({planets}),

	setSelectedPlanet: async (selectedPlanet: Planet | null) => set({selectedPlanet}),

	loadPeople: async (planet: Planet) => {
		const allPromises = planet.residents.map(url => axios.get(url))
		try {
			const responses = await Promise.all(allPromises)
			return responses.map(response => {
				return {...response.data, id: crypto.randomUUID()} as People
			})
		} catch (error) {
			console.error(error)
			return []
		}
	},

	resetSelectedPlanet: () => set({selectedPlanet: null}),

	updatePlanet: (planet: Planet) => {
		const {selectedPlanet, planets} = get()

		const updatedPlanets = planets.map(p => {
			if(p.id === planet.id) return planet
			return p
		})
		set({planets: updatedPlanets})
		
		if(selectedPlanet && planet.id === selectedPlanet.id) {
			set({selectedPlanet: planet})
		}
	}
}))