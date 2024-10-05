import type { Metadata } from 'next'
import '@/app/styles/globals.css'
import { QueryProvider } from '@/shared/providers'
import AuthProvider from '@/app/providers/AuthProvider'

export const metadata: Metadata = {
	title: 'SMART education app',
	description: 'Web application for teaching engineering graphics'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<AuthProvider>
					<QueryProvider>{children}</QueryProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
