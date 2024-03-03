import { useEffect } from 'react'
import PlanetCard from '../../components/planet-card/PlanetCard'
import './Home.scss'
import { usePlanetStore } from '../../store/planetStore'
import InfiniteScroll from 'react-infinite-scroll-component'
import PlanetCardSkeleton from '../../components/planet-card/skeleton/PlanetCardSkeleton'

const Home = () => {
	const planets = usePlanetStore(state => state.planets)
	const loadPlanets = usePlanetStore(state => state.loadPlanets)
	const loadNextPage = usePlanetStore(state => state.loadNextPage)
	const nextPage = usePlanetStore(state => state.next)
	const selectedPlanet = usePlanetStore(state => state.selectedPlanet)
	const resetSelectedPlanet = usePlanetStore(state => state.resetSelectedPlanet)

	useEffect(() => {
		if(!planets?.length) {
			loadPlanets()
		}
		if(selectedPlanet) {
			resetSelectedPlanet()
		}
	}, [])

	return (
		<InfiniteScroll
			className='container'
			dataLength={planets.length}
			next={() => loadNextPage()}
			hasMore={Boolean(nextPage)}
			loader={<PlanetCardSkeleton />}
		>
			{planets?.map(planet => (
				<PlanetCard key={planet.id} planet={planet} />
			))}
		</InfiniteScroll>
	)
}

export default Home