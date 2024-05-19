function isLeapYear (year){
    const remainder = year % 4;
    if(remainder == 0){
       return true;
    }
    else{
        return false;
    }
}
const ismyLeapYear = isLeapYear(1933);
console.log('my year:', ismyLeapYear);
const isHerLeapYear = isLeapYear(1960);
console.log('Her year:', isHerLeapYear);

// function isLeapYear(year){
//     const reminder = year % 4;
//     if(reminder === 0){
//         return true;
//     }
//         return false;
//     }

// const isMyYearLeapYear = isLeapYear(1343);
// console.log('my year', isMyYearLeapYear);
// const isHerLeapYear = isLeapYear(1335);
// console.log('Her year', isHerLeapYear);