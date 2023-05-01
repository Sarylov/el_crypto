import { Alert, AlertTitle } from "@mui/material";
import { observer } from "mobx-react-lite";
import { IFeetBack } from "../../../types";

interface IMyAlert extends IFeetBack {}

export const MyAlert: React.FC<IMyAlert> = observer(
  ({ title, type, message }) => {
    return (
      <Alert severity={type}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    );
  }
);
