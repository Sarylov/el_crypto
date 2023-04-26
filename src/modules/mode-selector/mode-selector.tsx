import modeSelectorState from "../../store/mode-selector-state";
import { observer } from "mobx-react-lite";
import { Button, ButtonGroup } from "@mui/material";

export const ModeSelector: React.FC = observer(() => {
  const { selected, selectEncrypt, selectDecrypt } = modeSelectorState;

  const boundSelectEncrypt = selectEncrypt.bind(modeSelectorState);
  const boundSelectDecrypt = selectDecrypt.bind(modeSelectorState);

  return (
    <ButtonGroup>
      <Button
        variant={selected === "encrypt" ? "contained" : "outlined"}
        onClick={boundSelectEncrypt}
      >
        Зашифровать
      </Button>
      <Button
        variant={selected === "decrypt" ? "contained" : "outlined"}
        onClick={boundSelectDecrypt}
      >
        Расшифровать
      </Button>
    </ButtonGroup>
  );
});
