import { makeAutoObservable } from "mobx";

class ModeSelector {
  selected: "encrypt" | "decrypt" = "encrypt";

  constructor() {
    makeAutoObservable(this);
  }

  selectEncrypt() {
    this.selected = "encrypt";
  }

  selectDecrypt() {
    this.selected = "decrypt";
  }
}

export default new ModeSelector();
