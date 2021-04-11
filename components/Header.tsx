import { Col, Row, Spacer, Text, Toggle, useTheme } from "@geist-ui/react";
import { HeaderComponentType } from "../types";
import Editor from "./Editor";

const Header = ({mdParser, storedNotes, setNotes, onThemeChange}: HeaderComponentType) => {
  const theme = useTheme();

  return (
    <div style={{ 
      position: 'sticky', 
      backgroundColor: theme.palette.accents_1, 
      padding: '1rem', 
      width: '100vw', 
      transform: 'translateX(-25vw)', 
      boxShadow: '0 5px 10px rgb(0 0 0 / 12%)' 
    }}>
      <div style={{ 
        width: '750pt', 
        margin: '0 auto', 
        padding: '0 16pt'
      }}>
        <Row justify="center">
          <Text h1>Notes by Gabsii</Text>
          <Toggle style={{margin: 'auto 0 auto auto'}} onChange={onThemeChange} />
        </Row>
        <Spacer />
        <Row>
          <Col>
            <Editor mdParser={mdParser} setNotes={setNotes} storedNotes={storedNotes} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Header;
