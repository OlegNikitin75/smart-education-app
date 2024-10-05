'use client'

import { NAVIGATION } from '@/shared/constants/navigation'
import { LogoutSvgComponent } from '@/shared/icons'
import { UiButton } from '@/shared/ui'
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

export const Logout = () => {
	const handleLogout = () => {
		signOut()
		redirect(NAVIGATION.main)
	}
	return (
		<UiButton
			variant='secondary'
			onClick={handleLogout}
			className='flex justify-center items-center gap-2'
		>
			Выйти
				<LogoutSvgComponent/>
			
		</UiButton>
	)
}
