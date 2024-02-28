import axios from 'axios'
import { PlanetList } from '../interfaces/PlanetList'
import { Planet } from '../interfaces/Planet'

const PLANETS_URL = 'https://swapi.dev/api/planets/'

export const getPlanets = async (): Promise<PlanetList> => {
	try {
		const response = await axios.get(PLANETS_URL)
		return response.data
	} catch(error) {
		console.log(error)
		throw error
	}
}

export const getPlanet = async (id: string): Promise<Planet> => {
	try {
		const response = await axios.get(`${PLANETS_URL}/${id}`)
		return response.data as Planet
	} catch(error) {
		console.log(error)
		throw error
	}
}