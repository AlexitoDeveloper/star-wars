import { useEffect, useState } from 'react'
import { getPlanets } from '../../api/api'
import { Planet } from '../../interfaces/Planet'
import PlanetCard from '../../components/planet-card/PlanetCard'

const Home = () => {
	const [planets, setPlanets] = useState<Planet[]>([])

	useEffect(() => {
		(async () => {
			const data = await getPlanets()
			if(data?.results.length) {
				setPlanets(data.results)
			}
		})()
	}, [])

	return (
		<section>
			{planets?.map(planet => (
				<PlanetCard key={planet.name} planet={planet} />
			))}
		</section>
	)
}

export default Home