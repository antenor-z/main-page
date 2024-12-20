function stringToCharCodes(string) {
    // Returns a list of the character codes of a string
    return [...string].map(c => c.charCodeAt(0))
  }
  
  function deobfuscate(obfString) {
    // String to character codes
    let obfCharCodes = stringToCharCodes(obfString);
  
    // Deobfuscate function (-1)
    let deobfCharCodes = obfCharCodes.map(e => e -= 1);
  
    // Character codes back to string 
    // Use spread operator ...
    return String.fromCharCode(...deobfCharCodes);
  }
  
  // Result of obfuscate("example@example.com")
  let obfEmail = "fybnqmfAfybnqmf/dpn";
  document.getElementById("email").href = "mailto:" + deobfuscate(obfEmail);
  
  function obfuscate(string) {
    // Obfuscate - Use developer tools F12 to run this once and then use the obfuscated string in your website
  
    // String to character codes
    let charCodes = stringToCharCodes(string);
  
    // Obfuscate function (+1)
    let obfCharCodes = charCodes.map(e => e += 1);
  
    // Character codes back to string 
    // Use spread operator ...
    return String.fromCharCode(...obfCharCodes);
}