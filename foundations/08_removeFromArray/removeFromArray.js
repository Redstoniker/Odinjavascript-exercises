const removeFromArray = function(array, ...removeThose) {
    return array.filter(item => !(removeThose.filter(element => item===element).length > 0));
};

// Do not edit below this line
module.exports = removeFromArray;
