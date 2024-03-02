import { useNavigate } from 'react-router-dom'
import { Planet } from '../../interfaces/Planet'
import PlanetCircle from '../planet-circle/PlanetCircle'
import './PlanetCard.scss'
import { usePlanetStore } from '../../store/planetStore'

interface Props {
	planet: Planet
}

const PlanetCard = ({planet}: Props) => {
	const navigate = useNavigate()
	const setSelectedPlanet = usePlanetStore(state => state.setSelectedPlanet)

	const goToDetail = () => {
		setSelectedPlanet(planet)
		navigate(`/${planet.name}`)
	}

	return (
		<article className='card' onClick={() => goToDetail()}>
			<header>
				<PlanetCircle terrain={planet.terrain} />
				<h3>{planet.name}</h3>
			</header>
			<div className='card__body'>
				<p>Diameter: <strong>{planet.diameter}</strong></p>
				<p>Habitants: <strong>{planet.residents.length}</strong></p>
				<p>Climate: <strong>{planet.climate}</strong></p>
				<p>Terrain: <strong>{planet.terrain}</strong></p>
			</div>
		</article>
	)
}

export default PlanetCard