// @ts-ignore
import { gost89 } from "../../../helpers/gost89";
import { getRandomInteger } from "../../../helpers/random";
import cryptographerState from "../../../store/cryptographer-state";
import feetbackState from "../../../store/feetback-state";
import { IFeetBack } from "../../../types";

const successfullyEncryptedFeedback: IFeetBack = {
  type: "success",
  title: "Зашифрованно",
  message: "Текст успешно зашифрован",
};

const unsuccessfullyEncryptedFeedback: IFeetBack = {
  type: "error",
  title: "Не удалось расшифровать",
  message:
    "Проверьте правильность формата ключа. Ключ должен состоять из 8 целых чисел разделенных пробелом",
};

const successfullyDecryptedFeedback: IFeetBack = {
  type: "success",
  title: "Расшифрованно",
  message: "Текст успешно расшифрован",
};

const unsuccessfullyDecryptedFeedback: IFeetBack = {
  type: "error",
  title: "Не удалось расшифровать",
  message:
    "Проверьте правильность формата ключа. Ключ должен состоять из 8 целых чисел разделенных пробелом",
};

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
  const boundSetFeetback = feetbackState.setFeetback.bind(feetbackState);

  function encrypt() {
    try {
      const keyArr: number[] = key
        .split(" ")
        .map((keyItem) => parseInt(keyItem));
      const encryptedText: string = gost89.encrypt(initialText, keyArr);
      boundSetEncryptedText(encryptedText);
      boundSetDecryptionKey(key);
      boundSetFeetback(successfullyEncryptedFeedback);
    } catch (error) {
      boundSetFeetback(unsuccessfullyEncryptedFeedback);
    }
  }

  function decrypt() {
    try {
      const keyArr: number[] = decryptionKey
        .split(" ")
        .map((keyItem) => parseInt(keyItem));
      const decryptedText: string = gost89.decrypt(encryptedText, keyArr);
      boundSetDecryptedText(decryptedText);
      boundSetFeetback(successfullyDecryptedFeedback);
    } catch (error) {
      boundSetFeetback(unsuccessfullyDecryptedFeedback);
    }
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
    boundSetDecryptionKey,
    encrypt,
    copyEncryptedText,
    copyDecryptedText,
    generateKey,
    decrypt,
  };
};
