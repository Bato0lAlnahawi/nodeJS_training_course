function isPalindrome (str){
    var reg = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var reversed = reg.split("").reverse().join("");
    if (reversed===reg) return true;
    else return false; 
}

console.log(isPalindrome("Hello, world!"));
console.log(isPalindrome('A man, a plan, a canal, Panama!'))
console.log(isPalindrome('Race car'));