import { Role } from '@prisma/client'

export interface IRegisterGroupData {
	id: string
	title: string | null | undefined
}

export interface ICreateCourseData {
	semester: string
	secondSemester: string
	name: string
	color: string
	image: string
	faculty: string
	numberOfTask: string
	numberOfGraphicWork: string
	numberOfVerificationWork: string
}

export interface ICreateUserData {
	firstName: string
	middleName: string
	lastName: string
	role: Role
	post?: string
	login: string
	password: string
	groups?: string
}

export interface ITaskDescriptionData {
	id: string | undefined | string[]
	description: string
}
export interface IUpdatedTaskData {
	id: string | undefined | string[]
	pathExampleTaskImage: string
}
