import { Planet } from './Planet'

export interface People {
	name: string
	height: number
	mass: number
	gender: string
	homeworld: Planet
}