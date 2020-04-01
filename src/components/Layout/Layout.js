import React from "react"
import { ThemeProvider } from 'styled-components';
import { BLACK_COLOR, WHITE_COLOR } from "../../constants"
import Switch from "../Toggle"
import SEO from "../seo"
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
        <footer>
        © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            {` and `}
            <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
        </footer>
      </LayoutStyled>
    </ThemeProvider>
  )
}

export default Layout