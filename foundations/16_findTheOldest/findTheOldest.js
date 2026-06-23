const findTheOldest = function(people) {
const YEAR = Number(Date().split(" ")[3]);
let ages = [];
for(person of people){
    if (person.yearOfDeath == undefined){
        ages.push(YEAR - person.yearOfBirth);
    }
    else{
        ages.push(person.yearOfDeath - person.yearOfBirth);
    }
}
let maxAge = Math.max.apply(null, ages);
let index = ages.indexOf(maxAge);
return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
