import { Skeleton } from 'antd'


const PlanetCardSkeleton = () => {
	return (
		<article className='card'>
			<header>
				<Skeleton.Avatar active size={128} />
				<Skeleton active paragraph={false} />
			</header>
			<div className='card__body'>
				<Skeleton active paragraph={{rows: 4}} />
			</div>
		</article>
	)
}

export default PlanetCardSkeleton