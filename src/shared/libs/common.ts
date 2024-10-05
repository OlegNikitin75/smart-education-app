export const togglePageScrolling = () => {
	const body = document.querySelector('body')
	if (body?.className.includes('noScroll')) {
		body?.classList.remove('noScroll')
	} else body?.classList.add('noScroll')
}