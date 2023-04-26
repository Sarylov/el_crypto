import { Box, Button, IconButton, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useCryptographer } from "../hooks/use-cryptographer";

export const EncryptionForm: React.FC = observer(() => {
  const {
    key,
    initialText,
    encryptedText,
    boundSetInitialText,
    boundSetKey,
    encrypt,
    copyEncryptedText,
    generateKey,
  } = useCryptographer();

  return (
    <Box display="flex" flexWrap={"wrap"}>
      <Box
        flex={2}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        display="flex"
        flexDirection="column"
      >
        <TextField
          required
          id="key"
          label="Введите ключь"
          value={key}
          onChange={(e) => {
            boundSetKey(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <IconButton
                title="Сгенерировать новый ключ"
                aria-label="generate a key"
                onClick={generateKey}
              >
                <AutorenewIcon />
              </IconButton>
            ),
          }}
          helperText="Должен состоять из 8 цифр через пробел"
        />

        <TextField
          required
          id="message"
          label="Введите текст"
          value={initialText}
          onChange={(e) => {
            boundSetInitialText(e.target.value);
          }}
          autoFocus
        />

        <Button onClick={encrypt} sx={{ m: 1, width: "100%" }}>
          Зашифровать
        </Button>
      </Box>

      <Box
        flex={1}
        ml={1}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
      >
        <TextField
          id="result"
          label="Результат"
          multiline
          rows={6}
          value={encryptedText}
          InputProps={{
            endAdornment: (
              <IconButton
                title="Копировать"
                aria-label="copy"
                onClick={copyEncryptedText}
              >
                <ContentCopyIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Box>
  );
});
