import { Planet } from '../../interfaces/Planet'
import Button from '../button/Button'
import PlanetCircle from '../planet-circle/PlanetCircle'
import './PlanetDetailCard.scss'
import {useNavigate} from 'react-router-dom'

interface Props {
	planet: Planet
}

const PlanetDetailCard = ({ planet }: Props) => {
	const navigate = useNavigate()

	const goToEdit = () => {
		navigate(`/${planet.name}`, {state: 'edit'})
	}

	return (
		<article className="detail-card">
			<div className="detail-card__image">
				<PlanetCircle width="16rem" height="16rem" terrain={planet?.terrain} />
				<div>
					<Button onClick={goToEdit}>Editar</Button>
					<Button>Borrar</Button>
				</div>
			</div>
			<div className="detail-card__info">
				<h1 className='detail-card__info--title'>{planet?.name}</h1>
				<div className='detail-card__info--list'>
					<div>
						<p>Diameter: <strong>{planet?.diameter} km</strong></p>
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