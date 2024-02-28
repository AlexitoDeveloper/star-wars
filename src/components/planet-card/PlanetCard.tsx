import { Planet } from '../../interfaces/Planet'

interface Props {
	planet: Planet | null
}

const PlanetCard = ({planet}: Props) => {
	return (
		<article>
			<p>{planet?.name}</p>
		</article>
	)
}

export default PlanetCard