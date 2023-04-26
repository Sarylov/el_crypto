import { observer } from "mobx-react-lite";
import modeSelector from "../../store/mode-selector";

export const ModeSelector: React.FC = observer(() => {
  console.log(modeSelector.selected);

  return (
    <>
      <button onClick={() => modeSelector.selectEncrypt()}>шифровать</button>
      <button onClick={() => modeSelector.selectDecrypt()}>расшифровать</button>
    </>
  );
});
