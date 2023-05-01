import { observer } from "mobx-react-lite";
import { MyAlert } from "./components/my-alert";
import FeetbackState from "../../store/feetback-state";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const DELAY_BEFORE_HIDING = 3

export const Feetback: React.FC = observer(() => {
  const { type, message, title } = FeetbackState.feetback;
  const [isShow, setIsShow] = useState<boolean>(true);

  useEffect(() => {
    setIsShow(true);
    const timerId = setTimeout(() => {
      setIsShow(false);
    }, DELAY_BEFORE_HIDING * 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [FeetbackState.feetback]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 10,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {isShow && <MyAlert title={title} type={type} message={message} />}
    </Box>
  );
});
