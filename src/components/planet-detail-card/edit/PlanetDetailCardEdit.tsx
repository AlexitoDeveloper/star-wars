import { Planet } from '../../../interfaces/Planet'
import { usePlanetStore } from '../../../store/planetStore'
import Button from '../../button/Button'
import PlanetCircle from '../../planet-circle/PlanetCircle'
import '../PlanetDetailCard.scss'
import { Form, Input } from 'antd'
import {useNavigate} from 'react-router-dom'

interface Props {
	planet: Planet
}

const REQUIRED_MESSAGE = 'Required field'

const PlanetDetailCardEdit = ({ planet }: Props) => {
	const setSelectedPlanet = usePlanetStore(state => state.setSelectedPlanet)
	const setPlanets = usePlanetStore(state => state.setPlanets)
	const planets = usePlanetStore(state => state.planets)
	const navigate = useNavigate()

	const handleSubmit = (values: Planet) => {
		const updatedPlanet: Planet = {
			...planet,
			name: values.name,
			diameter: values.diameter,
			climate: values.climate,
			terrain: values.terrain
		}
		const updatedPlanets = planets.map(p => {
			if(p.id === updatedPlanet.id) return updatedPlanet
			return p
		})
		setSelectedPlanet(updatedPlanet)
		setPlanets(updatedPlanets)
		navigate(`/${planet.name}`, {replace: true})
	}

	return (
		<article className="detail-card">
			<div className="detail-card__image">
				<PlanetCircle width="16rem" height="16rem" terrain={planet?.terrain} />
			</div>
			<div className="detail-card__info">
				<Form
					name="editPlanet"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600 }}
					initialValues={{ remember: true }}
					autoComplete="off"
					labelWrap
					className="detail-card__info"
					layout='vertical'
					onFinish={handleSubmit}
				>
					<Form.Item<Planet>
						label="Name"
						name="name"
						rules={[{ required: true, message: REQUIRED_MESSAGE }]}
						initialValue={planet?.name}
					>
						<Input placeholder='Name' variant="filled" />
					</Form.Item>

					<div className='detail-card__info--list'>
						<div>
							<Form.Item<Planet>
								label="Diameter"
								name="diameter"
								rules={[{ required: true, message: REQUIRED_MESSAGE }]}
								initialValue={planet?.diameter}
							>
								<Input placeholder='Diameter' variant="filled" type='number' />
							</Form.Item>
							<Form.Item<Planet>
								label="Residents"
								name="residents"
								initialValue={planet?.residents.length}
							>
								<Input disabled variant="filled" />
							</Form.Item>
						</div>
						<div>
							<Form.Item<Planet>
								label="Climate"
								name="climate"
								rules={[{ required: true, message: REQUIRED_MESSAGE }]}
								initialValue={planet?.climate}
							>
								<Input placeholder='Climate' variant="filled" />
							</Form.Item>
							<Form.Item<Planet>
								label="Terrain"
								name="terrain"
								rules={[{ required: true, message: REQUIRED_MESSAGE }]}
								initialValue={planet?.terrain}
							>
								<Input placeholder='Terrain' variant="filled" />
							</Form.Item>
						</div>
					</div>

					<Form.Item className='detail-card__info--submit'>
						<Button type="default" htmlType="submit">
              Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</article>
	)
}

export default PlanetDetailCardEdit