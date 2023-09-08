function commonCharacters(str1, str2) {
const common = [];
const characters = new Set();

for (const char of str1) {
if (char === ' ' || characters.has(char)) {
continue;
}


if (str2.includes(char)) {
common.push(char);
characters.add(char);
}
}

return common.join('');
}

console.log(commonCharacters('acexivou', 'aegihobu'));
