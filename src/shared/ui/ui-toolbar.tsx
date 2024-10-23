import { Editor } from '@tiptap/react'
import { FC } from 'react'
import {
	TtBoldSvgComponent,
	TtItalicSvgComponent,
	TtListOrderSvgComponent,
	TtListSvgComponent,
	TtRedoSvgComponent,
	TtUnderlineSvgComponent,
	TtUndoSvgComponent
} from '../icons'
import { UiButton } from '.'

interface IUiToolbarProps {
	editor: Editor | null
	content: string
}

export const UiToolbar: FC<IUiToolbarProps> = ({ editor, content }) => {
	if (!editor) return null
	return (
		<div className='mb-3 w-full space-y-5 rounded-2xl border border-app-light-gray px-3 py-4'>
			<div className='flex w-full items-center justify-between gap-4'>
				<button
					onClick={event => {
						event.preventDefault()
						editor.chain().focus().toggleBold().run()
					}}
					className={
						editor.isActive('bold') ? 'rounded-md bg-app-light-gray p-2' : ''
					}
				>
					<TtBoldSvgComponent />
				</button>
				<button
					onClick={event => {
						event.preventDefault()
						editor.chain().focus().toggleItalic().run()
					}}
					className={
						editor.isActive('italic') ? 'rounded-md bg-app-light-gray p-2' : ''
					}
				>
					<TtItalicSvgComponent />
				</button>
				<button
					onClick={event => {
						event.preventDefault()
						editor.chain().focus().toggleUnderline().run()
					}}
					className={
						editor.isActive('underline')
							? 'rounded-md bg-app-light-gray p-2'
							: ''
					}
				>
					<TtUnderlineSvgComponent />
				</button>

				<button
					onClick={event => {
						event.preventDefault()
						editor.chain().focus().toggleBulletList().run()
					}}
					className={
						editor.isActive('bulletList')
							? 'rounded-md bg-app-light-gray p-2'
							: ''
					}
				>
					<TtListSvgComponent />
				</button>
				<button
					onClick={event => {
						event.preventDefault()
						editor.chain().focus().toggleOrderedList().run()
					}}
					className={
						editor.isActive('orderedList')
							? 'rounded-md bg-app-light-gray p-2'
							: ''
					}
				>
					<TtListOrderSvgComponent />
				</button>

				<button
					onClick={event => {
						event.preventDefault()
						editor.chain().focus().undo().run()
					}}
					className={
						editor.isActive('undo') ? 'rounded-md bg-app-light-gray p-2' : ''
					}
				>
					<TtUndoSvgComponent />
				</button>
				<button
					onClick={event => {
						event.preventDefault()
						editor.chain().focus().redo().run()
					}}
					className={
						editor.isActive('redo') ? 'rounded-md bg-app-light-gray p-2' : ''
					}
				>
					<TtRedoSvgComponent />
				</button>
			</div>
			{content && <UiButton variant='secondary'>Готово</UiButton>}
		</div>
	)
}
