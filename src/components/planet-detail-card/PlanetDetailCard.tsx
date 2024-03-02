import { Planet } from '../../interfaces/Planet'
import PlanetCircle from '../planet-circle/PlanetCircle'
import './PlanetDetailCard.scss'

interface Props {
	planet: Planet
}

const PlanetDetailCard = ({ planet }: Props) => {
	return (
		<article className="detail-card">
			<div className="detail-card__image">
				<PlanetCircle width="16rem" height="16rem" terrain={planet?.terrain} />
			</div>
			<div className="detail-card__info">
				<h1>{planet?.name}</h1>
				<div className='detail-card__info--list'>
					<div>
						<p>Diameter: <strong>{planet?.diameter}</strong></p>
						<p>Habitants: <strong>{planet?.residents?.length}</strong></p>
					</div>
					<div>
						<p>Climate: <strong>{planet?.climate}</strong></p>
						<p>Terrain: <strong>{planet?.terrain}</strong></p>
					</div>
				</div>

				{planet?.people && planet?.people.length > 0 && (
					<>
						<p>Residents:</p>
						<ul className='detail-card__info__residents--list'>
							{planet.people?.map(resident => (<li key={resident.name}>{resident.name}</li>))}
						</ul>
					</>
				)}
			</div>
		</article>
	)
}

export default PlanetDetailCard