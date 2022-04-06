import AppRouter from "./AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import { UserContextProvider } from "context/UserContext";
import { UserTypeContextProvider } from "context/UserTypeContext";

function App() {
  return (
    <>
      <UserTypeContextProvider>
        <UserContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <AppRouter />
          </ThemeProvider>
        </UserContextProvider>
      </UserTypeContextProvider>
    </>
  );
}

export default App;
