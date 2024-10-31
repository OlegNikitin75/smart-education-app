import { GraphicWorkSvgComponent, TasksSvgComponent } from '@/shared/icons'
import { UiHeading } from '@/shared/ui'
import { FC } from 'react'

interface ICardCourseProps {
	color?: string
	title: string
	faculty: string
	numberWorks?: string
	numberTasks?: string
	image?: string
	semester?: string
}

export const CardCourse: FC<ICardCourseProps> = ({
	color,
	title,
	faculty,
	numberWorks,
	numberTasks,
	image,
	semester
}) => {
	return (
		<article
			className={`${color} ${image} flex h-44 w-full flex-col justify-between rounded-2xl bg-right-bottom bg-no-repeat p-3`}
		>
			<UiHeading tag='h2' className='text-app-black'>{title}</UiHeading>
			<UiHeading tag='h2' className='flex items-baseline gap-2 text-app-black'>
				{faculty}
				<p className='text-lg text-app-dark'>{semester}</p>
			</UiHeading>

			<div className='space-y-2'>
				<div className='flex gap-2'>
					<GraphicWorkSvgComponent  color='#171A1C'/>
					<span>{numberWorks} РГР</span>
				</div>
				<div className='flex gap-2'>
					<TasksSvgComponent color='#171A1C' />
					<span>{numberTasks} Заданий</span>
				</div>
			</div>
		</article>
	)
}
