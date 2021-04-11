import { Spacer, Text } from "@geist-ui/react";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { EditorComponentType } from "../types";
import useKeyPress from "../utils/hooks/useKeyPress";

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false
});

// TODO: remove fullscreen plugin from MdEditor
const Editor = ({mdParser, storedNotes, setNotes}: EditorComponentType) => {
  const [inputValue, setInputValue] = useState('');
  const enterPressed :boolean = useKeyPress('Enter');
  const shiftPressed :boolean = useKeyPress('Shift');

  const sanitizedInput = inputValue.trim();

  useEffect(() => {
    if(
      enterPressed && 
      !shiftPressed && 
      sanitizedInput && 
      sanitizedInput !== '' && 
      sanitizedInput !== '\r\n' && 
      sanitizedInput !== '\n' 
    ) {
      const currentNote = {value: `${sanitizedInput.trim()}`, createdAt: new Date(), id: + new Date() };
      storedNotes.unshift(currentNote);

      setInputValue('');
      setNotes(JSON.stringify(storedNotes));
    }
  }, [enterPressed, shiftPressed, sanitizedInput, storedNotes, setInputValue, setNotes]);

  return (
    <>
      <Text small type="secondary">Press Shift + Enter for a new line. All notes are being saved on your browser.</Text>
      <Spacer />
      <MdEditor 
        placeholder="Add a note"
        style={{ width: '100%', height: '250px'}}  
        value={inputValue}
        renderHTML={(text: string) => mdParser.render(text)}
        onChange={({text}) => setInputValue(text)}
        />
    </>
  )
}

export default Editor;
