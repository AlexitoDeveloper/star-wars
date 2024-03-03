import PlanetDetailCard from '../../components/planet-detail-card/PlanetDetailCard'
import './PlanetDetail.scss'
import { usePlanetStore } from '../../store/planetStore'
import { useEffect, useState } from 'react'
import { Planet } from '../../interfaces/Planet'
import { getPlanet } from '../../api/api'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import PlanetDetailCardEdit from '../../components/planet-detail-card/edit/PlanetDetailCardEdit'
import PlanetDetailCardSkeleton from '../../components/planet-detail-card/skeleton/PlanetDetailCardSkeleton'

const PlanetDetail = () => {
	const planets = usePlanetStore(state => state.planets)
	const selectedPlanet = usePlanetStore(state => state.selectedPlanet)
	const loadPeople = usePlanetStore(state => state.loadPeople)
	const setPlanets = usePlanetStore(state => state.setPlanets)
	const setSelectedPlanet = usePlanetStore(state => state.setSelectedPlanet)
	
	const [loading, setLoading] = useState(false)
	const { name } = useParams()
	const { state } = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		if(!selectedPlanet && !planets.length && name) {
			setLoading(true)
			getPlanet(name).then(response => {
				if(response) {
					setSelectedPlanet(response)
				} else {
					navigate('/', {replace: true})
				}
			})
		}

		if(selectedPlanet && !selectedPlanet.people?.length) {
			setLoading(true)
			loadPeople(selectedPlanet)
				.then(response => {
					if(response?.length) {
						const updatedPlanets = planets.map(planet => {
							if(planet.id === selectedPlanet.id) return {...planet, people: response}
							return planet
						})
	
						setPlanets(updatedPlanets)
						setSelectedPlanet({...selectedPlanet, people: response})
					}
				
					setLoading(false)
				})
		} 
	}, [selectedPlanet])

	return (
		<section>
			{loading && <PlanetDetailCardSkeleton />}
			{!loading && state !== 'edit' && <PlanetDetailCard planet={selectedPlanet as Planet} />}
			{!loading && state === 'edit' && <PlanetDetailCardEdit planet={selectedPlanet as Planet} />}
		</section>
	) 
}

export default PlanetDetail