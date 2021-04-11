import { Card, Row, Spacer, Text } from "@geist-ui/react";
import Delete from "@geist-ui/react-icons/delete";
import { formatRelative } from "date-fns";
import { motion } from "framer-motion";
import * as locales from 'date-fns/locale'
import { Note as NoteType } from "../types";
import { useState } from "react";

type NoteComponentType = {
  storedNotes: NoteType[], 
  mdParser: any, 
  note: NoteType, 
  setNotes: (notesString: string) => void 
}

const Note = ({storedNotes, setNotes, mdParser, note}: NoteComponentType) => {
  const [fadeOut, setFadeOut] = useState(false);

  const deleteNote = (id: number) => {
    setFadeOut(true);
    const updatedNotes = storedNotes.filter((note) => note.id !== id);
    setNotes(JSON.stringify(updatedNotes));
    setFadeOut(false);
  } 

  return (
      <motion.div
        exit="noteExit" initial="noteVisible" animate={fadeOut ? "noteExit" : "noteVisible"} variants={{
          noteExit: {
            opacity: 0
          },
          noteVisible: {
            opacity: 1
          },
        }}
        layout
        transition={{ duration: 1 }}
      >
        <Row>
          <Card hoverable>
            <div dangerouslySetInnerHTML={{ __html: mdParser.render(note?.value)}} />
            <Card.Footer>
              <Text style={{marginRight: 'auto'}}>
                {
                  formatRelative(
                    new Date(note?.createdAt), 
                    new Date(), 
                    { locale: locales[navigator.language]})
                }
              </Text>
              <Delete onClick={() => deleteNote(note?.id)}/>
            </Card.Footer>
          </Card>
        </Row>
        <Spacer/>
      </motion.div>
  );
}

export default Note;
