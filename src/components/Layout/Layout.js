import React from "react"
import { ThemeProvider } from 'styled-components';
import { BLACK_COLOR, WHITE_COLOR } from "../../constants"
import Switch from "../Toggle"
import SEO from "../seo"
import Footer from "../Footer"
import GlobalFonts from '../../fonts'
import LayoutStyled from "./LayoutStyled"

const Layout = ({ children }) => {
  const [isDarkMode, setDarkMode] = React.useState(global?.localStorage?.getItem('theme') === 'darkMode')
  const theme = isDarkMode ? {
    color: WHITE_COLOR,
    backgroundColor: BLACK_COLOR,
  } : {
    color: BLACK_COLOR,
    backgroundColor: WHITE_COLOR,
  };
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Clerton's Web Site"/>
      <GlobalFonts />
      <LayoutStyled>
        <Switch isChecked={isDarkMode} onChange={() => setDarkMode(!isDarkMode)}/>
        <main>{children}</main>
        <Footer />
      </LayoutStyled>
    </ThemeProvider>
  )
}

export default Layout