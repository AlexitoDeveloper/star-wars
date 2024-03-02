import { useEffect, useState } from 'react'
import { getPlanet } from '../../api/api'
import { Planet } from '../../interfaces/Planet'
import { useParams } from 'react-router-dom'
import PlanetDetailCard from '../../components/planet-detail-card/PlanetDetailCard'
import './PlanetDetail.scss'
import { People } from '../../interfaces/People'
import axios from 'axios'

const PlanetDetail = () => {
	const [planet, setPlanet] = useState<Planet | null>(null)
	const [loading, setLoading] = useState(true)
	const [residents, setResidents] = useState<People[]>([])
	const { name } = useParams()

	useEffect(() => {
		if(name) {
			(async () => {
				const data = await getPlanet(name)
				if(data?.results?.length) {
					setPlanet(data.results[0])
				}
			})()
		}
		setLoading(false)
	}, [])

	useEffect(() => {
		if(planet) {
			getAllResidents().then(response => setResidents(response))
		}
	}, [planet])

	const getAllResidents = async () => {
		const allPromises = planet?.residents.map(url => axios.get(url))
		if (allPromises) {
			try {
				const responses = await Promise.all(allPromises)
				return responses.map(response => response.data) as People[]
			} catch (error) {
				console.error('Error al obtener información de los residentes:', error)
				throw error
			}
		}

		return []
	}

	if(planet) {
		return (
			<section>
				{loading && <span>Loading...</span>}
				{!loading && <PlanetDetailCard planet={planet} residents={residents} />}
			</section>
		)
	} 
	return <></>
}

export default PlanetDetail