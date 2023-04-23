import { useState } from 'react'

export const useSelectedText = () => {
    const [text, setText] = useState<string>('')
    const select = () => {
        const selected = window.getSelection()?.toString();
        console.log(selected!);
        setText(selected!);
    }
    return [select, text] as const
  }

export default useSelectedText;