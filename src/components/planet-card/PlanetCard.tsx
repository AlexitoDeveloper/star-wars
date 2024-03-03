import { useNavigate } from 'react-router-dom'
import { Planet } from '../../interfaces/Planet'
import PlanetCircle from '../planet-circle/PlanetCircle'
import './PlanetCard.scss'
import { usePlanetStore } from '../../store/planetStore'
import Button from '../button/Button'
import {Modal} from 'antd'

interface Props {
	planet: Planet
}

const PlanetCard = ({planet}: Props) => {
	const navigate = useNavigate()
	const setSelectedPlanet = usePlanetStore(state => state.setSelectedPlanet)
	const setPlanets = usePlanetStore(state => state.setPlanets)
	const planets = usePlanetStore(state => state.planets)

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

		Modal.confirm({
			title: 'Confirm',
			content: `Do you want to delete the planet ${planet.name}?`,
			onOk: () => {
				setPlanets([...planets].filter(p => p.id !== planet.id))
			},
			footer: (_, { OkBtn, CancelBtn }) => (
				<>
					<CancelBtn />
					<OkBtn />
				</>
			),
		})
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
				<Button onClick={handleEditClick}>Edit</Button>
				<Button onClick={handleDeleteClick}>Delete</Button>
			</footer>
		</article>
	)
}

export default PlanetCard