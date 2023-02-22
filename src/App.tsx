import { ThemeProvider } from "styled-components";
//import { CoffeeSlogan } from "./components/CoffeeSlogan";
import { Content } from "./components/Content";
//import { Header } from "./components/Header";
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
