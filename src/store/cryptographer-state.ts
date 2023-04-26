import { makeAutoObservable } from "mobx";

class CryptographerState {
  key: string = "1 2 3 4 5 6 7 8";
  decryptionKey = "";
  initialText: string = "this is my message";
  encryptedText: string = "";
  decryptedText: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setKey(newKey: string) {
    this.key = newKey;
  }
  setDecryptionKey(newDecryptionKey: string) {
    this.decryptionKey = newDecryptionKey;
  }
  setInitialText(newInitialText: string) {
    this.initialText = newInitialText;
  }
  setEncryptedText(newEncryptedText: string) {
    this.encryptedText = newEncryptedText;
  }
  setDecryptedText(newDecryptedText: string) {
    this.decryptedText = newDecryptedText;
  }
}

export default new CryptographerState();
