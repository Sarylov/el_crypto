import { makeAutoObservable } from "mobx";
import { IFeetBack } from "../types";

class FeetbackState {
  feetback: IFeetBack = {
    type: "success",
    message: "Добро пажаловать",
    title: undefined,
  };
  // type: "error" | "warning" | "info" | "success" = "success";
  // message: string = "Добро пажаловать";
  // title: string | undefined = undefined;
  // isShow: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setFeetback(newFeetBack: IFeetBack) {
    this.feetback = newFeetBack;
  }
}

export default new FeetbackState();
