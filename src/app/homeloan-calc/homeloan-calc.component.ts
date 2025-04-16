import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-homeloan-calc',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './homeloan-calc.component.html',
  styleUrl: './homeloan-calc.component.css'
})
export class HomeloanCalcComponent {
  principal = signal<number|null>(null);
  interestRate = signal<number|null>(null);
  loanTenure = signal<number|null>(null);
  emi = signal<number|null>(null);

  calculateHL()//p:number, n: number, r: number): void{ 
  {
    //P x R x (1+R)^N / [(1+R)^N-1] 
    let p = this.principal();
    let n = this.loanTenure();
    let r = this.interestRate();
    if(p!==null && n!== null && r!==null){
      n=n*12;
      r=r/12/100;
      //p principle, n term in months, r interest rate per month
      let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      this.emi.set(emi);
    }else{
      return;
    }
  }
}
