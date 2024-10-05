'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { UiToolbar } from '.'
import Underline from '@tiptap/extension-underline'

export const UiTiptap = ({ onChange, content }: any) => {
	const handleChange = (newContent: string) => {
		onChange(newContent)
	}

	const editor = useEditor({
		extensions: [StarterKit, Underline],
		editorProps: {
			attributes: {
				class:
					'flex flex-col pl-5 px-3 py-4 justify-start rounded-2xl text-app-white items-start w-full border border-app-light-gray'
			}
		},
		onUpdate: ({ editor }) => {
			handleChange(editor.getText())
		}
	})

	return (
		<div>
			<p className='font-play700 mb-2 pl-3 text-app-white'>Добавить условие задачи</p>
			<UiToolbar editor={editor} content={content} />
			<EditorContent style={{ whiteSpace: 'pre-line' }} editor={editor} />
			
		</div>
	)
}
