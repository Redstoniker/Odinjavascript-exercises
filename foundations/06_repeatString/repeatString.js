const repeatString = function(string, num) {
    if( num < 0 ) {
        return `ERROR`;
    }
    let calcArr = [];
    for(let i = 0; i < num; i++){
        calcArr[i] = string;
    }
    return calcArr.join("");
};

// Do not edit below this line
module.exports = repeatString;
