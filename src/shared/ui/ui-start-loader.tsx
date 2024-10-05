import { UiHeading } from '.'

export const UiStartLoader = () => {
	return (
		<div className='flex h-screen w-screen items-center justify-center bg-[url("/img/bg-loader.png")] bg-cover bg-center bg-no-repeat text-center'>
			<UiHeading className='font-play700 text-app-dark' tag='h1'>
				Смарт <br />
				обучение
			</UiHeading>
		</div>
	)
}
