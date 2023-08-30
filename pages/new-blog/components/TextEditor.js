import { useRef, useMemo } from 'react'
import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });


const TextEditor = ({ content, setContent }) => {
  const editor = useRef(null)

  return (
    <JoditEditor
        className='w-full'
       ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => setContent(newContent)}
    />
  )
}
export default TextEditor