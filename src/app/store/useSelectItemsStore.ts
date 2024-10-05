import { create } from 'zustand'

interface ItemsState {
	IDs: string[]
	add: (id: string) => void
}

export const useSelectItemsStore = create<ItemsState>()(set => ({
	IDs: [],
	add: id =>
		set(state => ({
			IDs: [...state.IDs, id]
		}))
}))
