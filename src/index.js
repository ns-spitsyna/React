
import {employersNames} from './employers';
import {money} from './money';
import makeBusiness from './makeBusiness';

const info = new makeBusiness(...['Sam',  , money, employersNames]);
  
info.rezult(); 
