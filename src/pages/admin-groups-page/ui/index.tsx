// 'use client'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '@/app/lib/authOption'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IRegisterGroupData } from '@/shared/types'
import { AdminPageLayout } from '@/shared/ui/layouts'
import db from '@/app/lib/db'
import { getAllGroups } from '@/app/actions/get-all-groups'
import { deleteGroupsItem } from '@/app/actions/delete-groups-item'
import { UsersSvgComponent } from '@/shared/icons'
import { CardItemLink } from '@/entities/card-item-link'
import { NAVIGATION } from '@/shared/constants/navigation'
import {
	UiHeader,
	UiLeftBlockHeader,
	UiHeading,
	UiContainer,
	UiLink,
	UiListEmpty
} from '@/shared/ui'
import { AccessDenied } from '@/pages/access-denied-page'

export const AdminGroupsPage = async () => {
	// const { data: dataGroups, isLoading } = useQuery<IRegisterGroupData[]>({
	// 	queryKey: ['groups'],
	// 	queryFn: async () => {
	// 		const response = await axios.get('/api/groups')
	// 		return response.data
	// 	}
	// })
	const session = await getServerSession(authOptions)
	const dataGroups = await getAllGroups()

	if (!session) redirect(NAVIGATION.main)
	if (session.user.role !== 'ADMIN') return <AccessDenied />

	return (
		<>
			<AdminPageLayout
				header={
					<UiHeader
						leftBlock={<UiLeftBlockHeader />}
						middleBlock={
							<UiHeading tag='h3' className='centerPosition'>
								Все группы
							</UiHeading>
						}
					/>
				}
			>
				<div className='flex h-full flex-col justify-between py-5'>
					{dataGroups.length === 0 && (
						<UiListEmpty
							image={<UsersSvgComponent />}
							message={
								<UiHeading tag='h2' className='uppercase text-app-white'>
									Здесь пока нет групп
								</UiHeading>
							}
							desc={
								<p className='text-app-light-gray'>
									Нажмите на кнопку ниже, чтобы добавить новую группу
								</p>
							}
						/>
					)}
					<ul className='flex flex-col gap-4 overflow-scroll pb-5'>
						{dataGroups?.map(group => (
							<CardItemLink
								key={group.id}
								data={group}
								deleteItems={deleteGroupsItem}
							/>
						))}
					</ul>

					<UiLink variant='add' href={NAVIGATION.admin_register_group}>
						Добавить группу
					</UiLink>
				</div>
			</AdminPageLayout>
		</>
	)
}
