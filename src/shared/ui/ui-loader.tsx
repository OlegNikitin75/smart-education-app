import { FC } from 'react'
import { LoaderSvgComponent } from '../icons'

export const UiLoader: FC = () => {
	return <div className='absolute inset-0 z-40 flex h-full w-full items-center justify-center bg-app-black'>
	<div className='h-20 w-20'>
		<LoaderSvgComponent />
	</div>
</div>
}
