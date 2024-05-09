function sentimeterToMeter(sentimeter){
    const meter = sentimeter * 0.01;
    return meter;
}

const bazerSentimeter = 122;
const bazerMeter = sentimeterToMeter(bazerSentimeter);
console.log(bazerMeter);