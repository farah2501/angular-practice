import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent implements OnInit {
  input:string = ''; 
  result:string = '';
  title: string = 'Calculator';

  constructor() {}
  ngOnInit() {
  }
 
  addSymbol(num: string) {
    if (num==".") {
      if (this.input !="" ) {
        const lastNum=this.getLastOperand()
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }
    if (num=="0") {
      if (this.input=="" ) {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
          return;
      }
    }
    this.input = this.input + num
    this.calcAnswer();
  }
 
  getLastOperand() {
    let operation:number;
    operation=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > operation) operation=this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > operation) operation=this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > operation) operation=this.input.lastIndexOf("/")
    return this.input.substring(operation+1)
  }
 
  setOperation(op: string) {
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return;
    }
    this.input = this.input + op
    this.calcAnswer();
  }

  clear() {
    this.result = '';
    this.input = '';
  }

  calcAnswer() {
    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    if (lastKey === '.')  {
      formula=formula.substring(0,formula.length - 1);
    }
    //lastKey = formula[formula.length - 1]
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.substring(0,formula.length - 1);
    }
    const safeEval = new Function('return ' + formula);
    this.result = safeEval();
  }
 
  calculate() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input=="0") this.input="";
  }
}