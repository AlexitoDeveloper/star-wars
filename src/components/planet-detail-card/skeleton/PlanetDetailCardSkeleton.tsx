import { Skeleton } from 'antd'

const PlanetDetailCardSkeleton = () => {
	return (
		<article className="detail-card">
			<div className="detail-card__image">
				<Skeleton.Avatar active size={256} />
			</div>
			<div className="detail-card__info">
				<Skeleton active paragraph={false} />
				<div className='detail-card__info--list'>
					<Skeleton active paragraph={{rows: 6}} />
				</div>
			</div>
		</article>
	)
}

export default PlanetDetailCardSkeleton