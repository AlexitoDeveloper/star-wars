import { useNavigate } from 'react-router-dom'
import { Planet } from '../../interfaces/Planet'
import PlanetCircle from '../planet-circle/PlanetCircle'
import './PlanetCard.scss'
import { usePlanetStore } from '../../store/planetStore'
import Button from '../button/Button'

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

	const handleEditClick = () => {
		setSelectedPlanet(planet)
		navigate(`/${planet.name}`, {state: 'edit'})
	}

	const handleDeleteClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		console.log('Borrar')
	}

	return (
		<article className='card' onClick={() => goToDetail()}>
			<header>
				<PlanetCircle terrain={planet.terrain} />
				<h3>{planet.name}</h3>
			</header>
			<div className='card__body'>
				<p>Diameter: <strong>{planet.diameter} km</strong></p>
				<p>Habitants: <strong>{planet.residents.length}</strong></p>
				<p>Climate: <strong>{planet.climate}</strong></p>
				<p>Terrain: <strong>{planet.terrain}</strong></p>
			</div>
			<footer className='card__footer'>
				<Button onClick={handleEditClick}>Editar</Button>
				<Button onClick={handleDeleteClick}>Borrar</Button>
			</footer>
		</article>
	)
}

export default PlanetCard