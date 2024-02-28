import { useEffect, useState } from 'react'
import { getPlanet } from '../../api/api'
import { Planet } from '../../interfaces/Planet'
import PlanetCard from '../../components/planet-card/PlanetCard'

const PlanetDetail = () => {
	const [planet, setPlanet] = useState<Planet | null>(null)

	useEffect(() => {
		(async () => {
			const data = await getPlanet('1')
			if(data) {
				setPlanet(data)
			}
		})()
	}, [])

	return (
		<section>
			<PlanetCard key={planet?.name} planet={planet} />
		</section>
	)
}

export default PlanetDetail