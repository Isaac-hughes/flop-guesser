import { Component } from '@angular/core';
import { FunctionService } from "./function.service";
import { FLOP_DATA } from "./DATA";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public functionService: FunctionService){

  }

  title = 'FlopGuesser';

  status: string = "Start";
  hiddenStatus: boolean = true;
  ratingStatus: boolean = true;

  card1: any = {}
  card2: any = {}

  num1: number = 0;
  num2: number = 0;

  result: string = "";

  getNums(){
    this.num1 = this.functionService.generateNum(FLOP_DATA.length)
    this.num2 = this.functionService.generateNum(FLOP_DATA.length)

    if (this.num1 === this.num2){
      this.getNums()
    }

  }

  startClick(){
    console.log("start")
    this.getNums()
    this.card1 = FLOP_DATA[this.num1]
    this.card2 = FLOP_DATA[this.num2]
    this.hiddenStatus = false;
    this.ratingStatus = true;
    this.result = "";
  }

  evaluate(num: number){
    this.ratingStatus = false;

    if(this.card1.stars > this.card2.stars){
      console.log("card 1 bigger")
      this.result = `${this.card2.title} was the bigger flop!`
    } else if (this.card1.stars < this.card2.stars) {
      console.log("card 2 bigger")
      this.result = `${this.card1.title} was the bigger flop!`
    } else {
      console.log("draw")
      this.result = "They have the same rating"
    }
  }


}
