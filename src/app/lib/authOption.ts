import { compare } from 'bcrypt'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import db from './db'
import { signOut } from 'next-auth/react'

export const authOptions = {
	// adapter: PrismaAdapter(db),
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt'
	},
	pages: {
		signIn: '/login',
		
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				login: { label: 'Login', type: 'text', placeholder: 'smart.education' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials) {
				try {
					if (!credentials?.login || !credentials?.password) {
						throw { error: 'No Inputs Found', status: 401 }
					}
					const existingUser = await db.user.findUnique({
						where: { login: credentials.login }
					})
					if (!existingUser) {
						console.log('No user found')
						throw { error: 'No user found', status: 401 }
					}

					const passwordMatch = await compare(
						credentials.password,
						existingUser.hashedPassword
					)
					if (!passwordMatch) {
						console.log('Password incorrect')
						throw { error: 'Password Incorrect', status: 401 }
					}
					const user = {
						id: existingUser.id,
						firstName: existingUser.firstName,
						middleName: existingUser.middleName,
						lastName: existingUser.lastName,
						post:existingUser.post,
						login: existingUser.login,
						role: existingUser.role,
						groups: existingUser.groupIDs,
						loginVerificated: existingUser.loginVerificated
					}
					return user
				} catch (error) {
					console.log('aLL Failed')
					console.log(error)
					throw { error: 'Something went wrong', status: 401 }
				}
			}
		})
	],
	callbacks: {
		async session({ session, token }) {
			if (token) {
				//console.log(`token:${token} in session`)
				session.user = token.user
			}
			return session
		},
		async jwt({ token, user }) {
			if (user) {
				token.user = user
			}

			return Promise.resolve(token)
		}
	}
} satisfies NextAuthOptions

export default authOptions
