import NextAuth, { User, type DefaultSession } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
			firstName: string
			middleName: string
			lastName: string
			post:string
			role: $Enums.Role
			groups: string
			login: string
			loginVerificated: boolean | null
		}
	}

	interface User {
		id: string
		firstName: string
		middleName: string
		lastName: string
		post:string
		role: $Enums.Role
		groups: string
		login: string
		loginVerificated: boolean | null
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		user: {
			id: string
			firstName: string
			middleName: string
			lastName: string
			post:string
			role: $Enums.Role
			groups: string
			login: string
			loginVerificated: boolean | null
		}
	}
}
