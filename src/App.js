import "./App.css";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import { UserContextProvider } from "context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
