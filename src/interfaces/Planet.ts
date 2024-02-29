import { People } from './People'

export interface Planet {
	name: string
	diameter: number
	climate: string
	population: number
	residents: Array<People>
	terrain: string
}