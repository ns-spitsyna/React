
const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const {cash, eu, rus} = sponsors;

function calcCash(own = 0) {
    
     
     const everyCash = (accumulator, currentValue) => accumulator + currentValue;
     let total = own + cash.reduce(everyCash);
     return total;   
}

let money = calcCash(null, cash);
export  {money,eu,rus};
