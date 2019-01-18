let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
let employersNames = employers.filter((name) =>{return name.length > 0 && name.length != ''}).map((item)=>item.toLowerCase().trim());

//employersNames= employersNames.map((item)=>item.toLowerCase().trim());

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

function makeBusiness(owner, director ='Victor', cash, emp) {

    //let x = [...eu, ...rus];
    

    let sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    

    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget:  ${cash}. And our employers: ${emp} \nAnd we have a sponsors:`);
    console.log(...sumSponsors);
    console.log(`Note. Be careful with  ${eu[0]}. It's a huge risk.`);
}
makeBusiness(...['Sam',  , money, employersNames]);