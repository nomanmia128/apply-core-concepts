function milesToKilometer(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

const duntaMiles = 100;
const duntaKilometer = milesToKilometer(duntaMiles);
console.log('Barite jamo', duntaKilometer);