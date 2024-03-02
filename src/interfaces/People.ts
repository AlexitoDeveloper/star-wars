import { Planet } from './Planet'

export interface People {
	id: string
	name: string
	height: number
	mass: number
	gender: string
	homeworld: Planet
}