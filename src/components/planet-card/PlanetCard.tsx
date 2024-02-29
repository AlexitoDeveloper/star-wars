import { Planet } from '../../interfaces/Planet'
import PlanetCircle from '../planet-circle/PlanetCircle'
import './PlanetCard.scss'

interface Props {
	planet: Planet | null
}

const PlanetCard = ({planet}: Props) => {
	return (
		<article className='card'>
			<header>
				<PlanetCircle terrain={planet?.terrain} />
				<h3>{planet?.name}</h3>
			</header>
			<div className='card__body'>
				<p>Diameter: <strong>{planet?.diameter}</strong></p>
				<p>Habitants: <strong>{planet?.residents.length}</strong></p>
				<p>Climate: <strong>{planet?.climate}</strong></p>
				<p>Terrain: <strong>{planet?.terrain}</strong></p>
			</div>
		</article>
	)
}

export default PlanetCard