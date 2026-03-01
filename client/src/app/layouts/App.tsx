import { useState } from "react";

import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background:
            paletteType === "light"
              ? "linear-gradient(circle,#baecf9,#f0f9ff)"
              : "radial-gradient(circle,#1e3aBa,#111B27)",
        }}
      >
        <NavBar
          toggleColorMode={() => {
            setDarkMode((prevMode) => !prevMode);
          }}
          mode={paletteType}
        />
        <Container sx={{ flexGrow: 1, py: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
