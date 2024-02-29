import { useEffect, useState } from 'react'
import './PlanetCircle.scss'

interface Props {
	terrain?: string
}

enum TerrainType {
  Desert = 'desert',
  Mountains = 'mountains',
  Ice = 'ice',
  Ocean = 'ocean',
  Jungle = 'jungle',
	Unknown = 'unkwown'
}


const terrainColorMap: Record<TerrainType, string> = {
	[TerrainType.Desert]: 'desert',
	[TerrainType.Mountains]: 'mountains',
	[TerrainType.Ice]: 'ice',
	[TerrainType.Ocean]: 'ocean',
	[TerrainType.Jungle]: 'jungle',
	[TerrainType.Unknown]: 'unkwown'
}

const PlanetCircle = ({terrain}: Props) => {
	const [color, setColor] = useState(terrainColorMap[TerrainType.Unknown])

	useEffect(() => {
		const terrainType = Object.keys(terrainColorMap).find((key) => terrain?.includes(key)) as TerrainType
		if (terrainType) {
			setColor(terrainColorMap[terrainType])
		}
	}, [])

	return <div className={`planet--${color}`}></div>
}

export default PlanetCircle