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
			variant='primary'
			onClick={handleLogout}
			className='flex items-center justify-center gap-2'
		>
			Выйти
			<LogoutSvgComponent color='#17191C' />
		</UiButton>
	)
}
