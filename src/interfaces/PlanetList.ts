import { Planet } from './Planet'

export interface PlanetList {
	count: number
	next: string
	previous: string
	results: Array<Planet>
}