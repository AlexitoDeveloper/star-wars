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
		if(get().next) {
			const data = await getPlanets(get().next)
			if(data) {
				const morePlanets = data.results.map(planet => ({...planet, id: crypto.randomUUID()}))
				const planets = [...get().planets].concat(morePlanets)
				set({planets, next: data.next, previous: data.previous})
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

	resetSelectedPlanet: () => set({selectedPlanet: null})
}))