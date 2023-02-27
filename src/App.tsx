import { ThemeProvider } from "styled-components";
import { Content } from "./components/ContentPage";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <Content />
    <GlobalStyle />
    </ThemeProvider>
  )
}
