import { People } from './People'

export interface Planet {
	id: string
	name: string
	diameter: number
	climate: string
	population: number
	residents: Array<string>
	terrain: string
	url: string
	people?: Array<People>
}