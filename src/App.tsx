import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./style/themes"
import GlobalStyle from "./style/GlobalStyle"
import { Router } from "./Router"


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
