import { useEffect, useState } from 'react'
import './PlanetCircle.scss'

interface Props {
	terrain?: string
	width?: string
	height?: string
}

enum TerrainType {
  Desert = 'desert',
  Mountains = 'mountains',
  Ice = 'ice',
  Ocean = 'ocean',
  Jungle = 'jungle',
	Unknown = 'unknown'
}


const terrainColorMap: Record<TerrainType, string> = {
	[TerrainType.Desert]: 'desert',
	[TerrainType.Mountains]: 'mountains',
	[TerrainType.Ice]: 'ice',
	[TerrainType.Ocean]: 'ocean',
	[TerrainType.Jungle]: 'jungle',
	[TerrainType.Unknown]: 'unknown'
}

const PlanetCircle = ({ terrain, width, height }: Props) => {
	const [color, setColor] = useState(terrainColorMap[TerrainType.Unknown])

	useEffect(() => {
		const terrainType = Object.keys(terrainColorMap).find((key) => terrain?.includes(key)) as TerrainType
		if (terrainType) {
			setColor(terrainColorMap[terrainType])
		}
	}, [])

	return <div className={`planet--${color}`} style={{ width: width ?? '8rem', height: height?? '8rem' }} data-testid="planet-circle"></div>
}

export default PlanetCircle