// How do you print duplicate characters from a string?
const duplicateCharacterCheck = "JavaScripptt".match(/(.+)(?=(.*?\1){1,})/g);

console.log(duplicateCharacterCheck);
