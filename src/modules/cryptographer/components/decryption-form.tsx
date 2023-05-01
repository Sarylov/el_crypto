import { Box, Button, IconButton, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useCryptographer } from "../hooks/use-cryptographer";

export const DecryptionForm: React.FC = observer(() => {
  const {
    decryptionKey,
    encryptedText,
    decryptedText,
    boundSetEncryptedText,
    boundSetDecryptionKey,
    decrypt,
    copyDecryptedText,
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
          label="Введите ключ"
          value={decryptionKey}
          onChange={(e) => {
            boundSetDecryptionKey(e.target.value);
          }}
          helperText="Должен состоять из 8 цифр через пробел"
        />

        <TextField
          required
          id="message"
          label="Введите зашифрованный текст"
          value={encryptedText}
          onChange={(e) => {
            boundSetEncryptedText(e.target.value);
          }}
          autoFocus
        />

        <Button onClick={decrypt} sx={{ m: 1, width: "100%" }}>
          Расшифровать
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
          value={decryptedText}
          InputProps={{
            endAdornment: (
              <IconButton
                title="Копировать"
                aria-label="copy"
                onClick={copyDecryptedText}
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
