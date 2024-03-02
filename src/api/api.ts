import axios from 'axios'
import { PlanetList } from '../interfaces/PlanetList'
import { People } from '../interfaces/People'

const PLANETS_URL = 'https://swapi.dev/api/planets/'
const PEOPLE_URL = 'https://swapi.dev/api/people/'

export const getPlanets = async (): Promise<PlanetList> => {
	try {
		const response = await axios.get(PLANETS_URL)
		return response.data
	} catch(error) {
		console.log(error)
		throw error
	}
}

export const getPlanet = async (name: string): Promise<PlanetList> => {
	try {
		const response = await axios.get(`${PLANETS_URL}/?search=${name}`)
		return response.data
	} catch(error) {
		console.log(error)
		throw error
	}
}

export const getPeople = async (name: string): Promise<People> => {
	try {
		const response = await axios.get(`${PEOPLE_URL}/?search=${name}`)
		return response.data
	} catch(error) {
		console.log(error)
		throw error
	}
}