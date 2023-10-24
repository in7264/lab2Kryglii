function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const password = 'Ваш пароль';
  
    if (inputText && password) {
      const encryptedText = CryptoJS.AES.encrypt(inputText, password);
      document.getElementById('encryptedText').value = encryptedText.toString();
    } else {
      alert('Введіть текст і пароль для шифровання.');
    }
  }
  
  function decrypt() {
    const encryptedText = document.getElementById('encryptedText').value;
    const password = 'Ваш пароль';
  
    if (encryptedText && password) {
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedText, password);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        document.getElementById('decryptedText').value = decryptedText;
      } catch (e) {
        alert('Невірний пароль або зашифрований текст.');
      }
    } else {
      alert('Введіть зашифрований текст і пароль для дешифровання.');
    }
  }
  