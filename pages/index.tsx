import { Link, Page, Row, Spacer, useTheme } from '@geist-ui/react'
import { Note as NoteType } from '../types';
import useLocalStorage from '../utils/hooks/useLocalStorage';
import MarkdownIt from 'markdown-it';
import Head from '../components/Head';
import Note from '../components/Note';
import Header from '../components/Header';

const mdParser = new MarkdownIt();

const Home = ({ onThemeChange }) => {
  const [notes, setNotes] = useLocalStorage<string>("notes", "[]");
  const storedNotes = JSON.parse(notes);
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Notes - Gabsii</title>
      </Head>
      <Page style={{ maxHeight: '100vh' }} dotBackdrop>
        <Page.Header>
          <Header mdParser={mdParser} storedNotes={storedNotes} setNotes={setNotes} onThemeChange={onThemeChange}/>
        </Page.Header>
        <Page.Content>
          <Spacer />
          {
            storedNotes.map((note: NoteType) =>
              <Note key={`${note.id}-${note.value}`} mdParser={mdParser} note={note} setNotes={setNotes} storedNotes={storedNotes} />
            )
          }
        </Page.Content>
        <Page.Footer style={{ paddingBottom: '1rem', backgroundColor: theme.palette.accents_1, position: 'sticky', bottom: 0, width: '100%' }}>
          <Row justify="center" >
            Made with ♥ by <Link href="https://github.com/Gabsii" color style={{ marginLeft: '0.25rem' }}>Gabsii</Link>
          </Row>
        </Page.Footer>
      </Page>
    </>
  )
}

export default Home;
