import { useEffect, useState } from 'react'
import { getPlanet } from '../../api/api'
import { Planet } from '../../interfaces/Planet'
import { useParams } from 'react-router-dom'
import PlanetDetailCard from '../../components/planet-detail-card/PlanetDetailCard'
import './PlanetDetail.scss'

const PlanetDetail = () => {
	const [planet, setPlanet] = useState<Planet | null>(null)
	const [loading, setLoading] = useState(true)
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

	if(planet) {
		return (
			<section>
				{loading && <span>Loading...</span>}
				{!loading && <PlanetDetailCard planet={planet} />}
			</section>
		)
	} 
	return <></>
}

export default PlanetDetail