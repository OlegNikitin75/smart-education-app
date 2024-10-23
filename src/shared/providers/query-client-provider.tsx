'use client'

import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface IProviderProps {
	children: ReactNode
}

const queryClient = new QueryClient()
export const QueryProvider: FC<IProviderProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
