const palindromes = function (word) {
    word = word.toLowerCase().replaceAll(" ", "").replaceAll("!", "").replaceAll(",", "").replaceAll(".", "").split("");
    palindrom = word.toReversed();
    return word.toString()==palindrom.toString();
};

// Do not edit below this line
module.exports = palindromes;
