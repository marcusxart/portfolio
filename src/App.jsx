import { ThemeProvider } from "styled-components";
import { useState } from "react";

import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/theme";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import ThemeContext from "./Context/ThemeContext";
import { Home } from "./pages/index";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [homeSection, setHomeSection] = useState("");

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <>
        <ThemeContext.Provider
          value={{ isDark, setIsDark, homeSection, setHomeSection }}
        >
          <GlobalStyle />
          <Nav isDark={isDark} setIsDark={setIsDark} />
          <SideNav />
          <Home />
          <Footer />
        </ThemeContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
