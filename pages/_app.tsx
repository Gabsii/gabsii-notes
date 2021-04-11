import { CssBaseline, GeistProvider } from "@geist-ui/react"
import { motion } from "framer-motion";
import { useState } from "react";
import 'react-markdown-editor-lite/lib/index.css';

const MyApp = ({ Component, pageProps, router }) => {
  const [themeType, setThemeType] = useState('light');
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }

  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
    }}>
      <GeistProvider themeType={themeType}>
        <CssBaseline /> 
        <Component {...pageProps} onThemeChange={switchThemes} />
      </GeistProvider>
    </motion.div>
  )
}

export default MyApp
