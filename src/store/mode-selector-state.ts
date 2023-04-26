import { makeAutoObservable } from "mobx";

class ModeSelectorState {
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

export default new ModeSelectorState();
