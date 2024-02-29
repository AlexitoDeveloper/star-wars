import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useState } from 'react'
import { loadFull } from 'tsparticles'
import particlesConfig from './particlesjs-config'
import { ISourceOptions } from '@tsparticles/engine'

const Background = () => {
	const [init, setInit] = useState(false)
	const [options, setOptions] = useState<ISourceOptions | null>(null)

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadFull(engine)
		}).then(() => {
			setOptions(particlesConfig)
			setInit(true)
		})
	}, [])
	
	
	if (init && options) {
		return (
			<Particles
				id="tsparticles"
				options={options}
			/>
		)
	}

	return <></>
}

export default Background