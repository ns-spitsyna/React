import {eu, rus} from './money';

class makeBusiness{
    constructor(owner, director = 'Victor', cash, emp){
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
      
    }
  
    rezult(){
       
        const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget:  ${this.cash}. And our employers: ${this.emp} \nAnd we have a sponsors:`);
        console.log(...sumSponsors);
        console.log(`Note. Be careful with  ${eu[0]}. It's a huge risk.`);
    }
    
  
}

export default makeBusiness;