import PlanetDetailCard from '../../components/planet-detail-card/PlanetDetailCard'
import './PlanetDetail.scss'
import { usePlanetStore } from '../../store/planetStore'
import { useEffect, useState } from 'react'
import { Planet } from '../../interfaces/Planet'
import { getPlanet } from '../../api/api'
import { useParams } from 'react-router-dom'

const PlanetDetail = () => {
	const planets = usePlanetStore(state => state.planets)
	const selectedPlanet = usePlanetStore(state => state.selectedPlanet)
	const loadPeople = usePlanetStore(state => state.loadPeople)
	const setPlanets = usePlanetStore(state => state.setPlanets)
	const setSelectedPlanet = usePlanetStore(state => state.setSelectedPlanet)
	
	const [loading, setLoading] = useState(false)
	const { name } = useParams()

	useEffect(() => {
		if(!selectedPlanet && !planets.length && name) {
			setLoading(true)
			getPlanet(name).then(response => {
				setSelectedPlanet(response)
			})
		}

		if(selectedPlanet && !selectedPlanet.people?.length) {
			setLoading(true)
			loadPeople(selectedPlanet)
				.then(response => {
					const updatedPlanets = planets.map(planet => {
						if(planet.id === selectedPlanet.id) return {...planet, people: response}
						return planet
					})

					setPlanets(updatedPlanets)
					setSelectedPlanet({...selectedPlanet, people: response})
					setLoading(false)
				})
		} 
	}, [selectedPlanet])

	return (
		<section>
			{loading && <h4>Loading</h4>}
			{!loading && <PlanetDetailCard planet={selectedPlanet as Planet} />}
		</section>
	) 
}

export default PlanetDetail