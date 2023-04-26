import { Stack, Container } from "@mui/material";
import { ModeSelector } from "./modules/mode-selector";
import { Cryptographer } from "./modules/cryptographer";

function App() {
  return (
    <Container maxWidth="md">
      <Stack
        height="100vh"
        spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ModeSelector />
        <Cryptographer />
      </Stack>
    </Container>
  );
}

export default App;
