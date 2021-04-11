import { Col, Row, Spacer, Text, Toggle, useMediaQuery, useTheme } from "@geist-ui/react";
import { Moon, Sun } from "@geist-ui/react-icons";
import { HeaderComponentType } from "../types";
import Editor from "./Editor";

const Header = ({mdParser, storedNotes, setNotes, onThemeChange}: HeaderComponentType) => {
  const theme = useTheme();
  const isLG = useMediaQuery('lg');

  console.log(isLG);

  return (
    <div style={{ 
      position: 'sticky', 
      backgroundColor: theme.palette.accents_1, 
      padding: isLG ? '1rem': '1rem 0', 
      width: isLG ? '100vw' : 'auto', 
      transform: isLG ? 'translateX(-25vw)' : '', 
      boxShadow: '0 5px 10px rgb(0 0 0 / 12%)' 
    }}>
      <div style={{ 
        maxWidth: '750pt', 
        margin: '0 auto', 
        padding: '0 16pt'
      }}>
        <Row justify="center" align="middle">
          <Col span={22}>
            <Text h1>Notes by Gabsii</Text>
          </Col>
          <Col span={2}>
            { theme.type === 'light' ? <Sun /> : <Moon /> }
            <Toggle onChange={onThemeChange} style={{ marginBottom: '10px', marginLeft: '1ch' }} />
          </Col>
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
