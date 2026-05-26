const sumAll = function(a, b) {
 // s < l  t = l-s+1
 // s + s+1 + s+2 + s+3 ... (t times) = t*s + (1+2+3+...+t-1)
 // 1+2+3+...+t-1 = 1+t-1 + 2+t-2 ... ((t-1)/2 times) 
 // 1+t-1 + 2+t-2 ... = t + t + t
 // therefore 1+2+3+...+t-1 = t*(t-1)/2
 // therefore s + s+1 + s+2 + s+3 ... (t times) = t*s + (t-1)*t/2
 // t*s + (t-1)*t/2 = (2s + (t-1))* t/2 = (2s+t-1)* t/2

 return (isNaN(a) || isNaN(b) || a < 0 || b < 0 || Math.round(a) !== a || Math.round(b) !== b)
    ? "ERROR"
    : (a<b)
        ? (b**2 + b - a**2 + a)/2
        : (a**2 + a - b**2 + b)/2;
 

};

// Do not edit below this line
module.exports = sumAll;
