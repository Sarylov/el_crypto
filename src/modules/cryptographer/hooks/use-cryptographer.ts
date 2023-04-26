// @ts-ignore
import { gost89 } from "../../../helpers/gost89";
import { getRandomInteger } from "../../../helpers/random";
import cryptographerState from "../../../store/cryptographer-state";

export const useCryptographer = () => {
  const {
    key,
    decryptionKey,
    initialText,
    encryptedText,
    decryptedText,
    setEncryptedText,
    setInitialText,
    setKey,
    setDecryptedText,
    setDecryptionKey,
  } = cryptographerState;
  const boundSetEncryptedText = setEncryptedText.bind(cryptographerState);
  const boundSetInitialText = setInitialText.bind(cryptographerState);
  const boundSetKey = setKey.bind(cryptographerState);
  const boundSetDecryptedText = setDecryptedText.bind(cryptographerState);
  const boundSetDecryptionKey = setDecryptionKey.bind(cryptographerState);

  function encrypt() {
    const keyArr: number[] = key.split(" ").map((keyItem) => parseInt(keyItem));
    const encryptedText: string = gost89.encrypt(initialText, keyArr);
    boundSetEncryptedText(encryptedText);
    boundSetDecryptionKey(key);
  }

  function decrypt() {
    const keyArr: number[] = decryptionKey
      .split(" ")
      .map((keyItem) => parseInt(keyItem));
    const decryptedText: string = gost89.decrypt(encryptedText, keyArr);
    boundSetDecryptedText(decryptedText);
  }

  function copyEncryptedText() {
    encryptedText && navigator.clipboard.writeText(encryptedText);
  }

  function copyDecryptedText() {
    decryptedText && navigator.clipboard.writeText(decryptedText);
  }

  function generateKey() {
    let generatedKey: string = "";
    for (let i = 0; i < 8; i++) {
      const randomInt = getRandomInteger(0, 10);
      generatedKey += " " + randomInt.toString();
    }
    boundSetKey(generatedKey.trim());
  }

  return {
    key,
    decryptionKey,
    initialText,
    encryptedText,
    decryptedText,
    boundSetInitialText,
    boundSetKey,
    boundSetDecryptedText,
    boundSetEncryptedText,
    encrypt,
    copyEncryptedText,
    copyDecryptedText,
    generateKey,
    decrypt,
  };
};
