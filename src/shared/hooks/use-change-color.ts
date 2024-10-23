import { useState } from 'react'

export const useChangeColor = (currentColor: string) => {
	const [color, setColor] = useState(currentColor)
	const handleMouseEnter = (changeColor:string) => {
		setColor(changeColor)
	}

	const handleMouseLeave = () => {
		setColor(currentColor)
	}
	return { color, handleMouseEnter, handleMouseLeave }
}
