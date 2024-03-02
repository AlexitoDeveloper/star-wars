import axios from 'axios'
import { PlanetList } from '../interfaces/PlanetList'
import { Planet } from '../interfaces/Planet'

const PLANETS_URL = 'https://swapi.dev/api/planets/'

export const getPlanets = async (url?: string | null): Promise<PlanetList | null> => {
	try {
		const response = await axios.get(url ?? PLANETS_URL)
		return response.data
	} catch(error) {
		console.log(error)
		return null
	}
}

export const getPlanet = async (name: string): Promise<Planet | null> => {
	try {
		const response = await axios.get(`${PLANETS_URL}/?search=${name}`)
		return response.data.results[0]
	} catch(error) {
		console.log(error)
		return null
	}
}