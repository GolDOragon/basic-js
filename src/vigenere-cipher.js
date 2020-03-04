class VigenereCipheringMachine {
  constructor(isDirect) {
    if (isDirect === false) {
      this.isDirect = false;
    } else {
      this.isDirect = true;
    }
  }
  
  vigenere_cipher(isEncrypt, message, key) {
    function get_letter(message_letter, key_letter) {
      let shift = key_letter.charCodeAt(0) - 65;
      let num_of_search_letter;
      if (isEncrypt) {
        num_of_search_letter = message_letter.charCodeAt(0) + shift;
      } else {
        num_of_search_letter = message_letter.charCodeAt(0) - shift;
      }

      let search_letter;
      if (num_of_search_letter > 90) {
        search_letter = String.fromCharCode(num_of_search_letter - 26);
      } else if (num_of_search_letter < 65) {
        search_letter = String.fromCharCode(num_of_search_letter + 26);
      } else {
        search_letter = String.fromCharCode(num_of_search_letter);
      }
      return search_letter;
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let cipher_message = [];
    let num_of_key_letter = 0;

    for (let i = 0; i < message.length; i++) {
      if (!/[A-Z]/.test(message[i])) {
        // if message[i] is NOT a letter
        cipher_message.push(message[i]);
        continue;
      }
      if (num_of_key_letter >= key.length) num_of_key_letter = 0;

      let encrypt_letter = get_letter(message[i], key[num_of_key_letter]);
      cipher_message.push(encrypt_letter);
      num_of_key_letter++;
    }

    return cipher_message;
  }

  encrypt(message, key) {
    let encrypt_message = this.vigenere_cipher(true, message, key);
    if (this.isDirect) {
      return encrypt_message.join("");
    } else {
      return encrypt_message.reverse().join("");
    }
  }

  decrypt(message, key) {
    let decrypt_message = this.vigenere_cipher(false, message, key);
    if (this.isDirect) {
      return decrypt_message.join("");
    } else {
      return decrypt_message.reverse().join("");
    }
  }

}

module.exports = VigenereCipheringMachine;
