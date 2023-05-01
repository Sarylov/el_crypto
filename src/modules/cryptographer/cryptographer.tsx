import { Card } from "@mui/material";
import { observer } from "mobx-react-lite";
import { EncryptionForm } from "./components/encryption-form";
import { DecryptionForm } from "./components/decryption-form";
import modeSelector from "../../store/mode-selector-state";

export const Cryptographer: React.FC = observer(() => {
  const isEncryptMode = modeSelector.selected === "encrypt";

  return (
    <Card
      sx={{
        width: "100%",
        p: 2,
      }}
    >
      {isEncryptMode ? <EncryptionForm /> : <DecryptionForm />}
    </Card>
  );
});
