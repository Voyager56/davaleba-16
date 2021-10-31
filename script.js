function checkOdd(number){
    return (number%2==0)? false:true
}

const getCurrencySymbolFromCode = function(currency){
    const upperCaseCurrency = currency.toUpperCase();
    switch(upperCaseCurrency){
        case `USD`: return '$'
        case `EUR`: return '€'
        case `GEL`: return 'ლ'
        default: return `${upperCaseCurrency}`
    }
}

const lowerCase = (string) => string.toLowerCase();

let array = [1,2,3,4,5,6,7,8,9,10];
const evenArray = (array) => array.filter((x)=> x%2==0);
console.log(evenArray(array))

const objectSearch = (objectArray, string) => objectArray.find(({name}) => name === string);


const cloudGame = function(c, k){
    let n = c.length;
    let currentStep = 0;
    let currentEnergy = 100;
    do{
        currentEnergy -= (c[currentStep] === 0)? 1:3;
        currentStep = (currentStep + k ) % n;
    }while(currentStep!=0)
    return currentEnergy;
}
