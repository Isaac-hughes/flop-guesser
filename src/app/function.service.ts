import { Injectable } from '@angular/core';
import {FLOP_DATA} from './DATA'

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor() { }

  generateNum = (num: number) => {
    return Math.floor(Math.random() * (num - 1));
  }

  getFilm = (num: number) => {
    return FLOP_DATA[num]
  }

  

}
